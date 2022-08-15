document.getElementById("toggle").style.backgroundColor = '#343454';

let theme_selector = document.getElementById("theme_selector");
theme_selector.addEventListener("change", change_theme);

let cheats = document.getElementById("cheats");
cheats.addEventListener("change", change_cheat);

var deck = Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1);

let deal_audio = new Audio('../sounds/deal_card.mp3');
let coins_audio = new Audio('../sounds/coins.mp3');
let meh_audio = new Audio('../sounds/meh.mp3');
let switch_audio = new Audio('../sounds/switch.wav');
let text_box = document.getElementById('text_box');
let card_sum = 0;
let bet_amount = 0;

let deck_end = false;

let test_case_a = false;
let test_case_b = false;

let test_case_c = false;
let test_case_d = false;

let ace_count = 0;
let ace = false;
let ace2 = false;

let balance = 100;
let text_box_card_name = 'null';

let dealer_card_sum = 0;

let dealer_ace_count = 0;
let dealer_ace = false;
let dealer_ace2 = false;

let dealer_text_box_card_name = 'null';

let day = true;
let night = false;

let blackjack = false;
let dealer_blackjack = false;
function shuffle(deck)
{
	// for 1000 turns
	// switch the values of two random cards
	for (let i = 0; i < 1000; i++)
	{
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

shuffle(deck);


function drawCard(){
    let randomCard;
   
    randomCard = deck.pop();



    if(randomCard > 52){
        randomCard = randomCard - 52;
    }


    return randomCard;

}


function render(canvasName , dealer){
    
    let newCard =  drawCard();
   
    let cardName;
   
    let symbolName1 = 'symbol1'+canvasName;
    let symbolName2 = 'symbol2'+canvasName;
   
    let symbol1 = document.getElementById(symbolName1);
    let symbol2 = document.getElementById(symbolName2);

    if(deck.length < 1){
        deck_end = true;
        alert("There is no cards left in the deck. The next card that is going to be dealt will be from a new set of decks.")
    }

    if(deck_end){
        new_deck();
        deck_end = false;
    }
    
    if(deck.length > 0){
        
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
        
                if(newCard == 24 )  {
                    cardName ='<div class="royal3"></div>';
                    symbol1.innerText = "J";
                }

                if(newCard == 25 ) { 
                    cardName ='<div class="royal2"></div>';
                    symbol1.innerText = "Q";
                } 


                    
                if(newCard == 26 ) {
                    cardName ='<div class="royal1"></div>'; 
                    symbol1.innerText = "K";
                } 
                
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
                if(newCard == 37 )  {
                    cardName ='<div class="royal3"></div>';
                    symbol1.innerText = "J";
                }
                if(newCard == 38 ) { 
                    cardName ='<div class="royal2"></div>';
                    symbol1.innerText = "Q";
                } 
                    
                if(newCard == 39 ) {
                    cardName ='<div class="royal1"></div>'; 
                    symbol1.innerText = "K";
                } 
                
                
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
                if(newCard == 50 )  {
                    cardName ='<div class="royal3"></div>';
                    symbol1.innerText = "J";
                }
                if(newCard == 51 ) { 
                    cardName ='<div class="royal2"></div>';
                    symbol1.innerText = "Q";
                } 
                    
                if(newCard == 52 ) {
                    cardName ='<div class="royal1"></div>'; 
                    symbol1.innerText = "K";
                } 
                
                
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
                if(newCard == 11 )  {
                    cardName ='<div class="royal3"></div>';
                    symbol1.innerText = "J";
                }
                if(newCard == 12 ) { 
                    cardName ='<div class="royal2"></div>';
                    symbol1.innerText = "Q";
                } 
                    
                if(newCard == 13 ) {
                    cardName ='<div class="royal1"></div>'; 
                    symbol1.innerText = "K";
                } 
                
                
            }

        }
    
    
   
  
    if(test_case_a && !dealer){

        cardName = 1;
        
        }
    
        else if(test_case_b && !dealer){
    
            cardName = 10;
    
        }
    
        if(test_case_c && dealer){

            cardName = 1;
            
            }
        
            else if(test_case_d && dealer){
        
                cardName = 10;
        
            }

    document.getElementById(canvasName).innerHTML = cardName;
    
    
    if(typeof(cardName)=="string"){
        

        if(dealer == true){
            dealer_card_sum = Number(dealer_card_sum) + Number(10);
        }

        else if(dealer == false){
            card_sum = Number(card_sum) + Number(10);
        }

       
    }
    else if(typeof(cardName)=="number"){

        if (cardName == 1){ 



            if(dealer == false){
                ace_count++;
           
                if(ace == false){
                    card_sum = card_sum + Number(10);
                    ace = true;
                }
                
            }


            if(dealer == true){
                dealer_ace_count++;
           
                if(dealer_ace == false){
                    dealer_card_sum = dealer_card_sum + Number(10);
                    dealer_ace = true;
                }
                
            }
            
        }
        
        if(dealer == false){
            card_sum = Number(card_sum) + Number(cardName);
        }
        else if(dealer == true){
            dealer_card_sum = Number(dealer_card_sum) + Number(cardName);
        }
       
       
    }

            if(dealer == false){
                
                if(card_sum > 21 && ace_count && ace2 == false ){

                    card_sum = card_sum - 10;
                    ace2 = true;

                }
            }

            else if(dealer == true){
                
                if(dealer_card_sum > 21 && dealer_ace_count && dealer_ace2 == false ){

                    dealer_card_sum = dealer_card_sum - 10;
                    dealer_ace2 = true;

                }
            }


            if(dealer == false){
                text_box_card_name = card_sum;
            }
        
            else if(dealer == true){
                dealer_text_box_card_name = dealer_card_sum;
            }
            


    }//end of deck > 1

    document.getElementById("deck_count").innerHTML = deck.length;
    
}


