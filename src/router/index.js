import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import BasicLayout from '@/layout/index.vue'

import appRoutes from './routes'
import extraRoutes from './extra'

const routes = [
  {
    path: '/',
    redirect: '/blog/mainpage',
    component: BasicLayout,
    children: [].concat([...appRoutes, ...extraRoutes])
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
