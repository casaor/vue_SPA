import VueRouter from 'vue-router'
import Home from './views/Home.vue';
import Clients from './views/Clients.vue';
import Proveidors from './views/Proveidors.vue';
import Magatzem from './views/Magatzem.vue';
import Botiga from './views/Botiga.vue';

const paths = [
    { 
        path: '/home', 
        component: Home 
    },
    { 
        path: '/clients', 
        component: Clients 
    },
    { 
        path: '/proveidors', 
        component: Proveidors 
    },
    { 
        path: '/magatzem', 
        component: Magatzem 
    },
    { 
        path: '/botiga', 
        component: Botiga 
    },
    {
        path: '/clients/:id',
        name: 'clients',
        component: Clients
    },
];

const router = new VueRouter (
{
    routes: paths,
    mode: 'history'
});

export default router;