<script setup lang="ts"></script>

<template>
  <div class="container m-auto">
    <div
      class="image h-[40vh] md:h-[60vh] flex flex-col justify-between content-[''] w-full min-h-[40vh] content-center md:flex-row my-20"
    >
      <div
        class="panel w-[85%] h-1/3 md:h-full mx-auto my-3 md:mx-3 md:my-auto rounded-lg"
        id="panel-1"
      ></div>
      <div
        class="panel w-[85%] h-1/3 md:h-full mx-auto my-3 md:mx-3 md:my-auto rounded-lg"
        id="panel-2"
      ></div>
      <div
        class="panel w-[85%] h-1/3 md:h-full mx-auto my-3 md:mx-3 md:my-auto rounded-lg"
        id="panel-3"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image {
  .panel {
    background: url("https://cdn.discordapp.com/attachments/1119779286174408716/1129704942836404224/rayn3r_a_hyper_realistic_photo_of_a_super_modern_house_with_so_f6523c63-de4a-47ab-a080-51dcac8267e1.png")
      no-repeat 0 0 fixed;
    background-size: cover;
    background-position-x: -320px;
    background-position-y: 120px;
    @media (min-width: 640px) {
      background-position-x: 0px;
      background-position-y: 220px;
    }
  }
}
</style>
