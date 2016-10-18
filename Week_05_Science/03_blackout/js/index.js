function turnLightsOff(){
	$("body").addClass('dark');
}
function turnLightsOn(){
	$("body").removeClass('dark')
}
function sayHello(){
	
}
$("#light-on").click(function(){
	turnLightsOff();
});



// var lights = 'on';
// var otherColor = "white"

// function switchLights() {
// 	if(lights == "on")
// 	{
// 		$("body").addClass("dark");
// 		lights = "off";
// 	} else if (lights = "off")
// 	{
// 		$("body").removeClass("dark");
// 		lights = "on";
// }
// }

// $('#light-switch').click(switchLights);


// // function colorLights(){
// // 	if(otherColor == "white")
// // 	{
// // 		setColor("green");
// // 		otherColor = "green";
// // 	}
	
// // }
// // function setColor(color){
// // 	$("body").addClass(otherColor);
// // }

// // $('#color-switch').click(colorLights);