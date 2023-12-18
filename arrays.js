const scanner = require("prompt-sync")({ sigint: true });


const listaPar=[];
const listaImpar=[];
for (let i = 0; i < 100; i++) {
    if(i%2===0){
        listaPar.push(i);
    }
    else{
        listaImpar.push(i);
    }   
}
console.log(listaImpar,listaPar);
