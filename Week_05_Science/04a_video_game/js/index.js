var total = 100;

$('#damage').click(takeDamage);
$('#sword-damage').click(takeSwordDamage);
$('#power-up').click(getPowerUp);
$('#elixir').click(drinkElixir);
$('#respawn').click(respawn);

function takeDamage()
{
  changeHealth(-2);
}

function takeSwordDamage()
{
  changeHealth(-20);
}

function getPowerUp()
{
  changeHealth(5);
}

function drinkElixir()
{
  changeHealth(10);
}

function respawn()
{
  if(total==0)
  {
    restartGame();
  }
  total = 100;
  changeHealth(total);
}

function changeHealth(value)
{
  total = total + value;
  
  if(total >= 100) {
    total = 100;
  } else if (total <= 0) {
    total = 0;
  }
  
  $('#health').html(total);
  changeHealthMeter(total);

  if (total == 0) {
    gameOver();
  }
}

function changeHealthMeter(total)
{
  total_percent = total + '%';
  $('#health-meter').html(total_percent);
  $('#health-meter').css('width',total_percent);

  $('#health-meter').removeClass('progress-bar-success');
  $('#health-meter').removeClass('progress-bar-warning');
  $('#health-meter').removeClass('progress-bar-danger');
  
  if(total >= 90) {
    $('#health-meter').addClass('progress-bar-success');
  } else if(total >= 40) {
    $('#health-meter').addClass('progress-bar-warning');
  } else {
    $('#health-meter').addClass('progress-bar-danger');
  }
}

function restartGame()
{
  $('#damage').prop('disabled',false);
  $('#damage').removeClass("disable");

  $('#sword-damage').prop('disabled',false)
  $('#sword-damage').removeClass("disable");

  $('#power-up').prop('disabled',false);
  $('#power-up').removeClass("disable");
  
  $('#elixir').prop('disabled',false);
  $('#elixir').removeClass("disable");
}

function gameOver()
{
  $('#health').html("Game Over");
  
  $('#damage').prop('disabled',true);
  $('#damage').addClass("disable");

  $('#sword-damage').prop('disabled',true)
  $('#sword-damage').addClass("disable");

  $('#power-up').prop('disabled',true);
  $('#power-up').addClass("disable");
  
  $('#elixir').prop('disabled',true);
  $('#elixir').addClass("disable");
}