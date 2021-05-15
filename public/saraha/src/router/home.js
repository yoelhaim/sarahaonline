export default [
  {
    path: "/mychalange",
    name: "homeChalange",
    component: () => import("../views/chalange/homeChalange.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/addchalange",
    name: "addChalange",
    component: () => import("../views/chalange/addChalange.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/u/:id",
    name: "SendMessage",
    component: () => import("../views/sendmessage.vue"),
    meta: {
      global: true,
      title: "إرسال رسالة سرية",
    },
  },
];
