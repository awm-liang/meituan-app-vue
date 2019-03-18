<template>
  <div class="register">
    <mt-header title="注册账号">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right">
        <div class="nav_wrap" @click="navkey = !navkey;">导航
          <transition name="nav">
            <div class="nav_login" v-show="navkey">
              <ul>
                <li>
                  <router-link to="/" @click="navkey = !navkey;">首页</router-link>
                </li>
                <li>
                  <router-link to="/myPerson" @click="navkey = !navkey;">我的</router-link>
                </li>
                <li>
                  <router-link to="/search" @click="navkey = !navkey;">搜索</router-link>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </mt-button>
    </mt-header>
    <div class="button_tab">
      <p class="button_wrap">
        <a @click="tabComponents('phone')" :class="flag==='phone' ? 'active' : false">输入手机号</a>
        <i class="el-icon-arrow-right"></i>
        <a @click="tabComponents('authCode')" :class="flag==='authCode' ? 'active' : false">输入验证码</a>
        <i class="el-icon-arrow-right"></i>
        <a
          @click="tabComponents('setPassword')"
          :class="flag==='setPassword' ? 'active' : false"
        >设置密码</a>
      </p>
    </div>
    <div class="meituan" v-if="flag === 'phone'">
      <mt-field ref="inputValue1" label placeholder="请输入您的手机号" v-model="phoneNumber"></mt-field>
      <div class="button_wrap">
        <mt-button size="large" type="primary" @click="submint(11)">获取验证码</mt-button>
      </div>
    </div>
    <div class="meituan" v-else-if="flag === 'authCode'">
      <mt-field ref="inputValue2" placeholder="请输入短信中的验证码" v-model="authCode"></mt-field>
      <p class="randomnum" v-show="refreshtimeBtn">
        {{randomNumber}}
        <span class="counttime" >{{countTime}}</span>
        <mt-button size="small" type="primary" @click="randomNum">刷新</mt-button>
      </p>
      <div class="button_wrap">
        <mt-button size="large" type="primary" @click="submint(6)">提交验证码</mt-button>
      </div>
    </div>
    <div class="meituan" v-else-if="flag === 'setPassword'">
      <mt-field ref="inputValue3" type="password" placeholder="请输入您的密码" v-model="setPassword"></mt-field>
      <mt-field ref="inputValue4" type="password" placeholder="请再次输入您的密码" v-model="setPassword2"></mt-field>
      <div class="button_wrap">
        <mt-button size="large" type="primary" ref="setPassword" @click="submint(16)">注册</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      navkey: true,
      flag: "phone",
      phoneNumber: null,
      setPassword: null,
      setPassword2: null,
      authCode: null,
      // 验证码
      randomNumber: null,
      // 验证码时间
      countTime: null,
      // 定时器名字
      refreshtime: null,
      start: null,

      // 刷新视图显示
      refreshtimeBtn: false
    };
  },
  created() {
    this.$router.push("/register");
    this.navkey = false;
  },
  methods: {
    // 切换组件
    tabComponents(val) {
      this.flag = val;
    },

    // 按钮提交事件
    submint(val) {
      switch (val) {
        case 11:
          if (
            this.$refs.inputValue1.$el.children[1].children[1].children[0].value
              .length !== 11
          ) {
            Toast("请输入正确的手机号码！");
          } else {
            this.flag = "authCode";
            this.refreshtimeBtn = true;
            this.randomNum();
            this.refresh();
          }
          break;
        case 6:
          if (
            this.$refs.inputValue2.$el.children[1].children[1].children[0].value
              .length !== 6
          ) {
            Toast("请输入正确的验证码！");
          } else if (
            Number(
              this.$refs.inputValue2.$el.children[1].children[1].children[0]
                .value
            ) === this.randomNumber
          ) {
            this.refreshtimeBtn = false;
            this.flag = "setPassword";
          } else {
            Toast("验证码错误，请重新输入！");
          }
          break;
        case 16:
          if (
            this.$refs.inputValue3.$el.children[1].children[1].children[0].value
              .length < 8
          ) {
            Toast("密码不能少于8位！");
          } else if (
            this.$refs.inputValue3.$el.children[1].children[1].children[0]
              .value !=
            this.$refs.inputValue4.$el.children[1].children[1].children[0].value
          ) {
            Toast("两次密码输入不一致！请重新输入！");
          } else {
            this.sendUser();
            Toast("注册成功！2秒后跳转至登录页面！");
            setTimeout(() => {
              this.$router.push("/login");
            }, 2000);
          }
          break;
      }
    },

    // 生成随机验证码
    randomNum() {
      if (this.start) this.countTime = "重新获取成功！";
      this.start = 60;
      this.randomNumber = parseInt(Math.random() * 1000000);
    },
    // 刷新验证码
    refresh() {
      this.start = 60;
      this.refreshtime = setInterval(() => {
        this.start--;
        this.countTime = this.start + "秒后刷新！";
        if (this.start === 0) {
          this.countTime = "刷新成功！";
          this.start = 60;
        }
      }, 1000);
    },
    // 注册成功发送数据到数据库
    sendUser() {
      var newUser = {
        name: "嘿嘿!",
        phoneNumber: this.phoneNumber,
        password: this.setPassword
      }
      this.$http.post('http://localhost:3000/user', newUser).then(res=>{
        console.log(res)
      },err=> {
        console.log(err)
      })
    }
  }
};
</script>

