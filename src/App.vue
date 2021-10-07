<template>
  <div
    class="app__inner">
    <header class="app__header">
      <div
        class="header__logo"
        @click="$router.push('/')">
        <span class="logo__text">SEARCH🍳MOV</span>
      </div>
      <SearchBar />
    </header>
    <main class="app__main">
      <div class="main__inner">
        <RouterView />
      </div>
    </main>
    <footer class="app__footer">
      “Cinema is a matter of what's in the frame and what's out”
    </footer>
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: $font-main;
  header {
    box-sizing: border-box;
    background-color: $color-main-theme;
    position: sticky;
    top: 0;
    z-index: 9998;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 50px;
    .header__logo {
      position: absolute;
      cursor: pointer;
      .logo__text {
        color: $color-main-font;
      }
    }
  }
  main {
    // position: relative;
    // height: 100%;
    // background-color: rgba(#000, 0.2);
    min-height: 100vh;
    margin: 50px;
    flex-grow: 1;
    .main__inner {
      background-color: whitesmoke;
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }
  footer {
    background-color: $color-main-theme--light;
    height: 50px;
    color: $color-main-font--light;
    text-align: center;
  }
}
</style>