import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Landing
      path: '/',
      name: 'main',
      component: () => import('../views/HomeView.vue')
    },
    {
      // Form
      path: '/cardorder',
      name: 'cardorder',
      component: () => import('../views/FormView.vue')
    },
    {
      // test
      path: '/test',
      name: 'test',
      component: () => import('../views/Testview.vue')
    },
  ]
})

export default router
