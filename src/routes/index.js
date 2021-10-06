import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';
import SearchedList  from './SearchedList ';
import NotFound from './NotFound';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/list/:keyword',
      component: SearchedList 
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});