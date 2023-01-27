<template>
  <div id="wrapper">
        <div class="input">
            <input type="file" id="input"/>
            <button id="submit">send</button>
            <button id="update">update</button>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
import readXlsxFile from 'read-excel-file';

export default {
    name: 'excel_upload_component',
    mounted: () => {
        const table_names = {
            "2": "Ўзбекистон Республикаси қишлоқ хўжалиги ерлари тўғрисида МАЪЛУМОТ",
            "3": "Ўзбекистон Республикасида 2022 йилда қишлоқ, ўрмон ва балиқ хўжалиги маҳсулотларини ишлаб чиқаришнинг мақсадли кўрсатгичлари ПРОГНОЗИ",
            "6": "Қорақалпоғистон Республикаси ва вилоятларда 2023 йил ҳосили учун экилган кузги бошоқли дон экинларини суғориш, азотли минерал ўғитлар билан озиқлантириш ва ўсув даврилари тўғрисида МАЪЛУМОТ",
            "8": "Республика вилоятларида \"E-auksion\" орқали деҳқон хўжалиги юритиш учун ер майдонлари ажратилиши тўғрисида",
            "9": "Республика вилоятларида 2022 йилда \"E-auksion\" орқали деҳқон хўжалиги юритиш учун ажратилган ер майдонларига қишлоқ хўжалиги экинлари экилиши тўғрисида",
            "10": "Республика вилоятларида 2023 йилда \"E-auksion\" орқали деҳқон хўжалиги юритиш учун ер майдонлари ажратилиши тўғрисида",
            "11": "2021 йил Пахта ҳосили етиштириш харажатларини молиялаштириш учун пахта тўқимачилик кластерларига Жамғармадан ажратилган маблағлар тўғрисида маълумот",
            "12": "2022 йил ҳосилидан кластерлар томонидан фермер хўжаликларидан харид қилинган пахта хомашёсининг якуний хисоб-китоблари тўғрисида тезкор МАЪЛУМОТ",
            "14": "Қорақалпоғистон Республикаси ва вилоятларда 2022 йил ҳосилидан кластерлар томонидан қабул қилинган бошоқли доннинг якуний тўловларини амалга оширилиши ва фермер хўжаликларининг кластерлар олдидаги қарздорликлари тўғрисида МАЪЛУМОТ",
            "15": "Қорақалпоғистон Республикаси ва вилоятларда 2022 йил ҳосилидан кластерлар томонидан қабул қилинган бошоқли доннинг якуний тўловларини амалга оширилиши ва фермер хўжаликларининг кластерлар олдидаги қарздорликлари тўғрисида МАЪЛУМОТ",
            "16": "Жамғарма маблағлари ҳисобидан пахта ва ғалла ҳосилини молиялаштириш учун ажратилган маблағлар ҳисобидан муддати ўтган кредитлар тўғрисида МАЪЛУМОТ",
            "17": "ҒАЛЛА-2023 йил ҳосили етиштириш харажатларини молиялаштириш учун Жамғармадан ажратилган маблағларнинг қишлоқ хўжалик корхоналар томонидан ишлатилиши тўғрисида маълумот",
            "18": "Ўзбекистон Республикаси Президентининг ПҚ-225-сонли қарорига асосан Боғдорчилик ва иссиқхона хўжалигини ривожлантириш агентлиги томонидан ажратилган ссуда маблағларини сўндириш ГРАФИГИ",
            "19": "Республика бўйича мева-сабзавот ва озиқ-овқат маҳсулотлари экспорт прогнозининг ижроси юзасидан тезкор МАЪЛУМОТ",
            "20": "2022-2024 йилларда қишлоқ хўжалиги ва озиқ-овқат саноати соҳаларида амалга оширилиши режалаштирилган инвестиция лойиҳаларини вилоятлар кесимида МАЪЛУМОТ",
        }

        const sendTable = (route) => {
            const input = document.getElementById('input');
            readXlsxFile(input.files[0]).then((rows) => {
                for (let x in rows) {
                    for (let y in rows[x]) {
                        if (typeof rows[x][y] === 'number') {
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
                axios.post(route, data)
                .then(res => {
                    console.log(res);
                });
            });
        }

        $('#submit').click(() => {
            sendTable('/add-table');
        });
        $('#update').click(() => {
            sendTable('/update-table');
        });

        axios.get('/get-table/table')
        .then(async res => {
            const container = document.querySelector('#table');
            const searchField = document.querySelector('#search_field');
            const data = await res.data[0].rows;

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
        });
    },
    components: {

    },
    props: []
}

</script>

<style scoped>

</style>