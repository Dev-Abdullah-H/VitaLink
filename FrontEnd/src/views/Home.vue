<template>
  <div>
    <Header class="mb-10" />
    <div class="container mx-auto px-4 py-8">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
      >
        <div
          class="data-section cursor-pointer rounded-lg shadow-md bg-gradient-to-b from-white to-gray-100 hover:shadow-lg"
        >
          <img
            src="../assets/heart.png"
            alt="Heart Rate"
            class="mx-auto mb-4 w-24 h-24 object-cover rounded-full border-4 p-2"
            :class="heartBorderColor"
          />
          <div class="text-center px-4 py-4">
            <h2 class="text-2xl font-bold text-gray-800">Heart Rate</h2>
            <p class="text-lg font-semibold text-blue-500 mb-4">
              <span class="text-4xl">{{ heartData }}</span> BPM
            </p>
            <button
              @click="redirectToChart('heart')"
              class="btn btn-primary mt-2 mr-2"
            >
              View Details
            </button>
            <button
              @click="redirectToDetail('heart')"
              class="btn btn-primary mt-2"
            >
              New test
            </button>
          </div>
        </div>
        <div
          class="data-section cursor-pointer rounded-lg shadow-md bg-gradient-to-b from-white to-gray-100 hover:shadow-lg"
        >
          <img
            src="../assets/bladder.png"
            alt="Urine Output"
            class="mx-auto mb-4 w-24 h-24 object-cover rounded-full border-4 p-2"
            :class="urineBorderColor"
          />
          <div class="text-center px-4 py-4">
            <h2 class="text-2xl font-bold text-gray-800">Urine Output</h2>
            <p class="text-lg font-semibold text-blue-500 mb-4">
              {{ urineData }} PH
            </p>
            <button
              @click="redirectToChart('urine')"
              class="btn btn-primary mt-2 mr-2"
            >
              View Details
            </button>
            <button
              @click="redirectToDetail('urine')"
              class="btn btn-primary mt-2"
            >
              New test
            </button>
          </div>
        </div>
        <div
          class="data-section cursor-pointer rounded-lg shadow-md bg-gradient-to-b from-white to-gray-100 hover:shadow-lg"
        >
          <img
            src="../assets/blood.png"
            alt="Blood Sugar"
            class="mx-auto mb-4 w-24 h-24 object-cover rounded-full border-4 p-2"
            :class="bloodBorderColor"
          />
          <div class="text-center px-4 py-4">
            <h2 class="text-2xl font-bold text-gray-800">Blood Sugar</h2>
            <p class="text-lg font-semibold text-blue-500 mb-4">
              <span class="text-4xl">{{ bloodData }}</span> mg/dL
            </p>
            <button
              @click="redirectToChart('blood')"
              class="btn btn-primary mt-2 mr-2"
            >
              View Details
            </button>
            <button
              @click="redirectToDetail('blood')"
              class="btn btn-primary mt-2"
            >
              New test
            </button>
          </div>
        </div>
        <div
          class="data-section cursor-pointer rounded-lg shadow-md bg-gradient-to-b from-white to-gray-100 hover:shadow-lg"
        >
          <img
            src="../assets/bmi.png"
            alt="BMI"
            class="mx-auto mb-4 w-24 h-24 object-cover rounded-full border-4 p-2"
            :class="bmiBorderColor"
          />
          <div class="text-center px-4 py-4">
            <h2 class="text-2xl font-bold text-gray-800">BMI</h2>
            <p class="text-lg font-semibold text-blue-500 mb-4">
              <span class="text-4xl">{{ bmiData }}</span>
            </p>
            <button
              @click="redirectToChart('bmi')"
              class="btn btn-primary mt-2 mr-2"
            >
              View Details
            </button>
            <button
              @click="redirectToDetail('bmi')"
              class="btn btn-primary mt-2"
            >
              New test
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { ref, onMounted } from "vue";
const router = useRouter();

// test data

let heartData = ref("");
let bloodData = ref("");
let urineData = ref("");
let bmiData = ref("");

// border colors
let heartBorderColor = ref("");
let bloodBorderColor = ref("");
let urineBorderColor = ref("");
let bmiBorderColor = ref("");

let getEmail = JSON.parse(localStorage.getItem("userData"));

onMounted(async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/test/get-test/heart",
      { email: getEmail.email }
    );
    let values = response.data.values.map(Number);
    heartData.value = values.pop();
    if (heartData.value <= 45) {
      heartBorderColor.value = "yellow";
    } else if (heartData.value >= 55) {
      heartBorderColor.value = "red";
    } else if (heartData.value) {
      heartBorderColor.value = "green";
    }
    if (!heartData.value) {
      heartData.value = "--";
    }
  } catch (e) {
    console.error(e);
  }
  // blood
  try {
    const response = await axios.post(
      "http://localhost:3000/test/get-test/blood",
      { email: getEmail.email }
    );
    let values = response.data.values.map(Number);
    bloodData.value = values.pop();
    if (bloodData.value <= 70) {
      bloodBorderColor.value = "yellow";
    } else if (bloodData.value >= 240) {
      bloodBorderColor.value = "red";
    } else if (bloodData.value) {
      bloodBorderColor.value = "green";
    }
    if (!bloodData.value) {
      bloodData.value = "--";
    }
  } catch (e) {
    console.error(e);
  }
  // urine
  try {
    const response = await axios.post(
      "http://localhost:3000/test/get-test/urine",
      { email: getEmail.email }
    );
    let values = response.data.values.map(Number);
    urineData.value = values.pop();
    if (urineData.value < 7) {
      urineBorderColor.value = "yellow";
    } else if (urineData.value >= 7.5) {
      urineBorderColor.value = "red";
    } else if (urineData.value) {
      urineBorderColor.value = "green";
    }
    if (!urineData.value) {
      urineData.value = "--";
    }
  } catch (e) {
    console.error(e);
  }
  // bmi
  try {
    const response = await axios.post(
      "http://localhost:3000/test/get-test/bmi",
      { email: getEmail.email }
    );
    let values = response.data.values.map(Number);
    bmiData.value = values.pop();
    if (bmiData.value < 18.5) {
      bmiBorderColor.value = "yellow";
    } else if (bmiData.value >= 25) {
      bmiBorderColor.value = "red";
    } else if (bmiData.value) {
      bmiBorderColor.value = "green";
    }
    if (!bmiData.value) {
      bmiData.value = "--";
    }
  } catch (e) {
    console.error(e);
  }
});

const redirectToChart = (path) => {
  router.push(`/home/${path}`);
};

const redirectToDetail = (path) => {
  router.push(`/home/${path}-detail`);
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
.yellow {
  border-color: rgb(212, 212, 0);
}
.green {
  border-color: green;
}
.red {
  background-color: red;
}
</style>
