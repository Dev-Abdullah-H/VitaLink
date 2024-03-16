<template>
  <div
    class="container mx-auto px-4 lg:px-8 flex items-center justify-between border border-gray-200 m-2 shadow-lg rounded-xl"
  >
    <h1
      class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 cursor-pointer p-4"
    >
      VitaLink
    </h1>
    <nav class="hidden sm:block"> 
      <ul class="flex">
        <li class="m-2">
          <router-link
            class="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out"
            to="/"
            >Home</router-link
          >
        </li>
        <li class="m-2">
          <router-link
            class="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out"
            to="/"
            >Tests</router-link
          >
        </li>
        <li class="m-2">
          <router-link
            class="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out"
            to="/"
            >Appointment</router-link
          >
        </li>
      </ul>
    </nav>
    <button
      class="sm:hidden text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out focus:outline-none"
      @click="toggleMenu"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path> 
       </svg>
    </button>
    <div
      v-if="isMenuOpen"
      class="sm:hidden absolute top-0 left-0 w-full h-full bg-white z-50"
    >
      <ul class="flex flex-col items-center justify-center h-full">
        <li class="m-4">
          <router-link
            class="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out"
            to="/"
            >Home</router-link
          >
        </li>
        <li class="m-4">
          <router-link
            class="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out"
            to="/"
            >Tests</router-link
          >
        </li>
        <li class="m-4">
          <router-link
            class="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out"
            to="/"
            >Appointment</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
@media (min-width : 375px) {
  .container {
  max-width: 350px;
  }
}
@media (min-width : 400px) {
  .container {
  max-width: 400px;
  }
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
</style>
