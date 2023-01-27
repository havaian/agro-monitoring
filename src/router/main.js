import { createRouter, createWebHistory } from 'vue-router';
import Login_component from '../components/pages/login_component.vue';
import Dashbord_component from '../components/pages/dashboard_component.vue';
import Cotton_money_return_component from '../components/pages/cotton_money_return_component.vue';
import Fruit_vegs_export_execution_component from '../components/pages/fruit_vegs_export_execution_component.vue';
import Total_area_component from '../components/pages/total_area_component.vue';
import Farmer_regions_component from '../components/pages/farmer_regions_component.vue';
import Aim_indicator_predictions_component from '../components/pages/aim_indicator_predictions_component.vue';
import Main_farmer_products_component from '../components/pages/main_farmer_products_component.vue';
import Plant_water_areas_component from '../components/pages/plant_water_areas_component.vue';
import Nitrogen_fertilizers_component from '../components/pages/nitrogen_fertilizers_component.vue';
import Farmer_areas_2022_2023_component from '../components/pages/farmer_areas_2022_2023_component.vue';
import Planting_stats_2022_component from '../components/pages/planting_stats_2022_component.vue';
import Farmer_area_stats_2023_component from '../components/pages/farmer_area_stats_2023_component.vue';
import Cotton_industry_stats_2022_component from '../components/pages/cotton_industry_stats_2022_component.vue';
import Cotton_output_finance_component from '../components/pages/cotton_output_finance_component.vue';
import Budget_money_on_corn_component from '../components/pages/budget_money_on_corn_component.vue';
import Cluster_corn_farmer_debt_component from '../components/pages/cluster_corn_farmer_debt_component.vue';
import Subsidy_finance_use_component from '../components/pages/subsidy_finance_use_component.vue';
import Regional_investment_projects_network_component from '../components/pages/regional_investment_projects_network_component.vue';
import Farmer_regional_investment_component from '../components/pages/farmer_regional_investment_component.vue';
import Outdated_debt_component from '../components/pages/outdated_debt_component.vue';
import Excel_Upload_component from '../components/partials/excel_upload_component.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login_component
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashbord_component
    },
    {
        path: "/total-area",
        name: "Total_area",
        component: Total_area_component
    },
    {
        path: "/farmer-regions",
        name: "Farmer_regions",
        component: Farmer_regions_component
    },
    {
        path: "/aim-indicator-predictions",
        name: "Aim_indicator_predictions",
        component: Aim_indicator_predictions_component
    },
    {
        path: "/plant-water-areas",
        name: "Plant_water_areas",
        component: Plant_water_areas_component
    },
    {
        path: "/nitrogen-fertilizers",
        name: "Nitrogen_fertilizers",
        component: Nitrogen_fertilizers_component
    },
    {
        path: "/farmer-areas-2022-2023",
        name: "Farmer_areas_2022_2023",
        component: Farmer_areas_2022_2023_component
    },
    {
        path: "/planting-stats-2022",
        name: "Planting_stats_2022",
        component: Planting_stats_2022_component
    },
    {
        path: "/farmer-area-stats-2023",
        name: "Farmer_area_stats_2023",
        component: Farmer_area_stats_2023_component
    },
    {
        path: "/cotton-money-return",
        name: "Cotton_money_return",
        component: Cotton_money_return_component
    },
    {
        path: "/cotton-industry-stats-2022",
        name: "Cotton_industry_stats_2022",
        component: Cotton_industry_stats_2022_component
    },
    {
        path: "/cotton-output-finance",
        name: "Cotton_output_finance",
        component: Cotton_output_finance_component
    },
    {
        path: "/budget-money-on-corn",
        name: "Budget_money_on_corn",
        component: Budget_money_on_corn_component
    },
    {
        path: "/outdated-debt",
        name: "Outdated_debt",
        component: Outdated_debt_component
    },
    {
        path: "/cluster-corn-farmer-debt",
        name: "Cluster_corn_farmer_debt",
        component: Cluster_corn_farmer_debt_component
    },
    {
        path: "/subsidy-finance-use",
        name: "Subsidy_finance_use",
        component: Subsidy_finance_use_component
    },
    {
        path: "/fruit-vegs-export-execution",
        name: "Fruit_vegs_export_execution",
        component: Fruit_vegs_export_execution_component
    },
    {
        path: "/regional-investment-projects-network",
        name: "Regional_investment_projects_network",
        component: Regional_investment_projects_network_component
    },
    {
        path: "/farmer-regional-investment-projects-regionated",
        name: "Farmer_regional_investment_projects_regionated",
        component: Farmer_regional_investment_component
    },
    {
        path: "/excel-upload",
        name: "excel_upload",
        component: Excel_Upload_component
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