<template>
  <div>
    <Header class="mb-10" />
    <div class="container mx-auto px-4 py-4">
      <h1 class="text-3xl font-thin text-center mb-8">Your Test Results</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section class="rounded-lg shadow-md px-6 py-8 bg-gray-100">
          <h2 class="text-lg font-medium mb-4">Heart Health Tests</h2>
          <ul class="test-list">
            <div
              v-if="testResult.heartData.length == 0"
              class="text-center border shadow-lg p-4 rounded-lg mb-4 bg-slate-50"
            >
              <h1>No Test Results Found</h1>
            </div>
            <li
              class="border shadow-lg p-4 rounded-lg mb-4 bg-slate-50"
              v-for="test in testResult.heartData"
              :key="test._id"
            >
              <div class="test-item">
                <span class="test-label">{{ test.testVal }}</span>
                <span
                  ><i
                    @click="deleteTest(test._id)"
                    class="fa-sharp fa-solid fa-trash hover:border hover:p-4 cursor-pointer hover:bg-red-600 transition-all rounded-full"
                  ></i>
                  <i
                    @click="updateTest(test.testName, test._id)"
                    class="fa-solid fa-arrows-rotate hover:border hover:p-4 cursor-pointer hover:bg-yellow-400 transition-all rounded-full ml-5"
                  ></i>
                </span>
                <span class="test-date" v-if="test.date">{{ test.date }}</span>
              </div>
            </li>
          </ul>
        </section>

        <section class="rounded-lg shadow-md px-6 py-8 bg-gray-200">
          <h2 class="text-lg font-medium mb-4">Urine Tests</h2>
          <ul class="test-list">
            <div
              v-if="testResult.urineData.length == 0"
              class="text-center border shadow-lg p-4 rounded-lg mb-4 bg-slate-50"
            >
              <h1>No Test Results Found</h1>
            </div>
            <li
              class="border shadow-lg p-4 rounded-lg mb-4 bg-slate-50"
              v-for="test in testResult.urineData"
              :key="test._id"
            >
              <div class="test-item">
                <span class="test-label">{{ test.testVal }}</span>
                <span
                  ><i
                    @click="deleteTest(test._id)"
                    class="fa-sharp fa-solid fa-trash hover:border hover:p-4 cursor-pointer hover:bg-red-600 transition-all rounded-full"
                  ></i>
                  <i
                    @click="updateTest(test.testName, test._id)"
                    class="fa-solid fa-arrows-rotate hover:border hover:p-4 cursor-pointer hover:bg-yellow-400 transition-all rounded-full ml-5"
                  ></i>
                </span>
                <span class="test-date" v-if="test.date">{{ test.date }}</span>
              </div>
            </li>
          </ul>
        </section>

        <section class="rounded-lg shadow-md px-6 py-8 bg-gray-100">
          <h2 class="text-lg font-medium mb-4">Blood Sugar Tests</h2>
          <ul class="test-list">
            <div
              v-if="testResult.bloodData.length == 0"
              class="text-center border shadow-lg p-4 rounded-lg mb-4 bg-slate-50"
            >
              <h1>No Test Results Found</h1>
            </div>
            <li
              class="border shadow-lg p-4 rounded-lg mb-4 bg-slate-50"
              v-for="test in testResult.bloodData"
              :key="test._id"
            >
              <div class="test-item">
                <span class="test-label">{{ test.testVal }}</span>
                <span
                  ><i
                    @click="deleteTest(test._id)"
                    class="fa-sharp fa-solid fa-trash hover:border hover:p-4 cursor-pointer hover:bg-red-600 transition-all rounded-full"
                  ></i>
                  <i
                    @click="updateTest(test.testName, test._id)"
                    class="fa-solid fa-arrows-rotate hover:border hover:p-4 cursor-pointer hover:bg-yellow-400 transition-all rounded-full ml-5"
                  ></i>
                </span>
                <span class="test-date" v-if="test.date">{{ test.date }}</span>
              </div>
            </li>
          </ul>
        </section>

        <section class="rounded-lg shadow-md px-6 py-8 bg-gray-100">
          <h2 class="text-lg font-medium mb-4">BMI Tests</h2>
          <ul class="test-list">
            <div
              v-if="testResult.bmiData.length == 0"
              class="text-center border shadow-lg p-4 rounded-lg mb-4 bg-slate-50"
            >
              <h1>No Test Results Found</h1>
            </div>
            <li
              class="border shadow-lg p-4 rounded-lg mb-4 bg-slate-50"
              v-for="test in testResult.bmiData"
              :key="test._id"
            >
              <div class="test-item">
                <span class="test-label">{{ test.testVal }}</span>
                <span>
                  <span>
                    <i
                      @click="deleteTest(test._id)"
                      class="fa-sharp fa-solid fa-trash hover:border hover:p-4 cursor-pointer hover:bg-red-600 transition-all rounded-full"
                    ></i>
                    <i
                      @click="updateTest(test.testName, test._id)"
                      class="fa-solid fa-arrows-rotate hover:border hover:p-4 cursor-pointer hover:bg-yellow-400 transition-all rounded-full ml-5"
                    ></i>
                  </span>
                </span>
                <span class="test-date" v-if="test.date">{{ test.date }}</span>
              </div>
            </li>
          </ul>
        </section>
        <div
          v-if="showUpdateModal"
          class="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50"
        >
          <div class="modal-card rounded-lg bg-white p-8 shadow-lg w-96">
            <h2 class="text-lg font-medium mb-4">
              Update Test Result : {{ updateResult.testName.toUpperCase() }}
            </h2>
            <div>
              <div class="mb-4">
                <label for="testValue" class="block text-gray-700 mb-2"
                  >Test Value:</label
                >
                <input
                  type="text"
                  id="testValue"
                  v-model="updateResult.testVal"
                  class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="testValue" class="block text-gray-700 mb-2"
                  >Test Date:</label
                >
                <input
                  type="date"
                  id="testValue"
                  v-model="updateResult.date"
                  class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  required
                />
              </div>
              <div class="flex justify-end">
                <button
                  type="button"
                  @click="showUpdateModal = false"
                  class="btn btn-secondary mr-8"
                >
                  Cancel
                </button>
                <button @click="updateTestResult" class="btn btn-primary">
                  Update Test
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import axios from "axios";
import Header from "../components/Header.vue";

