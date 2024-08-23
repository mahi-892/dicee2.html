var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
var highestNumber=math.max(randomNumber1,randomNumber2);
if(highestNumber===randomNumber1&&highestNumber%2==0){
  document.querySelector("h1").innerHTML="player1 wins";
}
else if(highestNumber===randomNumber2&&highestNumber%2===0){
  document.querySelector("h1").innerHTML="player2 wins";
}