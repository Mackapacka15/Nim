function changeToRules() {
    document.querySelector(".rules").classList.toggle("hidden");
    document.querySelector(".menu").classList.toggle("hidden");
}
function changeToOpponentSelector() {
    document.querySelector(".menu").classList.toggle("hidden");
    document.querySelector(".Opponent-Selector").classList.toggle("hidden");
}
function changeToGame() {
    document.querySelector(".Opponent-Selector").classList.toggle("hidden");
    document.querySelector(".game-area").classList.toggle("hidden");
}
function YouWon(){
    document.querySelector(".game-area").classList.toggle("hidden");
    document.querySelector(".Win").classList.toggle("hidden");
}
function YouLost(){
   document.querySelector(".game-area").classList.toggle("hidden");
    document.querySelector(".Lost").classList.toggle("hidden");
}

function opponentRandom() {
    changeToGame();
    let sticksToAdd = Math.floor(Math.random() * 40+1);
    let sticks=sticksToAdd+"";
    document.getElementById('Number').innerHTML=sticks;
}
function playerTake1() {
    let sticks=document.querySelector("#Number");
    let sticksString=sticks.innerHTML;
    sticksInt=parseInt(sticksString);
    sticksInt--;
    document.getElementById('Number').innerHTML= sticksInt+"";
    if (sticksInt<=0 ){
        YouLost();
    }
    else {
        opponentRandomSticks();
    }
}
function playerTake2() {
    let sticks=document.querySelector("#Number");
    let sticksString=sticks.innerHTML;
    sticksInt=parseInt(sticksString);
    if (sticksInt<=1){
        sticksInt-=sticksInt;
    }
    else {
        sticksInt-=2;
    }
    document.getElementById('Number').innerHTML= sticksInt+"";
    if (sticksInt<=0 ){
        YouLost();
    }
    else {
        opponentRandomSticks();
    }
}
function playerTake3(){
    let sticks=document.querySelector("#Number");
    let sticksString=sticks.innerHTML;
    sticksInt=parseInt(sticksString);
    if (sticksInt<=2){
        sticksInt-=sticksInt;
    }
    else {
        sticksInt-=3;
    }
    document.getElementById('Number').innerHTML= sticksInt+"";
    
    if (sticksInt<=0 ){
        YouLost();
    }
    else {
        opponentRandomSticks();
    }
}

function opponentRandomSticks() {
    let sticks=document.querySelector("#Number");
    let sticksString=sticks.innerHTML;
    let sticksTake= Math.floor(Math.random() * 3+1);
    sticksInt=parseInt(sticksString); 
    sticksInt-= sticksTake;
    document.getElementById('Number').innerHTML = sticksInt+"";
    if (sticksTake==1) {
    document.getElementById('BotSticks').innerHTML= "The Randomizer took " +sticksTake+" stick";  
    }
    else {
      document.getElementById('BotSticks').innerHTML= "The Randomizer took " +sticksTake+" sticks";
    }
    if (sticksInt<=0 ){
        YouWon();
    }
}