import router from '@/routes'
import { request, MethodType, ApiType, OptionType } from '@/utils/api'

export default {
  namespaced: true,
  state() {
    return {
      isLoading: false,
      movies: [],
      recommendedKeywords: [
        'Frozen',
        'Hello',
        'Hell',
        'Avengers',
        'Green',
        'Monday',
        'Sunday',
      ],
      selectedKeyword: '원하는 영화를 입력하세요',
      currentMovieData: {},
    }
  },

  getters: {},

  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key]
      })
    },
  },

  actions: {
    async searchMovie({ commit, state }, payload = {}) {
      commit('assignState', {
        isLoading: true,
      })

      const { value: searchTitle } = payload
      const { Search: movies } = await request({
        methods: MethodType.get,
        apiType: ApiType.search,
        value: searchTitle,
        options: [
          // { type: OptionType.year, value: '2015' },
          { type: OptionType.page, value: 2 },
        ],
      })

      if (movies) {
        commit('assignState', {
          movies,
        })
        state.selectedKeyword = searchTitle
      } else
        commit('assignState', {
          movies: [],
        })

      commit('assignState', {
        isLoading: false,
      })
    },

    async readMovies({ state, commit }) {
      commit('assignState', {
        isLoading: true,
      })
      const array = state.recommendedKeywords
      const selectedKeyword = array[Math.floor(Math.random() * array.length)]

      state.selectedKeyword = selectedKeyword

      const { Search = [] } = await request({
        methods: MethodType.get,
        apiType: ApiType.search,
        value: selectedKeyword,
        options: [{ type: OptionType.page, value: 2 }],
      })

      const movies = Search

      if (movies)
        commit('assignState', {
          movies,
        })

      commit('assignState', {
        isLoading: false,
      })
    },

    async readMovie({ state, commit }, { id = '' }) {
      if (!id) {
        router.push('/')
      }

      const movieData = await request({
        methods: MethodType.get,
        apiType: ApiType.id,
        value: id,
        options: [{ type: OptionType.plot, value: 'full' }],
      })

      state.currentMovieData = movieData
    },
  },
}
