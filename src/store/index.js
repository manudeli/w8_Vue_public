import { createStore } from 'vuex'
import movies from './movies.js'

export default createStore({
  modules: {
    movies,
  },
})
