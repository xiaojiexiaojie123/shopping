import Vue from 'vue'
import Router from 'vue-router'
import store from './../store'

// 一级路由
// import Home from './../views/Home/Home'
// import Me from './../views/Me/Me'
// import UserInfo from './../views/Me/UserInfo'
// import Setting from './../views/Me/Setting'
// import Login from './../views/Login/Login'
// import Chat from './../views/Cart/Cart'
// import Recommend from './../views/Recommend/Recommend'
// import Search from './../views/Search/Search'

// 二级路由
import Hot from './../views/Home/Children/Hot/Hot'
import Box from './../views/Home/Children/Box'
import Dress from './../views/Home/Children/Dress'
import Ele from './../views/Home/Children/Ele'
import Food from './../views/Home/Children/Food'
import General from './../views/Home/Children/General'
import Man from './../views/Home/Children/Man'
import Mbaby from './../views/Home/Children/Mbaby'
import Shirt from './../views/Home/Children/Shirt'

// 一级路由
const Home = () => import('./../views/Home/Home')
const Me = () => import('./../views/Me/Me')
const UserInfo = () => import('./../views/Me/UserInfo')
const Setting = () => import('./../views/Me/Setting')
const Login = () => import('./../views/Login/Login')
const Chat = () => import('./../views/Cart/Cart')
const Recommend = () => import('./../views/Recommend/Recommend')
const Search = () => import('./../views/Search/Search')
const ShopDetail = () => import('./../views/ShopDetail/ShopDetail')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/shop_detail'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        tabBarShow: true
      },
      redirect: '/home/hot',
      children: [
        // 热门版块
        {
          path: 'hot',
          component: Hot,
          meta: {
            tabBarShow: true
          }
        },
        // 服饰版块
        {path: 'dress', component: Dress},
        // 鞋包版块
        {path: 'box', component: Box},
        // 母婴版块
        {path: 'mbaby', component: Mbaby},
        // 百货版块
        {path: 'general', component: General},
        // 食品版块
        {path: 'food', component: Food},
        // 内衣版块
        {path: 'shirt', component: Shirt},
        // 男装版块
        {path: 'man', component: Man},
        // 电器版块
        {path: 'ele', component: Ele}
      ]
    },
    {
      path: '/recommend',
      component: Recommend,
      meta: {
        tabBarShow: true
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Chat,
      meta: {
        tabBarShow: true
      }
    },
    {
      path: '/me',
      component: Me,
      meta: {
        tabBarShow: true
      }
    },
    {
      path: '/user_info',
      component: UserInfo
    },
    {
      path: '/setting',
      component: Setting
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/search',
      component: Search,
      meta: {
        tabBarShow: true
      }
    },
    {
      path: '/shop_detail',
      component: ShopDetail
    }
  ]
})

router.beforeEach((to, from, next) => {
  let isLogin = store.state.userInfo.user_id
  if (to.name === 'cart') {
    if (!isLogin) {
      next({path: '/me'})
    }
    next()
  }
  next()
})

export default router
