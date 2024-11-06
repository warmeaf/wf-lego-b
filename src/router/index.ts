import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LegoIndex from '@/views/LegoIndex.vue'
import LegoHome from '@/views/LegoHome.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: LegoIndex,
    children: [
      {
        path: '',
        name: 'Home',
        component: LegoHome,
        meta: { title: '欢迎来到慕课乐高' }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return Promise.resolve({ left: 0, top: 0 })
    }
  }
})

export default router
