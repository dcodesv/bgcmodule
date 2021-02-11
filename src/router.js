import Vue from 'vue'
import VueRouter from 'vue-router'

import Condiciones from '@/views/Condiciones.vue'
import Protocolos from '@/views/Protocolos.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    base: process.env.BABEL_URl,
    routes:[
        {
            path: '/',
            name: 'condiciones',
            component: Condiciones
        },
        {
            path: '/protocolos/:id',
            name: 'protocolos',
            component: Protocolos
        }
    ]
});