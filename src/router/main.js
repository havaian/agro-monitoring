import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../components/login_component.vue';
import DashbordComponent from '../components/dashboard_component.vue';
import StatComponent from '../components/stat_component.vue';
import ReportComponent from '../components/report_component.vue';
import PlanComponent from '../components/plan_component.vue';
import UserComponent from '../components/user_component.vue';

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
        path: '/stats',
        name: 'Statistics',
        component: StatComponent
    },
    {
        path: '/reports',
        name: 'Reports',
        component: ReportComponent
    },
    {
        path: '/plans',
        name: 'Add plans',
        component: PlanComponent
    },
    {
        path: '/users',
        name: 'Users',
        component: UserComponent
    }
];

const router = createRouter({ 
    history: createWebHistory(),
    mode: 'history',
    routes: routes,
    linkActiveClass: "active",
    linkExactActiveClass: "",
 });

export default router;