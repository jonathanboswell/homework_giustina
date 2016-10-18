$('#nyc').click(nycGreeting);
$('#la').click(laGreeting);
$('#ldn').click(ldnGreeting);
$('#mil').click(milGreeting);

function nycGreeting()
{
    $('#greeting').html("Welcome to the Big Apple!");
}

function laGreeting()
{
    $('#greeting').html("Welcome to Hollywood!");
}

function ldnGreeting()
{
	$('#greeting').html("'Ello Gorgeous!");
}

function milGreeting()
{
	$('#greeting').html("Benvenuti a Milano!");
}