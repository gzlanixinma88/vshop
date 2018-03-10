<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <span :class="{on:loginWay}" @click="handleLoginWay(true)">短信登录</span>
          <span :class="{on:!loginWay}" @click="handleLoginWay(false)">密码登录</span>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on:loginWay}">
            <section class="login_message">
              <input type="text" maxlength="11" placeholder="手机号" v-model="phone" >
              <button class="get_verification" @click="getCode" v-show="!computeTime"
                      :class='{right_phone:rightPhone}'>获取验证码</button>
              <button disabled="disabled" class="get_verification" v-show="computeTime">{{computeTime}}s</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on:!loginWay}" >
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码"
                       v-if="showPassword" v-model="pwd">
                <input type="password" maxlength="8" placeholder="密码"
                       v-if="!showPassword" v-model="pwd">
                <div class="switch_button" :class="showPassword?'on':'off' " @click="switchShowPassword">
                  <div class="switch_circle" :class="{on:showPassword}" ></div>
                  <span class="switch_text" v-if="showPassword">abc</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="http://localhost:3000/captcha"
                     alt="captcha" @click="changeCatcha">
              </section>
            </section>
          </div>
          <input class="login_submit" type="submit" value="登录"/>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <span class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </span>
    </div>
    <alert-tip v-if="alertShow" :alertText="alertText" @closeTip="closeTip"/>
  </div>
</template>
<script>
  import {sendCode, smsLogin, loginPwd} from '../../api'
  import AlertTip from '../../components/AlertTip/Alert'
  export default {
    data(){
      return{
        loginWay:true,
        phone:'',
        code:'',
        name:'',
        pwd:'',
        captcha:'',
        computeTime: '',
        showPassword:false,

        alertText:'',
        alertShow:false
      }
    },
    computed:{
      rightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      handleLoginWay(loginWay){
        this.loginWay = loginWay
      },
      async getCode(){
        if(this.rightPhone){
          this.computeTime = 60
          const IntervalId = setInterval(()=>{
            this.computeTime --
            if(this.computeTime===0){
              clearInterval(IntervalId)
            }
          },1000)
          const result = await sendCode(this.phone)

          if (result.code === 1){
            clearInterval(IntervalId)
            this.alertShow = true
            this.alertText = result.msg

          }
        }
      },
      switchShowPassword(){
        this.showPassword = !this.showPassword
      },
      changeCatcha(event){
        event.target.src='http://localhost:3000/captcha?time'+ new Date()
      },
      //登录
      async login(){
        let result
        if(this.loginWay){
          const {rightPhone,phone, code} =this
          if (!rightPhone){
            this.alertShow = true
            this.alertText = '请输入要正确的手机号'
            return
          }else if(!/^\d{6}$/.test(code)){
            this.alertShow = false
            this.alertText = '请输入正确的验证码'
            return
          }
          result = await smsLogin({phone,code})
        }else {
          const {name,pwd, captcha} =this
          if (!name){
            this.alertShow = true
            this.alertText = '请输入用户名'
            return
          }else if(!pwd){
            this.alertShow = false
            this.alertText = '请输入正确的密码'
            return
          }else if(!captcha){
            this.alertShow = false
            this.alertText = '请输入正确的验证码'
            return
          }
          result = await loginPwd({name,pwd,captcha})
        }

        if (result.code === 0){
          const userInfo = result.data
          this.$store.dispatch('recordUserInfo',userInfo)
          this.$router.back()
        }else{
          this.alertShow = false
          this.alertText = result.msg
        }
        alert('dddd')
      },
      closeTip(){
        this.alertShow = false
      }
    },

    components:{
      AlertTip
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >span
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone
                  color:black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.on
                    transform translateX(27px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>