function newCard(){


}


let newCardCount = 3;


function funct_draw_card(dealer){

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

   
            
    if(dealer == true){
    
        document.getElementById("dealer_new_cards").appendChild(newDiv);
    }

    else if(dealer == false){
        document.getElementById("newCardsid").appendChild(newDiv);
    }
   
  
    let canvasname = 'null';
    
    if(dealer == true){
    
        canvasname ='canvas'+ newCardCount;
    }

    else if(dealer == false){
        canvasname ='canvas'+ newCardCount;
    }
  
    

    render(canvasname,dealer);

    newCardCount++;
    document.getElementById("deck_count").innerHTML = deck.length;
    deal_audio.play();
    
    if(!dealer && card_sum <= 21){
        text_box.innerText = `You've placed $${bet_amount} \n Your hand is ${card_sum}`;
    }
    else if(!dealer && card_sum > 21){
       
        text_box.innerHTML = `<div>Your hand is ${card_sum} and you busted!</div> <div style='background-color : red;color:white; font-weight: bold;'> you've lost $ ${bet_amount} </div>`;
        meh_audio.play();
        document.getElementById('draw_card').style.display = 'none';
        document.getElementById('reset').style.display = 'inline';
    }
   
}




function funct_start(){
    
    
    document.getElementById("start_button").style.display = "none";
    document.getElementById('card1').id = 'front1';
    render('canvas',false);
    deal_audio.play();
    text_box.innerHTML = `Your first card is ${text_box_card_name}`;
    
   
    setTimeout(function(){
     
        deal_audio.play();

        document.getElementById('dealer_card_1').id = 'dealer_front1';
       
        render('canvasdealer1',true);
        
        
    
    }, 800); 


    setTimeout(function(){

       

        text_box.innerHTML = `Your first card is ${text_box_card_name}<div>Dealer's hand is ${dealer_text_box_card_name}</div>`;
    
        
    
    }, 800); 

   
    setTimeout(function(){

       

        
        text_box.innerHTML = `Your first card is ${text_box_card_name}<div>Dealer's hand is ${dealer_text_box_card_name}</div><div>Place a bet to continue</div>`;
        document.getElementById("bet_buttons").style.display = "flex";
        
    
    }, 2000); 

   
  

    

    if(balance<1){
        
        alert("YOU HAVE NO MONEY LEFT!\nGet the fuck out here!");
        window.location.href = "https://google.com";

    }
}



