<?php
include '../database/DBConnect.php';

$pdo = DBConnect::getInstance()->connect();

$pullFromHistorical = 'SELECT DISTINCT wind_sensor.SensorID, Speed, Direction, Longitude, Latitude, Time 
				 FROM `historical_data` 
				 INNER JOIN wind_sensor 
				 ON historical_data.SensorID = wind_sensor.SensorID
                 WHERE historical_data.Time >= FROM_UNIXTIME(' . $_POST['lower_time'] .
                 ') AND historical_data.Time <= FROM_UNIXTIME(' . $_POST['upper_time'] .
                 ') GROUP BY historical_data.SensorID
				';
						 // . $_POST['upper_time'] . ')
                         // . $_POST['lower_time'] .
$statement = $pdo->prepare($pullFromHistorical);
$statement->execute();

$result = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);
?>