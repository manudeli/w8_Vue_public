import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';
import List  from './List ';
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
      path: '/list/:keyword',
      name: 'list',
      component: List 
    },
    {
      path: '/list/noresult',
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