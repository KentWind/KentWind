// Global var for slider
var GLOBAL_SLIDER_SECONDS = 0;
$(function () {
	Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 }
	
	// var sliderValue = $("#slider").val();

	// $("#sliderValue").html("<b style='color: red; text-decoration: underline;'>LIVE</b>");

	// $("#slider").on('change input', function () {

		// sliderValue = $("#slider").val();

		// if (parseInt(sliderValue) == 0) {
			// $("#sliderValue").html("<b style='color: red; text-decoration: underline;'>LIVE</b>");
            // GLOBAL_SLIDER_SECONDS = sliderMinutes * 60;

		// } else {
			// var sliderDays = sliderValue / 60 / 60 / 24;

			// var sliderHours = sliderValue / 60 / 60;
			// var sliderMinutes = sliderValue / 60;
            // GLOBAL_SLIDER_SECONDS = sliderMinutes * 60;



			// var sliderValueText = sliderDays.toFixed(2) + " day(s) ago | " + sliderHours + " hour(s) ago | " + sliderMinutes + " minute(s) ago";
			// $("#sliderValue").text(sliderValueText);
		// }
	// });

	// $("input[class=colorSlider]").on('change input', function () {
		// changeColorBox();
	// });

	// var today = new Date();
	// var todayString = today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
	// $("#endDaysSliderValue").text("0 days ago - Date: " + todayString);
	// $("#fromDaysSliderValue").text("0 days ago - Date: " + todayString);

	// $("#fromDaysSlider").on('change input', function () {
		// changeFromDaysSlider();
		// updateEndDaysSliderText();
	// });

	// $("#endDaysSlider").on('change input', function () {
		// changeEndDaysSlider();
		// updateFromDaysSliderText();
	// });

	// $("#MapTypeOption").change(function () {
		// if ($('input[name=maptype]:checked', '#MapTypeOption').val() == "Average") {
			// $("#averageFilters").removeClass("hidden");
		// } else {
			// $("#averageFilters").addClass("hidden");
		// }
	// });

	// function changeFromDaysSlider() {
		// updateFromDaysSliderText();

		// if (parseInt($("#endDaysSlider").val()) < parseInt($("#fromDaysSlider").val())) {
			// $("#endDaysSlider").val($("#fromDaysSlider").val());
		// }
	// }

	// function changeEndDaysSlider() {
		// updateEndDaysSliderText();

		// if (parseInt($("#endDaysSlider").val()) < parseInt($("#fromDaysSlider").val())) {
			// $("#fromDaysSlider").val($("#endDaysSlider").val());
		// }
	// }

	// function updateFromDaysSliderText() {
		// var days = $("#fromDaysSlider").val();
		// var date = new Date(new Date().setDate(today.getDate() - days));
		// var dateString = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

		// $("#fromDaysSliderValue").text(days + " days ago - Date: " + dateString);
	// }

	// function updateEndDaysSliderText() {
		// var days = $("#endDaysSlider").val();
		// var date = new Date(new Date().setDate(today.getDate() - days));
		// var dateString = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

		// $("#endDaysSliderValue").text(days + " days ago - Date: " + dateString);
	// }

	function changeColorBox() {
		var R = parseInt($("#RGBA-RSlider").val());
		var G = parseInt($("#RGBA-GSlider").val());
		var B = parseInt($("#RGBA-BSlider").val());
		var A = parseInt($("#RGBA-ASlider").val());

		$("colorBox").css("background-color: rgba(" + R + ", " + G + ", " + B + ", " + A + ");");
	}

	$("#applyFilters").click(function () {
		// var R = parseInt($("#RGBA-RSlider").val());
		// var G = parseInt($("#RGBA-GSlider").val());
		// var B = parseInt($("#RGBA-BSlider").val());
		var A = parseInt($("#RGBA-ASlider").val());

		STARTCOLOR = hexToRgb(document.getElementById("startColor").value);
		ENDCOLOR = hexToRgb(document.getElementById("endColor").value);

		windy.generateColorGradient(STARTCOLOR, ENDCOLOR);

		// windy.modifyColors(R, G, B, A);
	});

	function hexToRgb(hex) {
			var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			return result ? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
			} : null;
		}

    $("#applyDateFilters").click(function () {
		debugger;
		var selectedDate = new Date($("#dtp_input1").val()).getUnixTime() * 1000;
		
		
        if ( $("#dtp_input1").val() == null || $("#dtp_input1").val() == 0 ) {
            if ( GLOBAL_SLIDER_SECONDS > 0 ) {

                var current_time = new Date().getTime();
                var selected_time = new Date( current_time - GLOBAL_SLIDER_SECONDS * 1000 );
                document.getElementById("currentTimeBox").innerHTML = selected_time;
                DATA_STATUS_LIVE = false;

                windy.stopEvolve();
                windy.newInfoAvailable();
                windy.stop();
                windy.fadeOut();

                map.removeLayer( rasterLayer );

                clearInterval( GLOBAL_REFRESH_INTERVAL );
                GLOBAL_REFRESH_FUNCTION();

            } else {

                DATA_STATUS_LIVE = true;
                document.getElementById("currentTimeBox").innerHTML = "LIVE";

                windy.stopEvolve();
                windy.newInfoAvailable();
                windy.stop();
                windy.fadeOut();

                map.removeLayer( rasterLayer );

                clearInterval( GLOBAL_REFRESH_INTERVAL );
                GLOBAL_REFRESH_INTERVAL = setInterval(GLOBAL_REFRESH_FUNCTION, 15000);

            }
            GLOBAL_REFRESH_FUNCTION();
            //alert("Data Status: " + DATA_STATUS_LIVE + ", Minutes: " + SLIDER_MINUTES);
        } else {
            //var current_time = new Date().getTime();
            //var selected_time = new Date( current_time - parseInt($('#epochText').val()) * 1000 );
            var selected_time = new Date( parseInt(selectedDate) );

            GLOBAL_SLIDER_SECONDS = parseInt(selectedDate);

            document.getElementById("currentTimeBox").innerHTML = selected_time;
            DATA_STATUS_LIVE = false;

            windy.stopEvolve();
            windy.newInfoAvailable();
            windy.stop();
            windy.fadeOut();

            map.removeLayer( rasterLayer );

            clearInterval( GLOBAL_REFRESH_INTERVAL );
            GLOBAL_REFRESH_FUNCTION();
        }

	});

});
