<script setup lang="ts">
import Navbar from "@/components/navigation/Navbar.vue";
import Footer from "@/components/navigation/Footer.vue";
import "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
</script>

<template>
  <navbar />
  <div class="relative">
    <router-view />
  </div>
  <Footer />
</template>
