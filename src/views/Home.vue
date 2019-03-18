<template>
  <div class="home">
    <header class="header">
      <section class="nav_bar">
        <router-link tag="div" to="/position" class="my_position">
          <a class="position_content">
            {{city}}
            <i class="el-icon-arrow-down icon-downarrow"></i>
          </a>
        </router-link>
        <router-link tag="div" to="/search" class="search_bar">
          <i class="el-icon-search search-icon"></i>
          <div class="search_input">输入商家/品类/商圈</div>
        </router-link>
        <router-link tag="div" to="/myPerson" class="my_person">
          <div class="rightMy">
            <img src="../assets/user.png" alt>
            <p>我的</p>
          </div>
        </router-link>
      </section>
    </header>
    <main class="main">
      <a href="https://itunes.apple.com/cn/app/mei-tuan-tuan-gou-tuan-gou/id423084029?mt=8">
        <img src="../assets/banner.png" alt>
      </a>
      <div class="seletedList ab">
        <ul>
          <router-link
            tag="li"
            v-for="(item, index) in seletedList"
            :key="index"
            :to="'/listBar/' + item.id"
          >
            <div class="item_img">
              <img src="../static/food.png" alt>
            </div>
            <p>{{item.name}}</p>
          </router-link>
        </ul>
      </div>
      <div class="your_like">
        <h6 class="like_title">猜你喜欢</h6>
        <hr>
        <ShopList/>
        <router-link tag="h6" to="/allList" @click="backTop" class="like_title more">
          查看全部团购
          <span class="el-icon-arrow-right"></span>
        </router-link>
      </div>
    </main>
    <my-footer :city="city" />
  </div>
</template>

<script>
import ShopList from "../components/shopList.vue";
import { Toast } from 'mint-ui';
import myFooter from "../components/footer.vue";

export default {
  name: "home",
  data() {
    return {
      city: this.$store.state.city || '深圳',
      seletedList: [
        {
          id: 0,
          name: "美食",
          imgUrl: "../static/food.png"
        },
        {
          id: 1,
          name: "生活服务",
          imgUrl: "../static/food.png"
        },
        {
          id: 2,
          name: "酒店",
          imgUrl: "../static/food.png"
        },
        {
          id: 3,
          name: "休闲娱乐",
          imgUrl: "../static/food.png"
        },
        {
          id: 4,
          name: "外卖",
          imgUrl: "../static/food.png"
        },
        {
          id: 5,
          name: "小吃快餐",
          imgUrl: "../static/food.png"
        },
        {
          id: 6,
          name: "丽人",
          imgUrl: "../static/food.png"
        },
        {
          id: 7,
          name: "火车票",
          imgUrl: "../static/food.png"
        },
        {
          id: 8,
          name: "今日新单",
          imgUrl: "../static/food.png"
        },
        {
          id: 9,
          name: "全部分类",
          imgUrl: "../static/food.png"
        }
      ]
    };
  },
  methods: {
    backTop(){
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    getListBar() {
      this.$http.get("http://localhost:3000/seletedList").then(res => {
        Toast("获取数据成功！")
        this.seletedList = res.data;
      }, err => {
        Toast("获取数据错误！已采用本地数据！")
      });
    }
  },
  components: {
    ShopList,
    myFooter
  },
  created() {
    this.backTop();
    this.getListBar();
  }
};
</script>

<style lang="scss">
.home {
  .header {
    height: 1.01rem;
    background-color: #06c1ae;
    display: -webkit-box;
    display: -ms-flexbox;
    position: relative;
    .nav_bar {
      width: 100%;
      display: flex;
      justify-content: center;
      .my_position {
        flex: 1;
        color: white;
        font-size: 0.32rem;
        padding: 0.32rem 0rem 0.32rem 0.2rem;
        &:active {
          background-color: rgba(0, 0, 0, 0.15);
        } 
        .position_content {
          float: left;
          color: white;
          .icon-downarrow {
          position: relative;
          color: white;
          margin-left: 0.05rem;
        }
        }
      }

      .search_bar {
        flex: 3;
        display: flex;
        box-sizing: border-box;
        padding: 0.25rem;
        background-color: rgba(0, 0, 0, 0.15);
        border-radius: 0.15rem;
        width: 4.9rem;
        height: 0.7rem;
        margin-top: 0.16rem;
        overflow: hidden;
        .search-icon {
          color: white;
          font-size: 0.4rem;
          position: relative;
          margin-right: 0.2rem;
          margin-top: -0.1rem;
          vertical-align: middle;
        }
        .search_input {
          font-size: 0.3rem;
          color: #68dbce;
        }
      }
      .my_person {
        flex: 1;
        align-items: center;
        padding-top: 0.1rem;
        &:active {
          background-color: rgba(0, 0, 0, 0.15);
        }
        img {
          width: 0.5rem;
        }
        p {
          color: white;
          font-size: 0.22rem;
        }
        .rightMy {
          float: right;
          margin-right: .2rem;
        }
      }
    }
  }
  .main {
    width: 100%;
    a {
      img {
        width: 100%;
        margin-bottom: 0.01rem;
      }
    }
    .seletedList {
      width: 100%;
      height: 2.95rem;
      overflow: hidden;
      border-bottom: 1px solid rgb(155, 155, 154);
      ul {
        li {
          width: 20%;
          float: left;
          list-style-type: none;
          padding: 0.12rem 0;
          background-color: #fff;
          .item_img {
            width: 75px;
            margin: 0.1rem auto;
            img {
              width: 75px;
            }
          }
          p {
            text-align: center;
            font-size: 0.24rem;
            color: #666;
          }
        }
      }
    }
    .your_like {
      background-color: #fff;
      margin-top: 0.25rem;
      padding: 0.3rem 0 0.1rem 0.3rem;
      .like_title {
        font-size: 0.4rem;
        margin-bottom: 0.2rem;
      }
      .more {
        color: #06c1ae;
        font-size: 0.35rem;
        position: relative;
        .el-icon-arrow-right {
          position: absolute;
          right: 0.4rem;
        }
      }
      .like_item {
        margin: 0.3rem 0;
        overflow: hidden;
        hr {
          margin-top: 0.3rem;
        }
      }
    }
  }
}
</style>
