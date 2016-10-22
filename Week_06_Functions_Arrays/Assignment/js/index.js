var cities = ['New York','San Francisco','Los Angeles','Sydney','Austin'];
var cityClasses = ['nyc','sf','la','sydney','austin'];
for(var index = 0; index < 5; index = index + 1)
{
    var cityName = cities[index];
    var cityClass = cityClasses[index];
    $('#city-type').append('<option value="' + cityClass + '">' + cityName + '</option>');
    console.log(cityName, cityClass);
}
$('#city-type').change(function(){
    var cityClass = $(this).val();
    $('body').removeClass();
    $('body').addClass(cityClass);
    console.log(cityClass);
});