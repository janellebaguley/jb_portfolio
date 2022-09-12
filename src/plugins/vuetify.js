import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {

            },
            cark: {

            },
        },
    },
    icons: {
        iconfont: 'mdi',  // default - only for display purposes
    },
})