<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="shadow-xl item container m-auto text-center border p-5 py-16 my-5 rounded-xl w-3/4 md:w-11/12 bg-[#34495e]"
  >
    <font-awesome-icon
      class="text-4xl my-1 text-[#41B883]"
      :icon="props.icon"
    />
    <h3 class="text-xl text-white font-bold my-2">{{ props.title }}</h3>
    <p class="text-sm text-white">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
      sed, dolor.
    </p>
  </div>
</template>
