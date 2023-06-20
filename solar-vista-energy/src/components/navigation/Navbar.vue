<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";

const data = reactive({
  scrollPosition: 0 as Number,
});

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});

const scrollPosition = computed(() => data.scrollPosition);

const updateScroll = () => {
  data.scrollPosition = window.scrollY;
};
</script>

<template>
  <nav
    class="navbar p-5 flex flex-row pr-0 sticky top-0 z-50 h-20"
    :class="{ change_color: scrollPosition.valueOf() > 1200 }"
  >
    <img
      src="@/assets/images/logo_raw.png"
      alt="logo"
      class="h-12 rounded-full flex ml-6"
    />
    <ul class="navigation ml-auto hidden md:block">
      <router-link class="navbar-link m-3 p-5 text-[#fff]" to="/"
        >Home</router-link
      >
      <router-link class="navbar-link m-3 p-5 text-[#fff]" to="/about"
        >About</router-link
      >
      <router-link class="navbar-link m-3 mr-0 p-5 text-[#fff]" to="/contact"
        >Contact</router-link
      >
    </ul>
    <font-awesome-icon
      class="md:hidden ml-auto mr-5 mt-3 hover:cursor-pointer text-4xl"
      icon="fa-standard
     fa-bars-staggered"
    />
  </nav>
</template>
<style scoped>
.change_color {
  background-color: black;
}
</style>
