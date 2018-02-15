<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!-- local bootstrap-4.0.0-dist
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="bootstrap/css/bootstrap-theme.min.css" />
	<link rel="stylesheet" href="css/style.css" />
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
	-->

	<!-- bootstrap-4.0.0 CDN  +  jquery -->
	<!-- Latest compiled and minified CSS -->
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
				<a class="navbar-brand" href="home.php">KentWind</a>
			</div>
			<ul class="nav navbar-nav">
				<li class="active"><a href="home.php">Home</a></li>
				<li><a href="windmap.php">WindMap</a></li>
				<li><a href="about.php">About Us</a></li>
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
		<footer class="footer">
      <div class="container">
				<span class="text-muted">&copy; 2018 KentWind</span>
			</div>
		</footer>
		</div>
		<!-- End Footer Section -->
</html>
