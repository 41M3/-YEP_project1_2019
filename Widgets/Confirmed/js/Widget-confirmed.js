/*
*   EPITECH PROJECT, 2019
*   confirmed
*   author:
*   Charles Duthoit <charles.duthoit@epitech.eu>
*/

function checkCountry(country, tabName) {
    if (tabName.length == 0) {
        return true;
    }
    for (var i in tabName) {
        if (tabName[i] == country) {
            return false;
        }
    }
    return true;
}

function lastup(csv_data) {

    var data = csv_data.records;
    var total = 0;
    var tabName = [];
    var tabValue = [];
    var tmp = -1;
    var len = data.length;

    const idx = {
        confirmed: csv_data.fields.indexOf('Confirmed'),
        country: csv_data.fields.indexOf('Country_Region'),
    };

    for (var i in data) {
        let row = data[i];
        total += row[idx.confirmed];
        }
    while (tabValue.length < len) {
        for (var i in data) {
            let row = data[i];
            if (checkCountry(data[i][idx.country], tabName) == true && (tmp == -1 || row[idx.confirmed] > data[tmp][idx.confirmed])) {
                console.log(tmp)
                tmp = i;
                console.log(tmp)
            }
        }
        if (tmp != -1) {
        tabName.push(data[tmp][idx.country]);
        tabValue.push(data[tmp][idx.confirmed]);
        tmp = -1
        } else {
            break;
        }
    }

    var totalID = document.getElementById("confirmedTotal");
    totalID.appendChild(document.createTextNode(total));
    
    var listID = document.getElementById("confirmedList");

    for (var i in tabValue) {
        if (i != 0) {
            listID.appendChild(document.createElement("br"));
        }
        listID.appendChild(document.createTextNode(tabName[i] + " " + tabValue[i]));
    }
        
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

