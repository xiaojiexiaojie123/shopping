<template>
  <div class="searchNav" @click="cancelSearch">
    <div class="search-inner">
      <img src="./../images/search.png" alt="">
      <span>真皮瓢鞋</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchNav',
  data () {
    return {
    }
  },
  props: {
    cancelSearch: Function
  }
}
</script>

<style lang="stylus" scoped>
@import './../../../common/stylus/mixins.styl'
.searchNav
  width 100%
  position fixed !important
  top 0
  z-index 99
  max-width 640px
  padding .11rem .2rem
  background #fff
  border-bottom-1px(#ccc)
  .search-inner
    height .8rem
    background-color #ededed
    border-radius 8px
    display flex
    justify-content center
    align-items center
    img
      width .25rem
      height .25rem
      margin-right .1rem
    span
      font-size .26rem
      color #9c9c9c
</style>
