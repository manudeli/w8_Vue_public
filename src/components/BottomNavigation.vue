<template>
  <div class="bottom-navigation">
    <router-link to="/">공개 예정</router-link>
    <router-link to="/">홈</router-link>
    <router-link to="/profile">프로필</router-link>
  </div>
</template>
<style lang="scss" scoped>
@import '@/styles/constant.scss';

.bottom {
  &-navigation {
    font-size: 16px;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin: auto;
    left: 0;
    right: 0;
    max-width: $SEARCH_BAR_MAX_WIDTH;
    height: $NAVIGATION_HEIGHT;
    z-index: 1000;

    /* glassmorphism */
    background: $greyOpacity200;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    backdrop-filter: blur(10.5px);
    border-radius: 10px 10px 0 0;
    border-top: 1px solid rgba(255, 255, 255, 0.18);
  }
}
</style>
