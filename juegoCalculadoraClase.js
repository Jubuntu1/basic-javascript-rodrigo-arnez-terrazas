const input = require("prompt-sync")({ sigint: true });


function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function suma(a, b) {
    console.log(a + "+" + b)
    let res = input("cuanto es?")
    return (Number(res) === (a + b))
}
function resta(a, b) {
    console.log(a + "-" + b)
    let res = input("cuanto es?")
    return (Number(res) === (a - b))
}
function multiplicacion(a, b) {
    console.log(a + "*" + b)
    let res = input("cuanto es?")
    return (Number(res) === (a * b))
}



function division(a, b) {
    console.log(a + "/" + b)
    let res = input("cuanto es?")
    return (Number(res) === (a / b))
}



function potencia(a, b) {
    console.log(a + "^" + b)
    let res = input("cuanto es?")
    return (Number(res) === (Math.pow(a, b)))
}



let operacion = 0;
let opA = 0;
let opB = 0;
let tiempo = 5000;

function temp(tiempo) {
    t_op = setTimeout(function () {
        console.log('¡Tiempo terminado!');
    }, tiempo);

}



function jueguito() {
    let puntos = 0
    let fin=false
    for (let i = 0; i < 10 && !fin; i++) {
        operacion = getRandomInt(4);
        opA = getRandomInt(10)
        opB = getRandomInt(10)
        switch (operacion) {
            case 0:
                temp(tiempo)
                if (suma(opA, opB)) {
                    puntos++
                    console.log("bien")
                }
                else {
                    console.log("mal")
                    fin = true
                }
                break;
            case 1:
                temp(tiempo)
                if (resta(opA, opB)) {
                    puntos++
                    console.log("bien")
                }
                else {
                    console.log("mal")
                    fin = true
                }
                break;
            case 2:
                temp(tiempo)
                if (multiplicacion(opA, opB)) {
                    puntos++
                    console.log("bien")
                }
                else {
                    console.log("mal")
                    fin = true
                }
                break;
            case 3:
                temp(tiempo)
                opA = getRandomInt(10) * opB
                /*opB = getRandomInt(10)*/
                if (division(opA, opB)) {
                    puntos++
                    console.log("bien")
                }
                else {
                    console.log("mal")
                    fin = true
                }
                break;
            case 4:
                temp(tiempo)
                if (potencia(opA, opB)) {
                    puntos++
                    console.log("bien")
                }
                else {
                    console.log("mal")
                    fin = true
                }
                break;
            default:
                break;
        }
        clearTimeout(t)
    }
    console.log("tus puntos son: " + puntos)
}

jueguito();
