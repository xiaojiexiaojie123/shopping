<template>
  <div class="cart-item">
    <div class="select">
      <input type="checkbox" :checked="cartShopItem.checked" @click="selectItem(cartShopItem)">
    </div>
    <div class="pic">
      <img :src="cartShopItem.thumb_url">
    </div>
    <div class="right">
      <p class="title">{{cartShopItem.goods_name}}</p>
      <p class="price">￥{{cartShopItem.price / 100 | moenyFormat(cartShopItem.price)}}</p>
      <div class="count-wrap">
        <div class="count-inner">
          <div class="decrease" @click="countDecrease">-</div>
          <div class="count">
            <input type="text" v-model="buy_count">
          </div>
          <div class="increase" @click="countIncrease">+</div>
        </div>
        <div class="delete" @click="deleteGoods(cartShopItem)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  name: '',
  data () {
    return {
      buy_count: this.cartShopItem.buy_count
    }
  },
  props: {
    cartShopItem: {
      type: Object,
      default: null
    }
  },
  filters: {
    moenyFormat (value) {
      return value.toFixed(2)
    }
  },
  methods: {
    // 减少数量
    countDecrease () {
      this.buy_count--
      if (this.buy_count < 0) {
        this.buy_count = 0
      } else {
        this.$store.dispatch('addShopCart', {
          goods_id: this.cartShopItem.goods_id,
          goods_name: this.cartShopItem.goods_name,
          thumb_url: this.cartShopItem.thumb_url,
          price: this.cartShopItem.price,
          buy_count: this.buy_count
        })
      }
    },
    // 增加数量
    countIncrease () {
      this.buy_count++
      this.$store.dispatch('addShopCart', {
        goods_id: this.cartShopItem.goods_id,
        goods_name: this.cartShopItem.goods_name,
        thumb_url: this.cartShopItem.thumb_url,
        price: this.cartShopItem.price,
        buy_count: this.buy_count
      })
    },
    // 是否选择
    selectItem (cartShopItem) {
      this.$store.dispatch('selectItem', cartShopItem)
    },
    // 删除商品
    deleteGoods (goods) {
      MessageBox.confirm('是否删除该商品?').then(action => {
        if (action === 'confirm') {
          this.$store.dispatch('deleteGoods', {
            user_id: goods.user_id,
            goods_id: goods.goods_id
          })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.cart-item
  display flex
  justify-content center
  align-items center
  background #fff
  padding .2rem .1rem
  border-bottom 1px solid #ccc
  &:last-child
    border-bottom none
  .select
    flex 1
    display flex
    justify-content center
    align-items center
    input
      width .3rem
      height .3rem
      color red
      &:hover
        box-shadow 0 0 1px 1px #ccc
  .pic
    flex 2
    display flex
    justify-content center
    align-items center
    img
      width 80%
  .right
    flex 7
    .title
      height .68rem
      font-size .24rem
      line-height 1.4em
      overflow hidden
      color #151516
    .price
      color red
      font-size .24rem
      padding .1rem 0
    .count-wrap
      display flex
      justify-content space-between
      .count-inner
        width 1.2rem
        height .3rem
        display flex
        justify-content center
        align-items center
        border-radius .06rem
        border 1px solid #ccc
        .decrease, .increase
          color #ccc
          font-size .2rem
          width .3rem
          height .3rem
          line-height .3rem
          text-align center
        .count
          height .3rem
          width .6rem
          display flex
          input
            width 100%
            outline none
            font-size .2rem
            border none
            border-right 1px solid #ccc
            border-left 1px solid #ccc
            text-align center
      .delete
        width .4rem
        height .4rem
        background url('./../images/delete.png') no-repeat
        background-size contain
</style>
