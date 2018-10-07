import {
  HOME_CASUAL,
  HOME_NAV_LIST,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  RECOMMEND_USER,
  SEARCH_GOODS_LIST,
  USER_INFO
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
  }
}
