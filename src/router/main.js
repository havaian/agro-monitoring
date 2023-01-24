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
import Total_areaComponent from '../components/pages/total_area_component.vue';
import Farmer_regionsComponent from '../components/pages/farmer_regions_component.vue';
import Aim_indicator_predictionsComponent from '../components/pages/aim_indicator_predictions_component.vue';
import Main_farmer_productsComponent from '../components/pages/main_farmer_products_component.vue';
import Plant_water_areasComponent from '../components/pages/plant_water_areas_component.vue';
import Nitrogen_fertilizersComponent from '../components/pages/nitrogen_fertilizers_component.vue';
import Farmer_areas_2022_2023Component from '../components/pages/farmer_areas_2022_2023_component.vue';
import Planting_stats_2022Component from '../components/pages/planting_stats_2022_component.vue';
import Farmer_area_stats_2023Component from '../components/pages/farmer_area_stats_2023_component.vue';
import Cotton_industry_stats_2022Component from '../components/pages/cotton_industry_stats_2022_component.vue';
import Cotton_output_financeComponent from '../components/pages/cotton_output_finance_component.vue';
import Budget_money_on_cornComponent from '../components/pages/budget_money_on_corn_component.vue';
import Cluster_corn_farmer_debtComponent from '../components/pages/cluster_corn_farmer_debt_component.vue';
import Subsidy_finance_useComponent from '../components/pages/subsidy_finance_use_component.vue';
import Regional_investment_projects_networkComponent from '../components/pages/regional_investment_projects_network_component.vue';
import Farmer_regional_investment_projects_regionatedComponent from '../components/pages/farmer_regional_investment_projects_regionated_component.vue';
import Outdated_debtComponent from '../components/pages/outdated_debt_component.vue';


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
      component: Total_areaComponent
    },
    {
      path: "/farmer-regions",
      name: "Farmer_regions",
      component: Farmer_regionsComponent
    },
    {
      path: "/statistical-data",
      name: "Statistical_data",
      component: Statistical_dataComponent
    },
    {
      path: "/aim-indicator-predictions",
      name: "Aim_indicator_predictions",
      component: Aim_indicator_predictionsComponent
    },
    {
      path: "/main-product",
      name: "Main_product",
      component: Main_productComponent
    },
    {
      path: "/main-farmer-products",
      name: "Main_farmer_products",
      component: Main_farmer_productsComponent
    },
    { 
      path: "/grain", 
      name: "Grain", 
      component: GrainComponent
    },
    {
      path: "/plant-water-areas",
      name: "Plant_water_areas",
      component: Plant_water_areasComponent
    },
    {
      path: "/nitrogen-fertilizers",
      name: "Nitrogen_fertilizers",
      component: Nitrogen_fertilizersComponent
    },
    { 
      path: "/e-action", 
      name: "E_action", 
      component: E_actionComponent
    },
    {
      path: "/farmer-areas-2022-2023",
      name: "Farmer_areas_2022_2023",
      component: Farmer_areas_2022_2023Component
    },
    {
      path: "/planting-stats-2022",
      name: "Planting_stats_2022",
      component: Planting_stats_2022Component
    },
    {
      path: "/farmer-area-stats-2023",
      name: "Farmer_area_stats_2023",
      component: Farmer_area_stats_2023Component
    },
    {
      path: "/financial-tables",
      name: "Financial_tables",
      component: Financial_tablesComponent
    },
    {
      path: "/cotton-money-return",
      name: "Cotton_money_return",
      component: Cotton_money_returnComponent
    },
    {
      path: "/cotton-industry-stats-2022",
      name: "Cotton_industry_stats_2022",
      component: Cotton_industry_stats_2022Component
    },
    {
      path: "/cotton-output-finance",
      name: "Cotton_output_finance",
      component: Cotton_output_financeComponent
    },
    {
      path: "/budget-money-on-corn",
      name: "Budget_money_on_corn",
      component: Budget_money_on_cornComponent
    },
    {
      path: "/outdated-debt",
      name: "Outdated_debt",
      component: Outdated_debtComponent
    },
    {
      path: "/cluster-corn-farmer-debt",
      name: "Cluster_corn_farmer_debt",
      component: Cluster_corn_farmer_debtComponent
    },
    {
      path: "/subsidy-finance-use",
      name: "Subsidy_finance_use",
      component: Subsidy_finance_useComponent
    },
    {
      path: "/statistical-data",
      name: "Statistical_data",
      component: Statistical_dataComponent
    },
    {
      path: "/fruit-vegs-export-execution",
      name: "Fruit_vegs_export_execution",
      component: Fruit_vegs_export_executionComponent
    },
    {
      path: "/investment",
      name: "Investment",
      component: InvestmentComponent
    },
    {
      path: "/regional-investment-projects-network",
      name: "Regional_investment_projects_network",
      component: Regional_investment_projects_networkComponent
    },
    {
      path: "/farmer-regional-investment-projects-regionated",
      name: "Farmer_regional_investment_projects_regionated",
      component: Farmer_regional_investment_projects_regionatedComponent
    },
    {
      path: "/farmer-lands",
      name: "Farmer_lands",
      component: Farmer_landsComponent
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