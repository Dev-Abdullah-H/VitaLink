<template>
  <div
    class="user-input-container bg-gradient-to-r from-sky-500 to-indigo-500 h-screen flex items-center justify-center"
  >
    <div class="content-container">
      <i class="fas fa-heartbeat heart-icon"></i>
      <h1 class="text-3xl text-center font-thin mb-8">
        Track Your Heart Health
      </h1>
      <div class="form-container">
        <form @submit.prevent="submitData">
          <div class="mb-6 flex flex-col items-start">
            <label for="restingHeartRate" class="text-gray-700 font-bold mb-2">
              Resting Heart Rate:
            </label>
            <input
              v-model="userData.restingHeartRate"
              type="number"
              id="restingHeartRate"
              class="input-field"
              placeholder="Enter your resting heart rate (bpm)"
            />
          </div>
          <div class="mb-6 flex flex-col items-start">
            <label for="maxHeartRate" class="text-gray-700 font-bold mb-2">
              Maximum Heart Rate:
            </label>
            <input
              v-model="userData.maxHeartRate"
              type="number"
              id="maxHeartRate"
              class="input-field"
              placeholder="Enter your maximum heart rate (bpm)"
            />
          </div>
          <div class="mb-6 flex flex-col items-start">
            <label for="bloodPressure" class="text-gray-700 font-bold mb-2">
              Blood Pressure (Systolic/Diastolic):
            </label>
            <input
              v-model="userData.bloodPressure"
              type="text"
              id="bloodPressure"
              class="input-field"
              placeholder="Enter blood pressure (e.g., 120/80 mmHg)"
            />
          </div>
          <div class="flex justify-center">
            <button type="submit" class="btn md:w-full">Submit Data</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const userData = ref({
  restingHeartRate: "",
  maxHeartRate: "",
  bloodPressure: "",
});

const submitData = async (data) => {
  console.log("Heart health data:", data);
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
