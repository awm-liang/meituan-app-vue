import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import resource from 'vue-resource'
Vue.use(resource);
// import './store/mui-master/dist/js/mui';
import { Icon, Rate } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Icon);
Vue.use(Rate);

import MintUI from 'mint-ui';
Vue.use(MintUI)

import 'mint-ui/lib/style.css';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
