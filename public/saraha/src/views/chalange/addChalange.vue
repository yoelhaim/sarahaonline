<template>
  <v-container class="mt-5">
    <v-row class="text-center">
      <div class="auth col-md-6 homePage">
        <v-form v-model="addquiz" ref="quiz" lazy-validation>
          <v-card class="col-md-5 mt-3 pb-1" outlined color="card">
            <div class="text-right">
              <v-col cols="12" sm="12" md="12" class="ma-0 pa-0">
                <v-text-field
                  label="اكتب سؤالك 1  "
                  placeholder="اكتب سؤالك 1  "
                  filled
                  :rules="quizat"
                  v-model="quiz1"
                  counter=""
                  rounded
                  dense
                ></v-text-field>
              </v-col>
              <v-row>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    label="اكتب الجواب الصحيح  "
                    placeholder="اكتب الجواب الصحيح  "
                    filled
                    :rules="quizselect"
                    v-model="quiz1true"
                    counter=""
                    rounded
                    dense
                  ></v-text-field
                ></v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    label="اكتب الجواب الخطأ 1  "
                    placeholder="اكتب الجواب الخطأ 1  "
                    filled
                    :rules="quizselect"
                    v-model="quiz1false1"
                    counter=""
                    rounded
                    dense
                  ></v-text-field
                ></v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    label="اكتب الجواب الخطأ 2  "
                    placeholder="اكتب الجواب الخطأ 2  "
                    filled
                    :rules="quizselect"
                    v-model="quiz1false2"
                    counter=""
                    rounded
                    dense
                  ></v-text-field
                ></v-col>
              </v-row>
            </div>
          </v-card>
          <!-- quiz 2 -->
          <v-card class="col-md-5 mt-3 pb-1" outlined color="card">
            <div class="text-right">
              <v-col cols="12" sm="12" md="12" class="ma-0 pa-0">
                <v-text-field
                  label="اكتب سؤالك 2  "
                  placeholder="اكتب سؤالك 2  "
                  filled
                  :rules="quizat"
                  v-model="quiz2"
                  counter=""
                  rounded
                  dense
                ></v-text-field>
              </v-col>
              <v-row>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    label="اكتب الجواب الصحيح  "
                    placeholder="اكتب الجواب الصحيح  "
                    filled
                    :rules="quizselect"
                    v-model="quiz2true"
                    counter=""
                    rounded
                    dense
                  ></v-text-field
                ></v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    label="اكتب الجواب الخطأ 1  "
                    placeholder="اكتب الجواب الخطأ 1  "
                    filled
                    :rules="quizselect"
                    v-model="quiz2false1"
                    counter=""
                    rounded
                    dense
                  ></v-text-field
                ></v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    label="اكتب الجواب الخطأ 2  "
                    placeholder="اكتب الجواب الخطأ 2  "
                    filled
                    :rules="quizselect"
                    v-model="quiz2false2"
                    counter=""
                    rounded
                    dense
                  ></v-text-field
                ></v-col>
              </v-row>
            </div>
          </v-card>
          <!-- quiz 3 -->
          <v-card class="col-md-5 mt-3 pb-1" outlined color="card">
            <div class="text-right">
              <v-col cols="12" sm="12" md="12" class="ma-0 pa-0">
                <v-text-field
                  label="اكتب سؤالك 3  "
                  placeholder="اكتب سؤالك 3  "
                  filled
                  :rules="quizat"
                  v-model="quiz3"
                  counter=""
                  rounded
                  dense
                ></v-text-field>
              </v-col>
              <v-row>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    label="اكتب الجواب الصحيح  "
                    placeholder="اكتب الجواب الصحيح  "
                    filled
                    :rules="quizselect"
                    v-model="quiz3true"
                    counter=""
                    rounded
                    dense
                  ></v-text-field
                ></v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    label="اكتب الجواب الخطأ 1  "
                    placeholder="اكتب الجواب الخطأ 1  "
                    filled
                    :rules="quizselect"
                    v-model="quiz3false1"
                    counter=""
                    rounded
                    dense
                  ></v-text-field
                ></v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    label="اكتب الجواب الخطأ 2  "
                    placeholder="اكتب الجواب الخطأ 2  "
                    filled
                    :rules="quizselect"
                    v-model="quiz3false2"
                    counter=""
                    rounded
                    dense
                  ></v-text-field
                ></v-col>
              </v-row>
            </div>
          </v-card>
          <!-- quiz 4 -->
          <v-card class="col-md-5 mt-3 pb-1" outlined color="card">
            <div class="text-right">
              <v-col cols="12" sm="12" md="12" class="ma-0 pa-0">
                <v-text-field
                  label="اكتب سؤالك 4  "
                  placeholder="اكتب سؤالك 4  "
                  filled
                  :rules="quizat"
                  v-model="quiz4"
                  counter=""
                  rounded
                  dense
                ></v-text-field>
              </v-col>
              <v-row>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    label="اكتب الجواب الصحيح  "
                    placeholder="اكتب الجواب الصحيح  "
                    filled
                    :rules="quizselect"
                    v-model="quiz4true"
                    counter=""
                    rounded
                    dense
                  ></v-text-field
                ></v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    label="اكتب الجواب الخطأ 1  "
                    placeholder="اكتب الجواب الخطأ 1  "
                    filled
                    :rules="quizselect"
                    v-model="quiz4false1"
                    counter=""
                    rounded
                    dense
                  ></v-text-field
                ></v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    label="اكتب الجواب الخطأ 2  "
                    placeholder="اكتب الجواب الخطأ 2  "
                    filled
                    :rules="quizselect"
                    v-model="quiz4false2"
                    counter=""
                    rounded
                    dense
                  ></v-text-field
                ></v-col>
              </v-row>
            </div>
          </v-card>
          <!-- quiz 5 -->
          <v-card class="col-md-5 mt-3 pb-1" outlined color="card">
            <div class="text-right">
              <v-col cols="12" sm="12" md="12" class="ma-0 pa-0">
                <v-text-field
                  label="اكتب سؤالك 5  "
                  placeholder="اكتب سؤالك 5  "
                  filled
                  :rules="quizat"
                  v-model="quiz5"
                  counter=""
                  rounded
                  dense
                ></v-text-field>
              </v-col>
              <v-row>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    label="اكتب الجواب الصحيح  "
                    placeholder="اكتب الجواب الصحيح  "
                    filled
                    :rules="quizselect"
                    v-model="quiz5true"
                    counter=""
                    rounded
                    dense
                  ></v-text-field
                ></v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    label="اكتب الجواب الخطأ 1  "
                    placeholder="اكتب الجواب الخطأ 1  "
                    filled
                    :rules="quizselect"
                    v-model="quiz5false1"
                    counter=""
                    rounded
                    dense
                  ></v-text-field
                ></v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    label="اكتب الجواب الخطأ 2  "
                    placeholder="اكتب الجواب الخطأ 2  "
                    filled
                    :rules="quizselect"
                    v-model="quiz5false2"
                    counter=""
                    rounded
                    dense
                  ></v-text-field
                ></v-col>
              </v-row>
            </div>
            <v-card class="pa-2">
              <v-btn text class="mr-2 primary" rounded @click="addChalenges">
                <v-icon>mdi-plus</v-icon> انشئ إستطلاع لاصدقائك
              </v-btn>
            </v-card>
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
      addquiz: true,
      // quizat
      quiz1: "",
      quiz2: "",
      quiz3: "",
      quiz4: "",
      quiz5: "",
      //   true quiz
      quiz1true: "",
      quiz2true: "",
      quiz3true: "",
      quiz4true: "",
      quiz5true: "",
      // false one quiz
      quiz1false1: "",
      quiz2false1: "",
      quiz3false1: "",
      quiz4false1: "",
      quiz5false1: "",
      // false two quiz
      quiz1false2: "",
      quiz2false2: "",
      quiz3false2: "",
      quiz4false2: "",
      quiz5false2: "",
    };
  },
  computed: {
    quizat() {
      return [
        (v) => !!v || "معدرة السؤال فارغ فارغة",
        (v) => (v && v.length <= 90) || "معدرة السؤال كبير للغاية",
      ];
    },
    quizselect() {
      return [
        (v) => !!v || "معدرة السؤال فارغ فارغة",
        (v) => (v && v.length <= 20) || "معدرة السؤال كبير للغاية",
      ];
    },
    valide() {
      return this.$refs.quiz.validate();
    },
  },
  methods: {
    addChalenges: function() {
      if (this.valide) {
        alert(1);
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
