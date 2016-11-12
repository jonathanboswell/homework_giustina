console.log("hello!")

$("section").hide();
$("#home").show();


$(function() {
	$("#homeLink").click(function(){
		$("section").hide();
		$("#home").show();
	});

    $('li').click(function(){
    	console.log($(this).attr('name'));
    	//get the name from the <li> tag
    	var name = $(this).attr('name');

    	//make the clicked <li> "active"
        $('li').removeClass();
        $(this).addClass('active');

        //show the corresponding <section>
        $('section').hide();
        $("#"+name).show();
    })    
});