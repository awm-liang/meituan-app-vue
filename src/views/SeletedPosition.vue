<template>
  <div class="seletedPosition" >
    <myHeader myTitle="选择城市" />
    <ul>
      <li @click="change('重庆')">北京
        <hr>
      </li>
      <li @click="change('广州')">广州
        <hr>
      </li>
      <li @click="change('深圳')">深圳
        <hr>
      </li>
      <li @click="change('长沙')">长沙
        <hr>
      </li>
      <li @click="change('上海')">上海
        <hr>
      </li>
      <li @click="change('重庆')">重庆
        <hr>
      </li>
      <li @click="change('成都')">成都
        <hr>
      </li>
      <li @click="change('南京')">南京
        <hr>
      </li>
      <li @click="change('西京')">西京
        <hr>
      </li>
      <li @click="change('常德')">常德
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
import myHeader from '../components/header.vue'

export default {
  name: "SeletedPosition",
  components: {
    myHeader,
  },
  methods: {
    change(val) {
      this.$store.commit('changeCity', val);
      this.$router.push('/');
    }
  },
  created() {
  }
};
</script>

<style lang="scss">
  .seletedPosition {
    ul {
      li {
        width: 100%;
        line-height: 1rem;
        font-size: .5rem;
        padding: .1rem;
        padding-left: .3rem;
        padding-right: .3rem;
        background-color: #fff;
        float: left;
        hr {
          width: 60%;
          float: right;
          margin-top: .5rem;
        }
      }
    }
  }
</style>