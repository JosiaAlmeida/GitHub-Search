import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from './route'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/global.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";

const icons = [faSearch, faStar]

icons.forEach(icon => library.add(icon))

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon)

const plugins = [router, store]

plugins.forEach(element => app.use(element));


app.mount('#app')
