<script setup lang="ts">
import Navbar from "@/components/navigation/Navbar.vue";
</script>

<template>
  <navbar />
  <div class="content min-h-screen relative">
    <router-view />
  </div>
</template>
