import Vue from 'vue'
import Router from 'vue-router'

// 一级路由
import Home from './../views/Home/Home'
import Me from './../views/Me/Me'
import Login from './../views/Login/Login'
import Chat from './../views/Chat/Chat'
import Recommend from './../views/Recommend/Recommend'
import Search from './../views/Search/Search'

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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
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
      path: '/chat',
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
      path: '/login',
      component: Login
    },
    {
      path: '/search',
      component: Search,
      meta: {
        tabBarShow: true
      }
    }
  ]
})