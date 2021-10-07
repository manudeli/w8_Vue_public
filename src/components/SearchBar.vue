<template>
  <div class="header__searchBar">
    <form @submit.prevent="onSubmit">
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
  watch: {
    $route() {
      if (this.$route.name === 'home') {
        this.inputText = '';
      }
    }
  },
  methods: {
    onSubmit() {
      this.$router.push(`/list/${this.inputText}`);
    }
  }
};
</script>