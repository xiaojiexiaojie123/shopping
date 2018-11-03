import Vue from 'vue'
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

export default {
  [HOME_CASUAL] (state, {homecasual}) {
    state.homecasual = homecasual
  },
  [HOME_NAV_LIST] (state, {homenavlist}) {
    state.homenavlist = homenavlist
  },
  [HOME_SHOP_LIST] (state, {homeshoplist}) {
    state.homeshoplist = homeshoplist
  },
  [RECOMMEND_SHOP_LIST] (state, {recommendshoplist}) {
    state.recommendshoplist = state.recommendshoplist.concat(recommendshoplist)
  },
  [SEARCH_GOODS_LIST] (state, {searchgoodslist}) {
    state.searchgoodslist = searchgoodslist
  },
  [USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [LOGIN_OUT] (state) {
    state.userInfo = {}
  },
  [CART_SHOP_LIST] (state, {cartShopList}) {
    state.cartShopList = cartShopList
  },
  [SELECT_ALL] (state, {isSelectAll}) {
    state.cartShopList.forEach(good => {
      if (good.checked) {
        good.checked = isSelectAll
      } else {
        Vue.set(good, 'checked', isSelectAll)
      }
    })
  },
  [SELECT_ONE] (state, cartShopItem) {
    if (cartShopItem.checked) {
      cartShopItem.checked = !cartShopItem.checked
    } else {
      Vue.set(cartShopItem, 'checked', true)
    }
  },
  [DELETE_GOODS] (state, delGoods) {
    console.log(delGoods)
    state.cartShopList = state.cartShopList.filter(goods => {
      return delGoods.goods_id !== goods.goods_id
    })
  }
}
