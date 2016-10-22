var tabs = ["about","work","contact"];
var section = "about";

$('a').click(function(){
	var section = $(this).attr('title');
	for(var i = 0; i < tabs.length; i++)
	{
		if(tabs[i] != section)
		{
			$("#"+tabs[i]).hide();
		} else {
			$("#"+section).show();
		}
	}
	console.log(section);
});