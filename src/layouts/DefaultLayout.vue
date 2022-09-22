<template>
    <v-app >
        <v-card style="height:50px;" color="#535252"></v-card>
       <v-card style="'height:120px; width:'max-width'" color='#fff' class="">
         <v-row class='mx-1' color="white">
           <v-col class='mx-1 mt-6' cols='4'>
             <h1 style="color: #000">Janelle Baguley</h1>
           </v-col>
           <v-col class='ml-2 mt-16'>
             <v-btn class='ma-0 pa-0' color='fff' @click='aboutMe' text dense> About Me</v-btn>
           </v-col>
          
           <v-col class='mt-16'>
             <v-btn class='ma-0 pa-0' color='' @click='uxPortfolio' text dense> UX Portfolio</v-btn>
           </v-col>
           <v-col class='mt-16'>
             <v-btn class='ma-0 pa-0' color='' @click='devPortfolio' text dense> Dev Portfolio</v-btn>
           </v-col>
           <v-col class='mt-16'>
             <v-btn class='ma-0 pa-0' color='' @click='contactMe' text dense> Contact Me</v-btn>
           </v-col>
         </v-row>
       </v-card>
       <v-main >
         <v-container id="con">
           <v-row class="fill-height">
             <v-col>
               <transition name="fade">
                 <keep-alive include="">
                   <router-view :key="$route.fullPath"></router-view>
                 </keep-alive>
               </transition>
             </v-col>
           </v-row>
         </v-container>
       </v-main>

       <v-footer class='ma-0 pa-0' color="#535252" style="height:150px; width:'max-width'">
        <v-container style="height: 100px; width:'max-width'">
          <v-card class='ma-0 pa-0 mx-2' style="height: 100px; width:'max-width'">
            <v-row>
              <v-col class='ml-10 mt-6'>
             <v-btn class='ma-0 pa-0' color='fff' @click='aboutMe' text dense> About Me</v-btn>
           </v-col>
          
           <v-col class='mt-6'>
             <v-btn class='ma-0 pa-0' color='' @click='uxPortfolio' text dense> UX Portfolio</v-btn>
           </v-col>
           <v-col class='mt-6'>
             <v-btn class='ma-0 pa-0' color='' @click='devPortfolio' text dense> Dev Portfolio</v-btn>
           </v-col>
           <v-col class='mt-6'>
             <v-btn class='ma-0 pa-0' color='' @click='contactMe' text dense> Contact Me</v-btn>
           </v-col>
           <v-col class='mt-6'>
             <v-btn class='ma-0 pa-0' color='' @click='etsyShop' text dense> Etsy Shop</v-btn>
           </v-col>
            </v-row>
          </v-card>
        </v-container>
       </v-footer>
     </v-app>
   </template>
   <script>
   import Vue from "vue";
   import VueRouter from "vue-router";
   Vue.use(VueRouter);
   export default {
    components: {},
     data() {
       return {
       }
     },
     
     computed: {
     },
     watch: {
     },
     methods: {
       
       aboutMe(){
         this.$router.push({
           name: "AboutMe",
         });
       },
       uxPortfolio(){
         this.$router.push({
           name: "UxPortfolio",
         });
       },
       devPortfolio(){
         this.$router.push({
           name: "DevPortfolio",
         });
       },
       contactMe(){
         this.$router.push({
           name: "ContactMe",
         });
       },
       etsyShop(){
         this.$router.push({
           name: "EtsyShop",
         });
       },
     }
   };
   </script>
   <style>
  .v-dialog {
  background-color: #ffffff !important;
}

.v-dialog > .v-card > .v-card__text {
  padding: 0 20px 1px 24px !important;
}

.v-main {
  width: 100%;
  background-color: #535252 !important;
}


.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  color: white !important;
  font-size: 0.85em;
  font-family: "Annabelle";
}

h1 {
  font-size: 44px;
}

.v-data-table-header tr {
}

.theme--light.v-data-table .v-data-table-header th.sortable,
.theme--light.v-data-table .v-data-table-header th.sortable.active {
  
}

.theme--light.v-data-table .v-data-table-header th.sortable:hover,
.theme--light.v-data-table .v-data-table-header th.sortable.active {
  
}

.theme--light.v-data-table
  .v-data-table-header
  th.sortable.active
  .v-data-table-header__icon {
  color: white !important;
}



.v-application--is-ltr
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding-left: 64px !important;
}

.v-list-item__icon.v-list-group__header__append-icon {
  color: white !important;
}

.v-list-item.v-list-group__header {
  padding-left: 0;
}

.nobr {
  white-space: nowrap;
}

.v-input {
  color: #ffffff;
}

.v-dialog {
  color: #ffffff;
}

@media (min-width: 960px) {
  .container {
    max-width: 1100px !important;
  }
}

@media (min-width: 1264px) {
  .container {
    max-width: none !important;
  }
}

@media (min-width: 1904px) {
  .container {
    max-width: none !important;
  }
}

.topbar-text {
  font-size: 1rem;
  padding: 0;
}

.tiny {
  font-size: 0.7rem;
}

.v-toolbar__content {
  max-width: none !important;
}

.container .nopadd {
  padding: 0 0;
  /* padding-left: 1rem; */
}


div.no-gutters .footerlinks-wrapper {
  padding-top: 0.7rem;
}

.v-application a.footerlinks {
  color: #ffffff;
  text-decoration: underline;
  font-size: 0.75rem;
  font-family: "Annabelle";
}

.v-application a.footerlinks:hover {
  color: #ffffff;
}

.v-btn--contained::after {
  box-shadow: 0;
}

@media (max-width: 960px) {
  .topbar-text {
    display: none;
  }

  .topbar-search {
    display: none;
  }
}
   </style>