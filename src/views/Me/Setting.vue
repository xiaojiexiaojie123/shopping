<template>
  <div class="setting">
    <div class="item-group">
      <setting-item title="免密支付设置" className="icon--copy" :itemSetting="itemSetting" />
      <setting-item title="免拼卡设置" className="icon-20" :itemSetting="itemSetting" />
      <setting-item title="消息接收设置" className="icon-uniE91B" :itemSetting="itemSetting" />
    </div>
    <div class="item-group">
      <setting-item title="常见问题" className="icon-18" :itemSetting="itemSetting" />
      <setting-item title="意见反馈" className="icon-21" :itemSetting="itemSetting" />
    </div>
    <div class="item-group">
      <setting-item title="商家免费入住" className="icon-19" :itemSetting="itemSetting" />
    </div>
    <div class="loginOut" @click="loginOut">退出登录</div>
  </div>
</template>

<script>
import SettingItem from './child/SettingItem'
import { MessageBox } from 'mint-ui'
export default {
  name: 'setting',
  data () {
    return {
    }
  },
  components: {
    SettingItem
  },
  methods: {
    itemSetting (value) {
      console.log(value)
    },
    loginOut () {
      MessageBox.confirm('是否退出').then(action => {
        if (action === 'confirm') {
          this.$store.dispatch('loginOut', () => {
            this.$router.replace('/me')
          })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.setting
  margin-top .2rem
  .item-group
    margin-bottom .15rem
  .loginOut
    background #fff
    padding .15rem 0
    margin .2rem auto 0
    text-align center
    height .35rem
    line-height .35rem
    font-size .3rem
    border-radius .08rem
</style>
