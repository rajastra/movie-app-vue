<script setup>
import { defineProps } from 'vue'
import ShowItem from './MovieItem.vue'

const props = defineProps({ items: Array })
</script>

<template>
  <div class="movie-list">
    <ShowItem
      v-for="item in props.items"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :image-src="item.imageSrc"
      :summary="item.summary"
      :rating="item.rating"
    />
  </div>
</template>

<style scoped>
.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  justify-items: center;
  margin-inline: auto;
  gap: 5rem;
}

@media only screen and (max-width: 31.25em) {
  .movie-list {
    grid-template-columns: 1fr;
  }
}
</style>
