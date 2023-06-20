<script setup lang="ts">
import ShowCaseBlob from "./ShowCaseBlob.vue";
</script>

<template>
  <div
    class="hero min-h-screen flex flex-col -mt-20 border relative text-center md:text-left"
  >
    <img src="@/assets/images/bg-gradient.svg" class="bg-gradient" />
    <div class="hero-content mt-32 p-12">
      <h1 class="text-5xl text-black">Solar Vista Energy</h1>
      <p class="text-black text-xl">Solar Energy for Everyone</p>
      <button class="btn bg-[#41B883] text-white rounded-md p-3 mt-6">
        Get Started
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg-gradient {
  position: absolute;
  top: -40px;
  right: -410px;
  z-index: -1;
  width: 95%;
}
</style>
