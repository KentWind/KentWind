<?php 
	$BASE_URL = 'http://localhost/KentWind/';
	$HOME = $BASE_URL;
	$ABOUT = $BASE_URL . 'about';
	$WINDMAP = $BASE_URL . 'visualization.html';
?>
<nav class="navbar navbar-default">
	<div class="container-fluid">
		<div class="navbar-header">
			<a class="navbar-brand" href="<?php echo $HOME; ?>">KentWind&trade;</a>
		</div>
		<ul class="nav navbar-nav">
			<li id="linkHome"><a href="<?php echo $HOME; ?>"><span class="glyphicon glyphicon-home"></span> Home</a></li>
			<li id="linkWindMap"><a href="<?php echo $WINDMAP; ?>"><span class="glyphicon glyphicon-send"></span> WindMap</a></li>
			<li id="linkAboutUs"><a href="<?php echo $ABOUT; ?>"><span class="glyphicon glyphicon-info-sign"></span> About Us</a></li>
		</ul>
	</div>
</nav>