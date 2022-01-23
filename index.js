var a =Math.floor(1+ Math.random()*6);
var b = Math.floor(1+Math.random()*6);

document.querySelector(".img1").setAttribute("src","images/dice"+a+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+b+".png");
if(a>b){
  document.querySelector("h1").innerHTML="Player 1 Wins";

}
else if(a<b){
  document.querySelector("h1").innerHTML="Player 2 wins";

}
else{
  document.querySelector("h1").innerHTML="It is a DRAW";
}
