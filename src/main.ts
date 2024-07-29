import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button } from 'ant-design-vue';
import App from './App.vue'
import './main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(Button)
app.use(pinia)
app.mount('#app')
