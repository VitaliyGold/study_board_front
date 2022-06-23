import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex-smart-module'
import { RootStore } from '@/store';
import VCalendar from 'v-calendar';
import { clickOutSide } from '@/helpers/clickOutSide';

export const store = createStore(RootStore, {
  strict: false
})

const Board = createApp(App)

Board.directive('click-out', clickOutSide)

Board.use(store).use(router).use(VCalendar, {}).mount('#app')





