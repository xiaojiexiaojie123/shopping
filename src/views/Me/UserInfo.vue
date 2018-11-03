<template>
  <div class="user_info">
    <h3>基本信息</h3>
    <div class="items">
      <div class="item">
        <span class="left">头像</span>
        <p class="right">
          <img src="./images/2.png">
        </p>
      </div>
      <div class="item">
        <span class="left">手机</span>
        <p class="right">
          <span>{{user_phone | phoneFormat}}</span>
        </p>
      </div>
      <div class="item">
        <span class="left">昵称</span>
        <p class="right">
          <input type="text" v-model="user_name">
        </p>
      </div>
      <div class="item" @click="sheetVisible = true">
        <span class="left">性别</span>
        <p class="right">
          <span>{{user_sex}}</span>
        </p>
      </div>
      <div class="item">
        <span class="left">常住地</span>
        <p class="right">
          <input type="text" v-model="user_address" />
        </p>
      </div>
      <div class="item" @click="updateBirthday">
        <span class="left">生日</span>
        <p class="right">
          <span>{{user_birthday}}</span>
          <span class="icon-15"></span>
        </p>
      </div>
      <div class="item">
        <span class="left">个性签名</span>
        <p class="right">
          <input type="text" v-model="user_sign">
          <span class="icon-15"></span>
        </p>
      </div>
    </div>
    <div class="update" @click="updateInfo">确认修改</div>
    <mt-datetime-picker
      ref="datePicker"
      type="date"
      :startDate="startDate"
      :endDate="endDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="confirmBirthday">
    </mt-datetime-picker>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Toast } from 'mint-ui'
export default {
  name: 'user_info',
  data () {
    return {
      // 用户信息
      user_name: '',
      user_phone: '',
      user_sex: '',
      user_address: '',
      user_birthday: '',
      user_sign: '',
      user_avatar: '',
      // 日期
      startDate: new Date('1980-01-01'),
      endDate: new Date(),
      // 选择性别
      sheetVisible: false,
      actions: [
        {name: '男', method: this.selectSex},
        {name: '女', method: this.selectSex}
      ]
    }
  },
  methods: {
    // 初始化数据
    init () {
      this.user_name = this.userInfo.user_name
      this.user_phone = this.userInfo.phone
      this.user_sex = this.userInfo.user_sex
      this.user_address = this.userInfo.user_address
      this.user_birthday = this.userInfo.user_birthday
      this.user_sign = this.userInfo.user_sign
      this.user_sex = this.userInfo.user_sex
      this.user_avatar = this.userInfo.user_avatar
    },
    // 点击选择日期
    updateBirthday () {
      this.$refs.datePicker.open()
    },
    // 确认日期
    confirmBirthday (props) {
      this.user_birthday = this.dateFormat(props)
    },
    // 日期格式化
    dateFormat (value) {
      return `${value.getFullYear()}年${value.getMonth() + 1}月${value.getDate()}日`
    },
    // 选择性别
    selectSex (value) {
      this.user_sex = value.name
    },
    // 修改用户信息
    updateInfo () {
      let data = {
        user_name: this.user_name,
        user_sex: this.user_sex,
        user_address: this.user_address,
        user_birthday: this.user_birthday,
        user_sign: this.user_sign,
        callback: this.callback
      }
      this.$store.dispatch('updateUserInfo', data)
    },
    callback () {
      this.$store.dispatch('getUserInfo')
      Toast({
        message: '修改成功',
        position: 'center',
        duration: 2000
      })
      setTimeout(() => {
        this.$router.replace('./me')
      }, 2000)
    }
  },
  filters: {
    // 手机号码格式化
    phoneFormat (value) {
      if (value) {
        return ([...value].map((value, index) => {
          if (index >= 3 && index <= 6) {
            return '*'
          } else {
            return value
          }
        })).join('')
      }
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created () {
    this.init()
  }
}
</script>

<style lang="stylus" scoped>
@import './../../common/stylus/icon.css'
.user_info
  width 100%
  h3
    font-size .3rem
    height .6rem
    line-height .6rem
    padding-left .2rem
  .items
    padding 0 .2rem
    background #fff
    .item
      display flex
      justify-content space-between
      align-items center
      font-size .24rem
      color #151516
      padding .22rem 0
      border-bottom .01rem solid #ccc
      &:last-child
        border-bottom none
      p
        text-align right
        input
          width 80%
          height .24rem
          border none
          text-align right
          font-size .24rem
          outline none
        img
          border-radius 50%
          width 80%
  .update
    background red
    color #fff
    width 90%
    padding .1rem 0
    margin .2rem auto 0
    text-align center
    height .35rem
    line-height .35rem
    font-size .3rem
    border-radius .08rem
</style>
