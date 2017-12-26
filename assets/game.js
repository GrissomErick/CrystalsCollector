//==============================================================================
// My goals for this execersise
// 1. Be more organized; no sploppy code
// 2. More comenting as a habit
// 3. Optimize my code
//==============================================================================


//==============================================================================
// VARIABLES
//==============================================================================

// Define Global Score VARIABLES
var wins = 0;
var losses = 0;
var totalScore = 0;
var randomNumber = 0;
var randomYellow = 0;
var randomRed = 0;
var randomGreen = 0;
var randomBlue = 0;


//==============================================================================
// FUNCTIONS
//==============================================================================


function init() {
  // Initialize start of game
  $("#win").html(wins);
  $("#loss").html(losses);
  start();
} // End init function

function start() {
  //Reset all variables to 0 and present to site.
  totalScore = 0;
  randomNumber = 0;
  $("#total").html(totalScore);

  //Generate random number and present to site.
  randomNumber = Math.floor((Math.random() * 102) + 19);
  $("#random").html(randomNumber);

  //Generate random numbers for the crystals
  randomYellow = Math.floor((Math.random() * 12) + 1);
  randomRed = Math.floor((Math.random() * 12) + 1);
  randomGreen = Math.floor((Math.random() * 12) + 1);
  randomBlue = Math.floor((Math.random() * 12) + 1);

} // End start function

function calculateTotalScore() {
  //Calculate win/loss
  if (totalScore === randomNumber) {
    wins++;
    $("#win").html(wins);
    alert("U win UNC Bootcamper");
    start();
  } else if (totalScore >= randomNumber) {
    losses++;
    $("#loss").html(losses);
    alert("U lose UNC Bootcamper");
    start();
  }
} // End calculateTotalScore function


//==============================================================================
// MONITORS
//==============================================================================

$("#yellow").click(function() {
  totalScore = totalScore + randomYellow;
  $("#total").html(totalScore);
  calculateTotalScore();
}); // End yellow listner

$("#red").click(function() {
  totalScore = totalScore + randomRed
  $("#total").html(totalScore);
  calculateTotalScore();
}); // End red listner

$("#green").click(function() {
  totalScore = totalScore + randomGreen;
  $("#total").html(totalScore);
  calculateTotalScore();
}); // End green listner

$("#blue").click(function() {
  totalScore = totalScore + randomBlue;
  $("#total").html(totalScore);
  calculateTotalScore();
}); // End blue listner

//==============================================================================
// START GAME
//==============================================================================

init();
start();
