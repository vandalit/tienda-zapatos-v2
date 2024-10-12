import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ZapatosView from '../views/ZapatosView.vue';
import CheckoutView from '../views/CheckoutView.vue';
import ConfirmacionView from '../views/ConfirmacionView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/zapatos', name: 'zapatos', component: ZapatosView },
  { path: '/checkout', name: 'checkout', component: CheckoutView },
  { path: '/confirmacion', name: 'confirmacion', component: ConfirmacionView }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
