<html lang='en'>
<head>
	<?php
		// Specify Page Title
		$pagetitle = 'About';
		
		// Dependencies Include
		include '../php/includes/dependencies.inc.php';
	?>
</head>
<body>
	<!-- Navbar Includes -->
	<?php include '../php/includes/navbar.inc.php'; ?>

	<!-- Page Specific Content -->
	<ol class="breadcrumb">
	  <li><a href="<?php echo $HOME; ?>">Home</a></li>
	  <li><a href="<?php echo $ABOUT; ?>">About Us</a></li>
	</ol>

	<div class="container">
		<h2><span class="glyphicon glyphicon-console"></span> The Team</h2>
		<div class="jumbotron container">
			<div class="container">
				<h3>Front-End UI Team</h3>
				<div class="container">
					<p>Arnold Bykov</p>
				</div>
				<div class="container">
					<p>Michael Spangler</p>
				</div>
			</div>
			
			<div class="container">
				<h3>Back-End UI Team</h3>
				<div class="container">
					<p>Logan Baker</p>
				</div>
				<div class="container">
					<p>Salvatore Faetanini</p>
				</div>
			</div>
			
			<div class="container">
				<h3>Back-End Hardware Team</h3>
				<div class="container">
					<p>Abdel-Hakeem Badran</p>
				</div>
				<div class="container">
					<p>Daniel Bevilacqua</p>
				</div>
			</div>
		</div>
	</div>
	
	<?php include '../php/includes/footer.inc.php'; ?>
</body>
<script type="text/javascript">
	(function() {
		document.getElementById("linkAboutUs").setAttribute("class", "active");
	})();
</script>
</html>