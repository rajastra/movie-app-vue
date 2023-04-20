<script setup>
import MainHeader from './components/UI/MainHeader.vue'
import HomeView from './views/HomeView.vue'
</script>

<template>
  <MainHeader />
  <div class="container">
    <h2>Movie List</h2>
    <HomeView />
  </div>
</template>

<style scoped>
h2 {
  font-size: 2rem;
  font-weight: 300;
  margin: 0;
  margin-bottom: 2rem;
}
.container {
  max-width: 90rem;
  margin-inline: auto;
  padding: 2rem 1.5rem;
}
</style>
