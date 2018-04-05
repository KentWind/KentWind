const SENSOR_INFO = [
    { location: "KSU MUSEUM", latitude: 41.152628, longitude: -81.349930 },
    { location: "MOULTON HALL", latitude: 41.152946, longitude: -81.346679 },
    { location: "HEALTH AND HUMAN SERVICES", latitude: 41.152748, longitude: -81.345871 },
    { location: "ROTC", latitude: 41.152659, longitude: -81.344672 },
    { location: "PERFORMING ARTS CENTER", latitude: 41.152574, longitude: -81.340459 },
    { location: "NEWMAN CENTER", latitude: 41.152085, longitude: -81.338611 },
    { location: "BOWMAN HALL", latitude: 41.148483, longitude: -81.346463 }
];
const SENSOR_CARDINALS = [ 'NE', 'SE', 'SW', 'NW' ];
const SENSOR_OFFSET = .0005;

const MAX_CARDINALS = SENSOR_CARDINALS.length; // Number of cardinal directions.
const MAX_SENSORS = ( 30 * MAX_CARDINALS ) - 1; // ( 30 sensors * n cardinal directions ) - Danny's sensor.

function generateData() {
    for (var i = 1; i <= MAX_SENSORS; i++) {
        var tableEntry = {};
        tableEntry.SensorID = i;
        tableEntry.Speed = Math.floor(Math.random() * 100) + 1 //Random number 1-100.
        tableEntry.Direction = Math.floor(Math.random() * 15) + 1 //Random number 1-15.
        $.ajax({
            url: '../php/serverPush.php',
            type: 'POST',
            async: false,
            data: {
                data: tableEntry
            }
        });
    }
}

function generateSensors() {
    var idIter = 1;
    for (var i = 0; i < SENSOR_INFO.length; ++i) { // Loop through the sensors in the middle of the building.
        for (var j = 0; j < MAX_CARDINALS; ++j) { // Loop to create a sensor in each direction.
            var sensor = {};
            sensor.SensorID = idIter; // Sensor 0 is reserved for Daniel
            sensor.Location = SENSOR_INFO[i]['location'] + ' ' + SENSOR_CARDINALS[j];
            if (SENSOR_CARDINALS[j] == 'NE' || SENSOR_CARDINALS[j] == 'NW') { // If latitude is towards the north, it is closer to +90.
                sensor.Latitude = SENSOR_INFO[i]['latitude'] + SENSOR_OFFSET;
            }
            else {
                sensor.Latitude = SENSOR_INFO[i]['latitude'] - SENSOR_OFFSET; // Else, heading towards -90.
            }
            if (SENSOR_CARDINALS[j] == 'NE' || SENSOR_CARDINALS[j] == 'SE') { // If the longitude is towards the east, heading towards +180.
                sensor.Longitude = SENSOR_INFO[i]['longitude'] + SENSOR_OFFSET;
            }
            else {
                sensor.Longitude = SENSOR_INFO[i]['longitude'] - SENSOR_OFFSET; // Else, heading towards -180.
            }
            $.ajax({
                url: '../php/sensorPush.php',
                type: 'POST',
                aysnc: false,
                data: {
                    data: sensor
                }
            });
            ++idIter;
        }
    }
}

generateSensors();
generateData();