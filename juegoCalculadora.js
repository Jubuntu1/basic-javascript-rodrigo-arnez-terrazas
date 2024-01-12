const input =require("prompt-sync")({sigint: true});


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function suma(a,b) {
    console.log(a + "+" + b)
}
function resta(a,b) {
    console.log(a + "-" + b)
}
function multiplicacion(a,b) {
    console.log(a + "*" + b)
}

let operacion=0;
let opA=0;
let opB=0;

function jueguito(){
for(let i;i<100;i++){
    operacion=getRandomInt(2);
    opA=getRandomInt(10)
    opB=getRandomInt(10)
    switch (operacion) {
        case 0:
            suma(opA,opB)
            break;
        case 0:
            resta(opA,opB)
            break;
        case 0:
            multiplicacion(opA,opB)
            break;
        default:
            break;
    }
}
}
