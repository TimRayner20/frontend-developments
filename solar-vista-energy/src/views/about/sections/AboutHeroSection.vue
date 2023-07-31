<script setup lang="ts">
import BadgeShowcase from "../components/BadgeShowcase.vue";
import { companyBadges } from "@/constants/home-constants";
</script>

<template>
  <div class="hero h-full -mt-20 relative text-center m-auto ... flex">
    <div class="imgs">
      <img
        id="bg-gradient-mobile"
        src="@/assets/images/bg-gradient-tablet.svg"
        class="bg-gradient absolute top-0 left:0 w-full -z-10"
      />
      <img
        id="bg-gradient-tablet"
        src="@/assets/images/bg-gradient-tablet.svg"
        class="bg-gradient absolute top-[-10vh] right-0 left-0 w-full -z-10"
      />
      <img
        id="bg-gradient-lg"
        src="@/assets/images/bg-gradient.svg"
        class="bg-gradient absolute top-[-340px] right-[-410px] w-[95%] -z-10"
      />
    </div>
    <div class="outer block items-center m-auto self-center">
      <div class="align-middle text-center mx-auto justify-center mt-32">
        <h1 class="text-black my-5 font-bold">Renewable Solar Solutions</h1>
        <h4 class="text-black my-12">some supporting text about us☀️</h4>
      </div>
    </div>
  </div>
  <div
    class="divider mt-8 lg:mt-12 mb-0 border border-gray-800 w-2/3 lg:w-1/3 m-auto opacity-20"
  ></div>
  <!-- BADGES -->
  <div class="container m-auto my-16">
    <BadgeShowcase :badges="companyBadges" />
  </div>
</template>
<style>
/** Mobile First Media Queries */

#bg-gradient-mobile {
  display: block;
}
#bg-gradient-tablet {
  display: none;
}
#bg-gradient-lg {
  display: none;
}

@media (min-width: 768px) {
  #bg-gradient-mobile {
    display: none;
  }
  #bg-gradient-tablet {
    display: block;
  }
}

@media (min-width: 1280px) {
  #bg-gradient-tablet {
    display: none;
  }

  #bg-gradient-lg {
    display: block;
  }
}
</style>
