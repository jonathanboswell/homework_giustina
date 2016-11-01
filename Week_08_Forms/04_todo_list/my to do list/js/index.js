var myTasksToday = ["eat breakfast","take a shower", "get dressed"];

$(function(){
	$("#todoForm").submit(function(submitEvent){
		submitEvent.preventDefault();
	});

	$("#add").click(function(){
		var task = $("#task").val();
		$("#todoList").append("<input type='checkbox'>" + " <label>" + task + "</label>" + "<br>");
		$("#task").val("");
	});

		/* adding lists:

		 $("#todoList").append("<li>"+ task + "</li>");

		 */

		 $("#clear").click(function(){
		 	$("#todoList").html("");
		 });

		for(var i=0; i < myTasksToday.length; i++)
		{
			var task = myTasksToday[i];
			$("#todoList").append("<input type='checkbox'>" + " <label>" + task + "</label>" + "<br>");
		}

		$("#todoList :checkbox").

	});
	console.log("Hello!")