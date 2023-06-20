<script setup lang="ts">
import Highlight from "./components/Highlight.vue";
import HomeHero from "./components/HomeHero.vue";

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
  <div class="container mx-12 md:m-auto mt-5" id="introduction">
    <h3 class="text-xl">Providing The Best</h3>
    <h4 class="text-lg">Market leading Solar Solutions Since 1999</h4>
  </div>

  <!--HIGHLIGHTS-->
  <div
    class="container m-auto my-16 grid grid-cols-1 md:grid-cols-3 md:flex-row md:flex-wrap"
    id="highlights"
  >
    <Highlight
      v-for="(highlight, index) in companyHighlights"
      :key="index"
      :title="highlight.title"
      :icon="highlight.icon"
      class=""
    />
    <div
      class="item flex container m-auto text-center border p-5 py-16 my-5 rounded-xl w-3/4 md:w-11/12 bg-[#34495e] hover:cursor-pointer"
    >
      <div class="align-middle m-auto w-full">
        <font-awesome-icon
          class="fa text-6xl my-1 text-[#fff]"
          icon="fa-standard fa-angles-right"
        />

        <a class="block my-5 mx-auto underline text-white" href="/about"
          >Read More</a
        >
      </div>
    </div>
  </div>

  <!-- About -->
</template>
