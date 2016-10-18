$('#nyc').click(nycGreeting);
$('#la').click(laGreeting);

function greeting(city)
{
    callAnotherFunctionForNoReason(city);
}

function callAnotherFunctionForNoReason(city)
{
    if(city=='nyc')
    {
        $('#greeting').html("Welcome to the Big Apple!");
    } else {
        $('#greeting').html("Welcome to Hollywood!");
    }
}

function nycGreeting()
{
    greeting('nyc');
}

function laGreeting()
{
    greeting('la');
}