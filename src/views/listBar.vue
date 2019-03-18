<template>
  <div class="listBar">
      <my-header :myTitle="this.thatData.name" />
      <a href="https://itunes.apple.com/cn/app/mei-tuan-tuan-gou-tuan-gou/id423084029?mt=8">
        <img width="100%" src="../assets/banner.png" alt>
      </a>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import myHeader from '../components/header.vue';

export default {
    data() {
        return {
            id: this.$route.params.id,
            thatData: []
        }
    },
    created() {
        this.getListBarInfo();
    },
    methods: {
        getListBarInfo() {
            this.$http.get("http://localhost:3000/seletedList/" + this.id).then(res => {
                Toast("获取数据成功！")
                this.thatData = res.data;
            }, err => {
                Toast("获取数据错误！已采用本地数据！")
            });
        }
    },
    components: {
        myHeader
    }
}
</script>