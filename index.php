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
			<p>Windmap solutions for literally the windiest campus in the United States of America. 
			Couple that in with uncertain, but mostly cold Ohio climate and it's a challenge to avoid
			getting hypothermia on your way to your 9AM Philosophy course they force you to take.</p>
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