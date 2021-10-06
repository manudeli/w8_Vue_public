<template>
  <div
    v-for="movie in movies"
    :key="movie.imdbID"
    class="main__item"
    @click="showDetails(movie.imdbID)">
    <div>
      <img
        class="item__poster"
        :src="`${movie.Poster}`" />
    </div>
    <div class="item__info">
      <span class="info__year">{{ movie.Year }}</span>
      <span class="info__title">{{ movie.Title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movies() {
      return this.$store.state.searchMovie.searchResults;
    }
  },
  watch: {
    $route() {
      console.log(`${this.$route.params.keyword}로 주소 바뀜!`);
      this.$store.dispatch('searchMovie/getMovies', this.$route.params.keyword);
    }
  },
  created() {
    this.$store.dispatch('searchMovie/getMovies', this.$route.params.keyword);
  },
  methods: {
    showDetails(id) {
      console.log('클릭', id);
      this.$store.dispatch('searchMovie/getDetails', id);
    }
  }
};
</script>

<style lang="scss" scoped>
.main__item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  .item__poster {

  }
  .item__info {
    height: 20%;
    display: flex;
    flex-direction: column;
    padding: 0 10%;
  }
}
</style>