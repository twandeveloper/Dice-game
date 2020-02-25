// creates random Number1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

// creates random Number2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

// set number to img element  and changes the image1
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

// set number to img element  and changes the image2
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// checks if the winner is player one or player 2
if (randomNumber1 === randomNumber2) {
  // sets h1 to player 1 wins if randomNumber1 is greater
  document.querySelector(".container h1").textContent = "Draw";
}else if (randomNumber1 > randomNumber2){
  // sets h1 to player 1 wins if randomNumber1 is greater
  document.querySelector(".container h1").textContent = "Player 1 Wins!!";
}else{
  // sets h1 to player 2 wins if randomNumber2 is greater
  document.querySelector(".container h1").textContent = "Player 2 Wins!!";
}
