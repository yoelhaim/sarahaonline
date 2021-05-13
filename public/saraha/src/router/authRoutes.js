export default [
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("../views/auth/signIn.vue"),
    meta: {
      authRequired: false,
    },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/auth/signUp.vue"),
    meta: {
      authRequired: false,
    },
  },
];
