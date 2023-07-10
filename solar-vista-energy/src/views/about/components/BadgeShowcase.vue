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
  <div class="badges">
    <ul class="flex">
      <li v-for="badge in props.badges" :key="badge.company" class="">
        <img :src="badge.image" :alt="badge.company" />
      </li>
    </ul>
  </div>
</template>
