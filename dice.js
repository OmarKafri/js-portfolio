    var omarCounter=0;
    var amjadCounter=0;
    var counter=0;
document.querySelector("button").addEventListener("click",omar);

function omar(){
   
    if(counter===3){
        alert("omar won "+ omarCounter+"games, and amajd won "+ amjadCounter+" games");
        resetGame();
       return;
   
    }
    

    var randomNumber1=Math.random();

var randomNumber2=Math.random();

randomNumber1=Math.floor(randomNumber1*6)+1;

randomNumber2=Math.floor(randomNumber2*6)+1;

    if(randomNumber1===1){
        document.querySelector(".hello").setAttribute("src","./images/dice1.png");
    }
    else if(randomNumber1===2){
        document.querySelector(".hello").setAttribute("src","./images/dice2.png");
    }
    else if(randomNumber1===3){
        document.querySelector(".hello").setAttribute("src","./images/dice3.png");
    }
    else if(randomNumber1===4){
        document.querySelector(".hello").setAttribute("src","./images/dice4.png");
    }
    else if(randomNumber1===5){
        document.querySelector(".hello").setAttribute("src","./images/dice5.png");
    }
    else if(randomNumber1===6){
        document.querySelector(".hello").setAttribute("src","./images/dice6.png");
    }
    if(randomNumber2===1){
        document.querySelector(".hi").setAttribute("src","./images/dice1.png");
    }
    else if(randomNumber2===2){
        document.querySelector(".hi").setAttribute("src","./images/dice2.png");
    }
    else if(randomNumber2===3){
        document.querySelector(".hi").setAttribute("src","./images/dice3.png");
    }
    else if(randomNumber2===4){
        document.querySelector(".hi").setAttribute("src","./images/dice4.png");
    }
    else if(randomNumber2===5){
        document.querySelector(".hi").setAttribute("src","./images/dice5.png");
    }
    else if(randomNumber2===6){
        document.querySelector(".hi").setAttribute("src","./images/dice6.png");
    }
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="<em>🚩 Omar(🦁ملك) wins !</em>";
        omarCounter++;
    }
    else if(randomNumber1===randomNumber2){
        document.querySelector("h1").innerHTML="<em>👏Tie</em>";
        counter--;
        
    }
    else{
        document.querySelector("h1").innerHTML="<em>💩Ahmad wins??</em>";
        amjadCounter++;
    }
    if(omarCounter===1){
        document.querySelector("#amjadScore").innerHTML="1";
    }
    else if(omarCounter===2){
        document.querySelector("#amjadScore").innerHTML="2";
    }

     if(amjadCounter===1){
        document.querySelector("#omarScore").innerHTML="1";

    }
    else if(amjadCounter===2){
        document.querySelector("#omarScore").innerHTML="2";

    }
    
    document.querySelector("button").textContent ="Hit me hard Daddy";
    counter++;
    
   
}
function resetGame(){
    counter=0;
    omarCounter=0;
    amjadCounter=0;
    document.querySelector("h1").innerHTML = " Dice Game 🎲";
    document.querySelector(".hello").setAttribute("src", "./images/dice1.png");
    document.querySelector(".hi").setAttribute("src", "./images/dice1.png");
    document.querySelector("#omarScore").innerHTML="0";
    document.querySelector("#amjadScore").innerHTML="0";
    document.querySelector("button").textContent ="Play";
}



