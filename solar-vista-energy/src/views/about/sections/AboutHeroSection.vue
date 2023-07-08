<script setup lang="ts"></script>

<template>
  <div
    class="hero min-h-[45vh] flex flex-col -mt-20 relative text-center md:text-left"
  >
    <!-- TODO: Change image for mobile-->
    <img
      id="bg-gradient-mobile"
      src="@/assets/images/bg-gradient-mobile.svg"
      class="bg-gradient absolute top-[-5px] left:0 w-full -z-10"
    />
    <img
      id="bg-gradient-tablet"
      src="@/assets/images/bg-gradient-tablet.svg"
      class="bg-gradient absolute top-[-10vh] right-0 -z-10"
    />
    <img
      id="bg-gradient-lg"
      src="@/assets/images/bg-gradient.svg"
      class="bg-gradient absolute top-[-40px] right-[-410px] w-[95%] -z-10"
    />
    <div
      class="container flex hero-content align-middle md:align-top md:mt-32 md:m-[44px auto] flex flex-col md:flex-row w-full m-auto md:align-middle"
    >
      <div
        class="md:justify-start align-middlemd:mr-10 mt-28 md:mt-0 mb-16 md:mb-0 md:w-6/12 h-full flex flex-col justify-center m-auto"
      >
        <h1 class="text-black text-5xl md:text-7xl my-5 font-bold">
          About Solar Vista
        </h1>
        <p class="text-black text-xl mt-3">Making A Solar Difference ☀️</p>
      </div>
    </div>
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
