console.log("I am alive")

$('a').click(function(){
	var title = $(this).attr('title');
	var html = $(this).html();
	console.log(title, html);
	$('#pageTitle').html('<h1>' + html + '</h1>');
})