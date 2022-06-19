import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex-smart-module'
import { RootStore } from '@/store';
import VCalendar from 'v-calendar';

export const store = createStore(RootStore, {
  strict: false
})

const Board = createApp(App)

Board.use(store).use(router).use(VCalendar, {}).mount('#app')


Board.config.globalProperties.$store = store;
