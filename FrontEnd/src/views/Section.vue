<template>
  <!-- <canvas id="myChart" style="width:100%;max-width:700px"></canvas> -->
  <canvas
    id="goodCanvas1"
    width="400"
    height="100"
    aria-label="Hello ARIA World"
    role="img"
  ></canvas>
</template>

<script setup>
import Chart from "chart.js/auto";
import { onMounted } from "vue";
// const myChart = new Chart("myChart", {
//   type: "line",
//   data: {},
//   options: {}
// });
onMounted(() => {
  const ctx = document.getElementById("goodCanvas1");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["27 OCT", "29 OCT", "30 Sept", "25 April", "Purple", "Orange"],
      datasets: [
        {
          label: "Heart Rate",
          data: [12, 19, 3, 5, 2],
          borderWidth: 1,
        },
        {
          label: "BMI",
          data: [4,2,5,2,5],
          borderWidth: 1
        }
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
</script>

<style scoped></style>
