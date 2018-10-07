<template>
  <div class="hot">

    <!--1.轮播图-->
    <div class="swipe" ref="swipe" :style="{height: swipeHeight}">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) in homecasual" v-bind:key=index>
          <img :src="item.imgurl" @click="$router.push(item.detail)" alt="" width="100%" >
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- 中间导航 -->
    <hot-nav></hot-nav>

    <!-- 广告位 -->
    <div class="ad">
      <img src="./../../imgs/hot_ad/home_ad.gif" width="100%" alt="">
    </div>

    <!-- 商品列表 -->
    <shop-list></shop-list>

  </div>
</template>

<script>
import HotNav from './HotNav'
import ShopList from './HotShopList'
import { _debounce } from '@/common/js/common'
import { mapState } from 'vuex'

export default {
  name: 'hot',
  data () {
    return {
      swipeHeight: 0
    }
  },
  computed: {
    ...mapState(['homecasual'])
  },
  mounted () {
    // 设置轮播图外框的高度
    this.setSwipeHeight()
    // 请求轮播数据
    this.$store.dispatch('reqHomecasual')
    // 获取首页导航
    this.$store.dispatch('reqHomeNavList')
    // 获取首页商品列表
    this.$store.dispatch('reqHomeShopList')
  },
  methods: {
    // 设置轮播图外框的高度
    setSwipeHeight () {
      let that = this
      that.swipeHeight = that.$refs.swipe.clientWidth * (207 / 553) + 'px'
      window.onresize = _debounce(
        function () {
          that.swipeHeight = that.$refs.swipe.clientWidth * (207 / 553) + 'px'
        },
        200,
        false
      )
    }
  },
  components: {
    HotNav,
    ShopList
  }
}
</script>

<style lang="stylus" scoped>
.hot
  width 100%
  height 100%
  margin-top 48px
  .ad
    margin 8px 0
    background #fff
</style>
