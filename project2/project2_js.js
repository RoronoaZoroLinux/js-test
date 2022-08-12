var deck = Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1);
let deal_audio = new Audio('../sounds/deal_card.mp3');
let text_box = document.getElementById('text_box');
let text_box_card_name = 'null';
let card_sum = 0;
let bet_amount = 0;
let balance = 100;
let ace_count = 0;
let test_case_a = false;
let test_case_b = false;
let ace = false;
let ace2 = false;


function drawCard(){
    let randomCard;
    randomCard = Math.floor( Math.random() * deck.length +1 );
    deck.splice(deck.indexOf(randomCard),1);
    if(randomCard > 52){
        randomCard = randomCard - 52;
    }


    return randomCard;

}


function render(canvasName){
    let newCard =  drawCard();
    let cardName;
    let symbolName1 = 'symbol1'+canvasName;
    let symbolName2 = 'symbol2'+canvasName;
    let symbol1 = document.getElementById(symbolName1);
    let symbol2 = document.getElementById(symbolName2);
   
    if(deck.length > -1){
        
        if(newCard > 13 && newCard < 27) {
            symbol1.innerText = "♣";
            symbol2.innerText = "♣"; 
            symbol1.style.color = "black";
            symbol2.style.color = "black";
            document.getElementById(canvasName).style.color = "black";
            if(newCard<24){
                       
                cardName = (newCard - 13);
            }
            
            else{
                if(newCard == 24 )  cardName ='<div>&#128115;&#127999; <div>Jack</div>';
                if(newCard == 25 )  cardName ='<div>&#128120;&#127999; <div>Queen</div>';
                if(newCard == 26 )  cardName ='<div>&#129332;&#127999; <div>King</div>'; 
                
            }
        
        }
        else if(newCard > 26 && newCard < 40 ){
            symbol1.innerText = "♠";
            symbol2.innerText = "♠";
            symbol1.style.color = "black";
            symbol2.style.color = "black";
            document.getElementById(canvasName).style.color = "black";
            if(newCard<37){
                cardName = (newCard - 26);
            }
            else{
                if(newCard == 39 )  cardName ='<div>&#128113;</div> <div>Jack</div>';
                if(newCard == 38 )  cardName ='<div>&#128105;</div> <div>Queen</div>';
                if(newCard == 37 )  cardName ='<div>&#129332;</div> <div>King</div>'; 
                
            }
        
        }
        else if(newCard > 39 && newCard < 53){
            symbol1.innerText = "♦";
            symbol2.innerText = "♦";
            symbol1.style.color = "red";
            symbol2.style.color = "red";
            document.getElementById(canvasName).style.color = "red";
            if(newCard<50){
                cardName = (newCard - 39);
            }
            else{
                if(newCard == 50 )  cardName ='<div>&#128113;&#127997;</div><div>Jack</div>';
                if(newCard == 51 )  cardName ='<div>&#128105;&#127997;</div><div>Queen</div>';
                if(newCard == 52 )  cardName ='<div>&#129332;&#127995;</div><div>King</div>'; 
                
            }
            }

        else {
            symbol1.innerText = "♥";
            symbol2.innerText = "♥";
            symbol1.style.color = "red";
            symbol2.style.color = "red";
            document.getElementById(canvasName).style.color = "red";
            if(newCard<11) {
                cardName = newCard;
            }
            else{
                if(newCard == 11 )  cardName ='<div>&#128113;&#127995;</div><div>Jack</div>';
                if(newCard == 12 )  cardName ="<div>&#128105;&#127995;</div><div>Queen</div>";
                if(newCard == 13 )  cardName ="<div>&#129332;&#127995;</div><div>King</div>"; 
                
            }

        }
    
   
    if(test_case_a == true){

    cardName = 1;

    }

    else if(test_case_b == true){

        cardName = 10;

    }

    document.getElementById(canvasName).innerHTML = cardName;
    text_box_card_name = cardName;
    
    if(typeof(cardName)=="string"){
        
        card_sum = Number(card_sum) + Number(10);
    }
    else if(typeof(cardName)=="number"){

        if (cardName == 1){ 

            ace_count++;
           
            if(ace == false){
                card_sum = card_sum + Number(10);
                ace = true;
            }
            
        }
        

        card_sum = Number(card_sum) + Number(cardName);
       
    }


    if(card_sum > 21 && ace_count && ace2 == false ){

        card_sum = card_sum - 10;
        ace2 = true;

    }

    }//end of deck > 1

    else{
        document.getElementById(canvasName).style.color = "black";
        document.getElementById(canvasName).innerText = "No cards left.";
        symbol1.innerText = " ";
        symbol2.innerText = " ";
    }
    
}


function newCard(){


}


let newCardCount = 3;


