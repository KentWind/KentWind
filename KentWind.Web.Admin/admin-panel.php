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
	
	// Buffer larger content areas like the main page content
	ob_start();
?>
<div class="container">

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
    
</div> 

<script type="text/javascript">
(function() {
	document.getElementById("linkAdminPanel").setAttribute("class", "active");
})();
</script>

<!-- end container -->
 
<?php
	// Assign all Page Specific variables

	// Basically what this does is takes the contents of the page read from the buffer (ob_start)
	// and loads it in the right part of the master page.
	// http://php.net/manual/en/function.ob-start.php
	$pagecontents = ob_get_contents();
	ob_end_clean();
	$pagetitle = "- Admin Panel";
	//Apply the template
	include("master.php");
?>

