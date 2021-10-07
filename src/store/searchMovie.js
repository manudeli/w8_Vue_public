export default {
  namespaced: true,
  state() {
    return {
      searchResults: [],
      totalResults: '',
      detailResult: {},
      pageNumber: 1,
      isLoading: false,
      modalOn: false
    };
  },
  getters: {
    totalPages(state) {
      return Math.ceil(state.totalResults / 10);
    }
  },
  mutations: {
    setState(state, payload) {
      const payloadKeys = Object.keys(payload);
      if (payloadKeys.includes('searchResults')) {
        state.searchResults = state.searchResults.concat(payload['searchResults']);
      }
      payloadKeys
        .filter(key => key !== 'searchResults')
        .forEach(key => {
          state[key] = payload[key];
        });
    },
    resetPageState(state) {
      state.pageNumber = 1;
      state.searchResults = [];
    },
    increasePageNumber(state) {
      state.pageNumber += 1;
    },
    toggleLoading(state) {
      state.isLoading = !state.isLoading;
    } 
  },
  actions: {
    async getMovies({ state, commit }, keyword) {
      commit('toggleLoading');
      const res = await _request(keyword, state.pageNumber);
      await commit('setState', {
        searchResults: res.Search,
        totalResults: parseInt(res.totalResults, 10)
      });
      commit('toggleLoading');
      commit('increasePageNumber');
    },
    async getDetails({ commit, dispatch }, id) {
      commit('toggleLoading');
      const detailResult = await _requestDetail(id);
      await commit('setState', {
        detailResult
      });
      dispatch('toggleModal');
      commit('toggleLoading');
    },
    toggleModal({ state }) {
      state.modalOn = !state.modalOn;
    }
  }
};

async function _request(keyword, pageNumber) {
  try {
    const res = await fetch(`https://www.omdbapi.com?apikey=7035c60c&s=${keyword}&page=${pageNumber}`);
    if (res.ok) {
      return res.json();
    }
  } catch(e) {
    alert(e.message);
  }
}

async function _requestDetail(id) {
  try {
    const res = await fetch(`https://www.omdbapi.com?apikey=7035c60c&i=${id}&plot=full`);
    if (res.ok) {
      return res.json();
    }
  } catch(e) {
    alert(e.message);
  }
}