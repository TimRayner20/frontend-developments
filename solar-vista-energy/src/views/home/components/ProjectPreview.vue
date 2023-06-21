<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="preview-wrapper">
    <div class="preview-image">
      <img :src="props.image" :alt="props.title" class="m-auto" />
    </div>
    <div class="preview-content text-center">
      <h3 class="text-xl text-[#34495e] font-bold my-2">{{ props.title }}</h3>
      <p class="text-sm text-[#34495e]">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>
