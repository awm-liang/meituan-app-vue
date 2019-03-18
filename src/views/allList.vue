<template>
  <div>
    <myHeader myTitle="全部商品"/>
    <a href="https://itunes.apple.com/cn/app/mei-tuan-tuan-gou-tuan-gou/id423084029?mt=8">
      <img width="100%" src="../assets/banner.png" alt>
    </a>
    <div class="shopListWrap">
      <ShopList/>
    </div>
    <myFooter/>
  </div>
</template>

<script>
import ShopList from "../components/shopList.vue";
import myHeader from "../components/header.vue";
import myFooter from "../components/footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    ShopList,
    myHeader,
    myFooter
  }
};
</script>
<style lang="scss">
.shopListWrap {
  background-color: #fff;
  padding: 0.3rem 0 0.1rem 0.3rem;
}
.like_item {
  margin: 0.3rem 0;
  hr {
      margin-top: .3rem;
  }
}
.shopListWrap {
  padding: .1rem 0 .1rem .3rem;;
}

</style>