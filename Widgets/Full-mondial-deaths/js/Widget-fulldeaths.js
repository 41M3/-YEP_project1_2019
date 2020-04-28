/*
*   EPITECH PROJECT, 2019
*   lastup
*   author:
*   Aimé Motti <aime.motti@epitech.eu>
*/

function format(nb) {
    var tmp;
    
    while ((tmp=nb.toString().replace(/(\d)([\d]{3})(\.|\s|\b)/,"$1 $2$3")) && tmp!=nb) nb=tmp;
    return(nb);
}

function fulldeaths(csv_data) {

    var data = csv_data.records;
    let total = 0;

    const idx = {
        deaths: csv_data.fields.indexOf('Deaths'),
    };

    for (var i in data) {
        total += parseInt(data[i][idx.deaths]);
    }

    document.write("</br>" + "</br>" + format(total) + "</br>" + "</br>");
}

function regiondeaths(csv_data) {

    var data = csv_data.records;
    let total = 0;

    const idx = {
        deaths: csv_data.fields.indexOf('Deaths'),
    };

    for (var i in data) {
        total += parseInt(data[i][idx.deaths]);
    }

    document.write("</br>" + "</br>" + format(total) + "</br>" + "</br>");
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
        fulldeaths(parsed);
        regiondeaths(parsed);
    })
}

$.get("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/" + getFileName(), function (data) {
    parseData(data)
})

