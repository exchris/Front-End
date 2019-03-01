// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入vue-clipboard2
import VueClipboard from 'vue-clipboard2';
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueClipboard);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
