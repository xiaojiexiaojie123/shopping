<template>
  <div class="hot-nav">
    <div class="hot-nav-content" ref="hotNavContent">
      <ul class="nav-content-inner">
        <li class="inner-item" v-for="(item, index) in homenavlist" v-bind:key=index>
          <img :src="item.iconurl" alt="">
          <span>{{ item.icontitle }}</span>
        </li>
      </ul>
    </div>
    <div class="hot-nav-bottom">
      <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'hotNav',
  data () {
    return {
      // 屏幕宽度
      screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      // 内容宽度
      contentW: 720,
      // 滚动条背景长度
      bgBarW: 100,
      // 滚动条长度
      barW: 0,
      // 起始点
      startX: 0,
      // 结束标记
      endFlag: 0,
      // 移动的距离
      barMoveWidth: 0
    }
  },
  mounted () {
    // 获取滚动条长度
    this.getBarWidth()
    // 获取移动端监听事件
    this.bindEven()
    // 设置导航条滚动
    this.nav_scroll()
  },
  methods: {
    nav_scroll () {
      new BScroll(this.$refs.hotNavContent, {
        scrollX: true
      })
    },
    // 获取滚动条长度
    getBarWidth () {
      this.barW = this.bgBarW * (this.screenW / this.contentW)
    },
    // 获取移动端监听事件
    bindEven () {
      this.$el.addEventListener('touchstart', this.touchStart, false)
      this.$el.addEventListener('touchmove', this.touchMove, false)
      this.$el.addEventListener('touchend', this.touchEnd, false)
    },
    // 开始触摸事件
    touchStart (event) {
      let touch = event.touches[0]
      this.startX = touch.pageX
    },
    // 移动事件
    touchMove (event) {
      let touch = event.touches[0]
      let moveWidth = touch.pageX - this.startX
      this.barMoveWidth = -((this.bgBarW / this.contentW) * moveWidth - this.endFlag)
    },
    // 触摸结束事件
    touchEnd () {
      // 滚动条超过左边距时
      if (this.barMoveWidth < 0) {
        this.barMoveWidth = 0
      }
      // 滚动条超过右边距时
      if (this.barMoveWidth + this.barW > this.bgBarW) {
        this.barMoveWidth = this.bgBarW - this.barW
      }
      this.endFlag = this.barMoveWidth
    }
  },
  computed: {
    // 滚动条样式
    innerBarStyle () {
      return {
        width: this.barW + 'px',
        // if (this.barMoveWidth )
        left: this.barMoveWidth + 'px'
      }
    },
    // 导航列表
    homenavlist () {
      return this.$store.state.homenavlist
    }
  }
}
</script>

<style lang="stylus" scoped>
.hot-nav
  width 100%
  height 180px
  position relative
  background-color #fff
  padding-bottom 10px
  .hot-nav-content
    width 100%
    overflow-x scroll
    .nav-content-inner
      width 720px
      height 180px
      display flex
      flex-wrap wrap
      .inner-item
        width 90px
        height 90px
        display flex
        flex-direction column
        justify-content center
        align-items center
        font-size 14px
        color #666666
        img
          width 40%
          margin-bottom 5px
  .hot-nav-content::-webkit-scrollbar
    display none
  .hot-nav-bottom
    width 100px
    height 2px
    background-color #ccc
    position absolute
    left 50%
    margin-left -50px
    bottom 8px
    overflow hidden
    .hot-nav-bottom-inner
      position absolute
      left 0
      height 100%
      background-color orangered
      width 0
</style>
