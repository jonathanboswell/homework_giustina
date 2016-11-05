$(function(){

    $('#apiForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#apiRequestButton').click(function(clickEvent){
        console.log("I want to make an API request");

        $.getJSON("http://headshot.mockable.io/menu", function(response) {
            var breakfast = response.breakfast;
            var brunch = response.brunch;
            var lunch = response.lunch;
            var dinner = response.dinner;

            console.log(breakfast);
            console.log(brunch);
            console.log(lunch);
            console.log(dinner);
          
            //Build breakfast menu
            $('#breakfast h3').html('Breakfast');
            $('#breakfast ul').html('');
            for(var i = 0; i < breakfast.length; i++)
            {
              $('#breakfast ul').append('<li class="list-group-item">' + breakfast[i] + '</li>');
            }

            //adding brunch
            $('#brunch h3').html('Brunch');
            $('#brunch ul').html('');
            for(var i = 0; i < brunch.length; i++)
            {
                $('#brunch ul').append('<li class="list-group-item>' + dinner[i] + '</li>');
            }

            //Build lunch menu
            $('#lunch h3').html('Lunch');
            $('#lunch ul').html('');
            for(var i = 0; i < lunch.length; i++)
            {
              $('#lunch ul').append('<li class="list-group-item">' + lunch[i] + '</li>');
            }

            //Build dinner menu
            $('#dinner h3').html('Dinner');
            $('#dinner ul').html('');
            for(var i = 0; i < dinner.length; i++)
            {
              $('#dinner ul').append('<li class="list-group-item">' + dinner[i] + '</li>');
            }
        });

    });
});