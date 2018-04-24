function pullHistoricalData(lowerTime, upperTime) {
    
    //alert(lowerTime + " " + upperTime);
    
    //lowerTime = 1524540740;
    //upperTime = 1524540760;
    
    var noErrors = true;
    
    var result = [];
    $.ajax({
        url: 'php/utilities/serverHistoricalPull.php',
        type: 'POST',
        data: {lower_time: lowerTime, upper_time: upperTime},
        dataType: 'json',
        async: false,
        success: function(response) {
            result = response;
            console.log(response);
        },
        error: function(response) {
            //alert(response);
            noErrors = false;
        }
    });

    if ( noErrors && result.length > 0 ) {
        // All data in the result are strings.
        // Convert the strings into numbers.
        for (var i = 0; i < result.length; ++i) {
            result[i]['SensorID'] = Number(result[i]['SensorID']);
            result[i]['Speed'] = Number(result[i]['Speed']);
            result[i]['Direction'] = Number(result[i]['Direction']);
            result[i]['Latitude'] = Number(result[i]['Latitude']);
            result[i]['Longitude'] = Number(result[i]['Longitude']);
        }
    } else {
        result = null;
    }
    
    return result;
}
