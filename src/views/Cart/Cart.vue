<template>
  <div class="cart">
    <cart-item v-for="(item, index) in cartShopList" :key="index" :cartShopItem=item />
    <div class="settlement">
      <div class="left">
        <input type="checkbox" name="selectAll" id="selectAll" :checked="isSelectAll" @click="selectAll">
        <label for="selectAll">全选</label>
        <span class="total">合计：￥<span class="num">{{totalPrice / 100 | moenyFormat(totalPrice)}}</span></span>
      </div>
      <div class="right">
        去结算
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from './child/CartItem'
import { mapState } from 'vuex'
export default {
  name: 'cart',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['cartShopList']),
    // 是否全选
    isSelectAll: {
      get () {
        let isSelectAll = true
        if (this.cartShopList) {
          this.cartShopList.forEach(good => {
            if (!good.checked) {
              isSelectAll = false
            }
          })
          return isSelectAll
        }
      },
      set (newValue) {
        console.log(newValue)
      }
    },
    // 总价格
    totalPrice () {
      let totalPrice = 0
      if (this.cartShopList) {
        this.cartShopList.forEach(good => {
          if (good.checked === true) {
            totalPrice += good.price * good.buy_count
          }
        })
        return totalPrice
      }
    }
  },
  created () {
    this.$store.dispatch('cartShopList')
  },
  filters: {
    moenyFormat (value) {
      return value.toFixed(2)
    }
  },
  methods: {
    // 是否全选
    selectAll () {
      console.log(this.isSelectAll)
      this.$store.dispatch('selectAll', {isSelectAll: !this.isSelectAll})
    }
  },
  components: {
    CartItem
  }
}
</script>

<style lang="stylus" scoped>
.cart
  margin-bottom 1.71rem
  position relative
  .settlement
    position fixed
    bottom .91rem
    width 100%
    height .8rem
    background #ccc
    font-size .2rem
    display flex
    justify-content space-between
    align-items center
    .left
      padding-left .2rem
      display flex
      align-items center
      input
        width .3rem
        height .3rem
      .total
        padding-left .2rem
        .num
          color red
          font-weight 700
          font-size .24rem
    .right
      line-height .8rem
      text-align center
      padding 0 .3rem
      background #f73728
      color #fff
      font-size .24rem
      font-weight 700
</style>
