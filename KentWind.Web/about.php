<?php
	// Buffer larger content areas like the main page content
	ob_start();
	$city = "Kent";
	$state = "Ohio";
?>

<!-- Page Specific Content -->

<h4>KentWind&trade; About Us</h4>

<!-- End Page Specific Content -->

<?php
	// Assign all Page Specific variables
	
	// Basically what this does is takes the contents of the page read from the buffer (ob_start)
	// and loads it in the right part of the master page.
	// http://php.net/manual/en/function.ob-start.php
	$pagecontents = ob_get_contents();
	ob_end_clean();
	$pagetitle = "Page Specific Title Text";
	//Apply the template
	include("master.php");
?>
