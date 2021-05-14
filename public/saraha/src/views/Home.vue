<template>
  <v-container class="mt-5">
    <v-row class="text-center">
      <div class="auth col-md-6 homePage">
        <v-card class="col-md-5 mt-3 " outlined color="card">
          <v-col cols="12" sm="12" md="12" class="ma-0 pa-0">
            <v-text-field
              label="رابطك  "
              placeholder="رابطك  "
              filled
              v-model="youlink"
              rounded
              dense
              readonly
            ></v-text-field>
          </v-col>
          <div>
            <v-btn text class="mr-2 primary" rounded>
              <v-icon>mdi-content-copy</v-icon> نسخ الرابط
            </v-btn>
          </div>
        </v-card>
        <v-card
          v-for="item in dataPost"
          :key="item"
          class="col-md-5 mt-3 pb-1"
          outlined
          color="card"
        >
          <div class="text-right">
            <p>
              <v-icon :size="40"> mdi-account-circle</v-icon>
              <strong> غير معروف</strong>
            </p>
            <v-card class="pa-2">
              {{ item.message }}
            </v-card>
            <v-divider class="ma-2"></v-divider>
            <div>
              <v-chip color="dark" style="font-size:11px"
                ><v-icon :size="15">mdi-clock</v-icon> ! minit</v-chip
              >
              <span class="float-left">
                <v-chip color="success"
                  ><v-icon :size="15">mdi-download</v-icon> حفض</v-chip
                >
                <v-chip color="primary" class="mr-1" style="font-size:11px"
                  ><v-icon :size="15">mdi-share</v-icon> مشاركة</v-chip
                >
              </span>
            </div>
          </div>
        </v-card>
      </div>
      <pub />
    </v-row>
  </v-container>
</template>

<script>
import pub from "../components/home/pub.vue";
export default {
  name: "Home",
  components: {
    pub,
  },
  data() {
    return {
      youlink: `https://sari7ni.livebotola.com/u/${this.$store.getters.getLink}`,
      dataPost: [],
    };
  },
  methods: {
    fetchPost: function() {
      this.$http
        .get("/msg/all/" + this.$store.getters.getuserId)
        .then((res) => {
          this.dataPost = res.data;
        })
        .then((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.fetchPost();
  },
};
</script>
<style>
.inputFormAuth {
  padding: 4px;
  margin: 4px;
  height: 70px;
}
</style>
