import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const HomePage = () => import('../views/HomePage')
const HrPage = () => import('../views/HrPage')
const PlusPage = () => import('../views/PlusPage')
export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: HomePage },
    { path: '/hr', component: HrPage },
    { path: '/plus', component: PlusPage }
  ]
})
