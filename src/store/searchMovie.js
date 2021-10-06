export default {
  namespaced: true,
  state() {
    return {
      searchResults: [],
      totalResults: '',
      detailResult: {},
      modalOn: false
    };
  },
  getters: {},
  mutations: {
    setState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    }
  },
  actions: {
    async getMovies({ commit }, keyword) {
      const res = await _request(keyword);
      await commit('setState', {
        searchResults: res.Search,
        totalResults: res.totalResults
      });
    },
    async getDetails({ commit, dispatch }, id) {
      const detailResult = await _requestDetail(id);
      await commit('setState', {
        detailResult
      });
      await dispatch('toggleModal');
    },
    toggleModal({ state }) {
      state.modalOn = !state.modalOn;
    }
  }
};

async function _request(keyword) {
  try {
    const res = await fetch(`https://www.omdbapi.com?apikey=7035c60c&s=${keyword}&page=1`);
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