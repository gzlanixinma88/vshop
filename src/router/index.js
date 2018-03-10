import Vue from 'vue'
import vueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

Vue.use(vueRouter)

export default new vueRouter({
  routes:[
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/msite',
      component:Msite,
      meta:{
        FooterShow:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        FooterShow:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        FooterShow:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        FooterShow:true
      }
    },
    {
      path:'/login',
      component:Login
    },
  ]
})
