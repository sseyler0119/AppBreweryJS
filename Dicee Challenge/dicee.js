/* image 1 */
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // assign random value 1-6
// concatenate file location with image name, randomNumber1, and file extension
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
// use DOM to isolate img tag, using two separate steps
var image1 = document.querySelectorAll("img")[0]; // image 1
// set image1 src attribute to randomImageSource
image1.setAttribute("src", randomImageSource1);

/*die number 2*/
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // random value 1-6
// concatenate source location with image name
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
// set image 2 src attribute by using DOM, single step
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

/* change title to display winner */
// player 1 wins
if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
// player 2 wins
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
// tie
else
{
  document.querySelector("h1").innerHTML = "Draw!";
}
