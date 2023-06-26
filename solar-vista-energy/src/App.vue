<script setup lang="ts">
import { reactive } from "vue";
import Navbar from "@/components/navigation/Navbar.vue";
import Footer from "@/components/navigation/Footer.vue";
import "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
import MobileNavigation from "./components/navigation/MobileNavigation.vue";

const data = reactive({
  mobileNavOpen: false,
});

const toggleMobileNav = () => {
  data.mobileNavOpen = !data.mobileNavOpen;
  if (data.mobileNavOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};
</script>

<template>
  <div class="relative content">
    <navbar @open-mobile-nav="toggleMobileNav" />
    <MobileNavigation
      @close-mobile-nav="toggleMobileNav"
      v-if="data.mobileNavOpen"
    />
    <div class="relative">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
