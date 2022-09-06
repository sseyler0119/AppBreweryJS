
var buttonColors = ["red", "blue", "green", "yellow"]; // button colors
var gamePattern = [];
var userClickedPattern = [];

// event listener
$(".btn").click(function () {
  // when "this" object is clicked, store the attribute id in userChosenColor
  var userChosenColor = $(this).attr("id");
  // push userChosenColor onto the userClickedPattern []
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor); // animate button
  playSound(userChosenColor); // play sound for chosen color
})

// computer generated sequence
function nextSequence() {
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
  // remove class after .1 seconds
  setTimeout(function() {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}
