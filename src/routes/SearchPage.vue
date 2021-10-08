<template>
  <h1>Search!{{ movieTitle }}</h1>
</template>

<script>
export default {
  data() {
    return {
      movieTitle: this.$route.params.title,
    }
  },
  mounted() {},
}
</script>
