import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/home/HomeView.vue';
import StreetTipsView from '../views/street-tips/StreetTipsView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/street-tips',
    component: StreetTipsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;