<?php
include '../Database/DBConnect.php';

if(isset($_POST['data'])) { //  If there is something to in the post superglobal.
    $tableEntry = $_POST['data'];

    $id = $tableEntry['SensorID'];
    $speed = $tableEntry['Speed'];
    $direction = $tableEntry['Direction'];

    echo $id . " " . $speed . " " . $direction . " "; //Test if correct data pulled.

    $pdo = DBConnect::getInstance()->connect();

    $moveToHistorical = 'INSERT INTO historical_data SELECT * FROM live_data WHERE SensorID = ' . $id;
    $statement = $pdo->prepare($moveToHistorical);
    $statement->execute();

    $removeLiveData = 'DELETE FROM live_data WHERE SensorID = ' . $id;
    $statement = $pdo->prepare($removeLiveData);
    $statement->execute();

    $insertNewData = 'INSERT INTO live_data (SensorID, Speed, Direction) VALUES (' . $id . ',' . $speed . ',' . $direction . ')';
    $statement = $pdo->prepare($insertNewData);
    $statement->execute();
}
?>