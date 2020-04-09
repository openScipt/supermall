import Vue from 'vue';
import VueRouter from 'vue-router'

const Index = () => import('../views/index/Index')
const Mx = () => import('../views/mx/Mx')
const Shop = () => import('../views/shop/Shop')
const Mine = () => import('../views/mine/Mine')

Vue.use(VueRouter)
const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    component: Index
  },
  {
    path: "/mx",
    component: Mx  
  },
  {
    path: "/shop",
    component: Shop  
  },
  {
    path: "/mine",
    component: Mine 
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;