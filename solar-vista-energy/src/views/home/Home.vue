<script setup lang="ts">
import Highlight from "./components/Highlight.vue";
import HomeHero from "./components/HomeHero.vue";
import AboutSection from "./components/AboutSection.vue";
const companyHighlights: Array<any> = [
  {
    title: "96GW solar modules shipments",
    icon: "fa-standard fa-solar-panel",
  },
  {
    title: "Module capacity 75GW",
    icon: "fa-standard fa-battery-full",
  },
  {
    title: "25GW project pipeline",
    icon: "fa-standard fa-leaf",
  },
  {
    title: "Subsidiaries in 23 countries",
    icon: "fa-standard fa-earth-americas",
  },
  {
    title: "Over 20 manufacturing facilities",
    icon: "fa-standard fa-industry",
  },
];

/**
 * @TODO ADD CONSISTENT CONTAINER MARGINS TO ALL PAGES AND COMPONENTS
 */
</script>

<template>
  <HomeHero />
  <div
    class="container m-auto my-16 mb-5 md:my-32 text-center"
    id="introduction"
  >
    <h3 class="text-4xl md:text-6xl my-5 px-2 font-bold">Providing The Best</h3>
    <h4 class="text-xl px-2">Market leading Solar Solutions Since 1999</h4>
  </div>

  <!--HIGHLIGHTS-->
  <div
    class="container m-auto my-16 mt-5 grid grid-cols-1 md:grid-cols-3 md:flex-row md:flex-wrap"
    id="highlights"
  >
    <Highlight
      v-for="(highlight, index) in companyHighlights"
      :key="index"
      :title="highlight.title"
      :icon="highlight.icon"
      class=""
    />
  </div>

  <!-- About -->
  <AboutSection />
</template>
