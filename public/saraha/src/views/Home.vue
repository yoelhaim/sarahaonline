<template>
  <v-container class="mt-5">
    <v-row class="text-center">
      <div
        style="width: 500px;
  margin: 0 auto;"
      >
        <v-card class="col-md-5" outlined shaped>
          <h2>Login</h2>
          <div class="text-center">
            <v-form>
              <v-col cols="12" sm="12">
                <v-text-field
                  v-model="message4"
                  label="Outlined"
                  outlined
                  clearable
                  prepend-inner-icon="mdi-map-marker"
                ></v-text-field>
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
