<template>
  <div class="shopDetail">

    <!--1.轮播图-->
    <!-- <div class="swipe" ref="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) in homecasual" v-bind:key=index>
          <img :src="item.imgurl" @click="$router.push(item.detail)" alt="" width="100%" >
        </mt-swipe-item>
      </mt-swipe>
    </div> -->

    <div class="content">
      <div class="number">
        <div class="price">
          <span class="normal-price"><span class="rmb">￥</span>26.9</span>
          <span class="market-price">￥228</span>
        </div>
        <div class="sales">
          已拼10万+件
        </div>
      </div>
      <div class="title">
        韩梵迪 秋冬中长款毛衣女修身显瘦打底连衣裙针织衫中领蕾丝拼接韩梵迪
      </div>
      <div class="promise">
        <span class="left">全场包邮 · 7点退换 · 假一赔十</span>
        <span>＞</span>
      </div>
      <div class="rating">
        <div class="top">
          <span>商品评论(47067)</span>
          <span>查看全部＞</span>
        </div>
        <div class="desc">
          <ul>
            <li>质量好(2612)</li>
            <li>衣服好(1000)</li>
            <li>快递快(535)</li>
          </ul>
        </div>
        <div class="user">
          <div class="name">
            <div class="pic">
              <img src="http://t21img.yangkeduo.com/a/813368c777d353711ce36c721c2f19be8e908ef4-1517021651?imageMogr2/thumbnail/100x" alt="">
            </div>
            <span>小杰</span>
          </div>
          <div class="words">
            款式好看，收到货很喜欢😘毛衣是长款的，物美还不贵超值，打算再入手其他颜色，喜欢的亲们不要错过哦……实物毛衣是黑色，颜色正，忽略我手机像素问题😄
          </div>
        </div>
        <div class="user">
          <div class="name">
            <div class="pic">
              <img src="http://t21img.yangkeduo.com/a/813368c777d353711ce36c721c2f19be8e908ef4-1517021651?imageMogr2/thumbnail/100x" alt="">
            </div>
            <span>小杰</span>
          </div>
          <div class="words">
            款式好看，收到货很喜欢😘毛衣是长款的，物美还不贵超值，打算再入手其他颜色，喜欢的亲们不要错过哦……实物毛衣是黑色，颜色正，忽略我手机像素问题😄
          </div>
        </div>
      </div>
    </div>

    

  </div>
</template>

<script>
export default {
  name: 'shopDetail',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  .number
    padding .2rem .2rem
    background #fff
    display flex
    justify-content space-between
    align-items center
    .price
      display flex
      justify-content space-between
      align-items flex-end
      .normal-price
        font-size .35rem
        color #e02e24
        .rmb
          font-size .2rem
      .market-price
        font-size .2rem
        text-decoration line-through
    .sales
      font-size .25rem
  .title
    padding 0 .2rem
    background #fff
    height .6rem
    font-size .3rem
    font-weight 700
    overflow hidden
    color #151516
  .promise
    padding .2rem .2rem
    background #fff
    display flex
    justify-content space-between
    align-items center
    font-size .24rem
    border-top 1px solid #ccc
    margin-bottom .1rem
  .rating
      padding .2rem .2rem
      background #fff
    .top
      display flex
      justify-content space-between
      align-items center
      font-size .3rem
    .desc
      padding .15rem 0
      ul
        li
          float left
          font-size .2rem
          text-align center
          background #fceae9
          margin-left .1rem
          padding .2rem .2rem
          border-radius .05rem
        li:nth-child(1)
          margin-left 0
        &:after
          display block
          content ''
          clear both
  .user
    padding 0 .2rem .1rem
    background #fff
    border-bottom 1px solid #ccc
    .name
      display flex
      justify-content flex-start
      align-items center
      .pic
        width .5rem
        height .5rem
        border-radius 50%
        overflow hidden
        img
          width 100%
          height 100%
          
      span
        font-size .24rem
        color #151516
        margin-left .2rem
    .words
      padding-top .1rem
      font-size .24rem
      line-height 1.2em
</style>
