<template>
  <v-container class="mt-5">
    <v-row class="text-center">
      <div
        style="width: 500px;
  margin: 0 auto;"
      >
        <v-card
          v-for="item in 7"
          :key="item"
          class="col-md-5 mt-3 pb-1"
          outlined
          color="card"
        >
          <div class="text-right">
            <p>
              <v-icon> mdi-account-circle</v-icon>
              <strong> غير معروف</strong>
            </p>
            <v-card class="pa-2">
              sjsjsjskshjkshjsh
            </v-card>
            <v-divider class="ma-2"></v-divider>
            <div>
              <v-chip color="orange"
                ><v-icon :size="15">mdi-clock</v-icon> ! minit</v-chip
              >
              <span class="float-left">
                <v-chip color="red"
                  ><v-icon :size="15">mdi-share</v-icon> مشاركة</v-chip
                ></span
              >
            </div>
          </div>
        </v-card>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style>
.inputFormAuth {
  padding: 4px;
  margin: 4px;
  height: 70px;
}
</style>
