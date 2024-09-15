import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../components/LoginForm.vue';
import Dashboard from '../components/Dashboard.vue';
import authService from '../services/auth.service';

const routes = [
  { path: '/login', component: LoginForm },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  { path: '/', redirect: '/dashboard' }
];

const router = createRouter({
  history: createWebHistory(),
                            routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !authService.isAuthenticated()) {
    next('/login');
  } else if (to.path === '/login' && authService.isAuthenticated()) {
    next('/dashboard');
  } else {
    next();
  }
});

export default router;
