import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from './route'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/global.css'

const app = createApp(App)

const plugins = [router, store]

plugins.forEach(element => app.use(element));


app.mount('#app')
