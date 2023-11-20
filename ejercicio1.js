const scanner =require("prompt-sync")({sigint: true});

let nombre=scanner("introduce tu nombre:");

let edad=scanner("introduce tu edad:");


if(edad>=18){
    console.log("Tienes edad para conducir")
}else{
    console.log("no puedes conducir")
}
