<template>
    <!-- <input type="text" id="search_field"/> -->
    <div id="table">

    </div>
</template>

<script>
import axios from 'axios';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';
export default {
    name: 'table_component',
    props: [ 'table_id' ],
    setup(props) {
        axios.get(`/get-table/${props.table_id}`)
        .then(async res => {
            const container = document.querySelector('#table');
            // const searchField = document.querySelector('#search_field');
            const data = await res.data[0].rows;

            let x = 0;
            let headers = [];
            let header_indexes = [];
            // while (typeof data[x][0] != 'number') {
            //     headers.push(data[x]);
            //     header_indexes.push(x);
            //     x++;
            //     continue;
            // }
            const empty_row = [];
            const read_only_columns = [];
            for (let x in data[0]) {
                empty_row.push(' ');
                read_only_columns.push({ editor: false });
            }
            data.splice(-1, 0, empty_row);
            const hot = new Handsontable(container, {
                data,
                startRows: 5,
                startCols: 5,
                // search: true,
                height: 'auto',
                width: '100%',
                colHeaders: true,
                rowHeaders: true,
                // nestedHeaders: headers,
                hiddenRows: {
                    rows: header_indexes
                },
                hiddenColumns: {
                    columns: [0]
                },
                columns: read_only_columns,
                minSpareRows: 0,
                manualColumnResize: true,
                manualRowResize: true,
                licenseKey: 'non-commercial-and-evaluation'
            });

            // searchField.addEventListener('keyup', function(event) {
            //     const search = hot.getPlugin('search');
            //     const queryResult = search.query(event.target.value);
            //     console.log(queryResult);
            //     hot.render();
            // });
        });
    },
    components: {

    },
}
</script>

<style>

</style>