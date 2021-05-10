<template>
  <div>
    <v-app-bar app color="navbar">
      <div class="d-flex align-center">
        <router-link to="/">
          <!-- <v-app-bar-title>
            <h4 id="logo">إعترف لي</h4>
          </v-app-bar-title> -->
          <v-img
            src="https://i.pinimg.com/originals/41/28/2b/41282b58cf85ddaf5d28df96ed91de98.png"
            width="60"
            height="60"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn small text fab class="mr-2 btnColor">
        <v-icon>mdi-facebook-messenger</v-icon>
      </v-btn>
      <v-btn small text fab class="mr-2 btnColor">
        <v-icon>mdi-puzzle-heart</v-icon>
      </v-btn>
      <v-btn small text fab class="mr-2 btnColor">
        <v-icon>mdi-youtube</v-icon>
      </v-btn>
      <v-btn small text fab class="mr-2 btnColor">
        <v-icon>mdi-cogs</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
