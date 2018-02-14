<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- bootstrap-4.0.0-dist -->
		<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="bootstrap/css/bootstrap-theme.min.css">

		<title><?php echo $pagetitle; ?></title>
	</head>

	<body>
		<div id="divHeader">
			This is the header.
		</div>
		<div id="divLinks">
			These are the links.
		</div>
		<div id="divBody">
			This is gonna be our main text for each page:
			<?php echo $pagecontents; ?>
		</div>
		<div id="divFooter">
			This is the footer.
		</div>

		<script src="bootstrap/js/jquery-1.11.3.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
	</body>
</html>
