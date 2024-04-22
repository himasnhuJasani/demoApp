<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <!-- <div v-else class="loading">
    <span><LogoIcon id="logo" :show-country-code="false" :loading="true" /></span>
    <div class="custom-loader"></div>
  </div> -->
</template>

<style scoped>
.loading {
  height: 100vh;
  display: grid;
  place-content: center;

  background: linear-gradient(
    -35deg,
    var(--gradient-background-color-1) 0%,
    var(--gradient-background-color-2) 25%,
    var(--gradient-background-color-1) 50%,
    var(--gradient-background-color-2) 75%,
    var(--gradient-background-color-1) 100%
  );
}

#logo {
  font-size: 2.5rem !important;
  animation: size 1s infinite alternate-reverse linear;
}
</style>
