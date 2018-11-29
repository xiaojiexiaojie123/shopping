<template>
  <div class="login-container">
    <!-- 登录面板内容 -->
    <div class="login-inner">
      <!-- 面板头部 -->
      <div class="login-header">
        <img src="./images/login_footer.png" alt="">
        <div class="select-login">
          <span :class="{loginSecect: loginType}" @click="changeLoginType(true)">验证码登录</span>
          <span :class="{loginSecect: !loginType}" @click="changeLoginType(false)">密码登录</span>
        </div>
      </div>
      <!-- 表单部分 -->
      <div class="login-content">
        <!-- 验证码登录 -->
        <div class="verification-login" v-if="loginType">
          <section class="phone-input input">
            <input type="text" maxlength="11" v-model="phoneNum" @blur="phoneBlur" placeholder="手机号码" />
            <span class="getVerification" v-if="switchVerification" @click="getVerification">获取验证码</span>
            <span class="getVerification" v-else>已发送({{ countdown }}s)</span>
            <span class="error phoneError" v-show="phoneVerification">手机号码非法，请重新输入</span>
            <span class="error" v-show="phoneNotNull">手机号码不能为空</span>
          </section>
          <section class="verification-input input">
            <input type="text" maxlength="8" v-model="phoneVerificationCode" placeholder="验证码" @blur="phoneVerificationCodeBlur" />
            <span class="error" v-if="phoneVerificationCodeNotNull">验证码不能为空</span>
          </section>
          <section>
            <p class="protocol">
              温馨提示：未注册爱购物帐号的手机号，登录时将自动注册，且代表已同意
              <i>服务协议与隐私政策</i>
            </p>
          </section>
        </div>
        <!-- 密码登录 -->
        <div class="password-login" v-else>
          <section class="username-input input">
            <input type="text" maxlength="11" v-model="username" placeholder="用户名/手机/邮箱" @blur="usernameBlur" />
            <span class="error" v-if="usernameValidate">用户名不能为空</span>
          </section>
          <section class="password-input input">
            <input type="password" v-model="password" maxlength="16" placeholder="密码" v-if="isShowPwd" @blur="passwordBlur" />
            <input type="text" v-model="password" maxlength="16" placeholder="密码" @blur="passwordBlur" v-else />
            <span @click="changePwdShow">
              <img src="./images/hide_pwd.png" v-if="isShowPwd" alt="">
              <img src="./images/show_pwd.png" v-else alt="">
            </span>
            <span class="error" v-if="passwordValidate">密码应大于6位并小于16位</span>
          </section>
          <section class="captcha-input input">
            <input type="text" maxlength="8" v-model="captcha" placeholder="验证码" @blur="captchaBlur" />
            <span>
              <img
              class="captcha"
              src="http://localhost:3000/api/svg_captcha"
              @click="getSvgCaptcha"
              ref="captcha"
              alt="图片验证">
            </span>
            <span class="error" v-if="captchaValidate">验证码输入错误</span>
            <span class="error" v-if="captchaNotNull">验证码不能为空</span>
          </section>
        </div>
        <!-- 提交 -->
        <div class="login" @click="login">
          登录
          <span class="error" v-if="loginValidate">用户名或密码错误</span>
        </div>
        <!-- 返回 -->
        <div class="back" @click="back">
          返回
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getVerification, passwordLogin, verificationLogin } from './../../api/api'
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      loginType: true, // 登录方式
      countdown: 0, // 获取验证码倒计时
      isShowPwd: true, // 是否显示密码
      // 验证码登录
      username: '', // 用户名
      password: '', // 密码
      captcha: '', // 密码登录验证码
      usernameValidate: false, // 用户名错误提醒
      passwordValidate: false, // 密码错误提醒
      captchaValidate: false, // 验证码错误提醒
      captchaNotNull: false, // 验证码不能为空
      loginValidate: false, // 登录错误提醒
      // 手机登录
      phoneNum: '', // 手机号码
      phoneVerificationCode: '', // 手机登录验证码
      switchVerification: true, // 获取验证码
      phoneVerification: false, // 手机号码正则验证
      phoneNotNull: false, // 手机号码不能为空
      phoneVerificationCodeNotNull: false // 验证码不能为空
    }
  },
  methods: {
    ...mapActions(['syncUserInfo']),
    // 选择登录类型
    changeLoginType (flag) {
      this.loginType = flag
    },
    // 是否显示密码
    changePwdShow () {
      this.isShowPwd = !this.isShowPwd
    },
    // 获取手机验证码
    async getVerification () {
      if (this.phoneBlur()) {
        this.switchVerification = !this.switchVerification
        this.countdown = 60
        this.timer = setInterval(() => {
          this.countdown--
          if (this.countdown === 0) {
            clearInterval(this.timer)
            this.switchVerification = true
          }
        }, 1000)
        // 发送验证码请求
        const res = await getVerification({phone: this.phoneNum})
        console.log(res)
        // res.then(result => {
        //   console.log(result)
        // })
      }
    },
    // 点击更换验证码
    getSvgCaptcha () {
      this.$nextTick(() => {
        this.$refs.captcha.src = 'http://localhost:3000/api/svg_captcha?time' + new Date()
      })
    },
    // 登录
    async login () {
      if (this.loginType) {
        // 手机验证码登录
        if (this.phoneBlur() && this.phoneVerificationCodeBlur()) {
          const res = await verificationLogin({phone: this.phoneNum, phoneCode: this.phoneVerificationCode})
          if (res.message.success_code === 200) {
            this.syncUserInfo(res.message.data)
            this.$router.back()
          }
        }
      } else { // 密码登录
        if (this.usernameBlur() && this.passwordBlur() && this.captchaBlur()) {
          const res = await passwordLogin({
            username: this.username,
            password: this.password,
            captcha: this.captcha
          })
          if (res.code === 1001) {
            this.captchaValidate = true
          } else if (res.code === 1002) {
            this.loginValidate = true
          } else if (res.message.success_code === 200) {
            this.captchaValidate = false
            this.loginValidate = false
            this.syncUserInfo(res.message.data)
            this.$router.back()
          }
        }
      }
    },
    // 手机验证码登录手机验证
    phoneBlur () {
      if (this.phoneNum === '') {
        this.phoneNotNull = true
        return false
      } else if (!/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/.test(this.phoneNum)) {
        this.phoneNotNull = false
        this.phoneVerification = true
        return false
      } else {
        this.phoneNotNull = false
        this.phoneVerification = false
        return true
      }
    },
    // 密码登录用户名验证
    usernameBlur () {
      if (this.username === '') {
        this.usernameValidate = true
        return false
      } else {
        this.usernameValidate = false
        return true
      }
    },
    // 密码登录密码验证
    passwordBlur () {
      if (this.password === '' || this.password.length < 6 || this.password.length > 16) {
        this.passwordValidate = true
        return false
      } else {
        this.passwordValidate = false
        return true
      }
    },
    // 密码登录验证码为空验证
    captchaBlur () {
      if (this.captcha === '') {
        this.captchaNotNull = true
        return false
      } else {
        this.captchaNotNull = false
        return true
      }
    },
    // 手机登录验证码为空验证
    phoneVerificationCodeBlur () {
      if (this.phoneVerificationCode === '') {
        this.phoneVerificationCodeNotNull = true
        return false
      } else {
        this.phoneVerificationCodeNotNull = false
        return true
      }
    },
    // 返回
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './../../common/stylus/mixins.styl'
.login-container
  width 100%
  height 100%
  background #fff
  .login-inner
    display flex
    flex-direction column
    justify-content center
    align-items center
    .login-header
      width 100%
      display flex
      flex-direction column
      justify-content center
      align-items center
      margin-top 10%
      img
        width 50%
      .select-login
        width 100%
        line-height .5em
        text-align center
        span
          font-size .22rem
          line-height .3rem
          padding-bottom .05rem
        .loginSecect
          color mediumpurple
          font-weight 700
          border-bottom 2px solid mediumpurple
    .login-content
      width 100%
      display flex
      flex-direction column
      justify-content center
      align-items center
      .verification-login, .password-login
        width 100%
        display flex
        flex-direction column
        justify-content center
        align-items center
        section
          width 80%
          height .6rem
          margin-top .4rem
          display flex
          align-items center
          position relative
          font-size .2rem
          input
            width 100%
            height 100%
            border-radius .08rem
            padding-left .15rem
            outline none
            border 1px solid #ccc
            font-size .22rem
            transition all 1s
            &:focus
              border 1px solid blue
              box-shadow 0 0 10px #ccc
          span
            position absolute
            font-size .22rem
            right .1rem
            img
              width .35rem
            .captcha
              width 1.4rem
          .protocol
            color #999
            font-size .16rem
            line-height 1.5em
            i
              color #9370db
          .error
            position absolute
            bottom -0.25rem
            left 0
            font-size .16rem
            color red
      .login, .back
        width 80%
        height .7rem
        border 1px solid #9370db
        font-size .24rem
        border-radius .08rem
        line-height .7rem
        text-align center
        margin-top .4rem
      .login
        background-color #9370db
        color #fff
        position relative
        .error
          position absolute
          bottom -0.55rem
          left 0
          font-size .16rem
          color red
      .back
        background-color #fff
        color #9370db
</style>
