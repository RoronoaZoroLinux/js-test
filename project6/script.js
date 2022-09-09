const click = new Audio("click.wav");
const no    = new Audio("no.wav");

const screen = document.querySelector(".column2");
const small  = document.querySelector(".column1");
const numbers   = Array.from(document.querySelectorAll(".num")); 
const operators = Array.from(document.querySelectorAll(".op")); 

let memslot1 = "";
let memslot2 = "";
let memslot3 = "";
let symbol   = "";
let op_second = false;
let operation = null;

numbers.forEach( key =>{

    key.addEventListener("click" , e=>{
        play_click();
        if(op_second === true){

                memslot2 += e.target.dataset.key;
                screen.innerText = memslot2;
        
            return;
        }
            small.innerText ="";
            memslot1 += e.target.dataset.key;
            screen.innerText = memslot1;
    })
} );

const f_del = function(){
    play_click();
    if(op_second === true){
        let foo = Array.from(memslot2);
        foo.pop();
        memslot2 = foo.join('');
    
    if(memslot2.length == 0){
        screen.innerText = 0;
        return;
    }
    screen.innerText = memslot2;
    return;
    }

    small.innerText ="";
    let foo = Array.from(memslot1);
    foo.pop();
    memslot1 = foo.join('');

    if(memslot1.length == 0){
        screen.innerText = 0;
        return;
    }
    screen.innerText = memslot1;

};

const f_func = function(e){

f_rmdot();
if(op_second === true) {
    play_no();
    return;
}

play_click();

if(memslot1 == "") memslot1 = "0";
memslot2 = "";
operation = e.target.dataset.key;
symbol = e.target.innerText;
op_second = true;
small.innerText = memslot1+" "+symbol;
screen.innerText = "0";
};

const f_result = function(){

if(!op_second || (memslot1 == 0 && memslot2 == 0)) {
    play_no();    
    return;
};

play_click();
f_undef2f();

switch(operation){

    case "PLUS":
        memslot3 = (parseFloat(memslot1) + parseFloat(memslot2)).toFixed(4);
        break;
        
    case "MINUS":
        memslot3 = (parseFloat(memslot1) - parseFloat(memslot2)).toFixed(4);
        break;

    case "DIVIDE":
        if(memslot2 == 0) memslot2 = 1;
        memslot3 = (parseFloat(memslot1) / parseFloat(memslot2)).toFixed(4);
        break;

    case "MULTIPLY":
        memslot3 = (parseFloat(memslot1) * parseFloat(memslot2)).toFixed(4);
        break;
}

f_regex();
f_rmdot();

screen.innerHTML = memslot3;
small.innerText = memslot1 +` ${symbol} `+ memslot2;
op_second = false;
memslot1 = String(memslot3);
};

const f_regex = function(){
    memslot3 = memslot3.replace(/(0*$)/, "");
    if(memslot3.at(-1) == "."){
        memslot3 = memslot3.replace(/\./, "");
    }
};

const f_undef2f = function(){
    if(memslot1 == "" || memslot1 == undefined || memslot1 == null){
        memslot1 = "0";
    }
    if(memslot2 == "" || memslot2 == undefined || memslot2 == null){
        memslot2 = "0";
    }
};

const f_pm = function(){


if(screen.innerText == "0"){ 
    play_no() ;
    return; 
}

play_click();
if(op_second == true){
    memslot2 = String(-memslot2);
    screen.innerText = memslot2;
    return;
}
memslot1 = String(-memslot1);
screen.innerText = memslot1;
};

const f_c = function(){
    location.reload();
};

const f_percent = function(){

if(op_second == true){
    memslot2 = (memslot1/100).toFixed(4);
    memslot2 = memslot2.replace(/(0*$)/, "");
    screen.innerText = memslot2;
    play_click();
    return;
}

play_no();

};

const f_dot = function(){

if(op_second === true && !memslot2.includes(".")){
    if(memslot2 == "") memslot2=0;
    memslot2 = String(memslot2) + ".";
    screen.innerText = memslot2;
    play_click();
}
else if(op_second === false && !memslot1.includes(".")){
    if(memslot1 == "") memslot1=0;
    memslot1 = String(memslot1) + ".";
    screen.innerText = memslot1;
    play_click();
}
else{
    play_no();
}

}

const f_rmdot = function(){

    memslot1 = memslot1.replace(/(0*$)/, "");
    memslot2 = memslot2.replace(/(0*$)/, "");

    if(memslot1.at(-1) == "."){
        memslot1 = memslot1.replace(/\./, "");
    }
    if(memslot2.at(-1) == "."){
        memslot2 = memslot1.replace(/\./, "");
    }
    if(memslot1 == "")memslot1 ="0";
    if(memslot2 == "")memslot2 ="0";
}

const play_click = function(){
    click.currentTime = 0;
    click.play();
}
const play_no = function(){
    no.currentTime = 0;
    no.play();
}

document.querySelectorAll(".FUNC").forEach( key => {
    key.addEventListener("click" , f_func);
});

document.querySelector("[data-key='DEL']").addEventListener("click" , f_del);
document.querySelector("[data-key='RESULT']").addEventListener("click" , f_result);
document.querySelector("[data-key='PM']").addEventListener("click" , f_pm);
document.querySelector("[data-key='C']").addEventListener("click" , f_c);
document.querySelector("[data-key='PERCENT']").addEventListener("click" , f_percent);
document.querySelector("[data-key='DOT']").addEventListener("click" , f_dot);