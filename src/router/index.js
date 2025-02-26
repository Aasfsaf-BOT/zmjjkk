import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Mall from '@/components/Mall.vue';
import User from '@/components/User.vue';
import Comunity from '@/components/Comunity.vue';
import News from '@/components/News.vue';
import About from '@/components/About.vue';
import Book from '@/components/Book.vue';
const routes = [
  {
    path:'/book/:id',
    name:'Book',
    component:Book,
  },
  {
    path: '/', // 首页路径
    name: 'Home',
    component: Home,
  },
  {
    path: '/mall', // 商城路径
    name: 'Mall',
    component: Mall, 
  },
  {
    path: '/user',
    name: 'User',
    component: User,
  },
  {
    path: '/comunity',
    name: 'Comunity',
    component: Comunity,
  },
  {
    path: '/news',
    name: 'News',
    component: News,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
