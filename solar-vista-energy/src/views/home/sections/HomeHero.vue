<script setup lang="ts"></script>

<template>
  <div
    class="hero flex flex-col -mt-20 relative text-center md:text-left min-h-[40vh] lg:mb-40"
  >
    <!-- TODO: clean up images -->
    <div class="imgs">
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
    </div>

    <div
      class="content container flex hero-content align-middle md:align-top md:mt-32 md:m-[44px auto] flex flex-col md:flex-row w-full m-auto md:align-middle"
    >
      <div
        class="md:justify-start align-middlemd:mr-10 mt-28 md:mt-0 mb-16 md:mb-0 md:w-6/12 h-full flex flex-col justify-center m-auto lg:align-middle lg:m-auto"
      >
        <h1 class="text-black my-5 font-bold">Solar Vista Energy</h1>
        <h3 class="text-black my-5">Making A Solar Difference ☀️</h3>
        <div class="buttons w-full m-auto md:m-0 px-16 md:px-0 lg:w-3/4">
          <button
            class="btn bg-[--primary] text-white rounded-md p-3 mt-6 w-full m-auto md:ml-0"
          >
            Learn more
          </button>
          <div class="flex flex-row m-auto w-full">
            <button
              class="btn bg-[--primary] text-white rounded-md p-3 mt-6 w-1/2 mr-5 m-auto md:ml-0"
            >
              Call
            </button>
            <button
              class="btn bg-[--primary] text-white rounded-md p-3 mt-6 w-1/2 ml-5 m-auto md:ml-0"
            >
              Email
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:w-6/12">
        <img
          src="@/assets/images/panel-1.png"
          alt="hero-image"
          class="w-[400px] lg:w-[500px] rounded-xl m-auto md:ml-16 lg:ml-auto"
        />
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
