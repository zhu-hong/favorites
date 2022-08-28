import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'

import '@unocss/reset/antfu.css'
import 'uno.css'

import './assets/style.css'

createApp(App)
  .use(createPinia())
  .mount('#app')
