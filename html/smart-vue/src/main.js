import Vue from 'vue'

import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/pt-br';
import locale from 'element-ui/lib/locale';

const ElementUI = require('element-ui');
locale.use(lang);
Vue.use(ElementUI);

Vue.use(require('vue-moment'));

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

