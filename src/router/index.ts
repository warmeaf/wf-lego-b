import { createWebHistory, createRouter } from 'vue-router'

import WfHome from '@/views/WfHome.vue'
import WfEditor from '@/views/WfEditor.vue'
import TemplateDetail from '@/views/TemplateDetail.vue'
const routes = [
  { path: '/', name: 'home', component: WfHome },
  { path: '/template', name: 'template', component: TemplateDetail },
  {
    path: '/editor',
    name: 'editor',
    component: WfEditor
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
