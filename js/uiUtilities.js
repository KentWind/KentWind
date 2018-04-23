$(function () {
	var sliderValue = $("#slider").val();

	$("#sliderValue").html("<b style='color: red; text-decoration: underline;'>LIVE</b>");

	$("#slider").on('change input', function () {

		sliderValue = $("#slider").val();

		if (parseInt(sliderValue) == 0) {
			$("#sliderValue").html("<b style='color: red; text-decoration: underline;'>LIVE</b>");
		} else {
			var sliderDays = sliderValue / 60 / 60 / 24;
			var sliderHours = sliderValue / 60 / 60;
			var sliderMinutes = sliderValue / 60;
			var sliderValueText = sliderDays + " day(s) ago | " + sliderHours + " hour(s) ago | " + sliderMinutes + " minute(s) ago";
			$("#sliderValue").text(sliderValueText);
		}
	});

	$("input[class=colorSlider]").on('change input', function () {
		changeColorBox();
	});

	var today = new Date();
	var todayString = today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
	$("#endDaysSliderValue").text("0 days ago - Date: " + todayString);
	$("#fromDaysSliderValue").text("0 days ago - Date: " + todayString);

	$("#fromDaysSlider").on('change input', function () {
		changeFromDaysSlider();
		updateEndDaysSliderText();
	});

	$("#endDaysSlider").on('change input', function () {
		changeEndDaysSlider();
		updateFromDaysSliderText();
	});

	$("#MapTypeOption").change(function () {
		if ($('input[name=maptype]:checked', '#MapTypeOption').val() == "Average") {
			$("#averageFilters").removeClass("hidden");
		} else {
			$("#averageFilters").addClass("hidden");
		}
	});

	function changeFromDaysSlider() {
		updateFromDaysSliderText();

		if (parseInt($("#endDaysSlider").val()) < parseInt($("#fromDaysSlider").val())) {
			$("#endDaysSlider").val($("#fromDaysSlider").val());
		}
	}

	function changeEndDaysSlider() {
		updateEndDaysSliderText();

		if (parseInt($("#endDaysSlider").val()) < parseInt($("#fromDaysSlider").val())) {
			$("#fromDaysSlider").val($("#endDaysSlider").val());
		}
	}

	function updateFromDaysSliderText() {
		var days = $("#fromDaysSlider").val();
		var date = new Date(new Date().setDate(today.getDate() - days));
		var dateString = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

		$("#fromDaysSliderValue").text(days + " days ago - Date: " + dateString);
	}

	function updateEndDaysSliderText() {
		var days = $("#endDaysSlider").val();
		var date = new Date(new Date().setDate(today.getDate() - days));
		var dateString = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

		$("#endDaysSliderValue").text(days + " days ago - Date: " + dateString);
	}

	function changeColorBox() {
		var R = parseInt($("#RGBA-RSlider").val());
		var G = parseInt($("#RGBA-GSlider").val());
		var B = parseInt($("#RGBA-BSlider").val());
		var A = parseInt($("#RGBA-ASlider").val());

		$("colorBox").css("background-color: rgba(" + R + ", " + G + ", " + B + ", " + A + ");");
	}

	$("#applyFilters").click(function () {
		var R = parseInt($("#RGBA-RSlider").val());
		var G = parseInt($("#RGBA-GSlider").val());
		var B = parseInt($("#RGBA-BSlider").val());
		var A = parseInt($("#RGBA-RSlider").val());

		windy.modifyColors(R, G, B, A);
	});
});