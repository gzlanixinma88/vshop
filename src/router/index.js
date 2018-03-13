import Vue from 'vue'
import vueRouter from 'vue-router'

/*import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'*/
/*import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRating from '../pages/Shop/ShopRating/ShopRating'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import Login from '../pages/Login/Login'*/

const Msite = () => import('../pages/Msite/Msite')
const Order = () => import('../pages/Order/Order')
const Search = () => import('../pages/Search/Search')
const Profile = () => import('../pages/Profile/Profile')
const Shop = () => import('../pages/Shop/Shop')
const ShopGoods = () => import('../pages/Shop/ShopGoods/ShopGoods')
const ShopRating = () => import('../pages/Shop/ShopRating/ShopRating')
const ShopInfo = () => import('../pages/Shop/ShopInfo/ShopInfo')
const Login = () => import('../pages/Login/Login')

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
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/goods',
          component:ShopGoods
        },
        {
          path:'/shop/ratings',
          component:ShopRating
        },
        {
          path:'/shop/info',
          component:ShopInfo
        },
        {
          path:'',
          redirect:'/shop/goods'
        },
      ]
    },
  ]
})
