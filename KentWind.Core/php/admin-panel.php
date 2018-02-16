<!DOCTYPE html>

<?php
    define('DRIVER', 'mysql');
    define('DBHOST', 'localhost');
    define('DBNAME', 'kent_wind');
    define('DBUSER', 'admin');
    define('DBPASS', 'password');
    
    $connection = 
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

    <div class="row">
        <div class="container-fluid">

        </div>
    </div>
    
    <div class="row">
        <div class="container-fluid">
            
            <form action="admin-panel.php" method="GET"> 
                <div class="">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="SQL Query ..." id="textQuery"/>
                        <div class="input-group-btn">
                            <button class="btn btn-primary" type="submit">
                                <span class="glyphicon glyphicon-search"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            
        </div> <!-- end fluid container -->
    </div> <!-- end row -->
    
    <br>
    
    <div class="row">
    
        <div class="container-fluid">
            <details>
                <b>QUERY:</b>
                <br>
                <pre>
                    
                </pre>
            </details>
        </div>
    
        <!--<div class="col-md-3">
            <div class="container">
                <b>QUERY :</b>
                <br>
                <textarea>
                </textarea>
            </div>
        </div>
        
        <div class="col-md-9">
            <div class="container" >
                <b>RESULT :</b>
                <br>
                <pre>
                    abcedefag asda asdasdasd asd abcedefag asda asdasdasd asd abcedefag asda asdasdasd asd abcedefag asda asdasdasd asd abcedefag asda asdasdasd asd abcedefag asda asdasdasd asd
                </pre>
            </div>
        </div>-->
    
    </div> <!-- end row -->
    
    <div class="row">
        <div class="container-fluid">
            <b>RESULT:</b>
            <br>
            <pre>
                
            </pre>
        </div>
    </div>
    
</div>
    <!-- end row -->
<!--
                      <table>
                    <tr>
                        <td>Query: </td>
                        <td><form action="admin-panel.php" method="get"><input type="text" name="query"><input type="submit"></form></td>
                    </tr>
                </table>-->
      

  
</body></html>

