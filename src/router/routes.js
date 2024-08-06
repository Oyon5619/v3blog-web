import MainPage from '@/views/MainPage/index.vue'

export default [
  {
    path: '/blog/mainpage',
    component: MainPage
  },
  {
    path: '/blog/category',
    component: () => import('@/views/Category/index.vue')
  },
  {
    path: '/blog/board',
    component: () => import('@/views/MessageBoard/index.vue')
  },
  {
    path: '/blog/devlog',
    component: () => import('@/views/DevLog/index.vue')
  }
]