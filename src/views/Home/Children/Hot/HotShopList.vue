<template>
  <div class="shop-container">
    <ul class="shop-list">
      <li class="shop-item" v-for="(item, index) in homeshoplist" v-bind:key=index v-if="homeshoplist">
        <img :src="item.image_url" alt="">
        <h4 class="item-title">{{ item.goods_name }}</h4>
        <div class="item-bottom">
          <div class="bottom-left">
            <span class="item-price">${{ item.normal_price / 100 }}</span>
            <span class="item-counter">{{ item.sales_tip }}</span>
          </div>
          <div class="bottom-right">
            <div class="item-user">
              <img v-for="(bubble, index) in item.bubble" v-bind:key=index :src="bubble.avatar" v-if="item.bubble" alt="">
            </div>
            <div class="item-buy" @click="addShopCart(item, index)">
              加入购物
              <div :class="{addSucc: currentIndex === index}">+1</div>  
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'shoplist',
  data () {
    return {
      currentIndex: null // 加入购物车商品索引
    }
  },
  computed: {
    // 获取首页商品列表
    homeshoplist () {
      return this.$store.state.homeshoplist
    }
  },
  methods: {
    // 加入购物车
    async addShopCart (goods, index) {
      this.currentIndex = index
      setTimeout(() => {
        this.currentIndex = null
      }, 1000)
      this.$store.dispatch('addShopCart', goods)
    }
  }
}
</script>

<style lang="stylus" scoped>
.shop-container
  width 100%
  .shop-list
    margin-bottom .82rem
    .shop-item
      padding 6px
      img
        width 100%
      .item-title
        color #151516
        font-size .24rem
        height .52rem
        line-height .26rem
        overflow hidden
        margin 8px 0
      .item-bottom
        display flex
        justify-content space-between
        align-items center
        height .6rem
        padding 0 .08rem
        .bottom-left
          display flex
          align-items center
          .item-price
            font-weight 700
            font-size .33rem
            color #e02e24
            margin-right .06rem
          .item-counter
            color #9c9c9c
            font-size .22rem
            white-space nowrap
            // flex 2
        .bottom-right
          display flex
          // justify-content flex-end
          align-items center
          height .6rem
          .item-user
            display flex
            align-items center
            justify-content flex-end
            height .6rem
            margin-right .1rem
            img
              width 25%
              border-radius 50%
            img:nth-child(2)
              margin-left -10px
          .item-buy
            position relative
            color: #fff;
            background-color: #e02e24;
            width 1.7rem
            height .6rem
            line-height .6rem
            text-align center
            font-size .26rem
            border-radius .07rem
            .addSucc
              position absolute
              font-size .12rem
              color #FFFF00
              top 0
              left 50%
              animation addCart 1s
              @keyframes addCart {
                from {transform : scale(1); top: 0}
                to {transform : scale(3); top: -50%}
              }
</style>
