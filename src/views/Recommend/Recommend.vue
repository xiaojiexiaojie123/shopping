<template>
  <div class="recommend-container">
    <div class="recommend-inner" ref="recommendInner">
      <ul class="recommend">
        <li class="recommend-item" v-for="(item, index) in recommendshoplist" :key=index>
          <img :src="item.image_url" alt="">
          <p>{{ item.goods_name }}</p>
          <div class="item-bottom">
            <div class="bottom-left">
              <span class="item-price">￥{{ item.price / 100 }}</span>
              <span class="item-counter">{{ item.sales_tip }}</span>
            </div>
            <div class="bottom-right">
              发现＞
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { Indicator } from 'mint-ui'
export default {
  name: 'recommend',
  data () {
    return {
      page: 1 // 滚动页码
    }
  },
  mounted () {
    this.init()
    Indicator.open()
    this.$store.dispatch('reqRecommendShopList', {
      page: this.page,
      callback: () => {
        Indicator.close()
      }
    })
  },
  computed: {
    // 获取商品列表
    recommendshoplist () {
      return this.$store.state.recommendshoplist
    }
  },
  methods: {
    init () {
      this.$nextTick(() => {
        // 添加滚动
        this.recommendScroll = new BScroll(this.$refs.recommendInner)
        // 监听列表滚动
        this.recommendScroll.on('touchEnd', pos => {
          // 下拉刷新
          if (pos.y > 50) {
            console.log('监听下拉')
          }
          // 下拉刷新
          if (pos.y < this.recommendScroll.maxScrollY - 20) {
            this.page++
            Indicator.open()
            this.$store.dispatch('reqRecommendShopList', {
              page: this.page,
              callback: () => {
                Indicator.close()
              }
            })
          }
        })
        // 列表滚动结束
        this.recommendScroll.on('scrollEnd', () => {
          this.recommendScroll.refresh()
        })
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.recommend-container
  width 100%
  height 100%
  background #f5f5f5
  position relative
  .recommend-inner
    position absolute
    top 0
    bottom .82rem
    .recommend
      display flex
      flex-flow row wrap
      justify-content space-between
      .recommend-item
        width 49.5%
        margin-bottom 5px
        background #fff
        overflow hidden
        img
          width 100%
        p
          // margin .12rem 0
          // padding .12rem .04rem
          font-size: .24rem;
          color: #151516;
          height: .26rem;
          line-height: .29rem;
          overflow: hidden;
          -webkit-line-clamp: 1;
          word-break: break-all;
          word-wrap: break-word;
          -webkit-box-orient: vertical;
          white-space: normal;
          text-align: justify;
          text-overflow: clip;
          vertical-align: middle;
          // white-space nowrap
          // display: -webkit-box;
          // -webkit-line-clamp: 1;
          // word-break break-all
          // word-wrap break-word
          // text-overflow clip
          // overflow hidden
          // padding 7px 0
          // color #151516
          // font-size .24rem
          // line-height .26rem
          // margin 8px 0
        .item-bottom
          display flex
          justify-content space-between
          align-items center
          padding .1rem .02rem
          .bottom-left
            display flex
            align-items center
            .item-price
              font-weight 700
              font-size .25rem !important
              color #e02e24
              margin-right 3px
              // flex 3
            .item-counter
              color #9c9c9c
              font-size .17rem
              // flex 2
          .bottom-right
            color #58595b
            border 1px solid #c6c6c6
            border-right-color transparent
            padding 0 .08rem 0 .16rem
            height .4rem
            line-height .4rem
            font-size .24rem
            text-align center
            border-top-left-radius .24rem
            border-bottom-left-radius .24rem
            cursor pointer
</style>
