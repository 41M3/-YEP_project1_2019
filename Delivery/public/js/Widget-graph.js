/*
*   EPITECH PROJECT, 2019
*   lastup
*   author:
*   Gaëtan CHAUGNY
*/

var all_confirmed = [];
var all_deaths = [];
var all_resolved = [];
var all_active = [];

function graphic() {
    var ctx = document.getElementById('graphWidget').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: allFiles,
            datasets: [{
                label: "Confirmed cases",
                borderColor: "#FF0000",
                data: all_confirmed,
            }, {
                label: "Deaths cases",
                borderColor: "#FFFFFF",
                data: all_deaths,
            }, {
                label: "Resolved cases",
                borderColor: "#34C924",
                data: all_resolved,
            }, {
                label: "Active cases",
                borderColor: "#FFA500",
                data: all_active,
            }]
        },
        options: {}
    });
}

function fulldeaths(csv_data) {

    var data = csv_data.records;
    let total1 = 0;
    let total2 = 0;
    let total3 = 0;
    let total4 = 0;

    const idx = {
        recovered: csv_data.fields.indexOf('Recovered'),
        active: csv_data.fields.indexOf('Active'),
        confirmed: csv_data.fields.indexOf('Confirmed'),
        deaths: csv_data.fields.indexOf('Deaths'),
    };

    for (var i in data) {
        total1 += parseInt(data[i][idx.deaths]);
        total2 += parseInt(data[i][idx.active]);
        total3 += parseInt(data[i][idx.recovered]);
        total4 += parseInt(data[i][idx.confirmed]);
    }
    all_deaths.push(total1);
    all_confirmed.push(total2);
    all_resolved.push(total3);
    all_active.push(total4);
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