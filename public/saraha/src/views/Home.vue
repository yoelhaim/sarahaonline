<template>
  <v-container class="mt-5">
    <v-row class="text-center">
      <div class="auth col-md-6 homePage">
        <div class="pa-3 text-center">
          <h3>يمكنك تغيير صورتك من هنا</h3>
          <!-- image -->
          <v-col cols="5" sm="5" class="inputFormAuth">
            <v-file-input
              filled
              v-model="avatar"
              prepend-icon="mdi-camera"
              dense
            ></v-file-input>

            <v-btn
              color="secondary"
              depressed
              @click="changeProfile"
              elevation="9"
              medium
              outlined
              raised
              rounded
              :loading="loading"
              ><v-icon>mdi-update</v-icon> update image</v-btn
            >
          </v-col>
          <br />
          <br />
        </div>
        <v-card class="col-md-5 mt-3 " outlined color="card">
          <h3>شارك الرابط مع أصدقائك واعرف الحقيقة عنك</h3>
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
            <v-btn
              text
              class="mr-2 primary"
              rounded
              @click="copyPostLink(youlink)"
            >
              <v-icon>mdi-content-copy</v-icon> نسخ الرابط
            </v-btn>
          </div>
          <v-snackbar
            v-model="snackbar"
            color="#22a56a"
            class="text-weight-bold"
            timeout="2000"
            :width="20"
            >تم نسخ الرابط بنجاح</v-snackbar
          >
        </v-card>
        <div>ads</div>
        <div v-for="item in dataPost" :key="item.id">
          <v-card class="col-md-5 mt-3 pb-1" outlined color="card">
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
                  ><v-icon :size="15">mdi-clock</v-icon>
                  <timeago
                    :datetime="item.createdAt"
                    :auto-update="60"
                  ></timeago
                ></v-chip>
                <span class="float-left">
                  <!-- <v-chip color="success"
                    ><v-icon :size="15">mdi-download</v-icon> حفض</v-chip
                  > -->
                  <v-chip color="primary" class="mr-1" style="font-size:11px"
                    ><v-icon :size="15">mdi-share</v-icon> مشاركة</v-chip
                  >
                </span>
              </div>
            </div>
          </v-card>
        </div>
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
      youlink: `https://i3tarfly.livebotola.com/u/${this.$store.getters.getLink}`,
      dataPost: [],
      output: null,
      snackbar: false,
      avatar: "",
      loading: false,
    };
  },
  methods: {
    changeProfile: function() {
      let formData = new FormData();
      formData.append("avatar", this.avatar);
      this.$http
        .post("/auth/image/" + this.$store.getters.getuserId, formData)
        .then((res) => {
          alert("profile update");
          return res;
        })
        .catch((err) => {
          alert(err.message);
        });
    },
    copyPostLink: function(param1) {
      let link = param1;
      navigator.clipboard
        .writeText(link)
        .then(() => {
          this.snackbar = true;
        })
        .catch(console.log(link));
    },
    fetchPost: function() {
      this.$http
        .get("/msg/all/" + this.$store.getters.getuserId, {
          headers: {
            Authorization: "bearer " + this.$store.getters.getToken,
          },
        })
        .then((res) => {
          this.dataPost = res.data;
        })
        .then((err) => {
          console.log(err);
        });
    },
    print: async function() {
      const el = this.$refs.printMe;
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      const options = {
        type: "dataURL",
      };
      this.output = await this.$html2canvas(el, options);
    },
  },
  mounted() {
    this.fetchPost();
    this.print();
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
