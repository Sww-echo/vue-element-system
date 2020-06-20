import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/scss/reset.scss";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import http from "@/api/config.js";
import "./mock";
Vue.use(ElementUI);
Vue.prototype.$http = http;
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  store.commit("getToken");
  let token = store.state.user.token;
  if (!token && to.name !== "login") {
    next({ name: "login" });
  } else {
    next();
  }
});
new Vue({
  router,
  store,
  created() {
    store.commit("addMenu", router);
  },
  render: (h) => h(App)
}).$mount("#app");
