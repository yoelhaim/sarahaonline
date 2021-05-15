<template>
  <div>
    <v-app-bar app color="navbar">
      <div class="d-flex align-center">
        <router-link to="/">
          <!-- <v-app-bar-title>
            <h4 id="logo">إعترف لي</h4>
          </v-app-bar-title> -->
          <v-img src="@/assets/userlogo.png" width="60" height="60" />
        </router-link>
      </div>

      <v-spacer></v-spacer>
      <div v-if="!$store.getters.isLoggedIn">
        <router-link to="/signup">
          <v-btn small text class="mr-2 btnColor">
            <v-icon>mdi-plus</v-icon>
            إنشاء حساب
          </v-btn>
        </router-link>
      </div>
      <div v-else>
        <router-link to="/">
          <v-btn small text fab class="mr-2 btnColor">
            <v-icon>mdi-facebook-messenger</v-icon>
          </v-btn>
        </router-link>
        <!-- <router-link to="/mychalange">
        <v-btn small text fab class="mr-2 btnColor">
          <v-icon>mdi-puzzle-heart</v-icon>
        </v-btn></router-link
      > -->

        <!-- <v-btn small text fab class="mr-2 btnColor">
        <v-icon>mdi-youtube</v-icon>
      </v-btn> -->
        <v-btn small text fab class="mr-2 btnColor" @click="logout">
          <v-icon>mdi-logout-variant</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  methods: {
    logout: async function() {
      await this.$store.dispatch("signOut");
    },
  },
};
</script>
