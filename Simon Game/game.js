
var buttonColors = ["red", "blue", "green", "yellow"]; // button colors
var gamePattern = [];

function nextSequence() {
    // generate a random number 0-3
    var randomNumber = Math.floor(Math.random() *4);
    // create randomChosenColor var, select random color from buttonColors
    var randomChosenColor = buttonColors[randomNumber];
    // add random chosen color to gamePattern array
    gamePattern.push(randomChosenColor); 
}
