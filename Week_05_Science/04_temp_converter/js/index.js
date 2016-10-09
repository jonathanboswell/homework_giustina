$(function(){
	$('button').click(convertTemp);

	function convertTemp(){
		var celsius = $('#celsius').val();
		var fahr = celsius * 1.8 +32;
		$('#fahrenheit').text(fahr);
		changeBackground(fahr);
	}

	function changeBackground(fahr){
		if (fahr > 80){
			//background should be orange
			// $("body").css({background:"orange"});
			$("body").addClass("warm-bg")
			$("body").removeClass("cool-bg")

		}
		else{
			//background should be blue
			// $("body").css({background:"blue"});
			$("body").addClass("cool-bg")
			$("body").removeClass("warm-bg")



		}
	}
});
