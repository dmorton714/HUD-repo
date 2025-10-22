import { createApp } from 'vue'
import router from './router/router'
import App from './App.vue'
import '../styles.css'

createApp(App)
    .use(router)
    .mount('#app');
