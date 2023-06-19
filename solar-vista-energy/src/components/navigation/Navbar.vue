<script setup lang="ts"></script>

<template>
  <nav class="navbar p-5 flex flex-row pr-0 sticky top-0 z-50 h-16">
    <p>LOGO</p>
    <ul class="navigation ml-auto hidden md:block">
      <router-link class="navbar-link m-3 p-5" to="/">Home</router-link>
      <router-link class="navbar-link m-3 p-5" to="/about">About</router-link>
      <router-link class="navbar-link m-3 mr-0 p-5" to="/contact"
        >Contact</router-link
      >
    </ul>
    <font-awesome-icon
      class="md:hidden ml-auto mr-5 mt-3 hover:cursor-pointer"
      icon="fa-standard
     fa-bars-staggered"
    />
  </nav>
</template>
