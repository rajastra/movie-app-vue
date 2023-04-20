<script setup>
import { reactive, onMounted } from 'vue'
import { store } from '../services/store.js'
import MovieList from '../components/Show/MovieList.vue'
import LoadingSpinner from '../components/UI/LoadingSpinner.vue'

const state = reactive({
  isLoading: true,
  shows: []
})

onMounted(async () => {
  const allShows = await store.getAllShows()

  const shows = allShows.map((show) => {
    const summary =
      show.show?.summary?.replace(/(<([^>]+)>)/gi, '') ||
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quam illo ratione rem ea veniam dolorem earum quaerat consequatur doloribus. Itaque deserunt omnis, harum libero eaque id a? Perspiciatis, cumque. Doloremque, ea cupiditate. Accusantium sequi libero magnam. Deserunt atque, tenetur explicabo iste nam labore illo vero laborum, ab perspiciatis vitae. Voluptatibus fugit, illum hic officia eius ducimus enim ut nam?'
    return {
      id: show.show.id,
      name: show.show.name,
      imageSrc: show.show.image?.medium,
      summary: summary,
      rating: show.show.rating?.average || (show.score * 10).toFixed(1)
    }
  })

  state.shows = shows

  state.isLoading = false
})
</script>

<template>
  <main v-if="!state.isLoading">
    <MovieList :items="state.shows" />
  </main>
  <div v-else>
    <LoadingSpinner />
  </div>
</template>
