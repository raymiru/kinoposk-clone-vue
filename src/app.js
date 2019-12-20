import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import VueRouter from "vue-router";
import {routes} from './routes'
import '@/assets/styles/index.css'


import InnerLayout from './layouts/Inner'

Vue.component('DefaultLayout');
Vue.component('InnerLayout', InnerLayout);
Vue.component('Wrapper', () => import('./components/common/Wrapper'));
Vue.component('Flex', () => import('./components/common/Flex'));
Vue.component('Block', () => import('./components/common/Block'));
Vue.component('Container', () => import('./components/common/Container'));


Vue.use(VueRouter);


const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})



