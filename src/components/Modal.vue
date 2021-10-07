<template>
  <teleport to=".app__inner">
    <div
      v-if="modalOn"
      class="main__modal-container"
      @click="closeModal">
      <div
        class="main__modal"
        @click.stop>
        <div class="modal__image">
          <img :src="`${details.Poster}`" />
        </div>
        <div class="modal__info">
          <span class="info__title">{{ details.Title }}</span>
          <span class="info__rated">{{ details.Rated }}</span>
          <span class="info__released">{{ details.Released }}</span>
          <span class="info__runtime">{{ details.Runtime }}</span>
          <span class="info__genre">{{ details.Genre }}</span>
          <span class="info__director">{{ details.Director }}</span>
          <span class="info__writer">{{ details.Writer }}</span>
          <span class="info__actors">{{ details.Actors }}</span>
          <span class="info__plot">{{ details.Plot }}</span>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  computed: {
    modalOn() {
      return this.$store.state.searchMovie.modalOn;
    },
    details() {
      return this.$store.state.searchMovie.detailResult;
    }
  },
  methods: {
    closeModal(e) {
      console.log(e.target.className);
      const { className } = e.target;
      if (this.$store.state.searchMovie.modalOn && className !== 'main_modal') {
        this.$store.dispatch('searchMovie/toggleModal');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.main__modal-container {
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  .main__modal {
    position: fixed;
    background-color: hotpink;
    width: 50%;
    height: 60vh;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .modal__image {
      height: 80%;
    }
    .modal__info {
      border: 1px solid;
      width: 50%;
      display: flex;
      flex-direction: column;
    }
  }
}

</style>