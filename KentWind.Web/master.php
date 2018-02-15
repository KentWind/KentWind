<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!-- local bootstrap-4.0.0-dist
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="bootstrap/css/bootstrap-theme.min.css" />
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
	-->

	<!-- bootstrap-3.3.7 CDN  +  jquery -->
	<!-- Latest compiled and minified CSS -->

	<link rel="stylesheet" href="css/style.css" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

	<title>KentWind <?php echo $pagetitle; ?></title>
</head>
<body>

	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="home.php">KentWind&trade;</a>
			</div>
			<ul class="nav navbar-nav">
				<li id="linkHome"><a href="home.php"><span class="glyphicon glyphicon-home"></span> Home</a></li>
				<li id="linkWindMap"><a href="windmap.php"><span class="glyphicon glyphicon-send"></span> WindMap</a></li>
				<li id="linkAboutUs"><a href="about.php"><span class="glyphicon glyphicon-info-sign"></span> About Us</a></li>
			</ul>
		</div>
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
