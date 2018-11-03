<template>
  <div class="meTop">
    <div class="user">
      <router-link tag="div" to="/user_info" class="userLeft">
        <div class="user-logo">
          <img src="./images/2.png" alt="">
        </div>
        <span class="user-phone">{{phone | nameFormat}}</span>
        <i class="icon-2"></i>
      </router-link>
      <div class="userRight"></div>
    </div>
    <div class="order">
      <div class="top">
        <span class="myOrder">我的订单</span>
        <span class="watchMore">查看更多<i class="icon-15"></i></span>
      </div>
      <div class="order-items">
        <ul>
          <li>
            <span class="icon-10"></span>
            <span>待付款</span>
          </li>
          <li>
            <span class="icon-8"></span>
            <span>待分享</span>
          </li>
          <li>
            <span class="icon-3"></span>
            <span>待发货</span>
          </li>
          <li>
            <span class="icon-12"><span class="path1"></span><span class="path2"></span></span>
            <span>待收货</span>
          </li>
          <li>
            <span class="icon-11"></span>
            <span>待评价</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="setting">
      <ul>
        <li>
          <span class="icon-16"></span>
          <span>新人红包</span>
        </li>
        <li>
          <span class="icon-9"></span>
          <span>多多果园</span>
        </li>
        <li>
          <span class="icon-14"></span>
          <span>砍价免费拿</span>
        </li>
        <li>
          <span class="icon-7"></span>
          <span>边逛边赚</span>
        </li>
        <li>
          <span class="icon--1"></span>
          <span>天天领现金</span>
        </li>
        <li>
          <span class="icon-13"></span>
          <span>收货地址</span>
        </li>
        <li>
          <span class="icon-5"></span>
          <span>我的评价</span>
        </li>
        <li>
          <span class="icon-17"></span>
          <span>官方客服</span>
        </li>
        <router-link tag="li" to="/setting">
          <span class="icon-4"></span>
          <span>设置</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'meTop',
  data () {
    return {
      phone: this.$store.state.userInfo.phone
    }
  },
  filters: {
    nameFormat (value) {
      return ([...value].map((value, index) => {
        if (index >= 3 && index <= 6) {
          return '*'
        } else {
          return value
        }
      })).join('')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './../../common/stylus/icon.css'

.meTop
  width 100%
  margin-bottom .82rem
  .user
    background #fff
    padding .2rem .23rem
    display flex
    justify-content space-between
    align-items center
    .userLeft
      display flex
      justify-content flex-start
      align-items center
      .user-logo
        width 1.04rem
        height 1.04rem
        border-radius 50%
        overflow hidden
        img
          width 100%
          height 100%
      .user-phone
        color #151516
        font-size .3rem
        padding 0 .02rem 0 .08rem
      i
        font-size .4rem
  .order
    margin-top .1rem
    background #fff
    padding 0 .23rem
    .top
      display flex
      justify-content space-between
      align-items center
      padding .2rem 0
      .myOrder
        font-size .25rem
        color #151516
        font-weight 700
      .watchMore
        font-size .23rem
        color #999
    .order-items
      padding-bottom .2rem
      ul
        display flex
        justify-content space-between
        align-items center
        flex-wrap wrap
        li
          width 20%
          display flex
          flex-direction column
          justify-content space-between
          align-items center
          text-align center
          >span
            color #58595b
            &:nth-child(1)
              font-size .4rem
              padding-bottom .1rem
            &:nth-child(2)
              font-size .2rem
  .setting
    background #fff
    margin-top .1rem
    padding .2rem 0
    ul
      display flex
      justify-content space-between
      align-items center
      flex-wrap wrap
      li
        width 25%
        display flex
        flex-direction column
        justify-content space-between
        align-items center
        text-align center
        padding-bottom .2rem
        >span
          color #58595b
          &:nth-child(1)
            font-size .4rem
            padding-bottom .1rem
          &:nth-child(2)
            font-size .2rem
</style>
