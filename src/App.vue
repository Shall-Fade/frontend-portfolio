<template>
  <div :class="darkMode ? 'dark' : ''">
    <div
      class="font-poppins font-normal bg-white text-black dark:bg-black dark:text-white text-[16px]"
    >
      <div class="max-w-5xl my-[0] mx-auto">
        <TheHeader />
        <main>
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const darkMode = computed(() => store.state.darkMode);
</script>
