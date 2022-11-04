<template>
  <v-card class="mt-2" >
    <v-row> 
      <v-col cols="5"/>
            <v-col>
              <h1>Contact me!</h1>
            </v-col>
          </v-row>
          <v-row>
      <v-col cols="3"/>
            <v-col>
              <v-text-field 
              label='*First Name' type='text' v-model='firstName' required outlined dense/>
            </v-col>
            <v-col>
              <v-text-field
              label='*Last Name' type='text' v-model='lastName' required outlined dense/>
            </v-col>
      <v-col cols="3"/>
          </v-row>
          <v-row >
      <v-col cols="3"/>
            <v-col>
              <v-text-field label="*E-mail" v-model="email" :rules="emailRules" type='email' required outlined dense/>
            </v-col>
      <v-col cols="3"/>
          </v-row>
          <v-row>
      <v-col cols="3"/>
      <v-col>
        <v-textarea label="*Message"
        v-model='message' type='text' required outlined dense/>
      </v-col>
      <v-col cols="3"/>
          </v-row>
          <v-row>
      <v-col cols="8"/>
            <v-col class="mb-2">
              <v-btn color="#FF6CF0" class="white--text">Submit</v-btn>
            </v-col>
      <v-col cols="3"/>
          </v-row>
  </v-card>
</template>
<script>
export default {
    name: 'ContactMe',
    components: {},
    data(){
        return {
            pageName: 'ContactMe',
            form: {},

        }
    },
    mounted(){
    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"));
      this.getData();
    }
  }
}
</script>