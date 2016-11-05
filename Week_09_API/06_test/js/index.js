$(function(){
	$('#apiForm').submit(function(submitEvent){
		submitEvent.preventDefault();
	})

	$('#apiRequestButton').click(function(clickEvent){
		console.log("hello");
		$.getJSON("http://headshot.mockable.io/menu/advanced", function(response){
			console.log("I hit the API");

			$('#menu').html('');
			console.log("I cleared the menu");

			$.each(response, function(meal, items){
				var hours = items.hours
				var dishes = items.name
				console.log(meal);
				console.log(hours);
				console.log(dishes);

				$('#menu').append('<div id="' + meal + ' "><p class="hours"></p><ul class="list=group"></ul></div>');
				console.log($('#menu'));

				for(var i = 0; i < items.length; i++)
				{
					var dish = items[i];
					var li = '<li class="list-group-item">';
					li += '<h4>' + dish.name + '/<h4>';
					li += '<span>' + dish.desc + '</span>';
					li += '<h5>' + dish.price + '</h5>';

					$('#' + meal + ' ul').append(li);
				}
			});
		});
	});

});