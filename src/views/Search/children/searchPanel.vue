<template>
  <div class="search-panel">
    <div class="search-input">
      <div class="search-inner">
        <input type="text" />
      </div>
      <div class="cancle" @click="cancelSearch">取消</div>
    </div>
    <div class="late-search">
      <div class="title">
        <div class="name">
          最近搜索
        </div>
        <div class="delete"></div>
      </div>
      <ul>
        <li>黑头仪</li>
        <li>黑头仪</li>
        <li>黑头仪</li>
        <li>黑头仪</li>
        <li>黑头仪</li>
        <li>黑头仪</li>
      </ul>
    </div>
    <div class="hot-search">
      <div class="title">
        <div class="hot-name">
          热门搜索
        </div>
      </div>
      <ul class="hot-word">
        <li>黑头仪</li>
        <li>黑头仪</li>
        <li>黑头仪</li>
        <li>黑头仪</li>
        <li>黑头仪</li>
        <li>黑头仪</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-panel',
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
.search-panel
  position fixed
  top 0
  width 100%
  max-width 640px
  height 100%
  z-index 100
  background #fff
  .search-input
    display flex
    align-items center
    justify-content space-between
    box-sizing border-box
    padding .25rem .25rem
    border-bottom-1px(#ccc)
    .search-inner
      display flex
      background #ededed
      width 85%
      height .6rem
      border-radius .1rem
      padding-left .25rem
      display flex
      justify-content flex-start
      align-items center
      input
        outline none
        border none
        background #ededed
        height 100%
        background-image url('./../images/search.png')
        background-repeat no-repeat
        background-size .3rem .3rem
        background-position left center
        padding-left .35rem
        font-size .3rem
        color #151516
    .cancle
      font-size .28rem
  .late-search, .hot-search
    padding 0 .25rem
    .title
      display flex
      justify-content space-between
      align-items center
      padding-top .2rem
      .name
        font-size .26rem
        background url('./../images/time.png') no-repeat
        background-size .26rem .26rem
        padding-left .32rem
      .hot-name
        font-size .26rem
        background url('./../images/hot.png') no-repeat
        background-size .26rem .26rem
        padding-left .32rem
      .delete
        width .26rem
        height .26rem
        background url('./../images/delete.png') no-repeat
        background-size .26rem .26rem
    ul
      line-height .3
      li
        padding .2rem .2rem
        border-radius .25rem
        font-size .2rem
        background #f9f9f9
        display inline-block
  .hot-search
    padding-top .2rem
</style>
