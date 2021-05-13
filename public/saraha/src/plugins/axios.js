import Vue from "vue";
import axios from "axios";
import store from "../store/index";

// axios.defaults.baseURL = "https://sp0meur.com";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.validateStatus = (status) => status >= 200 && status < 399;

// Add a request interceptor
axios.interceptors.request.use(
  async function(config) {
    // Do something before request is sent
    let accessToken = await store.getters.getToken;
    let isLoggedIn = store.getters.isLoggedIn;
    if (isLoggedIn === true) {
      config.headers.common["x-auth-token"] = accessToken;
      return config;
    } else {
      if (isLoggedIn === true) {
        store.dispatch("destroySession");
        Vue.prototype.$notify({
          group: "errors",
          type: "error",
          title: "token is expird",
          text: "destroySession ",
        });
      }
      return config;
    }
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    if (!error.response) {
      Vue.prototype.$notify({
        group: "errors",
        type: "error",
        title: "problem in server",
        text: "problem in server try again",
      });
    } else {
      // if (error.response.status === 404 && store.getters.isLoggedIn) {
      //   store.dispatch("handleNotFound");
      // }
      // if (
      //   error.response.data.error.code === 1079 ||
      //   error.response.data.error.code === 1072 ||
      //   error.response.data.error.code === 1075
      // ) {
      //   if (store.getters.isLoggedIn) {
      //     store.dispatch("destroySession");
      //   }
      //   Vue.prototype.$notify({
      //     group: "errors",
      //     type: "error",
      //     title: "laaaaaaaa",
      //     text: "achhada",
      //   });
      // }
    }
    return Promise.reject(error);
  }
);

Vue.prototype.$http = axios;
