import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Vuejs from '../views/Vuejs.vue'
import NodejsNpm from '../views/Nodejs-npm.vue'
import Electronjs from '../views/Electronjs.vue'
import Ts from '../views/Ts.vue'
Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/vuejs',
    name: 'Vuejs',
    component: Vuejs
  },
  {
    path: '/nodejs-npm',
    name: 'Nodejs-npm',
    component: NodejsNpm
  },
  {
    path: '/electronjs',
    name: 'Electronjs',
    component: Electronjs
  },
  {
    path: '/ts',
    name: 'Ts',
    component: Ts
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
