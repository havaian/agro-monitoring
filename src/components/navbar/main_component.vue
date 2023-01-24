<template>
    <div class="menu">
        <img src="/assets/icons/agro-logo-white.png" alt="">
        <div class="menu-wrapper">
            <template v-for="item in menuItems" key="parent-element">
              <router-link v-if="item.link_type != 'dropdown'" :key="item.key" class="router-link" :to="item.to" :show-icon="item.id">
                <div class="link-image">
                  <img class="base" :src="item.base_scr" alt="">
                  <img class="hover" :src="item.base_hover" alt="">
                </div>
                <p class='link-text'>{{ item.title }}</p>
              </router-link>
              <div v-else class="router-link" :parent='item.parent' :key="item.key" :show-icon="item.id">
                <div class="link">
                  <div class="link-image">
                    <img class="base" :src="item.base_scr" alt="">
                    <img class="hover" :src="item.base_hover" alt="">
                  </div>
                  <p class='link-text'>{{ item.title }}</p>
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
              <router-link v-for="elem in item.children" :parent='elem.parent' :data-type="elem.type" class="dropdown-router-link" :key="elem.key" :to="elem.to" :show-icon="elem.show_icon">
                <div class="link-image">
                  <img class="base" :src="elem.base_scr" alt="">
                  <img class="hover" :src="elem.base_hover" alt="">
                </div>
                <p class='link-text'>{{ elem.title }}</p>
              </router-link>
            </template>
        </div>
        <div class="contact-wrapper">
          <a class="contact" href="tel:+998996314221">
            <div class="contact-icon">
              <img src="/assets/icons/phone-logo.png" alt="">
            </div>
            <div class="contact-text">
              <p class="contact-top-text">
                Aloqa markazi
              </p>
              <p class="contact-bot-text">
                +998996314221
              </p>
            </div>
          </a>
        </div>
    </div>
</template>

