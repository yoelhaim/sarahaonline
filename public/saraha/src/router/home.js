export default [
  {
    path: "/mychalange",
    name: "homeChalange",
    component: () => import("../views/chalange/homeChalange.vue"),
  },
  {
    path: "/addchalange",
    name: "addChalange",
    component: () => import("../views/chalange/addChalange.vue"),
  },
  {
    path: "/u/:id",
    name: "SendMessage",
    component: () => import("../views/sendmessage.vue"),
  },
];
