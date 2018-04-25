<html lang='en'>
<head>
	<?php
		// Specify Page Title
		$pagetitle = 'Home';

		// Dependencies Include
		include 'php/includes/dependencies.inc.php';
	?>
</head>
<body>

	<!-- Navbar Includes -->
	<?php include 'php/includes/navbar.inc.php'; ?>

	<!-- Page Specific Content -->
	<ol class="breadcrumb">
	  <li><a href="<?php echo $HOME; ?>">Home</a></li>
	</ol>

	<div class="jumbotron">
		<div class="container">
			<h1>Welcome to KentWind&trade;</h1>
			<p>Kent State University Computer Science students designing a
			system to measure and display the wind speeds and direction
			within the Kent State University main campus.</p>
			<p>Plan your route through the campus!</p>
			<p><a class="btn btn-primary btn-lg" href="visualization.html">How windy is it?</a></p>
		</div>
	</div>

	<?php include 'php/includes/footer.inc.php'; ?>
</body>
<script type="text/javascript">
	(function() {
		document.getElementById("linkHome").setAttribute("class", "active");
	})();
</script>
</html>
