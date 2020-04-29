/*
*   EPITECH PROJECT, 2019
*   lastup
*   author:
*   Gaëtan CHAUGNY
*/

var all_deaths = [];

function graphic() {
    var ctx = document.getElementById('graphWidget').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: allFiles,
            datasets: [{
                label: "Deaths per days",
                backgroundColor: 'rgb(195, 30, 30)',
                borderColor: 'rgb(255, 99, 132)',
                data: all_deaths,
            }]
        },
        options: {}
    });

}

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

function fulldeaths(csv_data, date) {

    var data = csv_data.records;
    let total = 0;

    const idx = {
        deaths: csv_data.fields.indexOf('Deaths'),
    };

    for (var i in data) {
        total += parseInt(data[i][idx.deaths]);
    }
    all_deaths.push(total);
}

function yep(data, date) {
    CSV.fetch({data: data}).done(function (parsed) {
        fulldeaths(parsed, date);
    })
}

var allFiles = ["04-03-2020", "04-04-2020", "04-05-2020", "04-06-2020", "04-07-2020", "04-08-2020", "04-09-2020", "04-10-2020", "04-11-2020", "04-12-2020", "04-13-2020", "04-14-2020", "04-15-2020", "04-16-2020", "04-17-2020", "04-18-2020", "04-19-2020", "04-20-2020", "04-21-2020", "04-22-2020", "04-23-2020", "04-24-2020", "04-25-2020", "04-26-2020", "04-27-2020", "04-28-2020"];

async function getData() {
    for (var item of allFiles) {
        await $.get("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/" + item + ".csv", function (data) {
            yep(data)
        })
    }
    graphic();
}