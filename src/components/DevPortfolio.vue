<template>
  <v-card class="mt-2">
    <v-row>
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header color="#FFCAFA"
            dense>
            <template v-slot:default="{open}" >
              <v-row class=" ma-0 pa-0">
                <v-col class=" ma-0 pa-0 mt-4">
                  <h4>Links</h4>
                </v-col>
                <v-col class=" ma-0 pa-0">
                  <v-card-actions style="float: right">
                    <span v-if="!open" key="0" class="overline text--disabled ma-0 pa-0" >
                      <h4 color="black--text">Show</h4>
                    </span>
                    <span v-else key="1" class="overline text--disabled ma-0 pa-0">
                      <h4 color="black--text">Hide</h4>
                    </span>
                  </v-card-actions>
                </v-col>
              </v-row>
            </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row class="mt-2">
                <v-col cols="4">
                  <v-img :src="require('@/../src/assets/sea_link.jpeg')" alt='Link to theseagoddessgrotto.com'/>
                </v-col>
                <v-col cols="4">
                  <v-img :src="require('@/../src/assets/git_link.jpeg')" alt='Link to GitHub'/>
                </v-col>

                <v-col cols="4">
                  <v-img :src="require('@/../src/assets/linkedin_link.jpeg')" alt='Link to LinkedIn'/>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header color="#FFCAFA"
            dense>
            
            <template v-slot:default="{open}" >
              <v-row class=" ma-0 pa-0">
                <v-col class=" ma-0 pa-0 mt-4">
                  <h4>Skills</h4>
                </v-col>
                <v-col class=" ma-0 pa-0">
                  <v-card-actions style="float: right">
                    <span v-if="!open" key="0" class="overline text--disabled ma-0 pa-0" >
                      <h4 color="black--text">Show</h4>
                    </span>
                    <span v-else key="1" class="overline text--disabled ma-0 pa-0">
                      <h4 color="black--text">Hide</h4>
                    </span>
                  </v-card-actions>
                </v-col>
              </v-row>
            </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content >
              <v-row class="mt-2">
                <v-col cols="">
                  <v-img :src="require('@/../src/assets/logo-javascript.svg')" alt='JavaScript'
                  style="height:200px;width: 200px;"/>
                </v-col>
                <v-col cols="">
                  <v-img :src="require('@/../src/assets/css3.svg')" alt='CSS 3' style="height:200px;width: 200px;"/>
                </v-col>
                <v-col cols="">
                  <v-img :src="require('@/../src/assets/html5.svg')" alt='HTML 5' style="height:200px;width: 200px;"/>
                </v-col>
                <v-col cols="">
                  <v-img :src="require('@/../src/assets/postgresql.svg')" alt='PostgreSQL' style="height:200px;width: 200px;"/>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="">
                  <v-img :src="require('@/../src/assets/git.svg')" alt='Git' style="height:100px;width: 240px;"/>
                </v-col>
                <v-col cols="">
                  <v-img :src="require('@/../src/assets/nodejs-2.svg')" alt='Nodejs' style="height:200px;width: 200px;"/>
                </v-col>
                <v-col cols="">
                  <v-img :src="require('@/../src/assets/github-icon-1.svg')" alt='Github' style="height:200px;width: 200px;"/>
                </v-col>
                <v-col cols="">
                  <v-img :src="require('@/../src/assets/react-1.svg')" alt='React' style="height:200px;width: 200px;"/>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
    name: 'DevPortfolio',
    components: {},
    data(){
        return {
            pageName: 'DevPortfolio',
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