<template>
  <div
    class="container flex flex-col mx-auto justify-center items-center py-8 px-4 lg:px-0 relative"
  >
    <div class="banner mb-8 lg:mb-0 lg:mr-8">
      <img src="../assets/VitaLink.png" alt="VitaLink" class="vitalink" />
    </div>
    <div class="detail bg-white rounded-lg shadow-lg p-8 lg:p-10">
      <h1 class="text-2xl lg:text-3xl font-thin text-center mb-6">
        Create an Account
      </h1>
      <div class="w-full max-w-md">
        <div class="mb-6">
          <label for="email" class="block text-gray-700 font-bold mb-2"
            >Email Address:</label
          >
          <input
            v-model="SignUpData.email"
            id="email"
            type="email"
            class="input-field"
            placeholder="Enter your email address..."
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-bold mb-2"
            >Password:</label
          >
          <input
            v-model="SignUpData.password"
            id="password"
            type="password"
            class="input-field"
            placeholder="Enter your password..."
          />
        </div>
        <div class="flex justify-center">
          <button type="button" @click="SignUp" class="btn">Sign Up</button>
        </div>
      </div>
      <p class="text-gray-600 text-center mt-4">
        Already have an account?
        <RouterLink to="/login" class="text-blue-500 hover:underline"
          >Sign in here</RouterLink
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const SignUpData = reactive({
  email: "",
  password: "",
});

const SignUp = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/user/signup",
      SignUpData
    );
    if (response.data.success) {
      localStorage.setItem(
        "userData",
        JSON.stringify({ email: response.data.user.email })
      );
      router.push("/signup/user-info");
    }
  } catch (e) {
    alert("Sign up failed!, try again please...");
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  justify-content: start;
}
.detail {
  width: 100%;
  max-width: 500px;
  border: 1px solid rgb(152, 185, 103);
}
.vitalink {
  width: 100%;
  height: 300px;
  max-width: 300px;
}
.input-field {
  appearance: none;
  outline: none;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.75rem;
  width: 100%;
  transition: border-color 0.3s ease;
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
  background-color: #48bb78;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.btn:hover {
  background-color: #38a169;
}
</style>
