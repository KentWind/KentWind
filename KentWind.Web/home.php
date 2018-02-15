<?php
	// Buffer larger content areas like the main page content
	ob_start();
?>

<!-- Page Specific Content -->
<ol class="breadcrumb">
  <li><a href="home.php">Home</a></li>
</ol>

<div class="jumbotron">
	<div class="container">
		<h1>Welcome to KentWind&trade;</h1>
		<p>Windmap solutions for literally the windiest campus in the United States of America. 
		Couple that in with uncertain, but mostly cold Ohio climate and it's a challenge to avoid
		getting hypothermia on your way to your 9AM Philosophy course they force you to take.</p>
		<p><a class="btn btn-primary btn-lg" href="windmap.php">How windy is it?</a></p>
	</div>
</div>
<!-- End Page Specific Content -->

<?php
	// Assign all Page Specific variables
	
	// Basically what this does is takes the contents of the page read from the buffer (ob_start)
	// and loads it in the right part of the master page.
	// http://php.net/manual/en/function.ob-start.php
	$pagecontents = ob_get_contents();
	ob_end_clean();
	$pagetitle = "- Home";
	//Apply the template
	include("master.php");
?>
