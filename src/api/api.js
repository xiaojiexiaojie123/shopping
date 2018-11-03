import axios from './http.js'

// 获取首页轮播
export const getHomecasual = () => axios.get('api/homecasual')

// 获取首页导航
export const getHomenav = () => axios.get('api/homenav')

// 获取首页商品列表
export const getHomeShopList = () => axios.get('api/homeshoplist')

// 获取推荐商品列表
export const getRecommendShopList = (params) => axios.get('api/recommendshoplist', params)

// 获取推荐商品列表拼单用户
export const getRecommendUser = () => axios.get('api/recommenduser')

// 获取搜索分类列表
export const getSearchGoods = () => axios.get('api/searchgoods')

// 获取短信验证码
export const getVerification = (params) => axios.post('api/phone_verification', params)

// 获取图形验证码
export const svgCaptcha = () => axios.get('api/svg_captcha')

// 密码登录
export const passwordLogin = (params) => axios.post('api/password_login', params)

// 验证码登录
export const verificationLogin = (params) => axios.post('api/verification_login', params)

// 获取用户信息
export const getUserInfo = () => axios.get('api/user_info')

// 修改用户信息
export const updateUserInfo = (params) => axios.post('api/update_user_info', params)

// 加入购物车
export const addShopCart = (params) => axios.post('api/add_shop_cart', params)

// 获取购物车列表
export const cartShopList = () => axios.get('api/shop_cart_list')

// 删除购物车商品
export const deleteGoods = (params) => axios.post('api/delete_goods', params)

// 退出
export const loginOut = () => axios.get('api/login_out')
