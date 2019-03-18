<template>
  <footer class="footer">
    <div class="login_bar">
      <router-link to="/login" class="login logins">登陆</router-link>
      <router-link to="/register" class="register logins">注册</router-link>
      <div class="position_bar">城市：
        <router-link to="/position" class="position_button logins">{{ city }}</router-link>
      </div>
    </div>
    <div class="nav">
      <p class="nav_item">
        <router-link to="/">首页</router-link>|
        <router-link to="/myPerson">我的</router-link>|
        <router-link
          to="/https://itunes.apple.com/cn/app/mei-tuan-tuan-gou-tuan-gou/id423084029?mt=8"
        >美团下载</router-link>|
        <router-link to="/homm">电脑版</router-link>|
        <router-link to="/help">帮助</router-link>
      </p>
    </div>
    <div class="blogroll">
      <p>
        <span>友情链接：</span>
        <a class="first" href="javascript:0">猫眼电影</a>
        <a href="javascript:0">大众点评</a>
        <a href="javascript:0">美团旅行</a>
        <a href="javascript:0">棒国民宿</a>
        <a href="javascript:0">大众点评下载</a>
        <a href="javascript:0">美团收银官网</a>
        <a href="javascript:0">美团点评餐饮学院</a>
        <a href="javascript:0">快驴进货商家合作</a>
      </p>
    </div>
    <div class="copyright">
      <p>———— ©2019 美团网 京ICP证070791号 ————</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  created() {
  },
  props: [
    'city',
  ]
}
</script>

<style lang="scss">
.footer {
  margin-top: 0.7rem;
  .login_bar {
    margin-left: 0.3rem;
    position: relative;
    .register {
      margin-left: 0.23rem;
    }
    .logins {
      padding: 0.16rem 0.35rem;
      border: 1px solid #06c1ae;
      border-radius: 0.1rem;
      color: #06c1ae;
      font-size: 0.32rem;
    }
    .position_bar {
      position: absolute;
      right: 0.23rem;
      top: 0;
      .position_button {
        padding: 0.16rem 0.6rem;
        margin-left: 0.1rem;
      }
    }
  }
  .nav {
    margin-top: 0.8rem;
    .nav_item {
      text-align: center;
      a {
        color: #06c1ae;
        margin: 0 .2rem;
      }
    }
  }
  .blogroll {
    margin: 0.4rem 0.8rem 0.2rem 0.8rem;
    p {
      text-align: center;
      a {
        color: #06c1ae;
        padding-left: 0.4rem;
        line-height: 0.4rem;
        display: inline-block;
      }
      a.first {
        padding-left: 0;
      }
    }
  }
  .copyright {
    p {
      text-align: center;
      line-height: 0.5rem;
      color: #999;
    }
  }
}
</style>