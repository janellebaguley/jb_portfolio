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
           name: "contactMe",
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

.v-input.dg-page-size {
  font-size: 14px !important;
  font-family: "Annabelle";
}

.v-main__wrap {
  width: 100%;
  background-color: #535252 !important;
}
.v-main {
  width: 100%;
  background-color: #535252 !important;
}

.v-list-item__title {
  align-self: center;
  font-size: 1rem !important;
  margin-top: 2px !important;
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
  background-color: #4889e0 !important;
  color: #535252 !important;
}

.theme--light.v-data-table .v-data-table-header th.sortable,
.theme--light.v-data-table .v-data-table-header th.sortable.active {
  color: #535252 !important;
}

.theme--light.v-data-table .v-data-table-header th.sortable:hover,
.theme--light.v-data-table .v-data-table-header th.sortable.active {
  color: #535252 !important;
}

.theme--light.v-data-table
  .v-data-table-header
  th.sortable.active
  .v-data-table-header__icon {
  color: white !important;
}

.v-navigation-drawer
  .v-list-item--active.v-list-item.v-list-item--link.theme--dark {
  color: #ffffff !important;
  caret-color: #ffffff !important;
}

.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 24px !important;
}

.v-card__title.headline.primary {
  color: #ffffff !important;
}

.v-application--is-ltr
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding-left: 64px !important;
}

.v-navigation-drawer__content
  > .v-list-group__items
  > .v-list-item
  > .v-list-item__title {
  color: #e0b993 !important;
}

.v-list-item__icon.v-list-group__header__append-icon {
  color: white !important;
}

.v-list-item.v-list-group__header {
  padding-left: 0;
}

.v-navigation-drawer__content > .v-list-item__title {
  color: #ffffff;
}

.container {
  width: 100%;
  padding: 12px;
  margin-right: 200px;
  margin-left: 200px;
}

.theme--light.v-label {
  color: rgba(0, 0, 0, 0.6);
}

.nobr {
  white-space: nowrap;
}

.v-btn.search-toolbuttons.active {
  background: #39b54a;
  background-color: #39b54a !important;
  border-color: #39b54a;
  color: #ffffff;
}

.v-btn.search-toolbuttons {
  margin-left: 5px;
  background-color: #ffffff;
  border-color: #006fba;
  border-width: 1px;
  color: #006fba;
  margin-bottom: 5px;
}

.v-input {
  color: #ffffff;
}

.v-dialog {
  color: #ffffff;
}

.v-pagination {
  display: inline-flex;
  list-style-type: none;
  justify-content: right !important;
  margin: 0;
  max-width: 100%;
  width: 100%;
}

.nav-sublink .v-list-group__items .v-list-item__title {
  color: #d2d2d2 !important;
}

.theme--light.v-pagination .v-pagination__item--active {
  color: #8627e0 !important;
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
  font-family: "Annabelle";
  padding: 0;
}

.tiny {
  font-size: 0.7rem;
  font-family: "Annabelle";
}

.v-toolbar__content {
  max-width: none !important;
}

.container .nopadd {
  padding: 0 0;
  /* padding-left: 1rem; */
}

footer.theme--light.v-footer {
  background-color: #1d2c39;
  color: #ffffff;
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