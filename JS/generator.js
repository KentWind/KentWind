const MAX_SENSOR_ID = 30;

const SENSOR_OFFSET = .0005;
const SENSOR_INFO = [
        { location: "KSU MUSEUM", latitude: 41.152628, longitude: -81.349930 },
        { location: "MOULTON HALL", latitude: 41.152946, longitude: -81.346679 },
        { location: "HEALTH AND HUMAN SERVICES", latitude: 41.152748, longitude: -81.345871 },
        { location: "ROTC", latitude: 41.152659, longitude: -81.344672 },
        { location: "PERFORMING ARTS CENTER", latitude: 41.152574, longitude: -81.340459 },
        { location: "NEWMAN CENTER", latitude: 41.152085, longitude: -81.338611 },
        { location: "BOWMAN HALL", latitude: 41.148483, longitude: -81.346463 }
];

function generateData() {
    for (var i = 1; i <= MAX_SENSOR_ID; i++) {
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
    alert("FUNCTION INVOKED");
    for (var i = 0; i < SENSOR_INFO.length; ++i) {
        var sensor = {};
        sensor.SensorID = i + 1; // Sensor 0 is reserved for Daniel
        sensor.Location = SENSOR_INFO[i]['location'] + ' NE';
        sensor.Latitude = SENSOR_INFO[i]['latitude'] + SENSOR_OFFSET;
        sensor.Longitude = SENSOR_INFO[i]['longitude'] + SENSOR_OFFSET;

        $.ajax({
            url: '../php/sensorPush.php',
            type: 'POST',
            aysnc: false,
            data: {
                data: sensor
            }
        });
    }
}

generateSensors();