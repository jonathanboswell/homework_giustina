/* Rules:
Step 1. Human player selects from either rock, paper, or scissors
Step 2. upon click of either:
	1. the randomizer code goes (does that look like anything?)
Step 3. the choice of human is compared to choice of machine
Step 4. a point is allotted to the winner
	- paper > rock
	- rock > scissors
	- scissors > paper
	- both the same = no change
Step 5. the new score is displayed on the score-board
Step 6. Players play until 10?

When a button is clicked,
randomizer goes
code compares human choice vs. randomizer
code allots point to "winner"

define variables
define functions
how to you make them interact

*/
	var myScore = 0;
	var machineScore = 0;

$('button').click(function(){
	var myChoice = $(this).html();
	var machineChoice = getComputerPlay();
	console.log(myChoice,machineChoice);

if (myChoice==machineChoice)
 	{
 		console.log("tie")
	} else if (myChoice=="paper" && machineChoice=="rock") {
		myScore = myScore + 1;
		$('#humanScore').html(myScore);
		console.log("Paper beats rock");
	} else if(myChoice=="rock" && machineChoice=="scissors") {
		myScore = myScore + 1;
		$('#humanScore').html(myScore);
		console.log("rock beats scissors");
	} else if (myChoice=="scissors" && machineChoice=="paper") {
		myScore = myScore + 1;
		$('#humanScore').html(myScore);
		console.log("scissors beats paper");
	} else {
		machineScore = machineScore + 1;
		$('#machineScore').html(machineScore);
		console.log("machine wins");
	}
});

function getComputerPlay() {
 var plays = ['rock', 'paper', 'scissors'];
 var play = plays[Math.floor(Math.random() * plays.length)];
 return play;
}