<template>
  <v-container class="mt-5">
    <v-row class="text-center">
      <div class="auth">
        <v-card class="col-md-5" outlined shaped color="card">
          <h2 class="secondary--text">تسجيل الدخول</h2>
          <div class="text-center">
            <v-form ref="signin" v-model="valids">
              <!-- email -->
              <v-col cols="12" sm="12" class="inputFormAuth">
                <v-text-field
                  v-model="email"
                  :rules="emailRulus"
                  label="الإيميل"
                  outlined
                  clearable
                  prepend-inner-icon="mdi-email"
                ></v-text-field>
              </v-col>
              <!-- password -->
              <v-col cols="12" sm="12" class="inputFormAuth">
                <v-text-field
                  label="كلمة السر "
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="passwordRules"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  hint="At least 8 characters"
                  counter
                  prepend-inner-icon="mdi-key-outline"
                  @click:append="show1 = !show1"
                  clearable
                  outlined
                ></v-text-field>
              </v-col>
              <v-col>
                <div class="text-center">
                  <v-btn
                    color="secondary"
                    depressed
                    @click="login"
                    :disabled="!valids"
                    elevation="9"
                    medium
                    outlined
                    raised
                    rounded
                    ><v-icon>mdi-account</v-icon> تسجيل الدخول</v-btn
                  >
                </div>
              </v-col>
            </v-form>
          </div>
        </v-card>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      email: "",
      valids: true,
      password: "",
    };
  },
  computed: {
    emailRulus() {
      return [
        (v) => !!v || "required  name",
        (v) => this.$pattern.email.test(v) || "req",
      ];
    },
    passwordRules() {
      return [
        (v) => !!v || "required  name",
        (v) => this.$pattern.password.test(v) || "req",
      ];
    },
    valide() {
      return this.$refs.signin.validate();
    },
  },
  methods: {
    login: function() {
      if (this.valide) {
        alert(222);
      }
    },
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
