//Implement the red light using jQuery. Don't forget to add the script tags. see if you can get the lights changing
// $(function() {
// 	console.log("the DOM is loaded");

// 	$('#stopButton').click(function(){
// 		console.log("The stopButton was clicked");
// 		resetLights();
// 		$("#stopLight").css('background-color','red');
// 	});
// 	$('#slowButton').click(function(){
// 		console.log("The slowButton was clicked");
// 		resetLights();
// 		$("#slowLight").css('background-color','yellow');
// 	});
// 	$("#goButton").click(function(){
// 		console.log("The goButton was clicked");
// 		resetLights();
// 		$("#goLight").css("background-color","green");
// 	});
// 	function resetLights()
// 	{
// 		$(".bulb").css("background-color","black");
// 	}
// });
// $(function() {
// 	console.log("the DOM is loaded");

// 	$('#stopButton').click(function(){
// 		changeLight('red');
// 	});
// 	$('#slowButton').click(function(){
// 		changeLight('yellow');
// 	});
// 	$("#goButton").click(function(){
// 		changeLight('green');
// 	});
// 	function changeLight(color){
// 		$("#"+color).css("background-color",color);
// 		console.log(color);
// 	}
// 	function resetLights(){
// 		$(".bulb").css("background-color","black");
// 	}
// });
$(function(){
	$('#stopButton').click(function(){
		changeLight('top','pink', 'solid blue','blue');
	});
	$('#slowButton').click(function(){
		changeLight('middle','yellow', 'solid red','red')
	});
	$('#goButton').click(function(){
		changeLight('bottom','green', 'solid purple','purple')
	});

	function changeLight(position, color, border, background)
	{
		resetLights();
		$('#'+position).css('background-color',color);
		$('#'+position).css('border',border);
		$('body').css('background-color',background);
		// changeBorder();
	}

	function resetLights()
  {
    $('.bulb').css('background-color','black');
    $('.bulb').css('border','solid black');
    $('body').css('background-color','white');
  }
  	// function changeBorder(border)
  	// {
  	// 	$('.bulb').css('border',border)
  	// }
});