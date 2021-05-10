export default [
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("../views/auth/signIn.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/auth/signUp.vue"),
  },
];
