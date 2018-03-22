<?php

/*
TO-DO: 
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

?>