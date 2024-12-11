import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import LegoIndex from '@/views/LegoIndex.vue'
import LegoHome from '@/views/LegoHome.vue'
import LegoWork from '@/views/LegoWork.vue'
import LegoTemplate from '@/views/LegoTemplate.vue'
import LegoSetting from '@/views/LegoSetting.vue'

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
      },
      {
        path: 'work',
        name: 'LegoWork',
        component: LegoWork,
        meta: { requiredLogin: true, title: '我的设计列表' }
      },
      {
        path: 'template/:id',
        name: 'LegoTemplate',
        component: LegoTemplate,
        meta: { title: '模版详情' }
      },
      {
        path: 'setting',
        name: 'LegoSetting',
        component: LegoSetting,
        meta: { requiredLogin: true, title: '我的信息' }
      }
    ]
  },
  {
    path: '/editor/:id',
    name: 'LegoEditor',
    component: () => import('@/views/LegoEditor.vue'),
    meta: { requiredLogin: false, title: '编辑我的设计' }
  },
  {
    path: '/login',
    name: 'LegoLogin',
    component: () => import('@/views/LegoLogin.vue'),
    meta: { redirectAlreadyLogin: true, title: '登录到慕课乐高' }
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
