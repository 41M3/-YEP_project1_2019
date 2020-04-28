/*
*   EPITECH PROJECT, 2019
*   confirmed
*   author:
*   Charles Duthoit <charles.duthoit@epitech.eu>
*/

function checkCountry(country, tabName) {
    if (tabName.length === 0) {
        return true;
    }
    for (var i in tabName) {
        if (tabName[i] === country) {
            return false;
        }
    }
    return true;
}

function confirmedcases(csv_data) {

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
            if (checkCountry(data[i][idx.country], tabName) === true && (tmp === -1 || row[idx.confirmed] > data[tmp][idx.confirmed])) {
                console.log(tmp)
                tmp = i;
                console.log(tmp)
            }
        }
        if (tmp !== -1) {
        tabName.push(data[tmp][idx.country]);
        tabValue.push(data[tmp][idx.confirmed]);
        tmp = -1
        } else {
            break;
        }
    }

    var totalID = document.getElementById("confirmedTotal");
    totalID.appendChild(document.createTextNode(format(total)));
    
    var listID = document.getElementById("confirmedList");

    for (var i in tabValue) {
        if (i !== 0) {
            listID.appendChild(document.createElement("br"));
        }
        ele = document.createElement("b");
        ele.style.color = "red"
        ele.appendChild(document.createTextNode(format(tabValue[i])));
        listID.appendChild(ele);
        listID.appendChild(document.createElement("br"));
        listID.appendChild(document.createTextNode(tabName[i]));
        listID.appendChild(document.createElement("br"));

    }
}

        confirmedcases(parsed);


