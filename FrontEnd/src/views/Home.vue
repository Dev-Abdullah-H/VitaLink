<template>
  <div>
    <Header class="mb-10" />
    <div class="container mx-auto px-4 py-8">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
      >
        <div
          @click="redirect('heart')"
          class="data-section cursor-pointer rounded-lg shadow-md bg-gradient-to-b from-white to-gray-100 hover:shadow-lg"
        >
          <img
            src="../assets/heart.png"
            alt="Heart Rate"
            class="mx-auto mb-4 w-24 h-24 object-cover rounded-full border-4 border-blue-500 p-2"
          />
          <div class="text-center px-4 py-4">
            <h2 class="text-2xl font-bold text-gray-800">Heart Rate</h2>
            <p class="text-lg font-semibold text-blue-500 mb-4">
              <span class="text-4xl">80</span> BPM
            </p>
            <button class="btn btn-primary mt-2">View Details</button>
          </div>
        </div>
        <div
          @click="redirect('urine')"
          class="data-section cursor-pointer rounded-lg shadow-md bg-gradient-to-b from-white to-gray-100 hover:shadow-lg"
        >
          <img
            src="../assets/bladder.png"
            alt="Urine Output"
            class="mx-auto mb-4 w-24 h-24 object-cover rounded-full border-4 border-blue-500 p-2"
          />
          <div class="text-center px-4 py-4">
            <h2 class="text-2xl font-bold text-gray-800">Urine Output</h2>
            <p class="text-lg font-semibold text-blue-500 mb-4">
              Log Today's Output
            </p>
            <div class="flex justify-center gap-4 mt-4">
              <button class="btn btn-gray">Light</button>
              <button class="btn btn-gray">Moderate</button>
              <button class="btn btn-gray">Heavy</button>
            </div>
          </div>
        </div>
        <div
          @click="redirect('blood')"
          class="data-section cursor-pointer rounded-lg shadow-md bg-gradient-to-b from-white to-gray-100 hover:shadow-lg"
        >
          <img
            src="../assets/blood.png"
            alt="Blood Sugar"
            class="mx-auto mb-4 w-24 h-24 object-cover rounded-full border-4 border-blue-500 p-2"
          />
          <div class="text-center px-4 py-4">
            <h2 class="text-2xl font-bold text-gray-800">Blood Sugar</h2>
            <p class="text-lg font-semibold text-blue-500 mb-4">
              <span class="text-4xl">120</span> mg/dL
            </p>
            <button class="btn btn-primary mt-2">View Details</button>
          </div>
        </div>
        <div
          @click="redirect('bmi')"
          class="data-section cursor-pointer rounded-lg shadow-md bg-gradient-to-b from-white to-gray-100 hover:shadow-lg"
        >
          <img
            src="../assets/bmi.png"
            alt="BMI"
            class="mx-auto mb-4 w-24 h-24 object-cover rounded-full border-4 border-blue-500 p-2"
          />
          <div class="text-center px-4 py-4">
            <h2 class="text-2xl font-bold text-gray-800">BMI</h2>
            <p class="text-lg font-semibold text-blue-500 mb-4">
              <span class="text-4xl">22.5</span> (Normal)
            </p>
            <button class="btn btn-primary mt-2">View Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const redirect = (path) => {
  router.push(`/home/${path}`);
};
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-gray {
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ccc;
}

.btn-gray:hover {
  background-color: #e5e5e5;
}
</style>
