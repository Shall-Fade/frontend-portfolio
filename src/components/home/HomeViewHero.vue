<template>
  <div class="relative flex flex-col justify-center h-screen">
    <div class="flex items-center justify-between">
      <div class="max-w-[415px]">
        <h1
          class="font-bold text-[36px] leading-[54px] text-black pb-[24px] dark:text-white"
        >
          Hello! I am Marat.
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EF4444]"
            >Frontend Developer</span
          >
          and
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[#5B21B6] to-[#9D174D]"
            >Designer</span
          >
        </h1>
        <p
          class="font-normal leading-[24px] text-dark-grey dark:text-light-grey pb-[24px]"
        >
          Passionate about Frontend Dev and UI/UX design. Likes to create fast
          and well-designed website interfaces using the latest technologies.
          Such as Javascript, Tailwind CSS, Vue.js, Vuex etc.
        </p>
        <router-link
          to="/portfolio"
          class="inline-flex items-center cursor-pointer px-[28px] py-[12px] bg-black text-white dark:bg-light-grey dark:text-black rounded-[4px]"
        >
          <p class="pr-[8px] font-normal leading-[24px]">View Portfolio</p>
          <img
            v-if="darkMode"
            src="../../assets/images/icons/arrow-dark-icon.svg"
            alt="Arrow"
          />
          <img
            v-else
            src="../../assets/images/icons/arrow-icon.svg"
            alt="Arrow"
          />
        </router-link>
      </div>
      <!-- <img src="../../assets/images/main.png" alt="Main Picture" /> -->
      <HomeViewHeroModel />
    </div>
    <!-- Scroll Button -->
    <button
      class="absolute bottom-[-50px] left-0 right-0 flex flex-col items-center justify-center"
    >
      <div
        class="relative border-2 border-black dark:border-white w-[26px] h-[49px] mb-[2px] rounded-full"
      >
        <div
          class="absolute w-[10px] h-[10px] animate-jump bg-crimson rounded-full top-[6px] left-[6px]"
        ></div>
      </div>
      <p class="text-[14px] font-medium text-black dark:text-white">Scroll</p>
    </button>
  </div>
</template>

<script setup>
import HomeViewHeroModel from "./HomeViewHeroModel.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const darkMode = computed(() => store.state.darkMode);
</script>
