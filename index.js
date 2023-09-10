var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomimg = "dice" + randomNumber1 + ".png";
var randomimgsrc = "images/" + randomimg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimgsrc);
var image2 = document.querySelectorAll("img")[1];


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomimg2 = "images/" + "dice" + randomNumber2 + ".png";
image2.setAttribute("src", randomimg2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 won"
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player2 won"
}else{
    document.querySelector("h1").innerHTML="draw"
}