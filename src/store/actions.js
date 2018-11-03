import {
  HOME_CASUAL,
  HOME_NAV_LIST,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS_LIST,
  USER_INFO,
  LOGIN_OUT,
  CART_SHOP_LIST,
  SELECT_ALL,
  SELECT_ONE,
  DELETE_GOODS
} from './mutation-types'

import {
  getHomecasual,
  getHomenav,
  getHomeShopList,
  getRecommendShopList,
  getSearchGoods,
  getUserInfo,
  updateUserInfo,
  cartShopList,
  addShopCart,
  deleteGoods,
  loginOut
} from '@/api/api'

export default {
  // 首页轮播图
  async reqHomecasual ({commit}) {
    const res = await getHomecasual()
    // console.log(res)
    commit(HOME_CASUAL, {homecasual: res.message.data})
    // res.then(result => {
    //   commit(HOME_CASUAL, {homecasual: result.message.data})
    // })
  },
  // 获取首页导航列表
  async reqHomeNavList ({commit}) {
    const res = await getHomenav()
    commit(HOME_NAV_LIST, {homenavlist: res.message.data})
  },
  // 推荐列表
  async reqRecommendShopList ({commit}, data) {
    const res = await getRecommendShopList(data)
    if (res.message.data) {
      data.callback && data.callback()
    }
    commit(RECOMMEND_SHOP_LIST, {recommendshoplist: res.message.data})
  },
  // 首页商品列表
  async reqHomeShopList ({commit}) {
    const res = await getHomeShopList()
    commit(HOME_SHOP_LIST, {homeshoplist: res.message.data})
  },
  // 搜索列表
  async reqSearchGoods ({commit}) {
    const res = await getSearchGoods()
    commit(SEARCH_GOODS_LIST, {searchgoodslist: res.message.data})
  },
  // 同步用户的信息
  syncUserInfo ({commit}, data) {
    commit(USER_INFO, {userInfo: data})
  },
  // 异步获取用户信息
  async getUserInfo ({commit}) {
    const res = await getUserInfo()
    if (res.message.success_code === 200) {
      commit(USER_INFO, {userInfo: res.message.data})
    }
  },
  // 修改用户信息
  async updateUserInfo ({commit}, data) {
    const res = await updateUserInfo(data)
    if (res.success_code === 200) {
      data.callback && data.callback()
    }
  },
  // 退出登录
  async loginOut ({commit}, callback) {
    commit(LOGIN_OUT)
    const res = await loginOut()
    console.log(res)
    callback && callback()
  },
  // 加入购物车
  addShopCart ({dispatch}, data) {
    const res = addShopCart(data)
    res.then(result => {
      dispatch('cartShopList')
    })
  },
  // 获取购物车列表
  async cartShopList ({commit}) {
    const res = await cartShopList()
    commit(CART_SHOP_LIST, {cartShopList: res.message.data})
  },
  selectAll ({commit}, {isSelectAll}) {
    commit(SELECT_ALL, {isSelectAll})
  },
  selectItem ({commit}, cartShopItem) {
    commit(SELECT_ONE, cartShopItem)
  },
  deleteGoods ({commit}, delGoods) {
    const res = deleteGoods(delGoods)
    res.then(result => {
      if (result.code === 200) {
        commit(DELETE_GOODS, delGoods)
      }
    })
  }
}
