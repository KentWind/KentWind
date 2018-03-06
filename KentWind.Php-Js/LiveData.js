// //An object that is constructed with data from a PHP file.
// function LiveData() {
//     var windData;    //Holds the json from the PHP file
//     $.ajax({
//         url: 'query-test.php',
//         type: 'POST',
//         dataType: 'json',
//         async: false,
//         success: function (result) {
//             windData = result;
//         }
//     });
//     this.windData = windData;
//     this.output = function () { //Outputs that json object's different values.
//         console.log(windData["SensorID"]);
//         console.log(windData["Speed"]);
//         console.log(windData["Direction"]);
//     }
// }

// var LiveDataJson = new LiveData();
// console.log(LiveDataJson);
// LiveDataJson.output();

// //Creates a new LiveData object and assigns it to 
// function update() {
//     LiveDataJson = new LiveData();
//     LiveDataJson.output();
// }
// //Calls the update function every 5 seconds.
// $(document).ready(function () {
//     setInterval(update, 1000);
// });

var liveData = getPHP();
console.log("Outputting object after ajax call");
console.log(liveData);

function getPHP() {
    var data = { };
    $.ajax({
        url: 'query-test.php',
        type: 'POST',
        dataType: 'json',
        async: false,
        success: function (result) {
            data = result;
        }
    });
    return data;
}

liveData.output = function () {
    console.log("Outputting object's member variables after creating output function.");
    for (var i = 0; i < this.length; i++) {
        console.log("ROW " + i + ": ");
        console.log("id: " + this[i].id);
        console.log("speed: " + this[i].speed);
        console.log("direction: " + this[i].direction);
        console.log("time: " + this[i].time);
        console.log("\n");
    }
}

liveData.update = function () {
    liveData = getPHP();
    console.log(liveData);
    setInterval(this.update, 1000);
}

//When the entire web page has loaded, begin updating the live data.
$(document).ready(function () {
    liveData.update();
});