import { createApp } from 'vue'
import pinia from '@/store'
import router from '@/router/index'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'normalize.css'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Antd)

app.mount('#app')
