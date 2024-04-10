<template>
  <div
    class="chart-container bg-gray-100 rounded-lg shadow-md mx-auto mt-8 py-8 px-4 lg:px-0"
  >
    <h1 class="text-2xl lg:text-3xl font-thin text-center mb-6 text-gray-800">
      Health Data Trends - Bmi Report
    </h1>
    <canvas
      id="goodCanvas1"
      class="chart"
      aria-label="Line chart for Health Data"
    ></canvas>
  </div>
</template>

<script setup>
import Chart from "chart.js/auto";
import { onMounted } from "vue";
import axios from "axios";

let values = [];
let dates = [];

onMounted(async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/test/get-test/bmi"
    );
    values = response.data.values;
    dates = response.data.dates;
    values = values.map(Number);
    console.log(response.data);
    updateChart();
  } catch (error) {
    console.error("Error fetching Bmi data:", error);
  }
});

const updateChart = () => {
  const ctx = document.getElementById("goodCanvas1");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Bmi",
          data: values,
          borderColor: "#5cb85c",
          backgroundColor: "rgba(92, 184, 92, 0.2)",
          borderWidth: 2,
          pointRadius: 5,
          pointBackgroundColor: "#5cb85c",
          pointHoverRadius: 7,
          pointHoverBorderColor: "#fff",
          pointHoverBackgroundColor: "#28a745",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          suggestedMin: 15,
          suggestedMax: 35,
          ticks: {
            stepSize: 5,
          },
        },
        x: {
          ticks: {
            color: "#808b96",
          },
        },
      },
      legend: {
        labels: {
          fontColor: "#333",
          fontSize: "14px",
        },
      },
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 16,
          },
        },
      },
    },
  });
};
</script>

<style scoped>
.chart-container {
  max-width: 700px;
  background-color: #f5f5f5; /* Light background for better contrast */
}

.chart {
  width: 100%; /* Fills container width */
}
</style>
