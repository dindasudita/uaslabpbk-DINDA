// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createRouter, createWebHistory } from 'vue-router'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'


import App from './App.vue'
import Weather from './views/Weather.vue'
import Tugas2 from './views/Tugas2.vue'
import DescUAS from './views/DescUAS.vue'


const myApp = createApp(App)

const routes = [
    { path: "/", component: Weather }, 
    { path: "/Weather", component: Weather },
    { path: "/Tugas2", component: Tugas2 },
    { path: "/DescUAS", component: DescUAS }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

myApp.use(Quasar, {
  plugins: {}, 
})

myApp.use(router).mount('#app')
