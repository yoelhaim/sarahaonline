import Vue from "vue";
// import router from "../../router/index";

export default {
  state: {},
  mutations: {},
  actions: {
    signUp: (context, payload) => {
      return new Promise((resolve, reject) => {
        Vue.prototype.$http
          .post("/auth/add", payload)
          .then((res) => {
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
