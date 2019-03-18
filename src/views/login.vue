<template>
  <div class="login">
    <mt-header title="美团网">
      <a @click="back" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
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
      <a @click="tabComponents('meituan')" :class="flag==='meituan' ? 'active' : false">美团账号登录</a>
      <a @click="tabComponents('phone')" :class="flag==='phone' ? 'active' : false">手机验证登录</a>
      <i :class="['border_bottom', flag==='meituan' ? 'meituan' : 'phone']"></i>
    </div>
    <div class="meituan" v-if="flag === 'meituan'">
      <mt-field placeholder="账户名/手机号/Email" v-model="username"></mt-field>
      <mt-field placeholder="请输入您的密码" type="password" v-model="password"></mt-field>
      <div class="button_wrap">
        <mt-button size="large" type="primary" @click="queryUser">登录</mt-button>
      </div>
    </div>
    <div class="phone" v-else>
      <mt-field label placeholder="请输入手机号" v-model="username">
        <mt-button disabled>获取验证码</mt-button>
      </mt-field>
      <mt-field label placeholder="请输入短信验证码" type="password" v-model="password"></mt-field>
      <div class="button_wrap">
        <mt-button size="large" disabled>登录</mt-button>
      </div>
    </div>
    <div class="signup_bar">
      <router-link to="/register">立即注册</router-link>
      <router-link to="/register">找回密码</router-link>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      // 导航显示
      navkey: true,

      // 表单
      username: null,
      password: null,

      // 组件显示内容
      flag: "meituan",

      active: true
    };
  },
  created() {
    this.navkey = false;
  },
  methods: {
    tabComponents(val) {
      this.flag = val;
    },
    // 查询用户
    queryUser() {
      this.$http.get("http://localhost:3000/user").then(res => {
        this.user = res.body;
        var queryBool = res.body.forEach(
          item => {
            if (
              item.phoneNumber === this.username &&
              item.password === this.password
            ) {
              Toast("登录成功！");
              this.changeUserId(item.id);
              this.$router.push("/myPerson");
              return true;
            }
          },
          (queryBool) => {
            if (!queryBool) {
              console.log(queryBool);
              Toast("登录失败！账号或密码错误！");
            }
          }
        );
      });
    },
    // 更改用户id
    changeUserId(val) {
      this.$store.commit("changeUserId", val);
    },
    // 返回上一级
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.mintui-field-error {
  font-size: 45px;
}
.login {
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
    display: flax;
    justify-content: space-around;
    margin-bottom: 0.1rem;
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
      width: 50%;
      display: inline-block;
      text-align: center;
      padding: 0.25rem;
      font-size: 0.3rem;
      color: #333;
    }
    a.active {
      color: #06c1ae;
    }
    i.meituan {
      margin-left: 5%;
    }
    i.phone {
      margin-left: 50%;
    }
  }
  .signup_bar {
    display: flex;
    justify-content: space-between;
    padding: 0.15rem 0.2rem;
    a {
      display: inline-block;
      color: #06c1ae;
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
  }
  .phone {
    .button_wrap {
      padding: 0.12rem 0.2rem;
      .mint-button--large {
        background-color: #bbbbbb !important;
        color: rgb(110, 110, 110);
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