<style lang="scss">
.register {
  .nav_wrap {
    z-index: 9999;
    position: relative;
    .nav_login {
      overflow: hidden;
      position: absolute;
      top: 0.85rem;
      right: -0.1rem;
      ul {
        list-style-type: none;
        li {
          width: 2rem;
          line-height: 0.7rem;
          background-color: #06c1ae;
          &:nth-child(1) {
            border-top-left-radius: 0.1rem;
            border-top-right-radius: 0.1rem;
          }
          &:nth-child(3) {
            border-bottom-left-radius: 0.1rem;
            border-bottom-right-radius: 0.1rem;
          }
        }
      }
    }
  }
  .button_tab {
    height: 0.8rem;
    background-color: #fff;
    margin-bottom: 0.1rem;
    overflow: hidden;
    .button_wrap {
      text-align: center;
      display: flax;
      justify-content: space-between;
      .border_bottom {
        display: block;
        width: 45%;
        height: 0.09rem;
        background-color: #06c1ae;
        transition: 0.4s ease;
        margin-left: 5%;
        z-index: 999;
      }
      a {
        width: 28%;
        display: inline-block;
        text-align: center;
        padding: 0.2rem 0;
        font-size: 0.3rem;
        color: #333;
      }
      a.active {
        color: #06c1ae;
      }
    }
  }
  .meituan {
    .button_wrap {
      padding: 0.12rem 0.2rem;
      .mint-button--large {
        background: #06c1ae !important;
        color: white;
      }
    }
    .randomnum {
      font-size: .6rem;
      margin-top: 30px;
      margin-bottom: 30px;
      margin-left: .2rem;
      .counttime {
        font-size: .3rem;
      }
      .mint-button--small {
        padding: .1rem .2rem;
        float: right;
        margin-right: .2rem;
      }
    }
  }
}

.is-disabled {
  background-color: #bbbbbb !important;
  color: rgb(110, 110, 110);
  padding: 0.1rem 0.2rem;
  .mint-button-text {
    font-size: 0.3rem;
  }
}
.mintui {
  font-size: 0.5rem;
}
.mint-cell {
  min-height: 1.2rem;
}
.mint-cell-wrapper {
  font-size: 0.5rem;
  padding: 0 0.3rem;
}
.mint-cell-value {
  font-size: 0.3rem;
}
.mint-field-core {
  font-size: 0.4rem;
}
.mint-button--large {
  margin-top: 0.2rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  border-radius: 0.1rem;
  box-sizing: border-box;
}
.mint-search-list {
  margin-top: 0.01rem;
}
.mint-button--primary {
  background-color: #06c1ae !important;
}
.mint-button {
  height: 100% !important;
}

a {
  color: white;
}
.mintui-more {
  font-size: 0.4rem;
}
.mint-header {
  background-color: #06c1ae;
  line-height: 3;
}
.mint-header {
  height: 1.01rem;
}
.mint-header-title {
  font-size: 0.4rem;
}
.mint-button {
  overflow: visible;
}
.mintui-back {
  font-size: 0.4rem;
}
.mint-button-text {
  font-size: 0.35rem;
}
.nav-enter {
  height: 0;
}
.nav-enter-to {
  height: 2.1rem;
}
.nav-enter-active {
  transition: height 0.4s ease;
}

.nav-leave {
  height: 2.1rem;
}

.nav-leave-to {
  height: 0;
}

.nav-leave-active {
  transition: height 0.4s ease;
}
</style>