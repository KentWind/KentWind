<?php
include 'db-utilities.php';

//USAGE: $pdo = DBConnect::getInstance()->connect();
class DBConnect {
    private $connection;

    private static $instance;

    public static function getInstance() {
        if (!self::$instance){
            self::$instance = new self();   //If there is no instance, create one.
        }
        return self::$instance;
    }

    public function __construct() {
        $this->connection = new PDO(DBCONNECTION,DBUSER,DBPASS);    //Uses information from db-utilities.
    }

    // Empty clone magic method to prevent duplication.
    private function __clone() { }

    public function connect() {
        return $this->connection;
    }
}
?>