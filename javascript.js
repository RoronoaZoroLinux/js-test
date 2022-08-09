let btn_value = 0

document.getElementById("jscript").innerText = btn_value;

function increment(){
    btn_value++;
    document.getElementById("jscript").innerText = btn_value;

}

function decrease(){
    if(btn_value > 0){
    btn_value--;
    }
    document.getElementById("jscript").innerText = btn_value;
}

function plus_5(){
    btn_value += 5;

    document.getElementById("jscript").innerText = btn_value;
}

function minus_5(){
    if((btn_value - 5) >= 0){
    btn_value -= 5;
    }
    document.getElementById("jscript").innerText = btn_value;
}

function saved(){

    document.getElementById("counter_saved").innerText += btn_value;
    btn_value = 0 ;
}