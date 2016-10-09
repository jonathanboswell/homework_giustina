var total = 100;

function reset()
{
  total = 100;
  displayHealth(total);
}

function takeDamage()
{
  changeHealth(-1);
}

function getPowerUp()
{
  changeHealth(+5);
}

function drinkElixir()
{
	changeHealth(+10);
}
function changeHealth(points)
{
	total = total + points;
	displayHealth(total);
}
function displayHealth(total)
{
	$("#health").html(total);
}

$('#reset').click(reset);
$('#damage').click(takeDamage);
$('#power-up').click(getPowerUp);
$('#elixir').click(drinkElixir);