import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Profile from '@/components/Profile'
import Todo from '@/components/Todo'
import Calories from '@/components/Calories'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/calories',
      name: 'Calories',
      component: Calories
    }
  ]
})
