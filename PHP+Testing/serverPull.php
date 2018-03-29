<?php
include 'DBConnect.php';

$pdo = DBConnect::getInstance()->connect();

$pullFromLive = 'SELECT * FROM live_data';
$statement = $pdo->prepare($pullFromLive);
$statement->execute();

$result = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);
?>