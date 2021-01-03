import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import { GridGlobal } from 'gridjs-vue'

Vue.use(GridGlobal)

Vue.use(VueRouter);
var accessToken = localStorage.getItem("accessToken");
var user = localStorage.getItem("user");
Vue.prototype.$apiUrl = "http://localhost:3000/api/v1/";
Vue.prototype.$accessToken = accessToken;
Vue.prototype.$user = user;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
