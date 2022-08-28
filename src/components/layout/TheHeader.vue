<template>
  <header class="flex items-center justify-between pt-[24px] pb-[37px]">
    <p class="text-black text-[24px] leading-[36px] font-bold dark:text-white">
      Gun!
    </p>
    <ul class="flex items-center">
      <li
        class="mr-[45px] font-normal leading-[24px] text-black dark:text-white"
      >
        <router-link to="/">Home</router-link>
      </li>
      <li
        class="mr-[45px] font-normal leading-[24px] text-black dark:text-white"
      >
        <router-link to="/portfolio">Portfolio</router-link>
      </li>
      <li class="font-normal leading-[24px] text-black dark:text-white">
        <router-link to="/contacts">Contacts</router-link>
      </li>
    </ul>
    <button @click="switchDarkMode()" v-if="darkMode">
      <img src="../../assets/images/icons/moon-icon.svg" alt="Dark Mode" />
    </button>
    <button @click="switchDarkMode()" v-else>
      <img src="../../assets/images/icons/sun-icon.svg" alt="Light Mode" />
    </button>
  </header>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, computed } from "vue";

const store = useStore();
const darkMode = computed(() => store.state.darkMode);
const currentDarkMode = ref();

// Switch Dark Mode
function switchDarkMode() {
  currentDarkMode.value = !darkMode.value;
  store.commit("SWITCH_DARK_MODE", currentDarkMode.value);
}
</script>
