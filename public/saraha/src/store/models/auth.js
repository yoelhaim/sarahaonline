import Vue from "vue";
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
  },
  mutations: {
    AUTH_SUCCESS: (state, payload) => {
      state.accessToken = payload.accessToken;
      state.user = payload.user;
      localStorage.getItem("access_token", payload.accessToken);
      localStorage.setItem("user", JSON.parse(payload.user));
    },
  },
  actions: {
    signUp: (context, payload) => {
      return new Promise((resolve, reject) => {
        Vue.prototype.$http
          .post("/auth/add", payload)
          .then(async (res) => {
            if (res.status === 200) {
              await context.commit("AUTH_SUCCESS", {
                accessToken: "sjsjsj",
                user: res.data.data,
              });
            }
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  modules: {},
};
