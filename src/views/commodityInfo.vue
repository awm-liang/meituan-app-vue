<template>
  <div class="commodityInfo">
    <mt-header title="团购详情">
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
    <a href="https://itunes.apple.com/cn/app/mei-tuan-tuan-gou-tuan-gou/id423084029?mt=8">
      <img width="100%" src="../assets/banner.png" alt>
    </a>
    <div class="shopInfo">
      <div class="img_wrap">
        <div class="img">
          <img width="100%" :src="thatDataInfo.imgSrc" alt="图片不见了">
        </div>
        <div class="info_title">
          <h1 class="img_title">{{thatDataInfo.title}}</h1>
          <p class="img_info">{{thatDataInfo.info}}</p>
        </div>
      </div>
      <div class="price_bar">
        <div class="price_wrap">
          <span class="price_active">
            {{thatDataInfo.price}}
            <span>元</span>
          </span>
          <span class="facade">门市价:{{thatDataInfo.facade}}元</span>
        </div>
        <div class="button">
          <button @click="purchase">立即抢购</button>
        </div>
      </div>
      <div class="sell">
        <p class="sell_info">
          <a>支持随时退款</a>
          <a>支持过期自动退</a>
        </p>
        <p class="sell_num">
          <a>已售{{thatDataInfo.sell}}</a>
        </p>
      </div>
    </div>
    <div class="evaluate">
      <div class="header_e">
        <p class="header_wrap" style="border-bottom: 1px solid #5a5a5a !important;">
          <el-rate v-model="thatDataInfo.grade" show-score allow-half disabled></el-rate>
          <a>
            {{thatDataInfo.gradeLength}}人评论
            <i class="el-icon-arrow-right"></i>
          </a>
        </p>
      </div>
      <div class="body_e">
        <a>味道赞253</a>
        <a class="dark">分量少83</a>
        <a class="dark">价格高82</a>
        <a>回头客76</a>
        <a>菜品健康67</a>
        <a>上菜快48</a>
        <a>牛肉赞32</a>
        <a>饮品赞24</a>
        <a>干净卫生23</a>
        <a class="dark">朋友聚餐7</a>
      </div>
    </div>
    <div class="evaluate a">
      <div class="header_e">
        <p class="header_wrap" style="border-bottom: 1px solid #5a5a5a !important;">
          <a class="shopInfo_info">商家信息</a>
        </p>
      </div>
      <div class="body_e addrss_wrap">
        <div class="addrss">
          <h5 class="store">{{thatDataInfo.store}}</h5>
          <p class="storeAddress">{{thatDataInfo.storeAddress}}</p>
          <p class="near">
            <i class="el-icon-location-outline"></i>
            离我最近
          </p>
        </div>
        <hr style="height: 1.5rem; margin-top: .15rem; background-color: rgb(167, 167, 167);">
        <div class="phone">
          <i class="el-icon-phone"></i>
        </div>
      </div>
      <div class="header_e">
        <p class="header_wrap footer_wrap">
          <a>查看全部4家适用分店</a>
          <a>
            <i class="el-icon-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
    <div class="evaluate b">
      <div class="header_e b">
        <p class="header_wrap">
          <a class="shopInfo_info">购买须知</a>
        </p>
      </div>
      <div class="body_e addrss_wrap buyInfo">
        <div class="buyItem">
          <h6 class="buyTitle">有效期</h6>
          <p class="buytail">{{thatDataInfo.deadline}}</p>
        </div>
        <div class="buyItem">
          <h6 class="buyTitle">试用时间</h6>
          <p class="buytail">{{thatDataInfo.useTime}}</p>
        </div>
        <div class="buyItem" v-show="thatDataInfo.scope">
          <h6 class="buyTitle">使用范围</h6>
          <p class="buytail">{{thatDataInfo.scope}}</p>
        </div>
        <div class="buyItem">
          <h6 class="buyTitle">使用规则</h6>
          <ul class="rule">
            <li v-for="item in thatDataInfo.rule" :key="item.id">
              <div class="disc"></div>
              {{item}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <my-footer :city="city"/>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import myFooter from "../components/footer.vue";

export default {
  data() {
    return {
      navkey: true,
      id: this.$route.params.id,

      city: this.$store.state.city || "深圳",
      thatDataInfo: {
        id: 0,
        title: "大龙燚火锅",
        imgSrc:
          "http://p1.meituan.net/deal/fba9347aab47af97b76a8c448bfd43fb302793.jpg",
        info: "100元代金券1张，可叠加",
        price: 88,
        facade: 100,
        sell: 38083,
        grade: 4.1,
        gradeLength: 1521,
        store: "大龙燚火锅（东门南路店）",
        storeAddress: "罗湖区东门南路3010号金叶大厦1楼（金城大厦公交站旁）",
        deadline: "2015.2.2 至 2019.10.31",
        useTime: "10:30-15:00",
        scope: "除酒水，饮料，特价菜外全场通用",
        rule: [
          "无需预约，消费高峰期可能需要等位",
          "停车位收费标准：详情咨询商家",
          "团购用户不可同时享受商家其他优惠",
          "酒水饮料等问题，请致电商家咨询，以商家反馈为准",
          "不可使用包间",
          "可叠加使用",
          "不兑现、不找零",
          "仅限堂食，不提供餐前外带，餐毕未吃完可打包，打包费详情请咨询商家"
        ]
      }
    };
  },
  created() {
    this.navkey = false;
    this.getShopList();
    this.backTop();
  },
  methods: {
    getShopList() {
      this.$http.get("http://localhost:3000/shopListInfo/" + this.id).then(
        res => {
          Toast("获取数据成功！");
          this.thatDataInfo = res.data;
        },
        err => {
          Toast("获取数据错误！已采用本地数据！");
        }
      );
    },
    backTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    purchase() {
      if (!this.$store.state.userId) {
        Toast("请先登录！");
      } else {
        Toast("已加入购物车！")
      }
    }
  },
  components: {
    myFooter
  }
};
</script>

<style lang="scss">
.commodityInfo .evaluate .header_e.b {
  border-bottom: 1px solid #c9c8c8 !important;
}
.commodityInfo .evaluate .header_e {
  border-bottom: 0 !important;
}

.commodityInfo {
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
  .shopInfo {
    background-color: #fff;
    .img_wrap {
      position: relative;
      .img {
        width: 100%;
        height: 3.9rem;
        overflow: hidden;
      }
      .info_title {
        padding: 0.3rem;
        position: absolute;
        bottom: 0;
        color: white;
        width: 100%;
        height: 1.5rem;
        background-color: rgba(0, 0, 0, 0.5);
        overflow: hidden;
        .img_title {
          margin-bottom: 0.2rem;
          font-size: 0.4rem;
        }
        .img_info {
          font-size: 0.3rem;
        }
      }
    }
    .price_bar {
      display: flex;
      justify-content: space-between;
      padding: 0.3rem 0.32rem;
      height: 1.35rem;
      overflow: hidden;
      border-bottom: 1px solid #999;
      .price_wrap {
        .price_active {
          color: #06c1ae;
          font-size: 0.7rem;
          span {
            font-size: 0.27rem;
            margin-right: 0.1rem;
            color: #06c1ae;
          }
        }
        .facade {
          font-size: 0.27rem;
          color: #888;
        }
      }
      .button {
        width: 35%;
        height: 0.5rem;
        button {
          width: 100%;
          height: 0.8rem;
          border: 0;
          font-size: 0.4rem;
          border-radius: 0.1rem;
          color: white;
          background-color: #f90;
        }
      }
    }
    .sell {
      .sell_info {
        display: flex;
        margin-top: 0.4rem;
        padding: 0 0.4rem;
        font-size: 0.3rem;
        box-sizing: border-box;
        a {
          display: inline-block;
          width: 50%;
          color: #6bbd00;
        }
      }
      .sell_num {
        padding: 0.4rem 0.4rem;
        font-size: 0.3rem;
        a {
          color: #666;
        }
      }
    }
  }
  .evaluate.a {
    height: 4.25rem;
  }
  .evaluate.b {
    height: auto;
  }
  .evaluate {
    width: 100%;
    height: 4.2rem;
    background-color: #fff;
    margin-top: 0.2rem;
    .header_e {
      height: 1.1rem;
      border-bottom: 1px solid rgb(90, 90, 90);
      .header_wrap {
        display: flex;
        justify-content: space-between;
        .el-rate {
          line-height: 1.1rem;
          margin-left: 0.25rem;
          .el-rate__item {
            font-size: 0.3rem;
          }
          .el-icon-star-on {
            font-size: 0.45rem;
          }
          .el-rate__text {
            font-size: 0.4rem;
            color: rgb(247, 186, 42) !important;
            vertical-align: none;
          }
        }
        a {
          color: #666;
          font-size: 0.3rem;
          line-height: 1.1rem;
          margin-right: 0.25rem;
        }
        a.shopInfo_info {
          margin-left: 0.25rem;
          font-size: 0.4rem;
          color: #333;
        }
      }
      .footer_wrap {
        height: 1.1rem;
        padding-left: 0.25rem;
        border-top: 1px solid rgba(167, 167, 167, 0.5);
        border-bottom: 0;
        a {
          color: #06c1ae;
          line-height: 1.1rem;
        }
      }
    }

    .body_e {
      width: 100%;
      height: 3rem;
      background-color: #fff;
      padding-top: 0.2rem;
      padding-left: 0.1rem;
      a {
        color: rgb(247, 186, 42);
        display: inline-block;
        width: 1.6rem;
        line-height: 0.7rem;
        border: 1px solid rgb(247, 186, 42);
        border-radius: 0.1rem;
        text-align: center;
        margin: 0.08rem;
      }
      a.dark {
        color: #999;
        border: #999 1px solid;
      }
    }
    .addrss_wrap {
      height: 2.2rem;
      display: flex;
      .addrss {
        flex: 8;
        text-overflow: ellipsis;
        .store {
          color: rgb(10, 10, 10);
          font-size: 0.35rem;
          font-weight: 700;
          margin: 0.2rem;
        }
        .storeAddress {
          width: 5rem;
          margin: 0.2rem;
          color: #333;
          font-size: 0.3rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          word-break: keep-all;
          overflow: hidden;
        }
        .near {
          color: #eb8706;
          margin: 0.2rem;
          font-size: 0.3rem;
          .el-icon-location-outline {
            color: #333;
            margin-right: 0.2rem;
          }
        }
      }
      .phone {
        flex: 2;
        font-size: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #06c1ae;
      }
    }
    .buyInfo {
      font-size: 0.4rem;
      height: auto;
      display: block;
      .buyTitle {
        padding: 0.25rem;
        color: #f90;
        font-size: 0.25rem;
      }
      .buytail {
        padding-left: 0.45rem;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
        font-size: 0.293rem;
        padding-right: 0.18rem;
      }
      .rule {
        padding-top: 0.15rem;
        list-style-type: initial;
        padding-right: 0.18rem;
        padding-bottom: 0.5rem;
        li {
          padding-left: 0.45rem;
          font-size: 0.3rem;
          line-height: 0.45rem;
          display: flex;
          .disc {
            width: 0.1rem;
            height: 0.1rem;
            background-color: #222;
            border-radius: 50%;
            margin-right: 0.2rem;
            margin-top: 0.15rem;
          }
        }
      }
    }
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