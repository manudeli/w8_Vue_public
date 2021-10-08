<template>
  <div class="home-page">
    <section class="section-search">
      <div>
        <SearchBar />
      </div>
    </section>

    <div class="container-inner">
      <section class="section-result">
        <div v-if="!isLoading && !showNoMovies" class="selected_keyword">
          '<strong>{{ selectedKeyword }}</strong
          >'로 검색한 결과
        </div>

        <div ref="slider" class="slider mandatory-scroll-snapping" dir="ltr">
          <div v-if="isLoading">Loading...</div>
          <div v-else-if="showNoMovies">원하시는 영화가 없습니다.</div>
          <div
            v-else
            class="card"
            v-for="movie in movies"
            :key="movie.imdbID"
            @pointerdown="handleDown"
            @pointerup="handleUp"
            @pointercancel="handleUp"
            v-on:click="handleClickCard(movie.imdbID)"
            ref="draggableRoot"
          >
            <img :src="movie.Poster" />
            <span class="card-title">
              {{ movie.Title }}
            </span>
            <div class="description-year">{{ movie.Year }}</div>
            <div class="category-chip">{{ movie.Type }}</div>
          </div>
        </div>
      </section>
      <section class="section-result">
        <div v-if="!isLoading && !showNoMovies" class="selected_keyword">
          <strong>추천 결과</strong>
        </div>

        <div class="slider mandatory-scroll-snapping" dir="ltr">
          <div v-if="isLoading">Loading...</div>
          <div v-else-if="showNoMovies">원하시는 영화가 없습니다.</div>
          <div v-else class="card" v-for="movie in movies" :key="movie.imdbID">
            <img :src="movie.Poster" />
            <div class="card-title">
              {{ movie.Title }}
            </div>
            <div class="description-year">{{ movie.Year }}</div>
            <div class="category-chip">{{ movie.Type }}</div>
          </div>
        </div>
      </section>
    </div>

    <div class="margin_bottom"></div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import router from '@/routes'

export default {
  data() {
    return { x: 100, y: 100, left: 0, top: 0, drag: false, click: false }
  },
  components: {
    SearchBar,
  },
  computed: {
    selectedKeyword() {
      return this.$store.state.movies.selectedKeyword
    },
    movies() {
      return this.$store.state.movies.movies
    },
    isLoading() {
      return this.$store.state.movies.isLoading
    },
    showNoMovies() {
      return (
        !this.$store.state.movies.isLoading &&
        !this.$store.state.movies.movies.length
      )
    },
  },
  mounted() {
    this.$store.dispatch('movies/readMovies')

    const slider = document.querySelector('.slider')
    let isDown = false
    let startX
    let scrollLeft

    slider.addEventListener('mousedown', (e) => {
      isDown = true
      slider.classList.add('active')
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    })
    slider.addEventListener('mouseleave', () => {
      isDown = false
      slider.classList.remove('active')
    })
    slider.addEventListener('mouseup', () => {
      isDown = false
      slider.classList.remove('active')
    })
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 1 //scroll-fast
      slider.scrollLeft = scrollLeft - walk
    })
  },
  methods: {
    handleMove({ pageX, pageY }) {
      if (this.$refs.draggableRoot) {
        this.x = pageX + this.left
        this.y = pageY + this.top
        this.drag = true
      }
    },
    handleDown(event) {
      const { pageX, pageY } = event
      const { left, top } = this.$refs.draggableRoot.getBoundingClientRect()
      this.left = left - pageX
      this.top = top - pageY
      document.addEventListener('pointermove', this.handleMove)
    },
    handleUp() {
      document.removeEventListener('pointermove', this.handleMove)
      setTimeout(() => (this.drag = false)) //this would move this assigment at the end of event queue
    },
    handleClickCard(movieId) {
      !this.drag &&
        router.push({
          name: 'Detail',
          params: {
            movieId,
          },
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/constant.scss';
@import '@/styles/mixin.scss';

.home-page {
  scroll-snap-type: y mandatory;
  height: calc(100vh - $NAVIGATION_HEIGHT);
  overflow-y: auto;

  section {
    /* scroll-snap-align: start; */
    /* scroll-snap 사용시 hover때 망가짐 */
    padding-top: 18px;
  }

  .container-inner {
    margin: auto;
    overflow: hidden;
    max-width: $CONTAINER_INNER_WIDTH;
  }
}

.section {
  &-search {
    .title {
      font-weight: bold;
      margin-bottom: 20px;
    }

    display: flex;
    flex-direction: column;
    @include propOnBreakpoint(justify-content, center, center, end, end, end);
    @include propOnBreakpoint(align-items, center, center, start, start, start);

    div {
      display: flex;
      flex-direction: column;
      @include propOnBreakpoint(justify-content, center, center, end, end, end);
      @include propOnBreakpoint(
        align-items,
        center,
        center,
        start,
        start,
        start
      );
      margin: 0 auto;

      box-sizing: border-box;
      width: 100%;
      max-width: $CONTAINER_INNER_WIDTH;

      @include propOnBreakpoint(padding-left, 0, 0, 12px, 12px, 12px);
      @include propOnBreakpoint(margin-bottom, 0, 0, 60px, 60px, 60px);
    }

    height: 40vmax;
    max-height: 42vh;
    background: center / cover no-repeat
      url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80);
  }
}

.selected_keyword {
  max-width: $CONTAINER_INNER_WIDTH;
  padding-left: 12px;
  margin: 28px auto 12px auto;
  font-size: 23px;
  /* font-weight: bold; */
  strong {
    font-weight: 900;
  }
}

.slider {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden; // 터치로 스크롤할 때 멈춤 현상 없애줌
  width: 100%;
  transition: all 0.2s;
  transform: scale(0.98);

  &:hover {
    cursor: grab;
    transform: scale(1);
  }

  &:active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }

  &::-webkit-scrollbar {
    height: 0;
  }
}

.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;

  &:active {
    scroll-snap-type: none;
  }
}

.card {
  user-select: none;
  min-width: 180px;
  scroll-snap-align: start;
  padding: 0 4px;

  transition: all 0.2s;
  transform: scale(0.96);
  &:hover {
    @include propOnBreakpoint(
      transform,
      scale(1.1),
      scale(1.1),
      scale(1.3),
      scale(1.3),
      scale(1.3)
    );
    @include propOnBreakpoint(
      padding,
      20px 12px,
      20px 12px,
      55px 30px,
      55px 30px,
      55px 30px
    );
  }

  img {
    cursor: pointer;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 8px;
  }

  &-title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 8px;
  }

  .description-year {
    margin-top: 4px;
    color: $whiteOpacity500;
  }

  .category-chip {
    display: inline-block;
    margin-left: -4px;
    padding: 6px 12px;
    background: $whiteOpacity100;
    margin-top: 8px;
    border-radius: 12px;
    border: 1px solid $whiteOpacity200;
  }
}

.margin_bottom {
  width: 100%;
  height: 300px;
}
</style>
