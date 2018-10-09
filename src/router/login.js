import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: '/vue-multiple-entrance/',
  routes: [
    {
      path: '/',
      name: 'home'
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name === 'home') {
    window.location.href = '/'
  }
  next()
})
export default router
