$(function(){

    $('#apiForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#apiRequestButton').click(function(clickEvent){

        $.getJSON("http://headshot.mockable.io/restaurant", function(response) {
            var name = response.name;
            var hours = response.hours;

            console.log(hours);
            
            $('#apiResponse').html(name + " - " + hours);
        });

    });
});