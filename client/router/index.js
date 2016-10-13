import Vue from 'vue'
import Router from 'vue-router'

import menu from './menu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: require('../views/Home')
    },
    {
      name: 'Login',
      path: '/login',
      component: require('../views/invenpro/auth/login')
    },
    {
      name: 'Store',
      path: '/store/:store_id',
      component: require('../views/invenpro/Store')
    },
    {
      name: 'Product',
      path: '/store/:store_id/product/:prod_id',
      component: require('../views/invenpro/Product')
    },
    ...generateRoutesFromMenu(menu),
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// Menu should have 2 levels.
function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (!item.component) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}
