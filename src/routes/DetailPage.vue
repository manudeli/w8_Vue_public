<template>
  <div>
    <h1>{{ movieData.Title }}</h1>
    {{ movieData.Year }}
    <br />
    {{ movieData.Rated }}
    <br />
    {{ movieData.Released }}
    <br />
    {{ movieData.Runtime }}
    <br />
    {{ movieData.Genre }}
    <br />
    {{ movieData.Director }}
    <br />
    {{ movieData.Writer }}
    <br />
    {{ movieData.Actors }}
    <br />
    {{ movieData.Plot }}
    <br />
    {{ movieData.Language }}
    <br />
    {{ movieData.Awards }}
    <br />
    {{ movieData.Country }}
    <br />
    <img :src="movieData.Poster" alt="" />
    <br />
    {{ movieData.Ratings }}
    <br />
    {{ movieData.Metascore }}
    <br />
    {{ movieData.imdbRating }}
    <br />
    {{ movieData.imdbVotes }}
    <br />
    {{ movieData.Type }}
    <br />
    {{ movieData.totalSeasons }}
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  computed: {
    movieData() {
      return this.$store.state.movies.currentMovieData
    },
  },
  mounted() {
    this.$store.dispatch('movies/readMovie', {
      id: this.$route.params.movieId,
    })
  },
}
</script>
