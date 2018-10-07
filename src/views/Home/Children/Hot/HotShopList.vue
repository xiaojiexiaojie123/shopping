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
            <button class="item-buy">去拼单 ＞</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'shoplist',
  computed: {
    // 获取首页商品列表
    homeshoplist () {
      return this.$store.state.homeshoplist
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
            img
              width 25%
              border-radius 50%
            img:nth-child(2)
              margin-left -10px
          .item-buy
            // flex 3
            border none
            color: #fff;
            background-color: #e02e24;
            // padding .1rem .3rem
            width 1.7rem
            height .6rem
            margin-left 8px
            border-radius 4px
            font-size .26rem
            line-height 16px
</style>
