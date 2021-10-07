<template>
  <div class="header__searchBar">
    <form
      class="searchBar__form"
      @submit.prevent="onSubmit">
      <input
        v-model="inputText"
        type="text"
        class="searchBar__input"
        placeholder="insert movie keywords.." />
      <button
        class="searchBar__button btn btn-primary"
        type="submit">
        Find
      </button> 
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: ''
    };
  },
  watch: {
    $route() {
      if (this.$route.name === 'home') {
        this.inputText = '';
      }
    }
  },
  methods: {
    onSubmit() {
      // this.$router.push(`/search?kw=${this.inputText}`);
      this.$router.push({
        name: 'search',
        query: {kw: `${this.inputText}`}
      });
    }
  }
};
</script>

<style lang="scss">
.header__searchBar{
  width: 500px;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .searchBar__form {
    display: flex;
    .searchBar__input {
      width: 100%;
      &::placeholder {
        color: $color-font-light;
        font-size: 14p;
        text-align: center;
      }
    }
    .searchBar__button {
      border-color: $color-main-theme--dark;
      background-color: $color-main-theme--dark;
      width: 70px;
      color: $color-main-font;
    }
  }
}
</style>