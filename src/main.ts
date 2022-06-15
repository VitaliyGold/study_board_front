import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex-smart-module'
import { RootStore } from '@/store'

export const store = createStore(RootStore, {
  strict: false
})

const Board = createApp(App)

Board.use(store).use(router).mount('#app')

Board.config.globalProperties.$store = store;
