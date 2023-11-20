import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/homePage/HomePage.vue';
import FavoritesPage from '@/pages/FavoritesPage.vue';
import Photo from  '@/pages/photoPage/Photo.vue';

const routes = [
  {
    path: '/',
    name: 'Поиск',
    component: HomePage,
  },
  {
    path: '/favorites',
    name: 'Избранное',
    component: FavoritesPage,
  },
  {
    path: '/photo/:id',
    name: 'Фото',
    component: Photo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