function reset(){

    let parent = document.getElementById('newCardsid');
    let parent_dealer = document.getElementById('dealer_new_cards');

    while (parent.firstChild) {
        parent.firstChild.remove()
    }

    while (parent_dealer.firstChild) {
        parent_dealer.firstChild.remove()
    }


    document.getElementById('front1').id = 'card1';
    document.getElementById('front2').id = 'card2';

document.getElementById('symbol1canvas').innerHTML = ' ';
document.getElementById('symbol2canvas').innerHTML = ' ';

document.getElementById('symbol1canvas2').innerHTML = ' ';
document.getElementById('symbol2canvas2').innerHTML = ' ';

document.getElementById('canvas').innerText = " ";
document.getElementById('canvas2').innerText = " ";

document.getElementById('dealer_front1').id = 'dealer_card_1';

if(document.getElementById('dealer_front2')){
document.getElementById('dealer_front2').id = 'dealer_card_2';
}

document.getElementById('symbol1canvasdealer1').innerHTML = ' ';
document.getElementById('symbol2canvasdealer1').innerHTML = ' ';

document.getElementById('canvasdealer1').innerText = " ";

document.getElementById('symbol1canvasdealer2').innerHTML = ' ';
document.getElementById('symbol2canvasdealer2').innerHTML = ' ';

document.getElementById('canvasdealer2').innerText = " ";




document.getElementById('reset').style.display = 'none';
document.getElementById('start_button').style.display = 'inline';
text_box.innerHTML = 'Press "Start" to reveal your first card.';
document.getElementById('entered_bet').innerHTML = '0';





bet_amount = 0;
card_sum = 0;
ace_count = 0;
ace = false;
ace2 = false;
dealer_card_sum = 0;
dealer_ace_count = 0;
dealer_ace = false;
dealer_ace2 = false;
blackjack = false;
dealer_blackjack = false;
}

