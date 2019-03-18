import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: '深圳',
    userId: null
  },
  mutations: {
    changeCity(state, val) {
      state.city = val
    },
    changeUserId(state, val) {
      state.userId = val
    }
  },
  actions: {

  },
});
