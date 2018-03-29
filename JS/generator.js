const MAX_SENSOR_ID = 30;

for (var i = 1; i <= MAX_SENSOR_ID; i++) {
    var tableEntry = {};
    tableEntry.SensorID = i;
    tableEntry.Speed = Math.floor(Math.random() * 100) + 1 //Random number 1-100.
    tableEntry.Direction = Math.floor(Math.random() * 15) + 1 //Random number 1-15.
    $.ajax({
        url: 'serverPush.php',
        type: 'POST',
        async: false,
        data: {
            data: tableEntry
        }
    });
}