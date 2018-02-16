<!DOCTYPE html>

<?php
    define('DRIVER', 'mysql');
    define('DBHOST', 'localhost');
    define('DBNAME', 'kent_wind');
    define('DBUSER', 'admin');
    define('DBPASS', 'password');
    
    $pdo_database_conn = null;
    try {
        
        $conn_string = DRIVER . ":" . "dbname=" . DBNAME;
        $pdo_database_conn = new PDO($conn_string, DBUSER, DBPASS);
        
    } catch(PDOException $e) {
        die( $e->getMessage() );
    }
?>

<html lang="en">
<head>
	<title>Admin Panel</title>
	
	<meta name="viewport" content="width=device-width, initial-scale=1">	
	<meta charset="utf-8">
	
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	
	<link rel="stylesheet" type="text/css" href="css/admin.css">
	
	<link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Architects+Daughter" rel="stylesheet">
    
</head>
<body id=>

<div class="container">

    <?php include 'admin-navbar.php'; ?>

    <?php
        
        $result = null;
        $sql = null;
        $statement = null;
        
        if ( !empty($_GET['query']) ) {
            $sql = $_GET['query'];
            
            $statement = $pdo_database_conn->prepare($sql);
            $statement->execute();
            
            $result = $statement->fetchAll();
        }
        
        /*$sql = "SELECT * FROM wind_sensor";
        $result = $pdo_database_conn->query($sql);
        echo "Query complete.";*/
        
    ?>
    
    <div class="row">
        <div class="container-fluid">
            
            <form action="admin-panel.php" method="GET"> 
                <input type="text" name="query" style="width: 40%;">
                <input type="submit" style="width: 15%;">
                <!--<div class="">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="SQL Query ..." id="textQuery"/>
                        <!--<div class="input-group-btn">
                            <input class="btn btn-primary" type="submit">
                                <span class="glyphicon glyphicon-search"></span>
                            </button>
                        </div>
                    </div>
                </div>-->
            </form>
            
        </div> <!-- end fluid container -->
    </div> <!-- end row -->
    
    <div class="row">
        <div class="container-fluid">
            <br>
        </div>
    </div>
    
    <div class="row">
    
        <div class="container-fluid">
            <b>QUERY</b>
                <pre><?=$sql?><?php
                
                    /*
                    print "ID - LOCATION - X, Y\n";
                
                    foreach ($result as $row) {
                        print $row['id'];
                        print '-';
                        print $row['location'];
                        print '-';
                        print $row['x'];
                        print ', ';
                        print $row['y'];
                    }*/
                ?></pre>
        </div>
    </div> <!-- end row -->
    
    <div class="row">
        <div class="container-fluid">
            <b>RESULT</b>
            <pre><?php
                
                    print_r(array_keys($result[0]));
                    /*print "ID - LOCATION - X, Y\n";
                
                    foreach ($result as $row) {
                        print $row['id'];
                        print '-';
                        print $row['location'];
                        print '-';
                        print $row['x'];
                        print ', ';
                        print $row['y'];
                    }*/
                ?>
            </pre>
        </div>
    </div>
    
</div> <!-- end container -->
  
</body></html>

