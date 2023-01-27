<template>
  <main-component :table_id="17" />
  <!-- 2 TABLES -->
  <!-- <main-component :table_id="18" /> -->
</template>

<script>
import axios from 'axios';
import profileComponent from "../partials/profile_component.vue";
  export default {
    name: "stats_page_component",
    props: [],
    mounted() {
      
    },
    components: {
      profileComponent,
    }
  }
</script>

<style scoped>


  
</style>