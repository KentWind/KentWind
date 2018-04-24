<?php
include '../database/DBConnect.php';

$pdo = DBConnect::getInstance()->connect();

$pullFromLive = 'SELECT wind_sensor.SensorID, Location, Speed, Direction, Longitude, Latitude, Time 
				 FROM `live_data` 
				 INNER JOIN wind_sensor 
				 ON live_data.SensorID = wind_sensor.SensorID
				';
						 
$statement = $pdo->prepare($pullFromLive);
$statement->execute();

$result = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);
?>