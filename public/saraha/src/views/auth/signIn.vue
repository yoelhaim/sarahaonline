<template>
  <v-container class="mt-5">
    <v-row class="text-center">
      <div class="auth">
        <v-card class="col-md-5" outlined shaped color="card">
          <h2 class="secondary--text">تسجيل الدخول</h2>
          <div class="text-center">
            <v-form>
              <!-- email -->
              <v-col cols="12" sm="12" class="inputFormAuth">
                <v-text-field
                  v-model="message4"
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
                  v-model="message4"
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
};
</script>
<style>
.inputFormAuth {
  padding: 4px;
  margin: 4px;
  height: 70px;
}
</style>
