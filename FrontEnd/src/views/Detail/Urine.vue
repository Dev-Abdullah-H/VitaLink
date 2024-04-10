<template>
  <div
    class="user-input-container bg-gradient-to-r from-sky-500 to-indigo-500 h-screen flex items-center justify-center"
  >
    <div class="content-container">
      <i class="fas fa-heartbeat heart-icon"></i>
      <h1 class="text-3xl text-center font-thin mb-8">
        Track Your Urine PH levels
      </h1>
      <div class="form-container">
        <form @submit.prevent="submitData">
          <div class="mb-6 flex flex-col items-start">
            <label for="urinePhLevel" class="text-gray-700 font-bold mb-2">
              Urine PH level:
            </label>
            <input
              v-model="data.testVal"
              id="urinePhLevel"
              class="input-field"
              placeholder="Enter your urine ph level"
            />
          </div>
          <div class="flex justify-center">
            <button @click="$router.push('/home')" class="btn md:w-full mr-3">
              Home Page
            </button>
            <button @click="submitTest" class="btn md:w-full">
              Submit Data
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";
let tDate = new Date();

const data = reactive({
  testName: "urine",
  testVal: "",
  date: `${tDate.getDate()}/${tDate.getMonth()}/${tDate.getFullYear()}`,
});

const submitTest = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/test/create-test/urine",
      data
    );
    if (response.data.success) {
      data.testVal = "";
      alert("Test Successfully Submit!");
    }
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
};

const submitData = async (data) => {
  console.log("urine data:", data);
};
</script>

<style scoped>
body {
  font-family: sans-serif;
  background-color: #f0f2f5;
}

.user-input-container {
  display: flex;
}

.content-container {
  max-width: 700px;
  padding: 4rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-container {
  max-width: 400px;
  margin: 0 auto;
}

.input-field {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.btn {
  padding: 12px 20px;
  background-color: #428bca;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease-in-out;
}

.btn:hover {
  background-color: #337ab7;
}
</style>
