function pullData() {
    var result = [];
    $.ajax({
        url: 'php/utilities/serverPull.php',
        type: 'POST',
        dataType: 'json',
        async: false,
        success: function(response) {
            result = response;
        }
    });

    // All data in the result are strings.
    // Convert the strings into numbers.
    for (var i = 0; i < result.length; ++i) {
        result[i]['SensorID'] = Number(result[i]['SensorID']);
        result[i]['Speed'] = Number(result[i]['Speed']);
        result[i]['Direction'] = Number(result[i]['Direction']);
        result[i]['Latitude'] = Number(result[i]['Latitude']);
        result[i]['Longitude'] = Number(result[i]['Longitude']);
    }
    return result;
}
