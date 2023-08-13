import { createApp } from 'vue'
import router  from './router/router'
import store  from './store/store'
import './style.css'
import App from './App.vue'

createApp(App).use(router).use(store).mount('#app')
