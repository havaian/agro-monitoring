<template>
    <div id="wrapper">
        <profile-component header="Foydanaluvchilar ro'yhati" username="Abdurakhimov A." district="Tosh.v. Zangiota.t." />
        <div class="main-content">
            <internal-nav-component />
            <filter-component />
            <table-component :table_id="table_id" :hidden_rows="hidden_rows" :headers="headers" />
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import profileComponent from "../partials/profile_component.vue";
import tableComponent from "../partials/table_component.vue";
import internalNavComponent from "../partials/internal_nav_component.vue";
import filterComponent from "../partials/filter_component.vue";
export default {
    name: "pages_main_component",
    props: [ 'table_id', 'hidden_rows', 'headers' ],
    data: (props) => {
        return {
            table_id: props.table_id,
            hidden_rows: props.hidden_rows,
            headers: props.headers,
        }
    },
    mounted() {
        
    },
    components: {
        profileComponent,
        tableComponent,
        internalNavComponent,
        filterComponent,
    }
}
</script>

<style scoped>
#wrapper {
    padding: 1.5% 1.5% 1.5% 1.5%;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 10% 90%;
}
.main-content {
    width: 100%;
    height: 100%;
    margin-top: 1%;
    display: grid;
    grid-template-rows: 10% 10% 80%;
}
</style>