import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button, Layout, Row, Col, Card, Tag } from 'ant-design-vue'
import App from './App.vue'
import './main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(Button).use(Layout).use(Row).use(Col).use(Card).use(Tag)
app.use(pinia)
app.mount('#app')
