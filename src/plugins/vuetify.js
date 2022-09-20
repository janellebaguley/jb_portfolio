import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework'
 import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#535252',
                secondary: '#fff',
                accent: '#FF6CF0',
                error: '#',
                success: '#',

            },
            dark: {
                primary: '#535252',
                secondary: '#fff',
                accent: '#FF6CF0',
                error: '#',
                success: '#',
            },
        },
    },
    icons: {
        iconfont: 'mdi',  // default - only for display purposes
    },
})