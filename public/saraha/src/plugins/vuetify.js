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
        secondary: "#E94C2B",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        card: "#363A40",
        colo: "#e8e8e8",
        navbar: "#242526",
        btnColor: "#4E4F50",
      },
      light: {
        primary: "#008DBD",
        secondary: "#E94C2B",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        card: "#e8e8e8",
        colo: "#1E1E1E",
        navbar: "##242526",
      },
    },
  },
});
