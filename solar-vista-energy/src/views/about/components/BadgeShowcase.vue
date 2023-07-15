<script setup lang="ts">
import type { PropType } from "vue";
import type { CompanyBadge } from "@/types/home-types";

const props = defineProps({
  badges: {
    type: Array as PropType<CompanyBadge[]>,
    required: true,
  },
});
</script>

<template>
  <div class="badges  overflow-hidden mt-8">
    <ul class="flex">
      <li v-for="badge in props.badges" :key="badge.company" class="h-full p-0">
        <img :src="badge.image" :alt="badge.company" class="brand p-0" />
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.brand {
  vertical-align: middle;
}
</style>
