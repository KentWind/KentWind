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


/////////////////////////
//  FUNCTIONS
/////////////////////////

function LiveData() {
    this.windData;
    var self = this;
    this.output = function () {
        console.log("\nLiveData output memberfunction:\n\n");
        for (var i = 0; i < self.windData.length; i++) {
            console.log("ROW " + i + ": ");
            console.log("id: " + self.windData[i].id);
            console.log("speed: " + self.windData[i].speed);
            console.log("direction: " + self.windData[i].direction);
            console.log("time: " + self.windData[i].time);
            console.log("\n");
        }
    }
}

function getPHP() {
    var data = new LiveData();
    $.ajax({
        url: 'query-test.php',
        type: 'POST',
        dataType: 'json',
        async: false,
        success: function (result) {
            data.windData = result;
        }
    });
    return data;
}

function update() {
    var newWindData = getPHP();
    console.log(newWindData);
    newWindData.output();
}

/////////////////////////
//  TESTING
/////////////////////////

var liveData = getPHP();
console.log("Outputting object after ajax call");
console.log(liveData);
liveData.output();

//When the entire web page has loaded, begin updating the live data.
$(document).ready(function () {
    setInterval(update, 5000);
});