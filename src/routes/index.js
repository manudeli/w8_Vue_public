import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import SearchPage from './SearchPage'
import DetailPage from './DetailPage'
import NotFoundPage from './NotFoundPage'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/search',
      component: SearchPage,
      children: [
        {
          path: '/search/:title',
          component: SearchPage,
        },
      ],
    },

    {
      path: '/movie',
      component: DetailPage,
      children: [
        {
          name: 'Detail',
          path: 'movie/:movieId',
          component: DetailPage,
        },
      ],
    },
    {
      path: '/:notFound(.*)',
      component: NotFoundPage,
    },
  ],
})
