<template>
  <main-component :table_id="9" :hidden_rows="[0, 1, 2, 5]" :headers="[0, 1, 2, 3, 4, 5, 6]" />
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