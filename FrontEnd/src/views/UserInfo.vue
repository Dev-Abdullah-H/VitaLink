<template>
  <div
    class="user-info-container flex flex-col mx-auto justify-center items-center py-1 px-4 lg:px-0 relative"
  >
    <div class="banner mb-8 lg:mb-0 lg:mr-8">
      <img src="../assets/VitaLink.png" alt="VitaLink" class="vitalink" />
    </div>
    <div class="detail bg-white rounded-lg shadow-lg p-8 lg:p-10">
      <h1 class="text-2xl lg:text-3xl font-thin text-center mb-6">
        User Information
      </h1>
      <div class="w-full max-w-md">
        <div class="mb-6 flex flex-col items-start">
          <label for="name" class="text-gray-700 font-bold mb-2">Name:</label>
          <input
            v-model="userData.name"
            id="name"
            type="text"
            class="input-field"
            placeholder="Enter your full name..."
          />
        </div>
        <div class="mb-6 flex flex-col items-start">
          <label for="dob" class="text-gray-700 font-bold mb-2"
            >Date of Birth:</label
          >
          <input
            v-model="userData.dob"
            id="dob"
            type="date"
            class="input-field"
            placeholder="Select your date of birth..."
          />
        </div>
        <div class="mb-6 flex flex-col items-start">
          <label for="nationality" class="text-gray-700 font-bold mb-2"
            >Nationality:</label
          >
          <input
            v-model="userData.nationality"
            id="nationality"
            type="text"
            class="input-field"
            placeholder="Enter your nationality..."
          />
        </div>
        <div class="mb-6 flex flex-col items-start">
          <label for="activity" class="text-gray-700 font-bold mb-2"
            >Physical Activity:</label
          >
          <select id="activity" v-model="userData.activity" class="input-field">
            <option value="">Select your activity level...</option>
            <option value="sedentary">Sedentary (Little to no exercise)</option>
            <option value="lightlyActive">
              Lightly Active (Light exercise/sports 1-3 days/week)
            </option>
            <option value="moderatelyActive">
              Moderately Active (Moderate exercise/sports 3-5 days/week)
            </option>
            <option value="veryActive">
              Very Active (Hard exercise/sports 6-7 days/week)
            </option>
          </select>
        </div>
        <div class="flex justify-center">
          <button type="button" @click="saveUserInfo" class="btn">
            Save Information
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

let getEmail;
if (localStorage.getItem("userData")) {
  getEmail = JSON.parse(localStorage.getItem("userData"));
} else {
  router.push("/signup");
  alert("Not loged in..");
}

const userData = reactive({
  email: getEmail.email,
  name: "",
  dob: "",
  nationality: "",
  activity: "",
});

const saveUserInfo = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/user-info/saveinfo",
      userData
    );
    console.log(response.data);
    if (response.data) {
      router.push("/home");
      alert("User information saved successfully!");
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  } catch (e) {
    console.error(e);
  }
};
</script>

<style scoped>
.user-info-container {
  min-height: 100vh;
  background-color: #f5f5f5; /* Light background for better contrast */
}

.detail {
  width: 100%;
  max-width: 500px;
  border: none; /* Remove border for cleaner look */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); /* Subtle box-shadow */
}

.vitalink {
  width: 100%;
  height: 300px;
  max-width: 300px;
}

/* Responsive Styles for Different Screen Sizes */
@media (max-width: 768px) {
  .detail {
    max-width: 90%;
  }
}

.input-field {
  appearance: none;
  outline: none;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  width: 100%;
  transition: border-color 0.3s ease;
  font-size: 1rem;
}

.input-field:focus {
  border-color: #48bb78;
}

.btn {
  appearance: none;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 2rem;
  background-color: #48bb78; /* Primary button color */
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
}

.btn:hover {
  background-color: #38a169; /* Darker shade on hover */
}
</style>
