<template>
  <div class="pb-[100px]">
    <h2 class="text-[32px] font-bold leading-[32px] pb-[60px]">Certificates</h2>
    <swiper
      class="swiper"
      :modules="modules"
      :pagination="true"
      :effect="'coverflow'"
      :grab-cursor="true"
      :centered-slides="true"
      :slides-per-view="3"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :coverflow-effect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
    >
      <swiper-slide class="slide">
        <img
          class="w-full h-full"
          src="../../assets/images/certificates/php-codecademy.png"
          alt="Codecademy Certificate"
        />
      </swiper-slide>
      <swiper-slide class="slide">
        <img
          class="w-full h-full"
          src="../../assets/images/certificates/vuejs-udemy.jpg"
          alt="Udemy Certificate"
        />
      </swiper-slide>
      <swiper-slide class="slide">
        <img
          class="w-full h-full"
          src="../../assets/images/certificates/internet-stepik.png"
          alt="Stepik Certificate"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Pagination, EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css";

const modules = [Pagination, EffectCoverflow, Autoplay];
</script>
