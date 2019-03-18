<template>
  <div>
    <router-link
      tag="div"
      :to="'/commodityInfo/' + item.id"
      v-for="(item, i) in yourLikeList"
      :key="i"
      class="like_item"
    >
      <div class="item_wrap">
        <div class="item_img">
          <img :src="item.imgSrc">
        </div>
        <div class="item_info">
          <div class="item_title">
            <p>{{item.title}}</p>
            <p>{{item.info}}</p>
          </div>
          <div class="item_price">
            <span>
              {{item.price}}
              <span>元</span>
            </span>
            门市价:{{item.facade}}元
            <span>已售{{item.sell}}</span>
          </div>
        </div>
      </div>
      <hr>
    </router-link>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      yourLikeList: [
        {
          "id": 0,
          "title": "海螺朝天游泳馆",
          "info": "[4店通用]100元代金券1张，可叠加",
          "imgSrc":
            "//p0.meituan.net/200.0/deal/f3677b71db061d51880e0ec626d0b66b111431.jpg",
          "price": 88,
          "facade": 100,
          "sell": 38000
        },
        {
          "id": 1,
          "title": "探炉烤鱼",
          "info": "[福田区]【爆款推荐】中式/泰式按摩双钟套餐（2选1）",
          "imgSrc":
            "https://p0.meituan.net/200.0/deal/910c44bfe99b19382ee4af6beee6b5eb27245.jpg@79_0_341_341a%7C267h_267w_2e_90Q",
          "price": 159,
          "facade": 336,
          "sell": 5800
        },
        {
          "id": 2,
          "title": "正新鸡排",
          "info": "[3店通用]正新鸡排1份，提供免费WiFi",
          "imgSrc":
            "https://p1.meituan.net/200.0/deal/7b284ae8426ed2e34557596523fafaf6169906.jpg@69_0_564_564a%7C267h_267w_2e_90Q",
          "price": 8.9,
          "facade": 15,
          "sell": 135647
        },
        {
          "id": 3,
          "title": "御蝶坊生日蛋糕",
          "info": "[深圳等]10元代金券1张，除生日蛋糕、饮料和月饼外全场通用",
          "imgSrc":
            "https://p1.meituan.net/200.0/deal/35bef73b777ac0ab61921fe8228bfe9e47775.jpg@128_0_385_385a%7C267h_267w_2e_90Q",
          "price": 8.8,
          "facade": 10,
          "sell": 280411
        },
        {
          "id": 0,
          "title": "海螺朝天游泳馆",
          "info": "[4店通用]100元代金券1张，可叠加",
          "imgSrc":
            "//p0.meituan.net/200.0/deal/f3677b71db061d51880e0ec626d0b66b111431.jpg",
          "price": 88,
          "facade": 100,
          "sell": 38000
        },
        {
          "id": 1,
          "title": "探炉烤鱼",
          "info": "[福田区]【爆款推荐】中式/泰式按摩双钟套餐（2选1）",
          "imgSrc":
            "https://p0.meituan.net/200.0/deal/910c44bfe99b19382ee4af6beee6b5eb27245.jpg@79_0_341_341a%7C267h_267w_2e_90Q",
          "price": 159,
          "facade": 336,
          "sell": 5800
        },
        {
          "id": 1,
          "title": "烤鱼",
          "info": "[福田区]【爆款推荐】中式/泰式按摩双钟套餐（2选1）",
          "imgSrc": "https://p0.meituan.net/200.0/deal/910c44bfe99b19382ee4af6beee6b5eb27245.jpg@79_0_341_341a%7C267h_267w_2e_90Q",
          "price": 159,
          "facade": 336,
          "sell": 5800
        },
        {
          "id": 2,
          "title": "正新鸡排",
          "info": "[3店通用]正新鸡排1份，提供免费WiFi",
          "imgSrc":
            "https://p1.meituan.net/200.0/deal/7b284ae8426ed2e34557596523fafaf6169906.jpg@69_0_564_564a%7C267h_267w_2e_90Q",
          "price": 8.9,
          "facade": 15,
          "sell": 135647
        },
        {
          "id": 3,
          "title": "御蝶坊生日蛋糕",
          "info": "[深圳等]10元代金券1张，除生日蛋糕、饮料外全场通用",
          "imgSrc":
            "https://p1.meituan.net/200.0/deal/35bef73b777ac0ab61921fe8228bfe9e47775.jpg@128_0_385_385a%7C267h_267w_2e_90Q",
          "price": 8.8,
          "facade": 10,
          "sell": 280411
        },
        {
          "id": 4,
          "title": "鹿角巷THE ALLEY",
          "info": "[海雅缤纷城]♥网红♥招牌饮品3选1",
          "imgSrc":
            "https://p0.meituan.net/200.0/deal/6675ee8adeb7e29b713c0c2b3d49b44868593.jpg@0_137_688_688a%7C267h_267w_2e_90Q",
          "price": 15.8,
          "facade": 23,
          "sell": 3138
        },
        {
          "id": 5,
          "title": "真功夫",
          "info": "[深圳等]冬(香)菇鸡腿肉饭+香滑蒸蛋1份",
          "imgSrc":
            "https://p0.meituan.net/200.0/deal/e4b18ae7e48350d1b313c8befc8782e5242830.jpg@267h_267w_2e_90Q",
          "price": 19,
          "facade": 24,
          "sell": 6346
        },
        {
          "id": 6,
          "title": "蛙奴炭烧牛蛙",
          "info": "[3店通用]钜惠3到4人餐，提供免费WiFi",
          "imgSrc":
            "https://p0.meituan.net/200.0/deal/4c00fe7c31155c97016f83a26400f12a64512.jpg@103_0_500_500a%7C267h_267w_2e_90Q",
          "price": 178,
          "facade": 243,
          "sell": 9715
        },
        {
          "id": 7,
          "title": "四海一家",
          "info": "[世界之窗]单人自助午餐",
          "imgSrc":
            "https://p0.meituan.net/200.0/deal/d5e142c3dcca778edcad372f638212ef584033.jpg@698_0_1802_1802a%7C267h_267w_2e_90Q",
          "price": 163,
          "facade": 178,
          "sell": 41019
        },
        {
          "id": 8,
          "title": "五谷芳乳鸽王",
          "info": "[6店通用]100元代金劵1张，可叠加",
          "imgSrc":
            "https://p1.meituan.net/200.0/deal/f1f5a165dbb6f1017ee11e95d0ff8d2847903.jpg@114_0_452_452a%7C267h_267w_2e_90Q",
          "price": 83,
          "facade": 100,
          "sell": 56033
        },
        {
          "id": 9,
          "title": "汤响自助回转火锅百汇",
          "info": "[3店通用]超值自助回转火锅",
          "imgSrc":
            "https://p0.meituan.net/200.0/deal/e5d23cf845b1689d274f1a6761ca66cc48157.jpg@100_0_400_400a%7C267h_267w_2e_90Q",
          "price": 42,
          "facade": 59,
          "sell": 24706
        }
      ]
    };
  },
  created() {
    this.backTop();
    this.getShopList();
  },
  methods: {
    backTop(){
      setTimeout(()=> {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }, 100)
    },
    getShopList() {
      this.$http.get("http://localhost:3000/yourLikeList").then(res => {
        Toast("获取数据成功！")
        this.yourLikeList = res.data;
      }, err => {
        Toast("获取数据错误！已采用本地数据！")
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.item_wrap {
  display: flex;
  .item_img {
    img {
      width: 190px;
    }
  }
  .item_info {
    margin-left: 0.2rem;
    margin-top: 0.09rem;
    display: flex;
    width: 100%;
    font-size: .24rem;
    flex-direction: column;
    .item_title {
      p {
        font-size: 0.3rem;
        color: #333;
        &:nth-child(2) {
          font-size: 0.24rem;
          margin-top: 0.2rem;
          color: #666;
          line-height: 0.3rem;
        }
      }
    }
    .item_price {
      margin-top: 0.4rem;
      position: relative;
      color: #666;
      font-size: .24rem;
      span {
        &:nth-child(1) {
          font-size: 0.38rem;
          color: #06c1ae;
          span {
            font-size: 0.24rem;
            color: #666;
            &:nth-child(1) {
              font-size: .30rem;
            }
          }
        }
        &:nth-child(2) {
          position: absolute;
          right: 0.3rem;
        }
      }
    }
  }
}
</style>