import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/dashboard'
import Orders from '@/components/orders'
import Product from '@/components/product'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/dashboard'
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
  mode: 'history'
})
