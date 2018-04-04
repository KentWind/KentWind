<?php
	// Buffer larger content areas like the main page content
	ob_start();
	$city = "Kent";
	$state = "Ohio";
?>

<!-- Page Specific Content -->

<ol class="breadcrumb">
  <li><a href="home.php">Home</a></li>
  <li><a href="about.php">About Us</a></li>
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

<script type="text/javascript">
(function() {
	document.getElementById("linkAboutUs").setAttribute("class", "active");
})();
</script>
<!-- End Page Specific Content -->

<?php
	// Assign all Page Specific variables
	
	// Basically what this does is takes the contents of the page read from the buffer (ob_start)
	// and loads it in the right part of the master page.
	// http://php.net/manual/en/function.ob-start.php
	$pagecontents = ob_get_contents();
	ob_end_clean();
	$pagetitle = "- About Us";
	//Apply the template
	include("master.php");
?>
