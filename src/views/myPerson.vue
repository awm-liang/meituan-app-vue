<template>
  <div class="myPerson">
    <my-header myTitle="我的美团" />
    <div @click="goInfo" class="account account_item">
      <div class="userImg">
          <img src="../static/user.png" alt>
      </div>
      <div class="user">
        <h6>{{user.name}}</h6>
        <p>
          账号：
          <span>{{user.phoneNumber}}</span>
        </p>
      </div>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="safety account_item distance">
      <h6>
        账号与安全
        <i class="el-icon-arrow-right"></i>
      </h6>
    </div>
    <div class="safety account_item">
      <h6>
        新消息通知
        <i class="el-icon-arrow-right"></i>
      </h6>
    </div>
    <div class="safety account_item">
      <h6>
        隐私
        <i class="el-icon-arrow-right"></i>
      </h6>
    </div>
    <div class="safety account_item">
      <h6>
        通用
        <i class="el-icon-arrow-right"></i>
      </h6>
    </div>
    <router-link to="/login" v-show="flag">
      <mt-button size="large" type="primary" v-show="!userId">点击登录</mt-button>
      <mt-button size="large" type="primary" v-show="userId">切换账号</mt-button>
    </router-link>
  </div>
</template>
<script>
import myHeader from "../components/header.vue";
import { Toast } from "mint-ui"

export default {
  data() {
    return {
      flag: true,
      user: [],
      userId: this.$store.state.userId || 0
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    // 获取用户消息
    getUser() {
      this.$http.get("http://localhost:3000/user/" + this.userId).then(res => {
        this.user = res.body;
      })
    },
    goInfo(){
      if (!this.userId) {
        Toast('请先登录！')
      } else {
        this.$router.push('/person-info')
      }
    }
  },
  components: {
    myHeader
  }
};
</script>

<style lang="scss" scoped>
.mint-button--large {
  margin-top: 0.2rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-radius: 0.1rem;
  box-sizing: border-box;
}
.mint-button--primary {
  background-color: #06c1ae !important;
}
.mint-button {
  height: 100% !important;
}
.myPerson {
  .account_item {
    margin-top: 0.2rem;
    height: 1.3rem;
    background-color: #fff;
    padding: 0.15rem 0.1rem;
    .userImg {
      float: left;
      width: 1rem;
      margin-left: 0.1rem;
      img {
        width: 100%;
      }
    }
    .user {
      float: left;
      display: flex;
      flex-direction: column;
      padding-top: 0.1rem;
      padding-left: 0.1rem;
      h6 {
        font-size: 0.3rem;
        font-weight: 100;
      }
      p {
        font-size: 0.25rem;
        color: #777;
        margin-top: 0.2rem;
      }
    }
    .el-icon-arrow-right {
      float: right;
      margin-right: 20px;
      font-size: 0.35rem;
      color: #777;
      padding: 0.32rem;
      padding-right: 0;
    }
  }
  .safety {
    height: 0.8rem;
    margin: 0;
    border-bottom: 1px solid #777;
    h6 {
      font-size: 0.35rem;
      font-weight: 400;
      padding: 0.1rem;
      .el-icon-arrow-right {
        padding: 0;
      }
    }
  }
  .distance {
    margin: 0.4rem 0rem;
  }
}
</style>