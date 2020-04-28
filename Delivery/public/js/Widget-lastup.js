/*
*   EPITECH PROJECT, 2019
*   lastup
*   author:
*   Aimé Motti <aime.motti@epitech.eu>
*/

function lastup(csv_data) {

    var data = csv_data.records;

    const idx = {
        update: csv_data.fields.indexOf('Last_Update'),
    };
    var lastup = document.getElementById("Lastup")
    lastup.innerHTML = data[3][idx.update];
    //document.write("<div>" + data[3][idx.update] +  "</div>");
}