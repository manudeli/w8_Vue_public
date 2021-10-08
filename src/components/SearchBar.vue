<template>
  <div class="title">Welcome to MANUDELI</div>
  <div class="search-bar">
    <input
      type="text"
      :placeholder="`'${selectedKeyword}'으로 검색한 영화들 입니다.`"
      v-on:input="handleSearch"
    />
  </div>
  <div class="description">
    다른 키워드로 영화를 추천받고 싶다면 새로고침하세요
  </div>
</template>

<script>
import debounce from '@/utils/debounce'
export default {
  computed: {
    selectedKeyword() {
      return this.$store.state.movies.selectedKeyword
    },
  },
  methods: {
    handleSearch({ currentTarget: { value } }) {
      debounce(() => {
        this.$store.dispatch('movies/searchMovie', { value })
      }, 200)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/constant.scss';

.title {
  font-size: 3em;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 800;
}

.search-bar {
  width: calc(85% - 24px);
  max-width: $SEARCH_BAR_MAX_WIDTH;
  padding: 12px 0px;
  background: $greyOpacity200;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(10.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  input {
    font-size: 18px;
    color: inherit;
    background: none;
    border: 0;
    outline: 0;
    width: calc(100% - 32px);
    margin: 0 16px;
  }
}

.description {
  color: $greyOpacity900;
  font-size: 14px;
  margin-top: 16px;
  z-index: 1;
}

[contenteditable='true']:empty:before {
  content: attr(placeholder);
  display: block; /* For Firefox */
}
div[contenteditable='true'] {
  color: $greyOpacity600;
  font-size: inherit;
  width: 300px;
  padding: 5px;
  outline: 0;
}
</style>
