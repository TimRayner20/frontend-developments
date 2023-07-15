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
        class="brand-item w-2/12 h-1/4 align-middle m-auto justify-between"
      >
        <img
          :src="badge.image"
          :alt="badge.company"
          class="brand-img h-full w-full"
        />
      </li>
    </ul>
  </div>
</template>
