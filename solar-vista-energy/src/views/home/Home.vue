<script setup lang="ts">
import Highlight from "./components/Highlight.vue";
import HomeHero from "./components/HomeHero.vue";
import AboutSection from "./sections/AboutSection.vue";
import ProjectSection from "./sections/ProjectSection.vue";
import CompanyBadge from "./components/CompanyBadge.vue";
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

const companyBadges: Array<any> = [
  {
    company: "Amazon AWS",
    image:
      "https://cdn.icon-icons.com/icons2/2389/PNG/512/amazon_aws_logo_icon_145507.png",
    link: "https://aws.amazon.com/",
  },
  {
    company: "Land Rover",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Land_Rover_logo_black.svg/2560px-Land_Rover_logo_black.svg.png",
    link: "https://www.landrover.co.uk/index.html",
  },
  {
    company: "Cisco",
    image:
      "https://cdn.freebiesupply.com/images/large/2x/cisco-logo-black-transparent.png",
    link: "https://www.cisco.com/site/uk",
  },
  {
    company: "Airbnb",
    image:
      "https://cdn.freebiesupply.com/images/large/2x/airbnb-logo-black-transparent.png",
    link: "https://www.airbnb.co.uk/",
  },
  {
    company: "Nissan",
    image: "https://www.carlogos.org/car-logos/nissan-logo-2020-black.png",
    link: "https://www.nissan.co.uk/",
  },
  {
    company: "WWF",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/WWF_logo.svg/800px-WWF_logo.svg.pnghttps://logos-world.net/wp-content/uploads/2020/11/World-Wide-Fund-for-Nature-WWF-Emblem.png",
    link: "https://www.wwf.org.uk/",
  },
];

/**
 * @TODO ADD CONSISTENT CONTAINER MARGINS TO ALL PAGES AND COMPONENTS
 */
</script>

<template>
  <HomeHero />
  <div
    class="container m-auto my-16 mb-5 md:my-16 text-center"
    id="introduction"
  >
    <h3 class="text-4xl md:text-6xl my-5 md:px-2 font-bold">
      Providing The Best
    </h3>
    <h4 class="text-xl md:px-2">Market leading Solar Solutions Since 1999</h4>
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
  <!-- Projects -->
  <ProjectSection />
  <!-- Partners-->
  <div class="container m-auto my-8 mt-16 text-center" id="partners">
    <h3 class="text-4xl md:text-6xl my-5 md:px-2 font-bold">Partners</h3>
    <h4 class="text-lg md:text-2xl px-2">
      Just a few notable names we've worked with, to help the world be a better
      place, and give our next generaton a brighter future.
    </h4>
  </div>
  <div id="partner-badges" class="container grid grid-cols-3 m-auto w-full">
    <CompanyBadge
      v-for="(badge, index) in companyBadges"
      :key="index"
      :company="badge.company"
      :image="badge.image"
      :link="badge.link"
    />
  </div>
</template>
