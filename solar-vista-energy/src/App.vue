<script setup lang="ts">
import { ref } from "vue";
import Navbar from "@/components/navigation/Navbar.vue";
import Footer from "@/components/navigation/Footer.vue";
import "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";

import MobileNavigation from "./components/navigation/MobileNavigation.vue";

const mobileNavOpen = ref(false);

const toggleMobileNav = () => {
  mobileNavOpen.value = !mobileNavOpen.value;
  if (mobileNavOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};
</script>

<template>
  <div class="relative content">
    <navbar @toggle-mobile-nav="toggleMobileNav" :navbarOpen="mobileNavOpen" />
    <Transition name="fade">
      <MobileNavigation
        @close-mobile-nav="toggleMobileNav"
        v-if="mobileNavOpen"
      />
    </Transition>

    <div class="relative">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
