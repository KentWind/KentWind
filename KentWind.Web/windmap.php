<?php
	// Buffer larger content areas like the main page content
	ob_start();
	$city = "Kent";
	$state = "Ohio";
?>

<!-- Page Specific Content -->
<ol class="breadcrumb">
  <li><a href="home.php">Home</a></li>
  <li><a href="windmap.php">WindMap</a></li>
</ol>

<div class="container">
	<h4>Wind Map of <?php echo $city; echo ', '; echo $state; ?></h4>

	<div class="col">
		<canvas id="windMap">
		</canvas>
	</div>
</div>


<script type="text/javascript">
(function() {
	document.getElementById("linkWindMap").setAttribute("class", "active");
})();
</script>

<!-- File to handle js windmap -->
<script src="js/windCanvas.js"></script>

<!-- End Page Specific Content -->

<?php
	// Assign all Page Specific variables

	// Basically what this does is takes the contents of the page read from the buffer (ob_start)
	// and loads it in the right part of the master page.
	// http://php.net/manual/en/function.ob-start.php
	$pagecontents = ob_get_contents();
	ob_end_clean();
	$pagetitle = "- WindMap";
	//Apply the template
	include("master.php");
?>