function funct_draw_card(){
    const newDiv = document.createElement("div");
    newDiv.classList.add('card');


    newDiv.style.display = 'flex';
    newDiv.style.flexDirection = 'column';


    
        let newDivsymbol1 = document.createElement("p");
        newDivsymbol1.id = 'symbol1canvas'+newCardCount;
        newDivsymbol1.innerHTML = "x";
        newDiv.appendChild(newDivsymbol1);

        let newDivNum = document.createElement("p");
        newDivNum.id = 'canvas'+newCardCount;
        newDivNum.innerHTML = " ";
        newDivNum.style.alignSelf = 'center';
        newDivNum.style.textAlign = 'center';
        newDiv.appendChild(newDivNum);
        
        let newDivsymbol2 = document.createElement("p");
        newDivsymbol2.id = 'symbol2canvas'+newCardCount;
        newDivsymbol2.innerHTML = "x";
        newDivsymbol2.style.alignSelf = 'flex-end';
        newDiv.appendChild(newDivsymbol2);

   
    document.getElementById("newCardsid").appendChild(newDiv);
    let canvasname ='canvas'+ newCardCount;

    render(canvasname);
    newCardCount++;
    document.getElementById("deck_count").innerHTML = deck.length;
    deal_audio.play();
    
    if(card_sum <= 21){
        text_box.innerText = `You've placed $${bet_amount} \n Your hand is ${card_sum}`;
    }
    else if(card_sum > 21){
        text_box.innerText = `Your hand is ${card_sum} and you busted! \n you've lost $${bet_amount}`;
        document.getElementById('draw_card').style.display = 'none';
        document.getElementById('reset').style.display = 'inline';
    }
   
}




function funct_start(){

    document.getElementById('card1').id = 'front1';
    render('canvas');
    deal_audio.play();
    text_box.innerHTML = `Your first card is ${text_box_card_name}\nPlace a bet to continue.`;
    document.getElementById("bet_buttons").style.display = "flex";
    document.getElementById("start_button").style.display = "none";

    if(balance<1){
        
        alert("YOU HAVE NO MONEY LEFT!\nGet the fuck out here!");
        window.location.href = "https://google.com";

    }
}



function reset(){

    let parent = document.getElementById('newCardsid');

    while (parent.firstChild) {
        parent.firstChild.remove()
    }


    document.getElementById('front1').id = 'card1';
    document.getElementById('front2').id = 'card2';

document.getElementById('symbol1canvas').innerHTML = ' ';
document.getElementById('symbol2canvas').innerHTML = ' ';

document.getElementById('symbol1canvas2').innerHTML = ' ';
document.getElementById('symbol2canvas2').innerHTML = ' ';

document.getElementById('canvas').innerText = " ";
document.getElementById('canvas2').innerText = " ";

document.getElementById('reset').style.display = 'none';

document.getElementById('start_button').style.display = 'inline';
text_box.innerHTML = 'Press "Start" to reveal your first card.';
document.getElementById('entered_bet').innerHTML = '0';

bet_amount = 0;
card_sum = 0;
ace_count = 0;
ace = false;
ace2 = false;


}

function render_bet(amount){

    if([Number(bet_amount) + Number(amount)] <= balance && [Number(bet_amount) + Number(amount)] >= 0){

    bet_amount = Number(bet_amount) + Number(amount);
    document.getElementById("entered_bet").innerHTML = bet_amount;

    }

}

function funct_enter_bet(){
    
    if(bet_amount > 0){
        document.getElementById("bet_buttons").style.display = "none";
        balance -= bet_amount;
        document.getElementById("balance").innerHTML = "Balance $" + balance;
        text_box.innerText = `You've placed $${bet_amount}`;
        document.getElementById("second_card").style.display ='inline';
    } 
}


function funct_second_card(){

    document.getElementById('card2').id = 'front2';
    render('canvas2');
    deal_audio.play();
    document.getElementById('second_card').style.display ='none';
    text_box.innerText = `You've placed $${bet_amount} \n Your hand is ${card_sum}`;
    document.getElementById('draw_card').style.display = 'inline';

}

function funct_stay(){
   
    document.getElementById('draw_card').style.display = 'none';
    let kasa = Math.floor( Number(( Math.random() * 11 )) +Number(( Math.random() * 11 )) );
    
    if(kasa < 17){
        while(kasa < 17){
        kasa = Number(kasa) +  Number(Math.floor( Math.random() * 11  ));
         }
    }

    if(kasa < card_sum || kasa > 22){
        text_box.innerHTML = 'kasa ='+kasa+'YOU WIN!'

        balance = Number(balance) + Number(bet_amount * 2);
        document.getElementById('balance').innerHTML = 'Balance $'+balance;
        document.getElementById('reset').style.display = 'inline';
    }
    else if(kasa > card_sum && kasa < 22){
        text_box.innerHTML = 'kasa ='+kasa+'YOU Lost!'
        document.getElementById('reset').style.display = 'inline';
    }
    else if(kasa == card_sum){
        text_box.innerHTML = 'kasa ='+kasa+' Draw'
        balance = Number(balance) + Number(bet_amount);
        document.getElementById('reset').style.display = 'inline';
    }

    
}


