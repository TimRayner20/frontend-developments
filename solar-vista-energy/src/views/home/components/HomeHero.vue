<script setup lang="ts"></script>

<template>
  <div
    class="hero min-h-[45vh] flex flex-col -mt-20 relative text-center md:text-left"
  >
    <!-- TODO: Change image for mobile-->
    <img
      src="@/assets/images/bg-gradient.svg"
      class="bg-gradient absolute top-[-5px] right-0 md:top-[-40px] md:right-[-410px] w-[95%] -z-10"
    />
    <div
      class="container hero-content align-middle md:align-top md:mt-32 md:m-[44px auto] flex flex-col md:flex-row w-full m-auto md:align-middle"
    >
      <div
        class="flex flex-col md:justify-start md:mr-10 mt-28 mb-16 md:w-6/12"
      >
        <h1 class="text-5xl text-black">Solar Vista Energy</h1>
        <p class="text-black text-xl mt-3">Making A Solar Difference ☀️</p>
        <button
          class="btn bg-[#41B883] text-white rounded-md p-3 mt-6 w-2/3 m-auto md:ml-0"
        >
          Get Started
        </button>
      </div>
      <div class="flex flex-col md:w-6/12 m-auto md:m-0">
        <img
          src="@/assets/images/building-1.png"
          alt="hero-image"
          class="w-[400px] md:w-[500px] rounded-xl mb-5 ml-auto"
        />
      </div>
    </div>
  </div>
</template>
