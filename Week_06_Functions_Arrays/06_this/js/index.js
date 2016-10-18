//jQuery: "this" refers to the selected object
//some fun uses:

//generalize functionality
$('div').click(function(){
    if($(this).hasClass('alert'))
    {
        $(this).fadeOut(500);
    }
});

//combine array and anonymous functions for SHEAR BADASSNESS!
var cities = ['New York', 'Los Angeles', 'San Francisco', 'Austin','Sydney', 'Rome'];
cities.forEach(function(value, key){
    $('#buttonBox').append('<button class="btn btn-success" value=' + index +'>' + value + '</button> ');
});

//even add custom output based on the array - MIND JUST EXPLODED
$('button').click(function(){
    $('#cityBox').html('<h3>' + $(this).html() + '</h3>');
})

//or match up another array for additional functionality!!!
//to get this working add this code into the button html on line 15:
// value=' + key + '
var abbr = ['nyc','la','sf','austin','sydney'];
$('button').click(function(){
    index = $(this).val();
    $('body').removeClass();
    $('body').addClass(abbr[index]);
    console.log(abbr[index]);
});

