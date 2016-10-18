function greetingFunction(city)
{
    $('#greeting').html("Welcome to " + city);
}

//This WILL work
// $('#nyc').click(function(){
//     greetingFunction('New York');
// })
// $('#la').click(function(){
//     greetingFunction('Los Angeles');
// })

// $('#ldn').click(function(){
// 	greetingFunction('London');
// })
// $('#mil').click(function(){
// 	greetingFunction('Milan');
// })

//This WILL work BEST!

$('button').click(function(){
    $('#greeting').html("Welcome to " + $(this).html());
})
