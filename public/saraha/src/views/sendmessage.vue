<template>
  <v-container class="mt-5">
    <v-row class="text-center">
      <div class="auth col-md-6 homePage">
        <div class="d-flex flex-column justify-space-between align-center">
          <v-img
            v-if="!not"
            style="border-radius:50%"
            width="100"
            height="100"
            :src="` http://localhost:3000/uploads/${image}`"
          ></v-img>
          <v-img
            v-else
            style="border-radius:50%"
            width="100"
            height="100"
            src="@/assets/userlogo.png"
          ></v-img>
          <h3 class="mt-2"><v-icon>mdi-account-circle</v-icon> {{ name }}</h3>
        </div>
        ads
        <v-form v-model="messageForm" ref="msg" lazy-validation>
          <v-card class="col-md-5 mt-3 pb-1" outlined color="card">
            <div class="text-right">
              <v-col cols="12" sm="12" md="12" class="ma-0 pa-0">
                <v-textarea
                  label="اكتب رسالة سرية"
                  hint=" الرسالة تنشر بشكل سري"
                  auto-grow
                  v-model="message"
                  :rules="messageRules"
                  outlined
                  counter=""
                  rows="4"
                ></v-textarea>
                <div class="text-center mb-3">
                  <v-btn
                    text
                    class="mr-2 primary"
                    rounded
                    :disabled="!messageForm"
                    @click="sendMesssage"
                  >
                    <v-icon>mdi-telegram</v-icon> إرسال الأن
                  </v-btn>
                </div>
              </v-col>
            </div>
            <v-divider class="ma-2"></v-divider>
            <h2>
              يمكنك أيضا إنشاء حساب خاص بك
              <router-link to="/signup" class="red--text"
                >تسجل الأن</router-link
              >
            </h2>
            <v-divider class="ma-2"></v-divider>
            <h2>
              ان كنت تمتلك حساب
              <router-link class="success--text" to="/signin"
                >سجل دخولك</router-link
              >
            </h2>
          </v-card>
        </v-form>
      </div>
      <pub />
    </v-row>
  </v-container>
</template>

<script>
import pub from "@/components/home/pub.vue";
export default {
  name: "Home",
  components: {
    pub,
  },
  data() {
    return {
      message: "",
      messageForm: true,
      name: "",
      image: "",
    };
  },
  computed: {
    messageRules() {
      return [
        (v) => !!v || "معدرة الرسالة فارغة",
        (v) => (v && v.length <= 300) || "معدرة الرسالة كبير للغاية",
      ];
    },
    valid() {
      return this.$refs.msg.validate();
    },
  },
  methods: {
    userdata: async function() {
      const user = await this.$http.get("/auth/user/" + this.$route.params.id);
      if (user.status === 200) {
        this.image = user.data.img_profile;
        this.name = user.data.fullname;
        // if(user.data.length)
      }
    },
    sendMesssage: function() {
      if (this.valid) {
        this.$http
          .post("/msg/add", {
            message: this.message.trim(),
            userId: this.$route.params.id,
          })
          .then((res) => {
            this.$swal.fire("تم ", "إرسال رسالتك بنجاح", "success");
            this.message = "";
            return res;
          })
          .catch((err) => {
            alert(err.message);
          });
      }
    },
  },
  mounted() {
    this.userdata();
  },
};
</script>
