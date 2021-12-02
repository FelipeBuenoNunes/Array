const inputs = document.querySelectorAll("input[type = 'number']");
const x = [0,0,0,0];
const y = [0,0,0,0];
function save(){
    for(let i = 0; i < inputs.length; i++){
        x[i] = parseInt(inputs[i].value);
    }
    print();
}
function ordem(){
    copy();
    for(let i = 0; i < y.length; i++){
        let min = Number.MAX_SAFE_INTEGER;
        let id = 0;
        for(let j = 0; j < y.length; j++){
            if(min > y[j])
            {
                min = y[j];    
                id = j;
            }
        }
        x[i] = y[id];
        y[id] = Number.MAX_SAFE_INTEGER;
    }
    print();
}
function invert(){
    copy();
    let n;
    for(let i = 0; i < x.length; i++){
        n = y[i];
        x[4 - (i + 1)] = n;
    }
    print();
}
function copy(){
    for(let i = 0; i < x.length; i++){
        y[i] = x[i];
    }
}
function print(){
    document.getElementById("number1").innerText = x[0];
    document.getElementById("number2").innerText = x[1];
    document.getElementById("number3").innerText = x[2];
    document.getElementById("number4").innerText = x[3];
}