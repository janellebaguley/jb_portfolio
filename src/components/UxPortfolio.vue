<template>
  <v-card class="mt-2">
    <v-row >
      <v-col>
        <v-expansion-panels color='black' dense flat>
          <v-expansion-panel>
            <v-expansion-panel-header
            color="#FFCAFA"
            dense>
            <template v-slot:default="{open}" >
              <v-row class=" ma-0 pa-0">
                <v-col class=" ma-0 pa-0 mt-4">
                  <h4>Sea Goddess Grotto</h4>
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
                <v-col cols="2" >
                  <v-img :src="require('@/../src/assets/font_color_sea.jpeg')" alt='Fonts and Colors'/>
                </v-col>
                <v-col cols="1" >
                  <v-img :src="require('@/../src/assets/sea_dropdown.jpeg')" alt='Dropdown Menu'/>
                </v-col>
                <v-col cols="3" class="mt-2">
                  <v-img :src="require('@/../src/assets/home_sea.jpeg')" alt='Octopus Home Page'/>
                </v-col>
                <v-col cols="3" >
                  <v-img :src="require('@/../src/assets/gallery_sea.jpeg')" alt='Gallery Photos'/>
                </v-col>
                <v-col cols="3" >
                  <v-img :src="require('@/../src/assets/event_sea.jpeg')" alt='Events Page'/>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-img :src="require('@/../src/assets/event_sea.jpeg')" alt='Events Page'/>
                </v-col>
                <v-col cols="3" >
                  <v-img :src="require('@/../src/assets/psychic_sea.jpeg')" alt='Psychic Page'/>
                </v-col>
                <v-col cols="3" >
                  <v-img :src="require('@/../src/assets/contact_sea.jpeg')" alt='Contact Page'/>
                </v-col>
                <v-col cols="3" ></v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-expansion-panels dense flat>
          <v-expansion-panel>
            <v-expansion-panel-header
            color="#FFCAFA"
            dense>
            <template v-slot:default="{open}" >
              <v-row class=" ma-0 pa-0">
                <v-col class=" ma-0 pa-0 mt-4">
                  <h4>Blush Restoration</h4>
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
                <v-col cols="2">
                  <v-img :src="require('@/../src/assets/home_blush.jpeg')" alt='Blush Home Page'/>
                </v-col>
                <v-col cols="2">
                  <v-img :src="require('@/../src/assets/furniture_blush.jpeg')" alt='Blush Furniture Page'/>
                </v-col>
                <v-col cols="2">
                  <v-img :src="require('@/../src/assets/designs_blush.jpeg')" alt='Blush Designs Page'/>
                </v-col>
                <v-col cols="2">
                  <v-img :src="require('@/../src/assets/checkout_blush.jpeg')" alt='Blush Checkout Page'/>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-expansion-panels dense flat>
          <v-expansion-panel>
            <v-expansion-panel-header
            color="#FFCAFA"
            dense>
            <template v-slot:default="{open}" >
              <v-row class=" ma-0 pa-0">
                <v-col class=" ma-0 pa-0 mt-4">
                  <h4>Band Social</h4>
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
                <v-col cols="2">
                  <v-img :src="require('@/../src/assets/band_calendar.jpeg')" alt='Band Calendar Page'/>
                </v-col>
                <v-col cols="2">
                  <v-img :src="require('@/../src/assets/group_band.jpeg')" alt='Band Group Page'/>
                </v-col>
                <v-col cols="2">
                  <v-img/>
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
    name: 'UxPortfolio',
    components: {},
    data(){
        return {
            pageName: 'UxPortfolio',
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
<style>
  .v-expansion-panel-header {
  color: black;
  }
  .theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon {
  color: black !important;
}
  .v-btn {
  text-transform: none;
}
.theme--light.v-data-table
  .v-data-table-header
  th.sortable.active
  .v-data-table-header__icon {
  color: black !important;
}
.v-list-item__icon.v-list-group__header__append-icon {
  color: black !important;
}
</style>