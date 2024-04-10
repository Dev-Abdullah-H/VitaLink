<template>
  <div
    class="user-input-container bg-gradient-to-r from-sky-500 to-indigo-500 h-screen flex items-center justify-center"
  >
    <div class="content-container">
      <i class="fas fa-heartbeat heart-icon"></i>
      <h1 class="text-3xl text-center font-thin mb-8">Track Your Bmi</h1>
      <div class="form-container">
        <form @submit.prevent="submitData">
          <div class="mb-6 flex flex-col items-start">
            <label for="bmi" class="text-gray-700 font-bold mb-2"> BMI: </label>
            <input
              v-model="bmiData.height"
              id="bmi"
              class="input-field mb-4"
              placeholder="Enter your Height (ft)"
            />
            <input
              v-model="bmiData.weight"
              id="bmi"
              class="input-field"
              placeholder="Enter your Weight (pounds)"
            />
          </div>
          <div class="flex justify-center">
            <button @click="$router.push('/home')" class="btn md:w-full mr-2">
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

let bmiData = reactive({
  height: "",
  weight: "",
});

const data = reactive({
  testName: "bmi",
  testVal: "",
  date: `${tDate.getDate()}/${tDate.getMonth()}/${tDate.getFullYear()}`,
});

const submitTest = async () => {
  const heightInMeters = bmiData.height * 0.3048;
  const weightInKilograms = bmiData.weight * 0.453592;

  // Calculate BMI
  const bmi = weightInKilograms / (heightInMeters * heightInMeters);
  data.testVal = bmi.toFixed(2);
  try {
    const response = await axios.post(
      "http://localhost:3000/test/create-test/bmi",
      data
    );
    if (response.data.success) {
      bmiData.height = "";
      bmiData.weight = "";
      alert("Test Successfully Submit!");
    }
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
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
