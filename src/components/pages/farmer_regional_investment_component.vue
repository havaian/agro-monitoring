<template>
  <main-component :table_id="22" :hidden_rows="[0, 1]" :headers="[0, 1]" />
</template>

<script>
import axios from 'axios';
import mainComponent from "../partials/pages_main_component.vue";
  export default {
    name: "farmer_regional_investment_component",
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