import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./assets/css/style.css";
import "./plugins/axios";
import patterns from "./store/patterns";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.prototype.$pattern = patterns;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
