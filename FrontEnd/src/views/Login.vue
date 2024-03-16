<template>
  <div
    class="container flex flex-col mx-auto justify-center items-center py-8 px-4 lg:px-0"
  >
    <div class="banner mb-8 lg:mb-0 lg:mr-8">
      <img src="../assets/VitaLink.png" alt="VitaLink" class="vitalink" />
    </div>
    <div class="detail bg-white rounded-lg shadow-lg p-8 lg:p-10">
      <h1 class="text-2xl lg:text-3xl font-thin text-center mb-6">
        Login to Your Account
      </h1>
      <form class="w-full max-w-md">
        <div class="mb-6">
          <label for="email" class="block text-gray-700 font-bold mb-2"
            >Email Address:</label
          >
          <input
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
            id="password"
            type="password"
            class="input-field"
            placeholder="Enter your password..."
          />
        </div>
        <div class="flex justify-center">
          <button class="btn">Login</button>
        </div>
      </form>
      <p class="text-gray-600 text-center mt-4">
        Don't have an account yet?
        <RouterLink to="/signup" class="text-blue-500 hover:underline"
          >Sign up here</RouterLink
        >
      </p>
    </div>
  </div>
</template>

<script setup></script>

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
