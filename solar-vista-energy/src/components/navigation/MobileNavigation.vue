<script setup lang="ts">
// Set the initial value to 'hidden'

const emit = defineEmits(["close-mobile-nav"]);
</script>

<template>
  <div
    class="mobile-nav absolute content-[''] top-0 right-0 bottom-0 left-0 bg-emerald-400 z-50 overflow-hidden"
  >
    Hello, I'm a navbar for mobile devices.
  </div>
</template>
