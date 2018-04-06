<?php
include '../database/DBConnect.php';

echo "INVOKING";

if(isset($_POST['data'])) { //  If there is something to in the post superglobal.
    $sensor = $_POST['data'];
    
    $id = $sensor['SensorID'];
    $location = $sensor['Location'];
    $latitude = $sensor['Latitude'];
    $longitude = $sensor['Longitude'];

    echo $id; //Test if correct data pulled.

    $pdo = DBConnect::getInstance()->connect();

    $insertSensor = "INSERT INTO wind_sensor (SensorID, Location, Latitude, Longitude)
                     VALUES (" . $id . ", '" . $location . "', CAST(" . $latitude . " AS DECIMAL(16,6)), CAST(" . $longitude . " AS DECIMAL(16,6)))";
    $statement = $pdo->prepare($insertSensor);
    $statement->execute();

    $pdo.close();
}
?>