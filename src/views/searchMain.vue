<template>
  <div>
    <my-header myTitle="搜索"/>
    <a href="https://itunes.apple.com/cn/app/mei-tuan-tuan-gou-tuan-gou/id423084029?mt=8">
      <img width="100%" src="../assets/banner.png" alt>
    </a>
    <mt-search v-model="value" placeholder="输入商家名、品类或商圈">
      <mt-cell
        v-for="(item, index) in searchResults"
        :key="index"
        :title="item.title"
        :value="item.info"
        :to="'/home#/commodityInfo/' + item.id"
      ></mt-cell>
    </mt-search>
    <p style="padding: .2rem;">
      只可搜索首页里有的列表！
      例如：
      <a style="color: #06c1ae;" @click="value = '鸡'">鸡</a> 、
      <a style="color: #06c1ae;" @click="value = '鱼'">鱼</a> 、
      <a style="color: #06c1ae;" @click="value = '蛋糕'">蛋糕</a> 。
      </p>
    <my-footer :city="city" />
  </div>
</template>

<script>
import myHeader from "../components/header.vue";
import myFooter from "../components/footer.vue";

import { Toast } from "mint-ui";

export default {
  data() {
    return {
      yourLikeList: [
        {
          id: 0,
          title: "海螺朝天游泳馆",
          info: "[4店通用]100元代金券1张，可叠加",
          imgSrc:
            "//p0.meituan.net/200.0/deal/f3677b71db061d51880e0ec626d0b66b111431.jpg",
          price: 88,
          facade: 100,
          sell: 38000
        },
        {
          id: 1,
          title: "探炉烤鱼",
          info: "[福田区]【爆款推荐】中式/泰式按摩双钟套餐（2选1）",
          imgSrc:
            "https://p0.meituan.net/200.0/deal/910c44bfe99b19382ee4af6beee6b5eb27245.jpg@79_0_341_341a%7C267h_267w_2e_90Q",
          price: 159,
          facade: 336,
          sell: 5800
        },
        {
          id: 2,
          title: "正新鸡排",
          info: "[3店通用]正新鸡排1份，提供免费WiFi",
          imgSrc:
            "https://p1.meituan.net/200.0/deal/7b284ae8426ed2e34557596523fafaf6169906.jpg@69_0_564_564a%7C267h_267w_2e_90Q",
          price: 8.9,
          facade: 15,
          sell: 135647
        },
        {
          id: 3,
          title: "御蝶坊生日蛋糕",
          info: "[深圳等]10元代金券1张，除生日蛋糕、饮料和月饼外全场通用",
          imgSrc:
            "https://p1.meituan.net/200.0/deal/35bef73b777ac0ab61921fe8228bfe9e47775.jpg@128_0_385_385a%7C267h_267w_2e_90Q",
          price: 8.8,
          facade: 10,
          sell: 280411
        }
      ],
      value: null,
      searchResults: [],
      city: this.$store.state.city,
    };
  },
  created() {
    this.getShopList();
  },
  methods: {
    getShopList() {
      this.$http.get("http://localhost:3000/yourLikeList").then(
        res => {
          Toast("获取数据成功！");
          this.yourLikeList = res.data;
        },
        err => {
          Toast("获取数据错误！已采用本地数据！");
        }
      );
    }
 
  },
  components: {
    myHeader,
    myFooter
  },
  watch: {
      value: function() {
          this.searchResults = [];
          this.yourLikeList.forEach(item => {
          if (item.title.indexOf(this.value) !== -1) {
            this.searchResults.push(item);
          }
          //   console.log((item.title.indexOf(this.value) !== -1))
          //   console.log(item)
        });
      }
  }
};
</script>

<style lang="scss">
.mint-search {
    height: 100%;
}
.mint-search-list {
  position: relative;
  padding-top: 0;
}
.mint-searchbar {
  padding: 0.1rem 0.15rem;
  background-color: #fff;
}
.mint-searchbar-inner .mintui-search {
  font-size: 0.4rem;
}
.mint-searchbar-inner {
  height: 0.7rem;
  border-radius: 0.06rem;
  border: 1px solid #06c1ae;
}
.mint-searchbar-core {
  font-size: 0.3rem;
}
.mint-searchbar-cancel {
  font-size: 0.3rem;
  display: inline-block;
}
.mint-cell {
  min-height: 0.8rem;
}
.mint-cell-wrapper {
  font-size: 0.3rem;
}
.mint-cell-value {
  font-size: 0.15rem;
}
</style>