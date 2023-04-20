<script setup>
const props = defineProps({
  id: Number,
  name: String,
  imageSrc: String,
  summary: String,
  rating: String
})
</script>

<template>
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" :src="props.imageSrc" :alt="props.name" />
      <div class="movie-item__header__rating">
        <p>
          ⭐️<span class="movie-item__header__rating__score">{{ props.rating }}</span>
        </p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3>
        {{ props.name }}
      </h3>
      <p>
        {{ props.summary }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.movie-item {
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  transition: 0.3s;
}

.movie-item:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
}

.movie-item__header {
  position: relative;
}

.movie-item .movie-item__header .movie-item__header__poster {
  width: 100%;
}

.movie-item .movie-item__header .movie-item__header__rating {
  position: absolute;
  padding: 8px;
  bottom: 20px;
  left: 0;
  display: inline-block;
  background-color: black;
  color: white;
}

.movie-item .movie-item__header .movie-item__header__rating .movie-item__header__rating__score {
  margin-left: 10px;
}

.movie-item .movie-item__content {
  padding: 16px;
}

.movie-item .movie-item__content h3 {
  margin: 0 0 10px 0;
}

.movie-item .movie-item__content h3 a {
  color: #db0000;
  text-decoration: none;
}

.movie-item .movie-item__content p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  /* number of lines to show */
  -webkit-box-orient: vertical;
}

.movie {
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px 16px;
}

.movie .movie__poster {
  width: 100%;
  max-width: 400px;
}

.movie .movie__info h4 {
  margin: 8px 0;
}
</style>
