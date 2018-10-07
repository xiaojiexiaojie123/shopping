<template>
  <div class="search">

    <!-- 搜索条 -->
    <search-nav :cancelSearch="cancelSearch" />

    <!-- 商品 -->
    <div class="search-shop">

      <!-- 商品菜单 -->
      <div class="shop-menu" ref="shopMenu">
        <ul class="content">
          <li
            v-for="(item, index) in searchgoodslist"
            :key=index
            @click="changePage(index)"
            ref="menuList">
            <span :class="{current: currentIndex === index}">{{ item.name }}</span>
          </li>
        </ul>
      </div>

      <!-- 商品列表 -->
      <div class="shop-list" ref="shopList">
        <ul class="content" ref="shopListContent">
          <li class="shop-item" v-for="(shopItem, index) in searchgoodslist" :key=index>
            <div class="title">
              <span class="item-name">{{ shopItem.name }}</span>
              <span class="more">查看更多＞</span>
            </div>
            <div class="phoneTag" v-if="shopItem.category">
              <ul>
                <li class="phone" v-for="(imgItem, index) in shopItem.category" :key=index>
                  <img :src="imgItem.icon" alt="">
                </li>
              </ul>
            </div>
            <ul class="item-content">
              <li v-for="(item, index) in shopItem.items" :key=index>
                <img :src="item.icon" alt="">
                <p>{{ item.title }}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <!-- 搜索界面 -->
    <search-panel v-if="panelShow" :cancelSearch="cancelSearch" />
  </div>
</template>

<script>
import SearchNav from './children/searchNav'
import SearchPanel from './children/SearchPanel'
import BScroll from 'better-scroll'
export default {
  name: 'search',
  data () {
    return {
      scrollY: 0, // 右侧列表滑动的y轴坐标
      rightLiTops: [], // 所有分类的头部位置
      panelShow: false
    }
  },
  mounted () {
    this.$store.dispatch('reqSearchGoods')
  },
  computed: {
    // 获取商品列表
    searchgoodslist () {
      return this.$store.state.searchgoodslist
    },
    // 菜单索引值
    currentIndex () {
      return this.rightLiTops.findIndex((item, index) => {
        this._leftScroll(index)
        return this.scrollY >= item && this.scrollY < this.rightLiTops[index + 1]
      })
    }
  },
  watch: {
    searchgoodslist () {
      this.init()
    }
  },
  methods: {
    init () {
      this.$nextTick(() => {
        this.renderScroll()
        this.initRightLitops()
      })
    },
    // 1、渲染左右滚动条
    renderScroll () {
      // 左边菜单
      this.menuScroll = new BScroll(this.$refs.shopMenu, {
        click: true
      })
      // 右边商品
      this.shopListScroll = new BScroll(this.$refs.shopList, {
        probeType: 3
      })
      // 监听商品滚动时间
      this.shopListScroll.on('scroll', this.scroll)
    },
    // 2、获取每个商品的离顶部的距离
    initRightLitops () {
      // 1. 定义临时数组
      const tempArr = []
      // 2. 定义变量记录高度
      let top = 0
      tempArr.push(top)
      // 3. 遍历li标签,取出高度
      let liTops = this.$refs.shopListContent.getElementsByClassName('shop-item')
      Array.prototype.slice.call(liTops).forEach(item => {
        top += item.clientHeight
        tempArr.push(top)
      })
      this.rightLiTops = tempArr
    },
    // 3、滚动时，获取y轴距离
    scroll (pos) {
      this.scrollY = pos.y > 0 ? 0 : Math.abs(pos.y)
    },
    // 4、 左侧联动
    _leftScroll (index) {
      this.$nextTick(() => {
        let menuLists = this.$refs.menuList
        let el = menuLists[index]
        this.menuScroll.scrollToElement(el, 300, 0, -90)
      })
    },
    // 5、菜单点击
    changePage (index) {
      this.scrollY = this.rightLiTops[index]
      this.shopListScroll.scrollTo(0, -this.scrollY, 300)
    },
    // 取消搜索
    cancelSearch () {
      this.panelShow = !this.panelShow
    }
  },
  components: {
    SearchNav,
    SearchPanel
  }
}
</script>

<style lang="stylus" scoped>
@import './../../common/stylus/mixins.styl'
.search
  width 100%
  height 100%
  overflow hidden
  background-color #fff
  position relative
  .search-shop
    width 100%
    display flex
    position absolute
    top 1.02rem
    bottom .82rem

    .shop-menu
      flex 1
      height 100%
      background #fafafa
      li
        width 100%
        height .9rem
        line-height .9rem
        text-align center
        font-size .25rem
        position relative
      .current
        color #e02e24
        background #fff
        &:before
          position absolute
          left 0
          top 50%
          margin-top -0.2rem
          width .05rem
          content ''
          display block
          height .4rem
          background #e02e24
    .shop-list
      flex 3
      .content
        .shop-item
          .title
            padding .3rem 0 .15rem 0
            display flex
            justify-content space-between
            .item-name
              font-size .28rem
              color #58595b
              padding-left .1rem
            .more
              font-size .26rem
              color #9c9c9c
              padding-right .1rem
          .phoneTag
            border-bottom-1px(#ccc)
            margin-bottom .25rem
            ul
              display flex
              flex-flow row wrap
              // width 100%
              .phone
                // flex 1
                padding 0 .2rem .15rem 0
                box-sizing border-box
                width 33.3%
                height .9rem
                text-align center
                img
                  width 75%
                  vertical-align top
          .item-content
            display flex
            flex-flow row wrap
            li
              width 33.3%
              text-align center
              padding-bottom .2rem
              img
                width .94rem
                height .94rem
              p
                font-size .22rem
</style>
