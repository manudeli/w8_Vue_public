import router from '~/routes';

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
      state = {
        ...state,
        searchResults: [ ...state.searchResults, newResults ],
        totalResults
      };
      console.log('최신 state:', state);

    }
  },
  actions: {
    async searchInit({ commit }, keyword) {
      const searchResults = await _request(keyword);
      console.log(searchResults);
      await commit('setState', {
        newResults: searchResults.Search,
        totalResults: searchResults.totalResults
      });
      router.push(`/list/${keyword}`);
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