var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

var randomDice1 = "images/dice" + randomNumber1 + ".png";
var randomDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", randomDice1);
document.querySelector(".dice .img2").setAttribute("src", randomDice2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = " 🚩Player 1 Wins!";
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
}else{
    document.querySelector("h1").innerText = "draw";
}