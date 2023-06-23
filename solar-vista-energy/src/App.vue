<script setup lang="ts">
import Navbar from "@/components/navigation/Navbar.vue";
import Footer from "@/components/navigation/Footer.vue";
</script>

<template>
  <navbar />
  <div class="relative">
    <router-view />
  </div>
  <Footer />
</template>
