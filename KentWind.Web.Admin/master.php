<!DOCTYPE html>
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
	<link rel="stylesheet" type="text/css" href="css/style.css">
	
	<link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Architects+Daughter" rel="stylesheet">
    
</head>
<body>

	<nav class="navbar navbar-default">
	  <div class="container-fluid">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
		  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			<span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		  </button>
		  <a class="navbar-brand" href="admin-panel.php">Kent Wind</a>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		  <ul class="nav navbar-nav">
			<li id="linkAdminPanel"><a href="admin-panel.php">Admin Panel</a></li>
			<li id="linkAdminActions" class="dropdown">
			  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Admin Actions<span class="caret"></span></a>
			  <ul class="dropdown-menu">
				<li id="linkSensor"><a href="admin-heatmap.php">Sensor Heatmap</a></li>
				<li><a href="#">Coming soon...</a></li>
				<li><a href="#">Coming soon...</a></li>
			  </ul>
			</li>
		  </ul>
		  <form class="navbar-form navbar-left">
			<div class="form-group">
			  <input type="text" class="form-control" placeholder="Search">
			</div>
			<button type="submit" class="btn btn-default">Submit</button>
		  </form>
		  <ul class="nav navbar-nav navbar-right">
			<li><a href="#">Link</a></li>
		  </ul>
		</div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>

	<!-- Main Content Section -->
	<div id="mainContent">
		<?php
			echo $pagecontents;
		?>
	</div>
	<!-- End Main Content Section -->

	<!-- Footer Section -->
	<div id="footer" class="navbar navbar-light bg-light">
			&copy; 2018 KentWind
	</div>
	<!-- End Footer Section -->

	<script src="js/windCanvas.js"></script>
</body>
</html>
