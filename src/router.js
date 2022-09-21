import Vue from 'vue';
import Router from 'vue-router'
import DevPortfolio from './components/DevPortfolio.vue';
import UxPortfolio from './components/UxPortfolio.vue';
import AboutMe from './components/AboutMe.vue';
import ContactMe from './components/ContactMe.vue';
import EtsyShop from './components/EtsyShop.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'AboutMe',
            component: AboutMe,
        },
        {
            path: '/contact',
            name: 'ContactMe',
            component: ContactMe,
        },
        {
            path: '/developer',
            name: 'DevPortfolio',
            component: DevPortfolio,
        },
        {
            path: '/user-experience',
            name: 'UxPortfolio',
            component: UxPortfolio,
        },
        {
            path: '/shop',
            name: 'EtsyShop',
            component: EtsyShop,
        }
    ]
});