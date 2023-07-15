<script setup lang="ts"></script>

<template>
  <div class="image h-screen flex flex-col justify-between">
    <div class="panel" id="panel-1"></div>
    <div class="panel" id="panel-2"></div>
    <div class="panel" id="panel-3"></div>
  </div>
</template>

<style lang="scss" scoped>
.image {
  content: "";

  width: 100%;
  min-height: 40vh;

  padding-top: 25px;
  padding-bottom: 25px;
  align-content: center;

  .panel {
    width: 85%;
    height: 33.333%;
    margin: 10px auto;
    background: url("https://cdn.discordapp.com/attachments/1119779286174408716/1129704942836404224/rayn3r_a_hyper_realistic_photo_of_a_super_modern_house_with_so_f6523c63-de4a-47ab-a080-51dcac8267e1.png")
      no-repeat 0 0 fixed;
    background-size: cover;
  }
}
</style>
