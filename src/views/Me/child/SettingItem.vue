<template>
  <div class="item" @click="itemSetting" >
    <p class="left">
      <span :class="className"></span>
      <span class="title">{{title}}</span>
    </p>

    <p class="right">
      <span class="icon-15"></span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'user_item',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    itemSetting: {
      type: Function,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './../../../common/stylus/icon.css'
.item
  display flex
  justify-content space-between
  align-items center
  font-size .24rem
  color #151516
  padding .22rem
  border-bottom .01rem solid #ccc
  background #fff
  &:last-child
    border-bottom none
  .left
    text-align left
    span:nth-child(1)
      font-size .28rem
  .right
    text-align right
</style>
