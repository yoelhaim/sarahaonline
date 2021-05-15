import Vue from "vue";
import router from "../../router";
// import router from "../../router/index";

export default {
  state: {
    accessToken: localStorage.getItem("access_token") || "",
    user: JSON.parse(localStorage.getItem("user")) || {},
  },
  getters: {
    isLoggedIn: (state) =>
      !!state.accessToken &&
      !!state.accessToken.match(Vue.prototype.$pattern.jwtToken),
    getToken: (state) => state.accessToken,
    getuserId: (state) => state.user.id,
    getfullName: (state) => state.user.fullname,
    getEmail: (state) => state.user.email,
    getLink: (state) => state.user.link,
  },
  mutations: {
    AUTH_SUCCESS: (state, payload) => {
      state.accessToken = payload.accessToken;
      state.user = payload.user;

      localStorage.setItem("access_token", payload.accessToken);
      localStorage.setItem("user", JSON.stringify(payload.user));
    },
    logOut_session: (state) => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      state.accessToken = "";
      state.user = {};
    },
  },
  actions: {
    signIn: (context, pay) => {
      return new Promise((resolve, reject) => {
        Vue.prototype.$http
          .post("/auth/signin", pay)
          .then(async (res) => {
            if (res.status === 200 && res.data.code === 200) {
              await context.commit("AUTH_SUCCESS", {
                accessToken: res.data.token,
                user: res.data,
              });
              resolve(res);
            }
          })
          .catch((err) => reject(err));
      });
    },
    signUp: (context, payload) => {
      return new Promise((resolve, reject) => {
        Vue.prototype.$http
          .post("/auth/add", payload)
          .then(async (res) => {
            if (res.status === 200) {
              if (res.data.code === 200) {
                await context.commit("AUTH_SUCCESS", {
                  accessToken: res.data.token,
                  user: JSON.stringify(res.data),
                });
              }

              resolve(res);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    signOut: async (context) => {
      context.commit("logOut_session");
      await router.push({ name: "SignIn" });
    },
  },
  modules: {},
};
