import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'card',
      component: () => import('../views/CardPage.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/DetailPage.vue')
    }
  ]
})

export default router
