/* eslint-disable import/no-absolute-path */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'voie-pages'
import App from './App.vue'
import './utils/electron'
import 'windi.css'
import './main.css'

// import icons data genereted by PurgeIcons
import '@purge-icons/generated'
import { basePath } from './env'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(basePath),
  routes,
})

app.use(router)
app.mount('#app')
