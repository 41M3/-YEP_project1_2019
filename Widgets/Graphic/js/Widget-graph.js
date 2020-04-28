/*
*   EPITECH PROJECT, 2019
*   lastup
*   author:
*   Gatëtan CHAUGNY
*/

function lastup(csv_data) {

    var data = csv_data.records;

    const idx = {
        update: csv_data.fields.indexOf('Last_Update'),
    };
    document.write(data[3][idx.update]);
}

/*
*   Parsing
*   author:
*   Gaëtan CHAUGNY <gaetan.chaugny@epitech.eu>
*/

function getFileName() {
    var fileName;
    let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hour = date_ob.getHours();

    if (hour > 2)
        date = date - 1;
    else
        date = date - 2;

    fileName = month + "-" + date + "-" + year + ".csv";
    return (fileName);
}


function parseData(data) {
    CSV.fetch({data: data}).done(function (parsed) {
        lastup(parsed);
    })
}

$.get("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/" + getFileName(), function (data) {
    parseData(data)
})