function render_bet(amount){

    if([Number(bet_amount) + Number(amount)] <= balance && [Number(bet_amount) + Number(amount)] >= 0){

    bet_amount = Number(bet_amount) + Number(amount);
    document.getElementById("entered_bet").innerHTML = bet_amount;

    }

    else if([Number(bet_amount) + Number(amount)] > balance){

        bet_amount = balance;
        document.getElementById("entered_bet").innerHTML = bet_amount;
    
        }
    
        
    else if([Number(bet_amount) + Number(amount)] < 0){

        bet_amount = 0;
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
    render('canvas2',false);
    deal_audio.play();
    document.getElementById('second_card').style.display ='none';
    if(card_sum == 21){
        blackjack = true;
        text_box.innerHTML = `You've placed $${bet_amount} <div>Your hand is ${card_sum}</div><div style='background-color : black;color:white; font-weight: bold;'>  BLACKJACK! </div>`;
        if( dealer_card_sum < 10 ){
            end_round()
        }
    } 
    else{
    text_box.innerText = `You've placed $${bet_amount} \n Your hand is ${card_sum}`;
    }
    document.getElementById('draw_card').style.display = 'inline';

}



function funct_stay(){
   
    document.getElementById('draw_card').style.display = 'none';
    
    
    dealers2();
    
    if(dealer_card_sum == 21){

        dealer_blackjack = true;

    }

    if(dealer_card_sum < 17 && !blackjack){

        dealer_draw_card();
    }
    else if(dealer_card_sum >= 17){
       end_round()
    }



    
}

function dealers2(){
    
deal_audio.play();
document.getElementById('dealer_card_2').id = 'dealer_front2';
render('canvasdealer2',true);

    if(blackjack){
        if(dealer_card_sum != 21){
            end_round();
        }
    }
}






const dealer_draw_card = async () => {
 
    while ( dealer_card_sum < 17 ) {
    await new Promise(r => setTimeout(r, 1000));
    funct_draw_card(true);
    text_box.innerHTML = `You've placed $${bet_amount} <div>Your hand is ${card_sum}</div><div>Dealer's hand is ${dealer_card_sum}</div>`;
  }
  end_round();
  
}


  
function end_round(){

    if((!blackjack && !dealer_blackjack) || ( dealer_blackjack && blackjack )){

        if(dealer_card_sum < card_sum || dealer_card_sum > 21){
            text_box.innerHTML = `Your hand is ${card_sum}</div> <div>Dealer's hand is ${dealer_card_sum}</div><div style='background-color : green; color:white; font-weight: bold;'>YOU WIN!</div>`;
            coins_audio.play();

            balance = Number(balance) + Number(bet_amount * 2);
            document.getElementById('balance').innerHTML = 'Balance $'+balance;
            document.getElementById('reset').style.display = 'inline';
        }
        else if(dealer_card_sum > card_sum && dealer_card_sum < 22){
            text_box.innerHTML = `Your hand is ${card_sum}</div> <div>Dealer's hand is ${dealer_card_sum}</div><div style='background-color : red;color:white; font-weight: bold;'>YOU LOST!</div>`;
            document.getElementById('reset').style.display = 'inline';
            meh_audio.play();
        }
        else if(dealer_card_sum == card_sum){
            text_box.innerHTML = `Your hand is ${card_sum}</div> <div>Dealer's hand is ${dealer_card_sum}</div><div style='background-color : black;color:white; font-weight: bold;'>DRAW!</div>`;
            balance = Number(balance) + Number(bet_amount);
            document.getElementById('balance').innerHTML = 'Balance $'+balance;
            document.getElementById('reset').style.display = 'inline';
        }
    }
    else if(!dealer_blackjack){

        funct_blackjack();

        }
        else if(!blackjack){

            funct_dealer_blackjack();
    
            }
           
    

    }






function day_night_toggle(){
switch_audio.play();
if(day){
gece();
day = false;
night = true;
}
else if (night){
    gunduz();
    night = false;
    day = true;
}

}

function gece(){
    document.body.style.backgroundColor = '#22222f';
    
    document.getElementById("content").style.backgroundColor = '#343454';
    dark_theme();
    document.getElementById('big-header').style.backgroundColor = '#292727';
    document.getElementById('big-header').style.color = 'white';
    document.getElementById("footer").style.color = "wheat"
    document.getElementById("cuteid").innerHTML = '<img src="../img/cutesleep.png" alt="cute dino"> <a href="../index.html"><br>NoteHub</a>';
    document.getElementById("toggle").innerText = 'Day Mode';
    document.getElementById("toggle").style.backgroundColor = '#9a6559';
    document.getElementById("try").style.color = "wheat"
    

}

function gunduz(){

    document.body.style.backgroundColor = '#bfbdaa';
    
    document.getElementById("content").style.backgroundColor = '#9a6559';
    green_theme();
    document.getElementById('big-header').style.backgroundColor = '#e7e9dc';
    document.getElementById('big-header').style.color = '#654f12';
    document.getElementById("footer").style.color = "black"
    document.getElementById("cuteid").innerHTML = '<img src="../img/cute.png" alt="cute dino"> <a href="../index.html"><br>NoteHub</a>';
    document.getElementById("toggle").innerText = 'Night Mode';
    document.getElementById("toggle").style.backgroundColor = '#343454';
    document.getElementById("try").style.color = "black"
}

function green_theme(){

document.getElementById('table1').style.background = 'linear-gradient(180deg, rgb(158, 242, 173) 0%, rgb(6, 164, 51) 53%, rgb(7, 98, 24) 100%';
document.getElementById('table2').style.background = 'linear-gradient(180deg, rgb(158, 242, 173) 0%, rgb(6, 164, 51) 53%, rgb(7, 98, 24) 100%';

}

function paper_theme(){

document.getElementById('table1').style.background = 'linear-gradient(180deg, rgba(242,238,158,1) 0%, rgba(255,249,161,1) 53%, rgba(215,218,121,1) 100%)';
document.getElementById('table2').style.background = 'linear-gradient(180deg, rgba(242,238,158,1) 0%, rgba(255,249,161,1) 53%, rgba(215,218,121,1) 100%)';   

}

function dark_theme(){

    document.getElementById('table1').style.background = 'linear-gradient(180deg, rgb(61 103 69) 0%, rgb(11 83 31) 53%, rgb(15 28 18) 100%)';
    document.getElementById('table2').style.background = 'linear-gradient(180deg, rgb(61 103 69) 0%, rgb(11 83 31) 53%, rgb(15 28 18) 100%)';
    
}

function purple_theme(){

    document.getElementById('table1').style.background = 'linear-gradient(180deg, rgba(41,46,240,1) 0%, rgba(69,65,168,1) 60%, rgba(66,63,111,1) 100%)';
    document.getElementById('table2').style.background = 'linear-gradient(180deg, rgba(41,46,240,1) 0%, rgba(69,65,168,1) 60%, rgba(66,63,111,1) 100%)';
    
}

function change_theme(event) {
    if (theme_selector.value == 'green') {
      green_theme();
    } else if (theme_selector.value == 'paper') {
      paper_theme();
    } else if (theme_selector.value == 'dark') {
      dark_theme();
    }
    else if (theme_selector.value == 'purple') {
        purple_theme();
      }
    
  }


function render_all(){

    let a = 0;
    while( a < deck.length -3 ){
    
        funct_draw_card(true)
    
    }
}

var slider = document.getElementById("myRange");



slider.oninput = function() {

    let val = this.value;
    let val2 = val / 100 ;

    if (val2 < (1/3) ){
        
        val2 = (1/3);
    }

  document.body.style.zoom = val2;

  
}

function new_deck(){
deck = Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1);
shuffle(deck);
}



