const scanner = require("prompt-sync")({ sigint: true });


let cancelar = false;
let textConcat = "";
let textScanner;

while (!cancelar) {
    textScanner = scanner("dame texto->")
    if (textScanner === "cancelar") {
        cancelar = true;
    }
    else if(textConcat===""){
        textConcat = String(textScanner);
    }
    else {
        textConcat=textConcat.concat("-",textScanner);
    }
   
}

console.log(textConcat);


