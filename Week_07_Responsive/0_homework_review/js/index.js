var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
var classes = ['nyc','sf','la','austin','sydney']
for(var i = 0; i < cities.length; i++)
{
    $('#city-type').append('<option value="'+ i + '">' + cities[i] + '</option>');
}
$('#city-type').change(function(){
    var cityClass = classes[$('#city-type').val()];
    $('body').removeClass();
    $('body').addClass(cityClass);
});