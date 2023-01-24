import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../components/pages/login_component.vue';
import DashbordComponent from '../components/pages/dashboard_component.vue';
import StatComponent from '../components/pages/stat_component.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashbordComponent
    },
    {
        path: '/statistic-data',
        name: 'Statistics',
        component: StatComponent
    },
];

const router = createRouter({ 
    history: createWebHistory(),
    mode: 'history',
    routes: routes,
    linkActiveClass: "active",
    linkExactActiveClass: "",
 });

export default router;