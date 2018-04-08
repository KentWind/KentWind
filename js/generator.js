function generateData() {
    for (var i = 1; i <= MAX_SENSORS; i++) {
        var tableEntry = {};
        tableEntry.SensorID = i;
        tableEntry.Speed = Math.floor(Math.random() * 100) + 1 //Random number 1-100.
        tableEntry.Direction = Math.floor(Math.random() * 15) + 1 //Random number 1-15.
        $.ajax({
            url: 'php/utilities/serverPush.php',
            type: 'POST',
            async: false,
            data: {
                data: tableEntry
            }
        });
    }
}

const SENSOR_INFO = [
    { location: "KSU MUSEUM", latitude: 41.152628, longitude: -81.349930 },
    { location: "MOULTON HALL", latitude: 41.152946, longitude: -81.346679 },
    { location: "HEALTH AND HUMAN SERVICES", latitude: 41.152748, longitude: -81.345871 },
    { location: "ROTC", latitude: 41.152659, longitude: -81.344672 },
    { location: "PERFORMING ARTS CENTER", latitude: 41.152574, longitude: -81.340459 },
    { location: "NEWMAN CENTER", latitude: 41.152085, longitude: -81.338611 },
    { location: "ADMINISTRATIVE SERVICES CENTER", latitude: 41.1511145, longitude: -81.337651 },
    { location: "KOONCE HALL", latitude: 41.150088, longitude: -81.337901 },
    { location: "LEEBRICK", latitude: 41.149317, longitude: -81.337352 },
    { location: "CENTENNIAL COURTS", latitude: 41.149728, longitude: -81.339777 },
    { location: "TAYLOR HALL", latitude: 41.149083, longitude: -81.343070 },
    { location: "KSU ART GALLERY", latitude: 41.150284, longitude: -81.346024 },
    { location: "VISUAL ARTS BUILDING", latitude: 41.150414, longitude: -81.346585 },
    { location: "KENT HALL", latitude: 41.150784, longitude: -81.348696 },
    { location: "FASHION BUILDING", latitude: 41.152204, longitude: -81.349505 },
    { location: "ARCHITECTURE LIBRARY", latitude: 41.152068, longitude: -81.351033 },
    { location: "CENTER FOR SCHOLASTIC JOURNALISM", latitude: 41.149509, longitude: -81.351326 },
    { location: "HILLEL AT KENT STATE", latitude: 41.149676, longitude: -81.349406 },
    { location: "BUSINESS ADMINISTRATION", latitude: 41.149132, longitude: -81.347268 },
    { location: "SCHWARTZ CENTER", latitude: 41.147173, longitude: -81.356613 },
    { location: "THE QUAD", latitude: 41.146587, longitude: -81.345219 },
    { location: "KIVA AUDITORIUM", latitude: 41.145042, longitude: -81.343073 },
    { location: "KSU LIBRARY", latitude: 41.145042, longitude: -81.343073 },
    { location: "WILLIAMS HALL", latitude: 41.145586, longitude: -81.342414 },
    { location: "SMITH HALL", latitude: 41.145644, longitude: -81.341473 },
    { location: "CUNNINGHAM HALL", latitude: 41.145815, longitude: -81.341892 },
    { location: "MATH AND COMPUTER SCIENCE", latitude: 41.145019, longitude: -81.341748 },
    { location: "HENDERSON HALL", latitude: 41.145148, longitude: -81.341465 },
    { location: "LIQUID CRYSTAL", latitude: 41.144445, longitude: -81.340484 },
    { location: "BOWMAN HALL", latitude: 41.148483, longitude: -81.346463 }
];
const SENSOR_CARDINALS = [ 'NE', 'SE', 'SW', 'NW' ];
const SENSOR_OFFSET = .0005;

const MAX_CARDINALS = SENSOR_CARDINALS.length; // Number of cardinal directions.
const MAX_SENSORS = ( 30 * MAX_CARDINALS ) - 1; // ( 30 sensors * n cardinal directions ) - Danny's sensor.

// function generateSensors() {
//     var idIter = 1;
//     for (var i = 0; i < SENSOR_INFO.length; ++i) { // Loop through the sensors in the middle of the building.
//         for (var j = 0; j < MAX_CARDINALS; ++j) { // Loop to create a sensor in each direction.
//             var sensor = {};
//             sensor.SensorID = idIter; // Sensor 0 is reserved for Daniel
//             sensor.Location = SENSOR_INFO[i]['location'] + ' ' + SENSOR_CARDINALS[j];
//             if (SENSOR_CARDINALS[j] == 'NE' || SENSOR_CARDINALS[j] == 'NW') { // If latitude is towards the north, it is closer to +90.
//                 sensor.Latitude = SENSOR_INFO[i]['latitude'] + SENSOR_OFFSET;
//             }
//             else {
//                 sensor.Latitude = SENSOR_INFO[i]['latitude'] - SENSOR_OFFSET; // Else, heading towards -90.
//             }
//             if (SENSOR_CARDINALS[j] == 'NE' || SENSOR_CARDINALS[j] == 'SE') { // If the longitude is towards the east, heading towards +180.
//                 sensor.Longitude = SENSOR_INFO[i]['longitude'] + SENSOR_OFFSET;
//             }
//             else {
//                 sensor.Longitude = SENSOR_INFO[i]['longitude'] - SENSOR_OFFSET; // Else, heading towards -180.
//             }
//             $.ajax({
//                 url: 'php/utilities/sensorPush.php',
//                 type: 'POST',
//                 aysnc: false,
//                 data: {
//                     data: sensor
//                 }
//             });
//             ++idIter;
//         }
//     }
// }