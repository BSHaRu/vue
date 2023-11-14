import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

// Pinia 인스턴스 생성
const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
