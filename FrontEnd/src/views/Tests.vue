<template>
  <div class="container mx-auto px-4 py-8">
    <Header class="mb-5" />
    <h1 class="text-3xl font-thin text-center mb-8">Your Test Results</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <section class="rounded-lg shadow-md px-6 py-8 bg-gray-100">
        <h2 class="text-lg font-medium mb-4">Heart Health Tests</h2>
        <ul class="test-list">
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
                ></i
              ></span>
              <span class="test-date" v-if="test.date">{{ test.date }}</span>
            </div>
          </li>
        </ul>
      </section>

      <section class="rounded-lg shadow-md px-6 py-8 bg-gray-200">
        <h2 class="text-lg font-medium mb-4">Urine Tests</h2>
        <ul class="test-list">
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
                ></i
              ></span>
              <span class="test-date" v-if="test.date">{{ test.date }}</span>
            </div>
          </li>
        </ul>
      </section>

      <section class="rounded-lg shadow-md px-6 py-8 bg-gray-100">
        <h2 class="text-lg font-medium mb-4">Blood Sugar Tests</h2>
        <ul class="test-list">
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
                ></i
              ></span>
              <span class="test-date" v-if="test.date">{{ test.date }}</span>
            </div>
          </li>
        </ul>
      </section>

      <section class="rounded-lg shadow-md px-6 py-8 bg-gray-100">
        <h2 class="text-lg font-medium mb-4">BMI Tests</h2>
        <ul class="test-list">
          <li
            class="border shadow-lg p-4 rounded-lg mb-4 bg-slate-50"
            v-for="test in testResult.bmiData"
            :key="test._id"
          >
            <div class="test-item">
              <span class="test-label">{{ test.testVal }}</span>
              <span
                ><i
                  @click="deleteTest(test._id)"
                  class="fa-sharp fa-solid fa-trash hover:border hover:p-4 cursor-pointer hover:bg-red-600 transition-all rounded-full"
                ></i
              ></span>
              <span class="test-date" v-if="test.date">{{ test.date }}</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import axios from "axios";
import Header from "../components/Header.vue";

let getEmail = JSON.parse(localStorage.getItem("userData"));

const testResult = reactive({
  heartData: "",
  urineData: "",
  bloodData: "",
  bmiData: "",
});

const deleteTest = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/test/delete-test/${id}`
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
      "http://localhost:3000/test/get-test-all",
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
</style>
