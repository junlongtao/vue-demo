import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'
import HrPage from '../views/HrPage'
import PlusPage from '../views/PlusPage'

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: HomePage },
    { path: '/hr', component: HrPage },
    { path: '/plus', component: PlusPage }
  ]
})
