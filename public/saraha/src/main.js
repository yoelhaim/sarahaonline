import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./assets/css/style.css";
import "./plugins/axios";
import patterns from "./store/patterns";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueHtml2Canvas from "vue-html2canvas";
import VueTimeago from "vue-timeago";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);

Vue.use(VueTimeago, {
  name: "Timeago", // Component name, `Timeago` by default
  locale: "ar", // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    ar: require("date-fns/locale/ar"),
  },
});

Vue.use(VueHtml2Canvas);

Vue.config.productionTip = false;
Vue.prototype.$pattern = patterns;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
