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

function deathscases(csv_data) {

    var data = csv_data.records;
    var total = 0;
    var tabName = [];
    var tabValue = [];
    var tmp = -1;
    var len = data.length;

    const idx = {
        deaths: csv_data.fields.indexOf('Deaths'),
        country: csv_data.fields.indexOf('Country_Region'),
    };

    for (var i in data) {
        let row = data[i];
        total += row[idx.deaths];
    }
    while (tabValue.length < len) {
        for (var i in data) {
            let row = data[i];
            if (checkCountry(data[i][idx.country], tabName) === true && (tmp === -1 || row[idx.deaths] > data[tmp][idx.deaths])) {
                tmp = i;
            }
        }
        if (tmp !== -1) {
            tabName.push(data[tmp][idx.country]);
            tabValue.push(data[tmp][idx.deaths]);
            tmp = -1
        } else {
            break;
        }
    }

    var totalID = document.getElementById("deathsTotal");
    totalID.appendChild(document.createTextNode(format(total)));

    var listID = document.getElementById("deathsList");

    for (var i in tabValue) {
        if (i !== 0) {
            listID.appendChild(document.createElement("br"));
        }
        ele = document.createElement("b");
        ele.style.color = "white"
        ele.appendChild(document.createTextNode(format(tabValue[i])));
        listID.appendChild(ele);
        listID.appendChild(document.createElement("br"));
        listID.appendChild(document.createTextNode(tabName[i]));
        listID.appendChild(document.createElement("br"));

    }

}