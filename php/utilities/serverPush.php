<?php
include '../database/DBConnect.php';

if(isset($_POST['data'])) { //  If there is something to in the post superglobal.
    $tableEntry = $_POST['data'];
    
    $id = $tableEntry['SensorID'];
    $speed = $tableEntry['Speed'];
    $direction = $tableEntry['Direction'];

    $pdo = DBConnect::getInstance()->connect();

    $checkTableEmpty = 'SELECT 1 FROM live_data LIMIT 1;';   // Returns 1 if there is data in the table.
    $statement = $pdo->prepare($checkTableEmpty);
    $rowExists = $statement->execute();

    if ($rowExists == 0) { // If there is no data in the table, insert data into the table.
        $insertNewData = 'INSERT INTO live_data (SensorID, Speed, Direction) VALUES (' . $id . ',' . $speed . ',' . $direction . ')';
        $statement = $pdo->prepare($insertNewData);
        $statement->execute();
    }
    else {  // If a data exists in the table, update the table.
        $moveToHistorical = 'INSERT INTO historical_data SELECT * FROM live_data WHERE SensorID = ' . $id;
        $statement = $pdo->prepare($moveToHistorical);
        $statement->execute();

        $updateData = 'UPDATE live_data SET Speed =' . $speed . ', Direction = ' . $direction . ', Time = CURRENT_TIMESTAMP WHERE SensorID = ' . $id;
        $statement = $pdo->prepare($updateData);
        $statement->execute();
    }

    $pdo.close();
}
?>