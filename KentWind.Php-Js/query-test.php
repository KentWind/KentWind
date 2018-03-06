<?php
define('DRIVER', 'mysql');
define('DBHOST', 'sql9.freemysqlhosting.net');
define('DBNAME', 'sql9223881');
define('DBUSER', 'sql9223881');
define('DBPASS', '5InRzAgxy6');

$pdo_database_conn = null;
try {

    $conn_string = "mysql:host=" . DBHOST . ";" . "dbname=" . DBNAME;
    $pdo_database_conn = new PDO($conn_string, DBUSER, DBPASS);

} catch(PDOException $e) {
    die( $e->getMessage() );
}

$result = null;
$sql = "SELECT * FROM live_data"; 
$statement = null;
$statement = $pdo_database_conn->prepare($sql);
$statement->execute();

$result = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);
?>