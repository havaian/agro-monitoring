<template>
  <!-- ACTUAL ONE -->
  <!-- <main-component :table_id="1" /> -->
  <main-component :table_id="2" :hidden_rows="[0, 1]" :headers="[0, 1, 2, 3]" />
  <!-- FOR TESTING -->
</template>

<script>
import axios from 'axios';
import mainComponent from "../partials/pages_main_component.vue";
  export default {
    name: "t_a_component",
    props: [],
    mounted() {
      
    },
    components: {
      mainComponent,
    },
  }
</script>

<style scoped>

</style>