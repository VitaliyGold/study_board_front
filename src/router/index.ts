import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '../views/Main.vue';
import AuthPage from '@/views/AuthPage.vue';
import FullTimeTable from '@/views/FullTimeTable.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/auth',
    name: 'AuthPage',
    component: AuthPage
  },
  {
    path: '/full-time-table',
    name: 'FullTimeTable',
    component: FullTimeTable
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
