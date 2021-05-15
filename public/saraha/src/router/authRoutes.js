export default [
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("../views/auth/signIn.vue"),
    meta: {
      authRequired: false,
      title: "تسجيل الدخول",
    },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/auth/signUp.vue"),
    meta: {
      authRequired: false,
      title: "إنشاء حساب جديد",
    },
  },
];
