<template>
  <div class="app__inner">
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  header {
    background-color: gray;
    position: fixed;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 50px;
  }
  main {
    background-color: rgba(#000, 0.2);
    flex-grow: 1;
    padding: 150px 50px 50px;

    .main__inner {
      background-color: whitesmoke;
      height: 100%;
    }
  }
}
</style>