<template>
  <nav>
    <div class="content-wrap">
      <router-link to="/">
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/styles/constant.scss';

nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  /* glassmorphism */
  background: $greyOpacity200;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(10.5px);
  border-radius: 0 0 10px 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}

.logo {
  padding-top: 8px;
  width: 120px;
}

.content {
  &-wrap {
    margin: auto;
    padding: 0 12px;
    height: $NAVIGATION_HEIGHT;
    display: flex;
    max-width: 800px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
}
</style>
