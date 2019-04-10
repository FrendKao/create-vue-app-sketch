import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './src/index';
import Home from './src/pages/home';
import About from './src/pages/about';
import Help from './src/pages/help';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/help', component: Help },
  ]
});

new Vue({
  el: '#root',
  router,
  render: h => h(App)
});
