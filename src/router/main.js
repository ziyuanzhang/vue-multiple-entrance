import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }, {
      path: '/login',
      name: 'login'
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    window.location.href = './login.html'
  }
  next()
})
export default router
