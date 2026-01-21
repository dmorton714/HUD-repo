import { createApp } from 'vue'
import router from './router/router'
import App from './App.vue'
import '../styles.css'
import 'leaflet/dist/leaflet.css'

import L from 'leaflet'

import icon from 'leaflet/dist/images/marker-icon.png'
import icon2x from 'leaflet/dist/images/marker-icon-2x.png'
import shadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon2x,
  iconUrl: icon,
  shadowUrl: shadow,
})

createApp(App)
    .use(router)
    .mount('#app');
