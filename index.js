var randomno1=Math.random();
randomno1=randomno1*6;
randomno1=(Math.floor(randomno1))+1;
var randomimg1="images/dice"+randomno1+".png";

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimg1);

var randomno2=Math.random();
randomno2=randomno2*6;
randomno2=(Math.floor(randomno2))+1;
var randomimg2="images/dice"+randomno2+".png";

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimg2);

if(randomno1>randomno2)
{
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomno2>randomno1)
{
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="tie";
}
