import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/users',
      name: 'users.index',
      component: () => import('../views/Users/Index.vue'),
      meta: {
        layout: 'BaseLayout',
      },
    },
  ],
})

export default router
