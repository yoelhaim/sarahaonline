import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";
import Authroute from "./authRoutes";
import homeChalange from "./home";

Vue.use(VueRouter);

const routes = [
  ...Authroute,
  ...homeChalange,
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  ///
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || "welcomme";
  });
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    } else {
      next({
        name: "SignIn",
        params: to.params,
        query: {
          nextPatch: to.name,
        },
      });
    }
  } else if (to.matched.some((record) => record.meta.global)) {
    next();
    return;
  } else {
    if (store.getters.isLoggedIn) {
      next({
        name: "Home",
      });
    } else {
      next();
      return;
    }
  }
});

export default router;
