<template>
  <div>
    <mt-header :title="myTitle">
      <a @click="back" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
      <mt-button slot="right">
        <router-link to="/myPerson">我的</router-link>
      </mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  props: ["myTitle"]
};
</script>

<style lang="scss">
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
</style>