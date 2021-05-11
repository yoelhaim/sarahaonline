<template>
  <v-container class="col-md-3  mt-5 auth text-right">
    <h3><v-icon>mdi-google-analytics</v-icon> <strong>إحصأيتك</strong></h3>
    <v-divider class="ma-2"></v-divider>
    <router-link to="/">
      <v-list-item dense nav>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-facebook-messenger</v-icon>
            <v-list-item-title class="mr-2">معترف لك </v-list-item-title>
          </v-list-item-icon>
          <v-badge content="8" value="8" color="green" overlap> </v-badge>
        </v-list-item>
      </v-list-item>
    </router-link>
    <!-- pos -->
    <router-link to="/mychalange">
      <v-list-item dense nav>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-key</v-icon>
            <v-list-item-title class="mr-2">نسبة الصداقة </v-list-item-title>
          </v-list-item-icon>
          <v-badge content="5" value="8" color="green" overlap> </v-badge>
        </v-list-item>
      </v-list-item>
    </router-link>
    <h3 class="mt-5">
      <v-icon>mdi-find-replace</v-icon> <strong>تابعنا</strong>
    </h3>
    <v-divider class="ma-2"></v-divider>
    <div>
      <v-list-item dense nav>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="primary">mdi-facebook</v-icon>
            <v-list-item-title class="mr-2">facebook </v-list-item-title>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item>
    </div>
    <div>
      <v-list-item dense nav>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="blue">mdi-twitter</v-icon>
            <v-list-item-title class="mr-2">twitter </v-list-item-title>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item>
    </div>
    <div>
      <v-list-item dense nav>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="red">mdi-youtube</v-icon>
            <v-list-item-title class="mr-2">youtube </v-list-item-title>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item>
    </div>
    <h3 class="mt-5">
      <v-icon>mdi-google-ads</v-icon> <strong>إعلانات</strong>
    </h3>
    <v-divider class="ma-2"></v-divider>
    ads
    <v-divider class="ma-2"></v-divider>
    <div class="footeer">
      <router-link to=""><span>الخصوصية</span> </router-link>
      <router-link to="">الشروط </router-link>
      <router-link to="">ملفات تعريف الارتباط </router-link>
      <router-link to="">تواصل معنا </router-link>
    </div>
  </v-container>
</template>
