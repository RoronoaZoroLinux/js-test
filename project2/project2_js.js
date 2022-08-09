var deck = Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52);



function drawCard(){

    let randomCard = Math.floor( Math.random() * deck.length );
    deck.splice(deck.indexOf(randomCard),1);
    return randomCard;

}


function render(){
    let newCard =  drawCard();
    let cardName;
    if(deck.length > 1){
    if(newCard > 13 && newCard < 27){
        if(newCard<24){
        cardName = "sinek " + (newCard - 13);
        }
        else{
            if(newCard == 24 )  cardName = "sinek " + "vale";
            if(newCard == 25 )  cardName = "sinek " + "kız";
            if(newCard == 26 )  cardName = "sinek " + "papaz"; 
        }
    }

    else if(newCard > 26 && newCard < 40 ){
        cardName = "maça " + (newCard - 26);
    }

    else if(newCard > 39 && newCard < 53){
        cardName = "karo " + (newCard - 39);
    }

    else {
        cardName = "kupa " + newCard;
    }

    document.getElementById("canvas").innerText = cardName;

}
else{
    document.getElementById("canvas").innerText = "deste sonu";
}
}


