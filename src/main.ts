import { createApp } from 'vue'
import pinia from '@/store'
import router from '@/router/index'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'normalize.css'

import LText from '@/components/LText.vue'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Antd)

app.component('LText', LText)

app.mount('#app')
