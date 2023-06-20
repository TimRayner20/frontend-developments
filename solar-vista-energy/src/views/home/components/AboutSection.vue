<script setup lang="ts"></script>

<template>
  <div
    id="about-us"
    class="about-section flex relative my-5 px-12 md:mx-auto text-left md:text-left"
  >
    <div
      class="container flex flex-col mx-5 text-white py-5 align-middle md:m-auto"
    >
      <h3 class="text-6xl text-center my-5 font-bold">About us</h3>
      <p class="text-lg mt-5 text-center my-5">
        Dr. Shawn Qu, Chairman, President and Chief Executive Officer founded
        Canadian Solar (NASDAQ: CSIQ) in 2001 in Canada, with a bold mission: to
        foster sustainable development and to create a better and cleaner earth
        for future generations by bringing electricity powered by the sun to
        millions of people worldwide.
      </p>
      <button
        class="btn bg-[#41B883] text-white rounded-md p-3 w-1/3 m-auto my-5"
      >
        Read more
      </button>
    </div>
    <div class="overlay"></div>
  </div>
</template>

<style scoped lang="scss">
.about-section {
  background-image: url("https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  background-repeat: no-repeat;

  .container {
    z-index: 20;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.65);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;

    z-index: 1;
  }
}
</style>
