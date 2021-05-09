<template>
  <v-main>
    <v-app>
      <NavBar />
      <router-view />
    </v-app>
  </v-main>
</template>

<script>
import NavBar from "./components/navBar/nav";
export default {
  name: "App",
  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>
