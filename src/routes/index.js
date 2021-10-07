import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';
import Search from './Search';
import NoResult from './NoResult';
import NotFound from './NotFound';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return {top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/noresult',
      name: 'noresult',
      component: NoResult 
    },
    {
      path: '/:notFound(.*)',
      name: 'notfound',
      component: NotFound
    }
  ]
});