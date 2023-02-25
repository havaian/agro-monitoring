<template>
  <div id="wrapper">
        <div class="input">
            <input type="file" id="input"/>
            <button id="submit">send</button>
            <button id="update">update</button>
        </div>
        <div class="check">
            <input type="number" id="check-input"/>
            <button id="check-button">check</button>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
import readXlsxFile from 'read-excel-file';
import tableComponent from "../partials/table_component.vue";

export default {
    name: 'excel_upload_component',
    mounted: () => {
        
        const input = document.getElementById('input');

        const sendTable = (route) => {
            readXlsxFile(input.files[0]).then((rows) => {
                for (let x in rows) {
                    for (let y in rows[x]) {
                        if (typeof rows[x][y] === 'number' && y > 0) {
                            rows[x][y] = rows[x][y].toFixed(1);
                        }
                    }
                }
                const data = {
                    'id': input.files[0].name.split(".xlsx")[0],
                    'name': table_names[input.files[0].name.split(".xlsx")[0]],
                    'rows': rows
                }
                if (route === '/update-table') {
                    route = route + '/' + input.files[0].name.split(".xlsx")[0];
                }
                generateTable('rows', rows);
                // axios.post(route, data)
                // .then(res => {
                //     console.log(res);
                // });
            });
        }

        const generateTable = async (type, res) => {
            const container = document.querySelector('#table');
            const searchField = document.querySelector('#search_field');
            let data = '';
            if (type === 'rows') {
                data = res;
            } else {
                data = await res.data[0].rows;
            }

            console.log(data);

            let x = 0;
            let headers = [];
            let header_indexes = [];
            while (typeof data[x][0] != 'number') {
                headers.push(data[x]);
                header_indexes.push(x);
                x++;
                continue;
            }
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
                height: 'auto',
                width: '100%',
                colHeaders: true,
                rowHeaders: true,
                nestedHeaders: headers,
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
        }

        $('#submit').click(() => {
            sendTable('/add-table');
        });
        $('#update').click(() => {
            sendTable('/update-table');
        });

        $('#check-button').click(() => {
            axios.get('/get-table/table')
            .then(async res => {
                generateTable(res);
            });
        });
    },
    components: {
        tableComponent
    },
    props: []
}

</script>

<style scoped>

</style>