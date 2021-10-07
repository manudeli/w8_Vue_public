<template>
  <teleport to=".app__inner">
    <div
      v-show="isLoading"
      class="spinner__container">
      <div
        class="spinner-border"
        role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.searchMovie.isLoading;
    },
  }
};
</script>

<style lang="scss">
.spinner__container {
  position: absolute;
  z-index: 9999;
  background-color: rgba(0, 0, 0, .1);
  width: 100%;
  height: 100%;
  .spinner-border {
    width: 300px;
    height: 300px;
    position: fixed;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color:rgba(255, 255, 255, 0.7);
  }
}
</style>