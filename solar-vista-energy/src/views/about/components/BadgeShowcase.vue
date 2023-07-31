<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { CompanyBadge } from "@/types/home-types";

const props = defineProps({
  badges: {
    type: Array as PropType<CompanyBadge[]>,
    required: true,
  },
});

const filteredBadges = computed(() => {
  return props.badges.filter(
    (badge) => badge.company !== "Amazon AWS" && badge.company !== "Starbucks"
  );
});
</script>

<template>
  <div class="badge-container mt-8">
    <ul class="flex flex-row">
      <li
        v-for="badge in filteredBadges"
        :key="badge.company"
        class="brand-item w-2/12 h-1/4 md:w-3/12 align-middle m-auto"
      >
        <img
          :src="badge.image"
          :alt="badge.company"
          class="brand-img w-full h-full md:h-1/2 md:w-1/2 m-auto"
        />
      </li>
    </ul>
  </div>
</template>
