export default {
    "dashboard": {
      "key": "dashboard",
      "to": "/dashboard",
      "id": "hide",
      "base_src": "",
      "hover_src": "",
      "title": "Дашборд",
      "link_type": "single"
    },
    "enforcement_process_info": {
      "key": "enforcement_process_info",
      "id": "hide",
      "base_src": "",
      "hover_src": "",
      "title": "Ижро интизоми бўйича маълумот",
      "link_type": "dropdown",
      "parent": "enforcement_process_info",
      "children": {
        "total_area": {
          "show_icon": "hide",
          "key": "total_area",
          "to": "/total-area",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "Жами ер майдон",
          "parent": "enforcement_process_info"
        },
        "farmer_regions": {
          "show_icon": "hide",
          "key": "farmer_regions",
          "to": "/farmer-regions",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "Қишлоқ хўжалиги ерлари ҳудудлар кесимида",
          "parent": "enforcement_process_info"
        }
      }
    },
    "statistical_data": {
      "key": "export",
      "id": "hide",
      "base_src": "",
      "hover_src": "",
      "title": "Экспорт",
      "link_type": "dropdown",
      "parent": "export",
      "children": {
        "fruit_vegs_export_execution": {
          "show_icon": "hide",
          "key": "fruit_vegs-_xport_execution",
          "to": "/fruit-vegs-export-execution",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "Мева-сабзавот ва озиқ-овқат маҳсулотлари экспорти прогнозининг ижроси",
          "parent": "export"
        }
      }
    },
    "main_product": {
      "key": "main_product",
      "id": "hide",
      "base_src": "",
      "hover_src": "",
      "title": "Асосий маҳсулот",
      "link_type": "dropdown",
      "parent": "main_product",
      "children": {
        "main_farmer_products": {
          "show_icon": "hide",
          "key": "main_farmer_products",
          "to": "/main-farmer-products",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "Асосий турдаги қишлоқ хўжалиги маҳсулотлари",
          "parent": "main_product"
        }
      }
    },
    "grain": {
      "key": "grain",
      "id": "hide",
      "base_src": "",
      "hover_src": "",
      "title": "Ғалла",
      "link_type": "dropdown",
      "parent": "grain",
      "children": {
        "plant_water_areas": {
          "show_icon": "hide",
          "key": "plant_water_areas",
          "to": "/plant-water-areas",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "Экиш, суғориш ва униб чиққан майдонлар",
          "parent": "grain"
        },
        "nitrogen_fertilizers": {
          "show_icon": "hide",
          "key": "nitrogen_fertilizers",
          "to": "/nitrogen-fertilizers",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "Азотли ўғит жамғариш",
          "parent": "grain"
        }
      }
    },
    "e_action": {
      "key": "e_action",
      "id": "hide",
      "base_src": "",
      "hover_src": "",
      "title": "E-auksion",
      "link_type": "dropdown",
      "parent": "e_action",
      "children": {
        "farmer_areas_2022_2023": {
          "show_icon": "hide",
          "key": "farmer_areas_2022_2023",
          "to": "/farmer-areas-2022-2023",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "2022-2023 йилларда Ер майдонлари ажратилиши",
          "parent": "e_action"
        },
        "planting_stats_2022": {
          "show_icon": "hide",
          "key": "planting_stats_2022",
          "to": "/planting-stats-2022",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "2022 йилда ажратилган ерларга экинлар экилиши",
          "parent": "e_action"
        },
        "farmer_area_stats_2023": {
          "show_icon": "hide",
          "key": "farmer_area_stats_2023",
          "to": "/farmer-area-stats-2023",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "2023 йилда Ер майдонлари ажратилиши",
          "parent": "e_action"
        }
      }
    },
    "financial_tables": {
      "key": "e_action",
      "id": "hide",
      "base_src": "",
      "hover_src": "",
      "title": "Молиявий жадваллар",
      "link_type": "dropdown",
      "parent": "financial_tables",
      "children": {
        "cotton_money_return": {
          "show_icon": "hide",
          "key": "cotton_money_return",
          "to": "/cotton-money-return",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "Пахта учун жамғармадан ажратилган маблағлар қайтарилиши",
          "parent": "financial_tables"
        },
        "cotton_industry_stats_2022": {
          "show_icon": "hide",
          "key": "cotton_industry_stats_2022",
          "to": "/cotton-industry-stats-2022",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "2022 йил пахта хомашёсининг хисоб-китолари",
          "parent": "financial_tables"
        },
        "cotton_output_finance": {
          "show_icon": "hide",
          "key": "cotton_output_finance",
          "to": "/cotton-output-finance",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "2023 пахта ҳосилини молиялаштириш",
          "parent": "financial_tables"
        },
        "budget_money_on_corn": {
          "show_icon": "hide",
          "key": "budget_money_on_corn",
          "to": "/budget-money-on-corn",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "Ғалла учун жамғармадан ажратилган маблағлар",
          "parent": "financial_tables"
        },
        "outdated_debt": {
          "show_icon": "hide",
          "key": "outdated_debt",
          "to": "/outdated-debt",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "Муддати ўткан қарздорлик",
          "parent": "financial_tables"
        },
        "cluster_corn_farmer_debt": {
          "show_icon": "hide",
          "key": "cluster_corn_farmer_debt",
          "to": "/cluster-corn-farmer-debt",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "Кластерларнинг галлачилик фермерларидан қарздорлиги",
          "parent": "financial_tables"
        },
        "subsidy_finance_use": {
          "show_icon": "hide",
          "key": "subsidy_finance_use",
          "to": "/subsidy-finance-use",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "ПҚ-225-сонли қарорига асосан Агентлик томонидан ажратилган ссуда маблағларининг сўндирилиши",
          "parent": "financial_tables"
        }
      }
    },
    "investment": {
      "key": "investment",
      "id": "hide",
      "base_src": "",
      "hover_src": "",
      "title": "Инвестиция",
      "link_type": "dropdown",
      "parent": "investment",
      "children": {
        "regional_investment_projects_network": {
          "show_icon": "hide",
          "key": "regional_investment_projects_network",
          "to": "/regional-investment-projects-network",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "Амалга оширилган худудий инвестиция лойиҳаларининг тармоқлар кесимида",
          "parent": "investment"
        },
        "farmer_regional_investment_projects_regionated": {
          "show_icon": "hide",
          "key": "farmer_regional_investment_projects_regionated",
          "to": "/farmer-regional-investment-projects-regionated",
          "type": "dropdown",
          "base_src": "",
          "hover_src": "",
          "title": "Қишлоқ хўжалиги соҳасидаги худудий инвестиция лойиҳалари ҳудудлар кесимида",
          "parent": "investment"
        }
      }
    },
  }