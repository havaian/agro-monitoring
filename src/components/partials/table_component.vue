<template>
    <!-- <input type="text" id="search_field"/> -->
    <div class="table-wrapper">
        <div id="table">

        </div>
        <div class="table-navigation">
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';
export default {
    name: 'table_component',
    props: [ 'table_id', 'hidden_rows', 'headers' ],
    setup(props) {
        axios.get(`/get-table/${props.table_id}`)
        .catch(async res => {
            $('#table').append('<h1 class="centered-table-error">Belgilangan jadval uchun ma\'lumotlar topilmadi</h1>')
        })
        .then(async res => {
            const container = document.querySelector('#table');
            // const searchField = document.querySelector('#search_field');
            const data = await res.data;

            let condition = x => x.name === 'Жами'
            let filteredData = data.filter(condition);
            let remainingData = data.filter(x => !condition(x));
            let result = filteredData.concat(remainingData);

            const all_tables = {};
            for (let x in result) {
                all_tables[x] = result[x]["tables"];
            }

            const headers = [];
            for (let x in props.headers) {
                if (!props.hidden_rows.includes(props.headers[x])) {
                    headers.push(data[0].tables[x]);
                }
            }

            const rows = [];
            for (let x in data[0].tables) {
                if (!props.hidden_rows.includes(props.headers[x]) && data[0].tables[x][0] != null) {
                    rows.push(data[0].tables[x][0]);
                }
            }
            
            let pages = '';
            for (let x in result) {
                if (result[x].name == 'Жами' | x == 0) {
                    pages += `
                        <div class="table-nav-page active" value="${x}">
                            <p>${result[x].name}</p>    
                        </div>
                    `
                } else {
                    pages += `
                        <div class="table-nav-page" value="${x}">
                            <p>${result[x].name}</p>    
                        </div>
                    `
                }
            }
            $('.table-navigation').append(pages);
            
            const table_data = await result[0]["tables"];
            const hot = new Handsontable(container, {
                table_data,
                width: '100%',
                height: '100%',
                rowHeights: 23,
                colWidths: 100,
                // search: true,
                rowHeaders: false,
                // rowHeaders: rows,
                nestedHeaders: headers,
                hiddenRows: {
                    rows: props.headers
                },
                hiddenColumns: {
                    columns: [0]
                },
                minSpareRows: 0,
                manualColumnResize: true,
                manualRowResize: true,
                licenseKey: 'non-commercial-and-evaluation'
            });
            hot.loadData(table_data);

            // searchField.addEventListener('keyup', function(event) {
            //     const search = hot.getPlugin('search');
            //     const queryResult = search.query(event.target.value);
            //     console.log(queryResult);
            //     hot.render();
            // });

            $('.table-nav-page').click((e) => {
                $('.table-nav-page').removeClass('active');
                $(e.target).toggleClass('active');
                hot.loadData(all_tables[e.target.attributes.value.nodeValue]);
            });
        });
    },
    components: {

    },
}
</script>

<style>

.table-wrapper {
    gap: 1%;
    padding-right: 0.5%;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 80% 20%;
}
#table {
    padding-left: 0.5%;
    padding-top: 1%;
    display : flex;
    align-items : center;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 6px 0px 14px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
}
.table-navigation {
    gap: 0.9vw;
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;
}
.table-nav-page {
    cursor: pointer;
    padding: 1.5vw;
    width: fit-content;
    background: #FFFFFF;
    box-shadow: 6px 0px 14px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    border: thin solid transparent;
    transition: border 0.1s ease-in-out;
}
.table-nav-page p {
    pointer-events: none;
}
.table-nav-page:hover {
    border: thin solid #08705F;
    transition: border 0.1s ease-in-out;
}
.table-nav-page.active {
    border: thin solid #08705F;
    transition: border 0.1s ease-in-out;
}
.centered-table-error {
    width: 100%;
    text-align: center;
}

</style>