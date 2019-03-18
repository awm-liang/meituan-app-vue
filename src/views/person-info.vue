<template>
  <div class="person-info">
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
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
    <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
    <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
    <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
    <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-model="introduction"></mt-field>
    <mt-button size="large" type="primary" @click="sendData">确定</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      // 导航显示
      navkey: false,

      // 标题
      myTitle: "个人信息",

      userId: this.$store.state.userId || 0,
      username: null,
      email: null,
      website: null,
      number: null,
      birthday: null,
      introduction: null
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    sendData() {
      var modify = {
        id: this.userId,
        name: this.username,
        email: this.email,
        website: this.website,
        phoneNumber: this.number,
        birthday: this.birthday,
        introduction: this.introduction
      };
      this.$http
        .get("http://localhost:3000/user/" + this.userId, modify)
        .then(res => {
            console.log(res)
            Toast("修改成功！")
        });
    }
  }
};
</script>

<style lang="scss">
.person-info {
  .mint-field {
    min-height: 1rem;
    .mint-cell-wrapper {
      font-size: 0.32rem;
      .mint-cell-title {
        width: 1.4rem;
      }
    }
  }
}
.mint-field-core {
  font-size: 0.35rem !important;
}
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


