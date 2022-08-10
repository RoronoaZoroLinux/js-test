var deck = Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1);


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
                if(newCard == 24 )  cardName ="jack";
                if(newCard == 25 )  cardName ="queen";
                if(newCard == 26 )  cardName ="king"; 
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
                if(newCard == 39 )  cardName ="jack";
                if(newCard == 38 )  cardName ="queen";
                if(newCard == 37 )  cardName ="king"; 
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
                if(newCard == 50 )  cardName ="jack";
                if(newCard == 51 )  cardName ="queen";
                if(newCard == 52 )  cardName ="king"; 
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
                if(newCard == 11 )  cardName ="jack";
                if(newCard == 12 )  cardName ="queen";
                if(newCard == 13 )  cardName ="king"; 
            }

        }
  
    document.getElementById(canvasName).innerText = cardName;
    document.getElementById("log").innerText = "rnd: " + newCard + " deck ln : " + deck.length +"\n" + deck;
   
            }

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

const btnadd = document.querySelector(".test");

btnadd.addEventListener("click",addNew);

function addNew(){
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
        newDivNum.innerHTML = drawCard();
        newDivNum.style.alignSelf = 'center';
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
}
