<template>
  <div class="h-screen">
    <HomeViewHero class="h-[80%]" />
  </div>
  <HomeViewAbout />
  <HomeViewSkills />
  <HomeViewProjects />
  <HomeViewCertificates />
</template>

<script setup>
import HomeViewHero from "../components/home/HomeViewHero.vue";
import HomeViewAbout from "../components/home/HomeViewAbout.vue";
import HomeViewSkills from "../components/home/HomeViewSkills.vue";
import HomeViewProjects from "../components/home/HomeViewProjects.vue";
import HomeViewCertificates from "../components/home/HomeViewCertificates.vue";
</script>
