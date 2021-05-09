import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);
const opts = {};

export default new Vuetify({
  opts,
  rtl: true,
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#008DBD",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        miro: "#1E1E1E",
        colo: "#e8e8e8",
      },
      light: {
        primary: "#008DBD",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        miro: "#e8e8e8",
        colo: "#1E1E1E",
      },
    },
  },
});
