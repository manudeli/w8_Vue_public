export default {
  namespaced: true,
  state() {
    return {
      searchResults: [],
      totalResults: ''
    };
  },
  getters: {},
  mutations: {
    setState(state, payload) {
      const { newResults, totalResults } = payload;
      state.searchResults = newResults;
      state.totalResults = totalResults;
    }
  },
  actions: {
    async getMovies({ commit }, keyword) {
      const searchResults = await _request(keyword);
      await commit('setState', {
        newResults: searchResults.Search,
        totalResults: searchResults.totalResults
      });
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