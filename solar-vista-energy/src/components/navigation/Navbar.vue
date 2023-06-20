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
    class="navbar sticky top-0 z-50 h-20 left-auto"
    :class="{ change_color: scrollPosition.valueOf() > 1200 }"
  >
    <div class="container m-auto flex flex-row p-5 md:pl-0 pr-0">
      <img
        src="@/assets/images/logo_raw.png"
        alt="logo"
        class="h-12 rounded-full"
      />
      <ul class="navigation ml-auto hidden md:block">
        <router-link class="navbar-link m-3 p-5 align-middle" to="/"
          >Home</router-link
        >
        <router-link class="navbar-link m-3 p-5 align-middle" to="/about"
          >About</router-link
        >
        <router-link class="navbar-link m-3 mr-0 p-5 align-middle" to="/contact"
          >Contact</router-link
        >
      </ul>
      <font-awesome-icon
        class="md:hidden ml-auto mr-5 hover:cursor-pointer text-4xl"
        icon="fa-standard
     fa-bars-staggered"
      />
    </div>
  </nav>
</template>
<style scoped>
.change_color {
  background-color: black;
  color: #fff;
}
</style>
