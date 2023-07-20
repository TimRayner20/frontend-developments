<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";

const emit = defineEmits(["toggle-mobile-nav"]);

const props = defineProps({
  navbarOpen: Boolean,
});

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
    class="transition-all ease-in-out navbar sticky top-0 z-50 h-20 left-auto"
    :class="{ change_color: scrollPosition.valueOf() > 500 }"
  >
    <div class="container m-auto flex flex-row p-5 md:pl-0 pr-0">
      <p class="text-3xl">🍃☀️</p>
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
        v-if="!props.navbarOpen"
        @click="emit('toggle-mobile-nav')"
        class="md:hidden ml-auto mr-5 hover:cursor-pointer text-4xl"
        icon="fa-standard
     fa-bars-staggered"
      />
      <font-awesome-icon
        v-else
        @click="emit('toggle-mobile-nav')"
        class="md:hidden ml-auto mr-5 hover:cursor-pointer text-4xl"
        icon="fa-standard
        fa-x"
      />
    </div>
  </nav>
</template>
<style scoped>
.change_color {
  transition: 0.3s ease-in-out all;
  background-color: rgba(65, 184, 131, 0.79);
  color: #fff;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>
