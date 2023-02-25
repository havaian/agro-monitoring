<template>
  <main-component :table_id="20" :hidden_rows="[0, 1]" :headers="[0, 1]" />
  <!-- 2 TABLES -->
  <!-- <main-component :table_id="21" /> -->
</template>

<script>
import axios from 'axios';
import mainComponent from "../partials/pages_main_component.vue";
  export default {
    name: "stats_page_component",
    props: [],
    mounted() {
      
    },
    components: {
      mainComponent,
    }
  }
</script>

<style scoped>


  
</style>