<script>
export default {
  name: "main_navbar_component",
  props: [],
  mounted() {
    $('.router-link').click(e => {
      if (e.target != $('.router-link.active')[0]) {
        $('.router-link').removeClass('active');
        $(e.target).toggleClass('active');  
      } else {
        $(e.target).toggleClass('active');  
      }
      const children = $(`.dropdown-router-link`);
      for (let x = 0; x < children.length; x++) {
        $(children[x]).hide();
      }
      if ($('.router-link').hasClass('active')) {
        const parent = $('.router-link.active').attr('parent');
        const children = $(`.dropdown-router-link[parent="${parent}"]`);
        for (let x = 0; x < children.length; x++) {
          $(children[x]).show();
          if (x === children.length - 1) {
            $(children[x]).css('border-bottom', 'thin solid white');
          }
        }
      }
    });
  },
  data() {
    return {
      menuItems: {
        dashboard: {
          key: 'dashboard',
          to: '/dashboard',
          id: 'hide',
          base_src: '',
          hover_src: '',
          title: 'Дашборд',
          link_type: 'single',        
        },
        enforcement_process_info: {
          key: 'enforcement_process_info',
          id: 'hide',
          base_src: '',
          hover_src: '',
          title: 'Ижро интизоми бўйича маълумот',
          link_type: 'dropdown',
          parent: 'enforcement_process_info', 
          children: {
            total_area: {
                show_icon: 'hide',
                key: 'total_area',
                to: '/total-area',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: 'Жами ер майдон',
                parent: 'enforcement_process_info'
            },
            farmer_regions: {
                show_icon: 'hide',
                key: 'farmer_regions',
                to: '/farmer-regions',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: 'Қишлоқ хўжалиги ерлари ҳудудлар кесимида',
                parent: 'enforcement_process_info'
            },
          } 
        },
        statistical_data: {
          key: 'statistical_data',
          id: 'hide',
          base_src: '',
          hover_src: '',
          title: 'Статистик маълумот',
          link_type: 'dropdown',
          parent: 'statistical_data', 
          children: {
            aim_indicator_predictions: {
                show_icon: 'hide',
                key: 'aim_indicator_predictions',
                to: '/aim-indicator-predictions',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: 'Мақсадли кўрсаткичлар прогнози',
                parent: 'statistical_data'
            },
          } 
        },
        main_product: {
          key: 'main_product',
          id: 'hide',
          base_src: '',
          hover_src: '',
          title: 'Асосий маҳсулот',
          link_type: 'dropdown',
          parent: 'main_product', 
          children: {
            main_farmer_products: {
                show_icon: 'hide',
                key: 'main_farmer_products',
                to: '/main-farmer-products',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: 'Асосий турдаги қишлоқ хўжалиги маҳсулотлари',
                parent: 'main_product'
            },
          } 
        },
        grain: {
          key: 'grain',
          id: 'hide',
          base_src: '',
          hover_src: '',
          title: 'Ғалла',
          link_type: 'dropdown',
          parent: 'grain', 
          children: {
            plant_water_areas: {
                show_icon: 'hide',
                key: 'main_farmer_products',
                to: '/main-farmer-products',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: 'Экиш, суғориш ва униб чиққан майдонлар',
                parent: 'grain'
            },
            nitrogen_fertilizers: {
                show_icon: 'hide',
                key: 'nitrogen_fertilizers',
                to: '/nitrogen-fertilizers',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: 'Азотли ўғит жамғариш',
                parent: 'grain'
            },
          } 
        },
        e_action: {
          key: 'e_action',
          id: 'hide',
          base_src: '',
          hover_src: '',
          title: 'E-auksion',
          link_type: 'dropdown',
          parent: 'e_action', 
          children: {
            farmer_areas_2022_2023: {
                show_icon: 'hide',
                key: 'farmer_areas_2022_2023',
                to: '/farmer-areas-2022-2023',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: '2022-2023 йилларда Ер майдонлари ажратилиши',
                parent: 'e_action'
            },
            planting_stats_2022: {
                show_icon: 'hide',
                key: 'planting_stats_2022',
                to: '/planting-stats-2022',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: '2022 йилда ажратилган ерларга экинлар экилиши',
                parent: 'e_action'
            },
            farmer_area_stats_2023: {
                show_icon: 'hide',
                key: 'farmer_area_stats_2023',
                to: '/farmer-area-stats-2023',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: '2023 йилда Ер майдонлари ажратилиши',
                parent: 'e_action'
            },
          } 
        },
        financial_tables: {
          key: 'e_action',
          id: 'hide',
          base_src: '',
          hover_src: '',
          title: 'Молиявий жадваллар',
          link_type: 'dropdown',
          parent: 'financial_tables', 
          children: {
            cotton_money_return: {
                show_icon: 'hide',
                key: 'cotton_money_return',
                to: '/cotton-money-return',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: 'Пахта учун жамғармадан ажратилган маблағлар қайтарилиши',
                parent: 'financial_tables'
            },
            cotton_industry_stats_2022: {
                show_icon: 'hide',
                key: 'cotton_industry_stats_2022',
                to: '/cotton-industry-stats-2022',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: '2022 йил пахта хомашёсининг хисоб-китолари',
                parent: 'financial_tables'
            },
            cotton_output_finance: {
                show_icon: 'hide',
                key: 'cotton_output_finance',
                to: '/cotton-output-finance',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: '2023 пахта ҳосилини молиялаштириш',
                parent: 'financial_tables'
            },
            budget_money_on_corn: {
                show_icon: 'hide',
                key: 'budget_money_on_corn',
                to: '/budget-money-on-corn',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: 'Ғалла учун жамғармадан ажратилган маблағлар',
                parent: 'financial_tables'
            },
            outdated_debt: {
                show_icon: 'hide',
                key: 'outdated_debt',
                to: '/outdated-debt',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: 'Муддати ўткан қарздорлик',
                parent: 'financial_tables'
            },
            cluster_corn_farmer_debt: {
                show_icon: 'hide',
                key: 'cluster_corn_farmer_debt',
                to: '/cluster-corn-farmer-debt',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: 'Кластерларнинг галлачилик фермерларидан қарздорлиги',
                parent: 'financial_tables'
            },
            subsidy_finance_use: {
                show_icon: 'hide',
                key: 'subsidy_finance_use',
                to: '/subsidy-finance-use',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: 'ПҚ-225-сонли қарорига асосан Агентлик томонидан ажратилган ссуда маблағларининг сўндирилиши',
                parent: 'financial_tables'
            },
          } 
        },
        statistical_data: {
          key: 'export',
          id: 'hide',
          base_src: '',
          hover_src: '',
          title: 'Экспорт',
          link_type: 'dropdown',
          parent: 'export', 
          children: {
            fruit_vegs_export_execution: {
                show_icon: 'hide',
                key: 'fruit_vegs-_xport_execution',
                to: '/fruit-vegs-export-execution',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: 'Мева-сабзавот ва озиқ-овқат маҳсулотлари экспорти прогнозининг ижроси',
                parent: 'export'
            },
          } 
        },
        investment: {
          key: 'investment',
          id: 'hide',
          base_src: '',
          hover_src: '',
          title: 'Инвестиция',
          link_type: 'dropdown',
          parent: 'investment', 
          children: {
            regional_investment_projects_network: {
                show_icon: 'hide',
                key: 'regional_investment_projects_network',
                to: '/regional-investment-projects-network',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: 'Амалга оширилган худудий инвестиция лойиҳаларининг тармоқлар кесимида',
                parent: 'investment'
            },
            farmer_regional_investment_projects_regionated: {
                show_icon: 'hide',
                key: 'farmer_regional_investment_projects_regionated',
                to: '/farmer-regional-investment-projects-regionated',
                type: 'dropdown',
                base_src: '',
                hover_src: '',
                title: 'Қишлоқ хўжалиги соҳасидаги худудий инвестиция лойиҳалари ҳудудлар кесимида',
                parent: 'investment'
            },
          } 
        },
        farmer_lands: {
          key: 'farmer-lands',
          to: '/farmer-lands',
          id: 'hide',
          base_src: '',
          hover_src: '',
          title: 'Қишлоқ хўжалиги ерлари',
          link_type: 'single',   
        },
      },
    };
  },
  methods: {

  },
  components: {
    
  }	
}
</script>

