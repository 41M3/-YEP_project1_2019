/*
*   EPITECH PROJECT, 2019
*   recovered
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

function recovered(csv_data) {

    var data = csv_data.records;
    var total = 0;
    var tabName = [];
    var tabValue = [];
    var tmp = -1;
    var len = data.length;

    const idx = {
        recovered: csv_data.fields.indexOf('Recovered'),
        country: csv_data.fields.indexOf('Country_Region'),
    };

    for (var i in data) {
        let row = data[i];
        total += row[idx.recovered];
        }
    while (tabValue.length < len) {
        for (var i in data) {
            let row = data[i];
            if (checkCountry(data[i][idx.country], tabName) === true && (tmp === -1 || row[idx.recovered] > data[tmp][idx.recovered])) {
                console.log(tmp)
                tmp = i;
                console.log(tmp)
            }
        }
        if (tmp !== -1) {
        tabName.push(data[tmp][idx.country]);
        tabValue.push(data[tmp][idx.recovered]);
        tmp = -1
        } else {
            break;
        }
    }

    var totalID = document.getElementById("recoveredTotal");
    totalID.appendChild(document.createTextNode(format(total)));
    
    var listID = document.getElementById("recoveredList");

    for (var i in tabValue) {
        if (i !== 0) {
            listID.appendChild(document.createElement("br"));
        }
        ele = document.createElement("b");
        ele.style.color = "green"
        ele.appendChild(document.createTextNode(format(tabValue[i])));
        listID.appendChild(ele);
        listID.appendChild(document.createElement("br"));
        listID.appendChild(document.createTextNode(tabName[i]));
        listID.appendChild(document.createElement("br"));

    }
        
}

        recovered(parsed);
