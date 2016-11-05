$(function(){

    getAdvancedMenu();
    $('#apiForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#apiRequestButton').click(function(clickEvent){
        //getMenu();


        getAdvancedMenu();
    });

    function getMenu()
    {
        $.getJSON("http://headshot.mockable.io/menu", function(response) {
            $('#menu').html('');
            $.each(response,function(meal, dishes){
                $('#menu').append('<div id="' + meal + '"><h3></h3><ul class="list-group"></ul></div>');
                $('#' + meal + ' h3').html(meal);
                $('#' + meal + ' ul').html('');
                for(var i = 0; i < dishes.length; i++)
                {
                    var dish = dishes[i];
                    $('#' + meal + ' ul').append('<li class="list-group-item">' + dish + '</li>');
                }
            });

        });
    }

    function getAdvancedMenu()
    {
        $.getJSON("http://headshot.mockable.io/menu/advanced", function(response) {

            $('#menu').html('');

            $.each(response,function(meal, info){
                var dishes = info.dishes
                var hours = info.hours
                $('#menu').append('<div id="' + meal + '"><h3></h3><p class="hours"></p><ul class="list-group"></ul></div>');
                $('#' + meal + ' h3').html(meal);
                $('#' + meal + ' p').html(hours);
                $('#' + meal + ' ul').html('');
                
                for(var i = 0; i < dishes.length; i++)
                {
                    var dish = dishes[i];
                    var li = '<li class="list-group-item">';
                    li += '<h4>' + dish.name + '</h4>';
                    li += '<span>' + dish.description + ":" +  + '</span>';
                    // if(dish.cheeses)
                    // {
                    //     $.each(dish.cheeses,function(key, cheese){
                    //         li += ' | <span>' + cheese + '</span>';
                    //     })
                    // }
                    li += '<h5>' + dish.price + '</h5>';

                    $('#' + meal + ' ul').append(li);
                }
            });
            
        });
    } 
});