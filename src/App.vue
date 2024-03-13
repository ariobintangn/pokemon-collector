<script setup>
import { createApp } from "vue";
import { RouterLink, RouterView } from "vue-router";
import FooterVue from "./components/Footer.vue";
import Header from "./components/Header.vue";


</script>

<template>
  <nav>
    <Header />
  </nav>
  <div class="p-4 bg-real-white/80">
    <div>
      <RouterView />
    </div>
  </div>
  <!-- <FooterVue /> -->
</template>

<style></style>
