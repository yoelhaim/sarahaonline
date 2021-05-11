import Vue from "vue";
import VueRouter from "vue-router";
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

export default router;
