<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<!-- bootstrap-4.0.0-dist -->
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="bootstrap/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="css/style.css">
	
	<title>KentWind <?php echo $pagetitle; ?></title>
</head>
<body>
	
		<!-- Header Section -->
		<div id="header">
			<a href="home.php"><h1>KentWind</h1></a>
		</div>
		<!-- End Header Section -->
		
		<!-- Navbar section -->
		<nav class="navbar navbar-expand-lg navbar-dark bg-light">
			<nav class="nav">
				<a class="nav-link font-weight-bold" href="home.php">Home</a>
				<a class="nav-link font-weight-bold" href="windmap.php">WindMap</a>
				<a class="nav-link font-weight-bold" href="about.php">About Us</a>
			</nav>
		</nav>
		<!-- End Navbar section -->
		
		<!-- Main Content Section -->
		<div id="mainContent">
			<?php
				echo $pagecontents;
			?>
		</div>
		<!-- End Main Content Section -->
		
		<!-- Footer Section -->
		<div id="footer" class="navbar navbar-light bg-light fixed-bottom">
			&copy; 2018 KentWind
		</div>
		<!-- End Footer Section -->
</body>
</html>
