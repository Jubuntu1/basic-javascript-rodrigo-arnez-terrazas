const scanner = require("prompt-sync")({ sigint: true });


let cancelar = false;
let numSum = 0;
let numScanner;

while (!cancelar) {
    numScanner = scanner("dame un numero->")
    if (numScanner === "cancelar") {
        cancelar = true;
    }
    else if (Number(numScanner)) {
        numSum = Number(numScanner) + (numSum);
    }
    else {
        console.log("no entendido");
    }
}

console.log(numSum);




