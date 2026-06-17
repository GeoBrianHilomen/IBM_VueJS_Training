import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// @ts-ignore: router is provided by a JavaScript module without declarations
import router from './router/index.js'


import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
