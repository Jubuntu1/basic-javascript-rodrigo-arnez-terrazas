const input = require("prompt-sync")({ sigint: true });


function getRandomInt(max) {
    return Math.floor(Math.random() * (max+1));
}

function suma(a, b) {
    console.log(a + "+" + b)
    let res = input("cuanto es?")
    return(Number(res) ===(a + b))
}
function resta(a, b) {
    console.log(a + "-" + b)
    let res = input("cuanto es?")
    return (Number(res)  === (a - b))
}
function multiplicacion(a, b) {
    console.log(a + "*" + b)
    let res = input("cuanto es?")
    return (Number(res)  === (a * b))
}

let operacion = 0;
let opA = 0;
let opB = 0;
let tiempo=5000;
let t=0;

function temp(tiempo){
    t=setTimeout(function() {
        console.log('¡Tiempo terminado!');
      }, tiempo);
}



function jueguito() {
    let puntos=0
    let fin=false
    for (let i=0; i < 10 && !fin; i++) {
        operacion = getRandomInt(2);
        opA = getRandomInt(10)
        opB = getRandomInt(10)
        switch (operacion) {
            case 0:
               temp(tiempo)
                if(suma(opA,opB)){
                    puntos++
                    console.log("bien")
                }
                else{
                    console.log("mal")
                    fin=true
                }
                break;
            case 1:
                temp(tiempo)
                if(resta(opA,opB)){
                    puntos++
                    console.log("bien")
                }
                else{
                    console.log("mal")
                    fin=true
                }
                break;
            case 2:
                temp(tiempo)
                if(multiplicacion(opA,opB)){
                    puntos++
                    console.log("bien")
                }
                else{
                    console.log("mal")
                    fin=true
                }
                break;
            default:
                break;
        }
        clearTimeout(t)
    }
    console.log("tus puntos son: "+puntos)
}

jueguito();