function change_cheat(event) {
    if (cheats.value == 'draw1') {
      draw_spesific(1);
    } else if (cheats.value == 'draw10') {
        draw_spesific(10);
    } else if (cheats.value == 'drawrandom') {
        draw_spesific(5);
    } else if (cheats.value == 'give') {
      balance += Number(1000);
      document.getElementById('balance').innerText = "Balance $"+balance;
    }
    else if (cheats.value == 'render') {
        render_all();
      }
      else if (cheats.value == 'draw13') {
        draw_spesific(13);
    }
    else if (cheats.value == 'draw11') {
        draw_spesific(11);
    } else if (cheats.value == 'draw12') {
        draw_spesific(12);
    }
    
    
    
  }

  function  draw_spesific(value){

    if(value == 1){
        test_case_a = true;
        test_case_b = false;

    }
    else if(value == 10){
        test_case_a = false;
        test_case_b = true;
        
    }

    else if(value == 5){
        test_case_a = false;
        test_case_b = false;
        
    }

    
    else if(value == 11){
        test_case_c = true;
        test_case_d = false;
        
    }

        
    else if(value == 12){
        test_case_c = false;
        test_case_d = true;
        
    }

    else if(value == 13){
        test_case_c = false;
        test_case_d = false;
        
    }

  }

  function funct_blackjack(){

    coins_audio.play();
    text_box.innerHTML = `<div style='background-color : black; color:white; font-weight: bold;'>You have Black Jack !</div>
    <div style='background-color : black; color:wheat; font-weight: bold;'> You will be paid 3 to 2</div>
     <div style='background-color : green; color:white; font-weight: bold;'>YOU WIN ${Number( bet_amount * 3/2)} </div>`;

    balance = Number(balance) + Number(bet_amount * 3/2);
    document.getElementById('balance').innerHTML = 'Balance $'+balance;
    document.getElementById('reset').style.display = 'inline';

  }

 function funct_dealer_blackjack(){

    meh_audio.play();
    text_box.innerHTML = `<div style='background-color : black; color:white; font-weight: bold;'>Dealer have BlackJack !</div>
    <div style='background-color : black; color:wheat; font-weight: bold;'>And you don't</div>
     <div style='background-color : red; color:white; font-weight: bold;'>YOU LOST ${Number(bet_amount)} </div>`;

    balance = Number(balance) - Number(bet_amount);
    document.getElementById('balance').innerHTML = 'Balance $'+balance;
    document.getElementById('reset').style.display = 'inline';

  }