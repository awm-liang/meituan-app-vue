import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/position',
      name: 'SeletedPosition',
      component: () => import('./views/SeletedPosition.vue'),
    },
    {
      path: '/search',
      name: 'searchMain',
      component: () => import('./views/searchMain.vue'),
    },
    {
      path: '/myPerson',
      name: 'myPerson',
      component: () => import('./views/myPerson.vue'),
    },
    {
      path: '/listBar/:id',
      name: 'listBar',
      component: () => import('./views/listBar.vue'),
    },
    {
      path: '/commodityInfo/:id',
      name: 'commodityInfo',
      component: () => import('./views/commodityInfo.vue'),
    },
    {
      path: '/allList',
      name: 'allList',
      component: () => import('./views/allList.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register.vue'),
    },
    {
      path: '/person-info',
      name: 'person-info',
      component: () => import('./views/person-info.vue'),
    },
  ],
});
