<template>
  <div class="selectLogin">
    <div class="select-inner">
      <div class="select">
        <h3>选择登录方式</h3>
        <router-link tag="div" class="phone-login" to="/login">
          <div class="phone-icon"></div>
          手机登录
        </router-link>
      </div>
      <div class="bottom-logo">
        <div class="logo"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectLogin',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.selectLogin
  background #f4f4f4
  width 100%
  height 100%
  position fixed
  z-index 100
  .select-inner
    max-width 640px
    height 100%
    position relative
    .select
      position absolute
      top 25%
      width 100%
      display flex
      flex-direction column
      justify-content center
      align-items center
      h3
        font-size .35rem
        color #151516
        margin-bottom .7rem
      .phone-login
        width 80%
        text-align center
        background-color #f6a622
        padding .25rem 0
        font-size .3rem
        color #fff
        border-radius 8px
        display flex
        justify-content center
        align-items center
        .phone-icon
          width .4rem
          height .3rem
          background url(./images/phone.png) no-repeat
          background-size 100% 100%
          background-position left center
    .bottom-logo 
      position absolute
      bottom .3rem
      width 100%
      height 1.2rem
      background url(./images/login_footer.png) no-repeat
      background-position center center
      background-size auto .8rem
</style>
