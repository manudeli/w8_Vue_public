<template>
  <div class="app-wrap">
    <NavBar />
    <div class="router-wrap">
      <RouterView />

      <!-- <BottomNavigation /> -->
    </div>
  </div>
</template>

<script>
import '@/styles/reset.scss'
import NavBar from '@/components/NavBar'
import BottomNavigation from '@/components/BottomNavigation'

export default {
  components: {
    NavBar,
    BottomNavigation,
  },
}
</script>

<style lang="scss">
@import '@/styles/constant.scss';
@import '@/styles/mixin.scss';

html {
  @include propOnBreakpoint(font-size, 10px, 12px, 12px, 16px, 16px);
}

* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: $inverseGrey800;

  &::-webkit-scrollbar {
    @include propOnBreakpoint(width, auto, auto, 16px, 16px, 16px);
  }
  &::-webkit-scrollbar-thumb {
    background-color: $whiteOpacity200;
    height: 56px;
    border-radius: 8px;
    border: 4px solid transparent;
    background-clip: content-box;
  }
  &::-webkit-scrollbar-track {
    background: $whiteOpacity50;
    padding: 3px;
  }
}

.app {
  &-wrap {
    padding-top: $NAVIGATION_HEIGHT;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: black;
    box-sizing: border-box;
  }
}

.router {
  &-wrap {
    background-color: $greyOpacity50;
    width: 100%;
    max-width: $CONTAINER_WIDTH;
    flex: 1;
    margin: auto;
    overflow: hidden;
  }
}
</style>
