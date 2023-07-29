<script setup lang="ts">
import { companyBadges, companyHighlights } from "@/constants/home-constants";
import Highlight from "./components/Highlight.vue";
import HomeHero from "./sections/HomeHero.vue";
import AboutSection from "./sections/AboutSection.vue";
import ContactSection from "./sections/ContactSection.vue";
import ProjectSection from "./sections/ProjectSection.vue";
import PriceCalculator from "./sections/PriceCalculator.vue";
import CompanyBadge from "./components/CompanyBadge.vue";
import { reactive } from "vue";

/**
 * @TODO ADD CONSISTENT CONTAINER MARGINS TO ALL PAGES AND COMPONENTS
 */

const data = reactive({
  priceCalcDisplayed: false,
});
</script>

<template>
  <HomeHero />
  <div
    class="container m-auto my-16 mb-5 md:my-16 text-center"
    id="introduction"
  >
    <h3 class="my-5 md:px-2 font-bold">Powering A Brighter Future</h3>
    <h4 class="md:px-2">Market leading Solar Solutions Since 1999</h4>
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
  <div class="container m-auto my-8 mt-16 text-center md:mt-0" id="partners">
    <h4 class="px-2">
      Just a few notable names we've worked with, to help the world be a better
      place, and give our next generaton a brighter future.
    </h4>
  </div>
  <div
    id="partner-badges"
    class="container grid grid-cols-3 m-auto w-full mb-20"
  >
    <CompanyBadge
      v-for="(badge, index) in companyBadges"
      :key="index"
      :company="badge.company"
      :image="badge.image"
      :link="badge.link"
    />
  </div>

  <div
    class="relative my-5 bg-[#34495e] text-white lg:mx-auto text-left lg:text-left lg:py-16 lg:pt-6 mb-0 py-12"
  >
    <PriceCalculator v-if="data.priceCalcDisplayed" />
    <div v-else class="text-center">
      <h3 class="text-center my-8 font-bold">We Do Retail Too!</h3>
      <p>
        We're not only business-to-business. See how much Solar Vista panels
        could save you at home with our quick-start price calculator.
      </p>
      <button
        type="button"
        @click="data.priceCalcDisplayed = true"
        class="btn bg-[--primary] text-white rounded-md p-3 mt-6 w-2/5 m-auto md:ml-0 mb-8"
      >
        Get Started
      </button>
    </div>
  </div>

  <!-- CONACT SECTION-->
  <ContactSection />
</template>
