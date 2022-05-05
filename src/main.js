import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

const plugins = [router]

plugins.forEach(element => app.use(element));


app.mount('#app')
