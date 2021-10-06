<template>
  <div
    class="app__inner">
    <header class="app__header">
      <div class="header__logo">
        Search Movie
      </div>
      <SearchBar />
    </header>
    <main class="app__main">
      <div class="main__inner">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script>
import SearchBar from '~/components/SearchBar';

export default {
  components: {
    SearchBar
  }
};
</script>

<style lang="scss" scoped>
.app__inner {
  position: relative;
  display: flex;
  flex-direction: column;
  header {
    box-sizing: border-box;
    background-color: gray;
    position: sticky;
    top: 0;
    z-index: 9999;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 50px;
  }
  main {
    position: relative;
    height: 100vh;
    background-color: rgba(#000, 0.2);
    margin: 50px;
    .main__inner {
      background-color: whitesmoke;
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>