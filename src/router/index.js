import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About';
import Home from '../views/Home';
import Counter from '../views/Counter';

const routes = [
  { path: '/about', name: 'About', component: About },
  { path: '/', name: 'Home', component: Home },
  { path: '/counter', name: 'Counter', component: Counter },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes, // short for `routes: routes`
});

export default router;
