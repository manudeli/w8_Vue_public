<template>
  <div class="header__searchBar">
    <form @submit.prevent="searchInit">
      <input
        v-model="inputText"
        type="text"
        class="searchBar__input"
        placeholder="키워드를 입력하세요" />
      <button
        class="searchBar__button">
        search
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
  methods: {
    searchInit() {
      this.$store.dispatch('searchMovie/searchInit', this.inputText);
    }
  }
};
</script>