let getEmail = JSON.parse(localStorage.getItem("userData"));
let showUpdateModal = ref(false);

const testResult = reactive({
  heartData: "",
  urineData: "",
  bloodData: "",
  bmiData: "",
});

const updateResult = reactive({
  _id: "",
  email: getEmail.email,
  testName: "",
  testVal: "",
  date: ``,
});

const updateTest = async (name, id) => {
  showUpdateModal.value = !showUpdateModal.value;
  updateResult._id = id;
  updateResult.testName = name;
};

const updateTestResult = async () => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_APP_BACKEND_URL}/test/update-test/${updateResult._id}`,
      updateResult
    );
    if (response.data) {
      alert("Test updated successfully");
      showUpdateModal.value = !showUpdateModal.value;
      getAllTests();
    } else {
      alert("Test updation failed");
    }
    getAllTests();
  } catch (e) {
    console.error(e);
  }
};

const deleteTest = async (id) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_APP_BACKEND_URL}/test/delete-test/${id}`
    );
    if (response.data) {
      alert("Test deleted successfully");
    } else {
      alert("Test deletion failed");
    }
    getAllTests();
  } catch (e) {
    console.error(e);
  }
};

const getAllTests = async () => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_BACKEND_URL}/test/get-test-all`,
      { email: getEmail.email }
    );
    if (response.data) {
      testResult.heartData = response.data.heartRates;
      testResult.urineData = response.data.urineTests;
      testResult.bloodData = response.data.bloodTests;
      testResult.bmiData = response.data.bmiTests;
    }
  } catch (e) {
    console.error(e);
  }
};

onMounted(async () => {
  getAllTests();
});
</script>

<style scoped>
.container {
  max-width: 7xl;
  margin: 0 auto;
}

.test-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.test-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.test-label,
.test-value,
.test-date {
  font-size: 0.9rem;
}

.test-label {
  font-weight: bold;
}

.test-value {
  color: #333;
}

.test-value--heart.in-range i {
  color: green;
}

.test-value--heart.out-of-range i {
  color: red;
}

.test-date {
  color: #888;
  font-style: italic;
}
.modal-card {
  max-width: 500px;
}
</style>