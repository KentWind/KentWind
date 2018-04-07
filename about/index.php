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
		<h2>About Us</h2>
		<div class="jumbotron container">
			<div class="container">
				<p>Kent State University Computer Science students designing a 
				system to measure and display the wind speeds and direction 
				within the Kent State University main campus.</p>
			</div>
			
			<table class="table table-hover">
				<tr class="active">
					<th colspan="2"><h3><span class="glyphicon glyphicon-console"></span> The Team</h3></th>
				</tr>
				<tr>
					<td><b>Arnold Bykov</b></td>
					<td>UI Team / Visualization Design & Repository Manager</td>
				</tr>
				<tr>
					<td><b>Michael Spangler</b></td>
					<td>UI Team / Visualization Design & Back-End UI</td>
				</tr>
				<tr>
					<td><b>Logan Baker</b></td>
					<td>UI Team / Back-End UI & Database</td>
				</tr>
				<tr>
					<td><b>Abdel-Hakeem Badran</b></td>
					<td>Hardware Connection & Database & Back-End UI</td>
				</tr>
				<tr>
					<td><b>Daniel Bevilacqua</b></td>
					<td>Hardware Connection & Database</td>
				</tr>
			</table>
			
			<div class="container">
				<b><i>Note:</i></b> While, generally we had defined roles throughout the lifecycle of
				this project, every team member handled responsibilities for each other making
				every member's role well-rounded in their participation and effort.
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