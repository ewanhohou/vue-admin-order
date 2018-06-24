import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/dashboard'
import Orders from '@/components/orders'
import Product from '@/components/product'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: DashBoard,
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard,
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
  ],
  // mode: 'history'
})
