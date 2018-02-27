<?php //ref https://gist.github.com/jonashansen229/4534794

class PDODBConnector
{
    private $connection; //store the single instance
    private static $instance;
    
    /**
    * get an instance of the PDODBConnector
    * @return PDODBConnector
    */
    public static function getInstance(){
        if (!self::$instance){
            self::$instance= new self();
        }
        return self::$instance;
    }

    /**
    * constructor
    */
    public function __construct(){
        $this->connection = new PDO(DBCONNECTION,DBUSER,DBPASS);
        $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    /**
    * Empty clone magic method to prevent duplication.
    */
    private function __clone(){}

    /**
    * get the PDO connection
    * @return connection
    */
    public function getConnection(){
        return $this->connection;
    }
}

// Usage
// $pdo = PDODBConnector::getInstance()->getConnection();

?>