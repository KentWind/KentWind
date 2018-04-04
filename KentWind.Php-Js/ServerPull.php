<?php
/*
TO-DO:  Query the database to give create json object that has: [id, speed, direction, time, location, lat, long]
*/
$connection = "mysql:host=localhost;dbname=kent_wind";
$username = "WindAdmin";
$password = "wind123";

try {
    $pdo = new PDO($connection, $username, $password);
}
catch (PDOException $e) {
    echo "Error: " . $e->getMessage() . "<br>";
    die();
}

$sql = 'SELECT live_data.id, live_data.speed, live_data.direction, live_data.time, 
               wind_sensor.location, wind_sensor.latitude, wind_sensor.longitude 
        FROM live_data 
        INNER JOIN wind_sensor 
        ON live_data.id = wind_sensor.id';

$statement = $pdo->prepare($sql);
$statement->execute();
$result = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);
?>