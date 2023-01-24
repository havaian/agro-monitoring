import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../components/pages/login_component.vue';
import DashbordComponent from '../components/pages/dashboard_component.vue';
import StatComponent from '../components/pages/stat_component.vue';
import Enforcement_process_infoComponent from '../components/pages/enforcement_process_info_component.vue'
import Statistical_dataComponent from '../components/pages/statistical_data_component.vue';
import Main_productComponent from '../components/pages/main_product_component.vue';
import GrainComponent from '../components/pages/grain_component.vue';
import E_actionComponent from '../components/pages/e_action_component.vue';
import Financial_tablesComponent from '../components/pages/financial_tables_component.vue';
import Cotton_money_returnComponent from '../components/pages/cotton_money_return_component.vue';
import Fruit_vegs_export_executionComponent from '../components/pages/fruit_vegs_export_execution_component.vue';
import InvestmentComponent from '../components/pages/investment_component.vue';
import Farmer_landsComponent from '../components/pages/farmer_lands_component.vue';
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
    {
        path: "/total-area",
        name: "Total_area",
        component: Enforcement_process_infoComponent
      },
      {
        path: "/farmer-regions",
        name: "Farmer_regions",
        component: Enforcement_process_infoComponent
      },
      {
        path: "/aim-indicator-predictions",
        name: "Aim_indicator_predictions",
        component: Statistical_dataComponent
      },
      {
        path: "/main-farmer-products",
        name: "Main_farmer_products",
        component: Main_productComponent
      },
      {
        path: "/plant-water-areas",
        name: "Plant_water_areas",
        component: GrainComponent
      },
      {
        path: "/nitrogen-fertilizers",
        name: "Nitrogen_fertilizers",
        component: GrainComponent
      },
      {
        path: "/farmer-areas-2022-2023",
        name: "Farmer_areas_2022_2023",
        component: E_actionComponent
      },
      {
        path: "/planting-stats-2022",
        name: "Planting_stats_2022",
        component: E_actionComponent
      },
      {
        path: "/farmer-area-stats-2023",
        name: "Farmer_area_stats_2023",
        component: E_actionComponent
      },
      {
        path: "/cotton-money-return",
        name: "Cotton_money_return",
        component: Financial_tablesComponent
      },
      {
        path: "/cotton-industry-stats-2022",
        name: "Cotton_industry_stats_2022",
        component: Financial_tablesComponent
      },
      {
        path: "/cotton-output-finance",
        name: "Cotton_output_finance",
        component: Financial_tablesComponent
      },
      {
        path: "/budget-money-on-corn",
        name: "Budget_money_on_corn",
        component: Financial_tablesComponent
      },
      {
        path: "/outdated-debt",
        name: "Outdated_debt",
        component: Financial_tablesComponent
      },
      {
        path: "/cluster-corn-farmer-debt",
        name: "Cluster_corn_farmer_debt",
        component: Financial_tablesComponent
      },
      {
        path: "/subsidy-finance-use",
        name: "Subsidy_finance_use",
        component: Financial_tablesComponent
      },
      {
        path: "/fruit-vegs-export-execution",
        name: "Fruit_vegs_export_execution",
        component: Statistical_dataComponent
      },
      {
        path: "/regional-investment-projects-network",
        name: "Regional_investment_projects_network",
        component: InvestmentComponent
      },
      {
        path: "/farmer-regional-investment-projects-regionated",
        name: "Farmer_regional_investment_projects_regionated",
        component: InvestmentComponent
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