<script setup lang="ts">
const props = defineProps({
  company: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="m-auto text-center w-2/3 md:w-2/3">
    <a :href="props.link">
      <img
        :src="props.image"
        :alt="props.company"
        class="rounded-xl m-auto p-5 md:w-1/2 h-full"
      />
    </a>
  </div>
</template>
