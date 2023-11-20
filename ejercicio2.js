const scanner = require("prompt-sync")({ sigint: true });
let isnumber=true;
let nota = scanner("nota del examen-> ");

if(Number(nota)){
    console.log("es una nota");
    switch (0<nota<10) {
        case (nota < 3): console.log("muy deficiente");
        break;
    
        case (nota < 5): console.log("insuficiente");
        break;
    
        case (nota < 6): console.log("suficiente");
        break;
    
        case (nota < 7): console.log("bien");
        break;
    
        case (nota < 9): console.log("notable");
        break;
    
        default: console.log("sobresaliente")
    }
}else{
    console.log("no es una nota");
}

