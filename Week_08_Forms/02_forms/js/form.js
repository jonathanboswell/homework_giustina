// var names = [];
// $(function(){
// 	$("#myForm").submit(function(event){
// 		event.preventDefault();
// 		console.log("Form Submit");
// 	});
// 	$("#save").click(function(clickEvent){
// 		$("#greeting").html("Hello "+ $("#name").val());
// 		console.log(names);
// 	});
	
// });


$(function(){
	$("#send").click(function(clickEvent){
		$("#outputEmail").html($("#email").val());
		$("#outputCc").html($("#cc").val());
		$("#outputBcc").html($("#Bcc").val());
		$("#outputSubject").html($("#subject").val());
		$("#outputMessage").html($("#message").val());
	});
});


// forms with 3 inputs:
// email
// subject
// message
// button "send"
// and when you click send, have it show all that info on the screen