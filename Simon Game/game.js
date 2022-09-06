
var buttonColors = ["red", "blue", "green", "yellow"]; // button colors
var gamePattern = []; // array for computer generated game pattern
var userClickedPattern = []; // array for user generated pattern
var started = false; // var to track whether a game is being played, initialize to false
var level = 0; // start level at 0

/* event listeners */
// detect when a key has been pressed on the keyborad, if it's the first time,
// call nextSequence function
$(document).keydown(function () {
  // first key press
  if(!started) {
    $("#level-title").text("Level " + level); // display level
    nextSequence();
    started = true; // start game
  }
});

// event listener to detect which button is clicked
$(".btn").click(function () {
  // when "this" object is clicked, store the attribute id in userChosenColor
  var userChosenColor = $(this).attr("id");
  // push userChosenColor onto the userClickedPattern []
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor); // animate button
  playSound(userChosenColor); // play sound for chosen color

  var size = userClickedPattern.length; // get length of array
  checkAnswer(size - 1); // pass in size - 1 as current level
});

// computer generated sequence
function nextSequence() {
    level++; // increment level
    userClickedPattern = [];
    $("#level-title").text("Level " +  level); // display level
    // generate a random number 0-3
    var randomNumber = Math.floor(Math.random() *4);
    // create randomChosenColor var, select random color from buttonColors
    var randomChosenColor = buttonColors[randomNumber];
    // add random chosen color to gamePattern array
    gamePattern.push(randomChosenColor);
    /* apply flash animation to button using jQuery */
    // concatenate # and randomChosenColor to target correct button by id name
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor); // play sound for randomChosenColor
}

// function to play sound when button is selected
function playSound(color) {
  // concatenate folder, name, extension
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play(); // play sound
}

// animate the button Press
function animatePress(currentColor) {
  // target button by class, add pressed class to button selection
  $("." +  currentColor).addClass("pressed");
  // remove class after 100 ms
  setTimeout(function() {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}

/* check user answer against computer generated game pattern */
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel])
  {
    if(userClickedPattern.lenth === gamePattern.lenth)
    {
      // call next sequence function, 1000 ms delay
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  else
  {
    playSound("wrong"); // play sound
    // apply game over class
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart"); // display message
    // remove class game-over after 200 ms
    setTimeout( function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver(); // restart game
  }
}

// reset values to start new game
function startOver() {
  level = 0;
  gamePattern = []; // empty array
  started = false;
}
