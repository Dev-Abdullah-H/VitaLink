<template>
  <div class="header">
    <div class="header-container flex items-center justify-between px-4">
      <div class="logo">
        <router-link to="/" class="text-xl font-bold text-white"
          >VitaLink</router-link
        >
      </div>
      <nav class="hidden sm:flex space-x-4">
        <router-link
          to="/home"
          class="text-gray-200 hover:text-blue-500 transition duration-300 ease-in-out"
          >Home</router-link
        >
        <router-link
          to="/home"
          class="text-gray-200 hover:text-blue-500 transition duration-300 ease-in-out"
          >Tests</router-link
        >
        <router-link
          to="/"
          @click="signOut"
          class="text-gray-200 hover:text-blue-500 transition duration-300 ease-in-out"
          >Sign Out</router-link
        >
      </nav>
      <button
        v-if="isHamburgerVisible"
        class="hamburger sm:hidden focus:outline-none"
        @click="toggleMenu"
      >
        <svg
          class="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
    <div
      v-if="isMenuOpen"
      class="mobile-menu absolute top-full left-0 w-full bg-gray-800 z-50"
    >
      <ul
        class="flex flex-col items-center justify-center py-8 space-y-4 text-white"
      >
        <li><router-link to="/home" class="text-xl">Home</router-link></li>
        <li><router-link to="/home" class="text-xl">Tests</router-link></li>
        <li>
          <router-link to="/" @click="signOut" class="text-xl"
            >Sign Out</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const signOut = () => {
  localStorage.removeItem("userData");
  router.push("/login");
};

const isMenuOpen = ref(false);
const isHamburgerVisible = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const checkWindowWidth = () => {
  isHamburgerVisible.value = window.innerWidth < 620;
};

onMounted(() => {
  checkWindowWidth();
  window.addEventListener("resize", checkWindowWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkWindowWidth);
});
</script>

<style>
.header {
  background-color: #171a29;
  padding: 1rem 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1024px;
  margin: 0 auto;
}

.logo {
  color: inherit;
}

.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #171a29;
  z-index: 100;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  transform: translateY(-100%);
}

.mobile-menu.open {
  transform: translateY(0);
}

.hamburger {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
