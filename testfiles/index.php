<?php
	// Buffer larger content areas like the main page content
	ob_start();
	$city = "Kent";
	$state = "Ohio";
?>

<link rel="stylesheet" href="https://js.arcgis.com/3.20/esri/css/esri.css">

<style>
	html,body {
		width:100%;
		height:100%;
		margin: 0;
		padding: 0px 0 0 0;
	}

	#mapCanvas {
		padding:0;
	}

	#credit {
		position: absolute;
		bottom: 10px;
		left: 10px;
		color: #fff;
		font-size: 14px;
	}

	#credit a {
		color: #08c;
	}

</style>

<script>
	var dojoConfig = {
		paths: {
			plugins: location.pathname.replace(/\/[^/]+$/, "") + "/plugins"
		}
	};
</script>
<script src="./windy.js"></script>
<script src="https://js.arcgis.com/3.20compact/"></script>
<script>
	var map, rasterLayer;
	var canvasSupport;

	require([
		"esri/map", "esri/layers/ArcGISTiledMapServiceLayer",
		"esri/domUtils", "esri/request",
		"dojo/parser", "dojo/number", "dojo/json", "dojo/dom",
		"dijit/registry", "plugins/RasterLayer","esri/layers/WebTiledLayer",
		"esri/config",
		"dojo/domReady!"
	], function(
		Map, ArcGISTiledMapServiceLayer,
		domUtils, esriRequest,
		parser, number, JSON, dom,
		registry, RasterLayer, WebTiledLayer, esriConfig
	){
		parser.parse();
		// does the browser support canvas?
		canvasSupport = supports_canvas();

		map = new Map("mapCanvas", {
			center: [-81.3425, 41.1480],
			zoom: 3,
			basemap: "dark-gray"
		});

		map.on("load", mapLoaded);

		function mapLoaded() {

			// Add raster layer
			if ( canvasSupport ) {
				rasterLayer = new RasterLayer(null, {
					opacity: 1
				});
				map.addLayer(rasterLayer);

				map.on("extent-change", redraw);
				map.on("resize", function(){});
				map.on("zoom-start", redraw);
				map.on("pan-start", redraw);

				var layersRequest = esriRequest({
					url: './gfs.json',
					content: {},
					handleAs: "json"
				});
				layersRequest.then(
					function(response) {
						windy = new Windy({ canvas: rasterLayer._element, data: response });
						redraw();
				}, function(error) {
						console.log("Error: ", error.message);
				});

			} else {
				dom.byId("mapCanvas").innerHTML = "This browser doesn't support canvas. Visit <a target='_blank' href='http://www.caniuse.com/#search=canvas'>caniuse.com</a> for supported browsers";
			}
		}

		// does the browser support canvas?
		function supports_canvas() {
			return !!document.createElement("canvas").getContext;
		}

		function redraw(){

			rasterLayer._element.width = map.width;
			rasterLayer._element.height = map.height;

			windy.stop();

			var extent = map.geographicExtent;
			setTimeout(function(){
				windy.start(
					[[0,0],[map.width, map.height]],
					map.width,
					map.height,
					[[extent.xmin, extent.ymin],[extent.xmax, extent.ymax]]
				);
			},500);
		}
	});
</script>

<!-- Page Specific Content -->
<ol class="breadcrumb">
  <li><a href="home.php">Home</a></li>
  <li><a href="windmap.php">WindMap</a></li>
</ol>


<div class="container">
	<h4>Wind Map of <?php echo $city; echo ', '; echo $state; ?></h4>

	<div class="col">
		<div id="mapCanvas" style="height:70%; width: 80%;">
		</div>
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