<style>
    .menu {
      width: 15%;
      height: 100%;
      display: grid;
      position: relative;
      grid-template-rows: 10% 80% 10%;
      background-color: #08705F;
    }
    .menu > img {
      height: 3.5vh;
      align-self: center;
      justify-self: center;
    }
    .menu-wrapper {
      margin-top: 5%;
      display: grid;
      height: 100%;
      width: 100%;
      position: relative;
      overflow-y: scroll;
      /* direction: rtl; */
    }
    .menu-wrapper.menu-wrapper::-webkit-scrollbar {
      left: 5%;
      width: 0.2em;
    }
    
    .menu-wrapper::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    
    .menu-wrapper::-webkit-scrollbar-thumb {
      background-color: rgb(255, 255, 255);
      outline: 1px solid slategrey;
    }
    .router-link,
    .dropdown-router-link {
      z-index: 1;
      cursor: pointer;
      width: 100%;
      height: 100%;
      position: relative;
      color: #fff;
      align-items: center;
      justify-content: start;
      text-decoration: none;
      transition: all 0.2s ease;
      padding: 2.5vh 2vw 2.5vh 1vw;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 0.9vw;
      /* direction: ltr; */
    }
    a.router-link {
      display: inline-flex;
    }
    div.router-link {
      z-index: 1;
      cursor: pointer;
      width: 100%;
      height: 100%;
      position: relative;
      color: #fff;
      align-items: center;
      justify-content: start;
      text-decoration: none;
      transition: all 0.2s ease;
      padding: 0;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 0.9vw;
    }
    .link {
      padding: 2.5vh 1vw 2.5vh 1vw;
      z-index: 0;
      pointer-events: none;
      width: 100%;
      height: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
    }
    .dropdown-router-link {
      display: none;
    }
    div.router-link:hover .link,
    div.router-link.active .link {
      color: #08705F;
      background-color: rgb(255, 255, 255);
      transition: all 0.2s ease;
    }
    .dropdown-router-link {
      transition: all 0.2s ease;
    }
    .dropdown-router-link p {
      border-left: thin solid transparent;
      transition: all 0.2s ease;
    }
    .dropdown-router-link:hover p,
    .dropdown-router-link.active p {
      border-left: thin solid white;
      transition: all 0.2s ease;
    }
    div.router-link.active .dropdown-router-link {
      display: inline-flex;
    }
    .router-link[show-icon='hide'] .link-image,
    .dropdown-router-link[show-icon='hide'] .link-image {
      display: none;
    }
    .router-link i {
      z-index: 0;
      pointer-events: none;
      margin-right: 5%;
      color: white;
      width: fit-content;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .router-link.active i {    
      color: #08705F;
      transform: rotateZ(90deg);
      transition: all 0.2s ease;
    }
    .router-link:hover i {      
      color: #08705F;
      transition: all 0.2s ease;
    }
    a.router-link:hover,
    a.router-link.active {
      color: #08705F;
      background-color: rgb(255, 255, 255);
      transition: all 0.2s ease;
    }
    .router-link[show-icon='hide'] .link-image {
      display: none;
    }
    .link-image {
      width: 2vw;
      height: 3vh;
      pointer-events: none;
      padding-left: 0.5vw;
      align-self: center;
      position: relative;
    }
    .link-image .base {
      position: absolute;
      opacity: 1;
    }
    .link-image .hover {
      position: absolute;
      opacity: 0;
    }
    .router-link:hover .base,
    .router-link.active .base {
      opacity: 0;
    }
    .router-link:hover .hover,
    .router-link.active .hover {
      opacity: 1;
    }
    .link-text {
      z-index: 0;
      pointer-events: none;
      padding-left: 0.75vw;
    }
    #present .link-text {
      padding-left: 1.5vw;
    }
    .contact-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      padding-bottom: 10%;
      position: relative;
      align-items: flex-end;
      justify-content: center;
      overflow: hidden;
    }
    .contact {
      gap: 5%;
      position: relative;
      cursor: pointer;
      display: flex;
      width: 85%;
      height: 7vh;
      padding: 0 1vw;
      border-radius: 16px;
      align-items: center;
      justify-content: space-evenly;
      backdrop-filter: blur(10px);
      background: #147A69;
      backdrop-filter: blur( 1px );
      -webkit-backdrop-filter: blur( 1px );
      border: thin solid transparent;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .contact:hover {
      border: thin solid rgba(255, 255, 255, 0.5);
      transition: all 0.2s ease;
    }
    .contact-icon {
      padding: 0.5rem;
      width: 2.5rem;
      height: 2.5rem;
      background: #076D5C;
      border: thin solid transparent;
      border-radius: 100px;
      transition: all 0.2s ease;
    }
    .contact:hover .contact-icon {
      border: thin solid rgba(255, 255, 255, 0.5);
      transition: all 0.2s ease;
    }
    .contact-top-text {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 0.8vw;
      color: rgba(255, 255, 255, 0.5);
    }
    .contact-bot-text {
      color: white;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 0.8vw;
    }
</style>