import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Profile from '@/components/Profile'
import Skills from '@/components/Skills'
import Works from '@/components/Works'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
