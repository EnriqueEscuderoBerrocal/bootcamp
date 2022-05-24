// define e inicializa un array con 5 elementos string en una sola linea.
let array = ["1","2","3","4","5"];
console.log(array);

/* 
define un array vacio, añade tres elementos detipò number elimina por completo el primero 

*/ 
let numbersArray =[];
console.log(`Este array tiene un contenido de ${numbersArray.length} con el siguiente contenido ${numbersArray}`);

numbersArray.push(12,45,76);
console.log(`Este array tiene ahora un contenido de ${numbersArray.length}  que son : ${numbersArray}`);

numbersArray.shift();

console.log(`Este array tiene un contenido de ${numbersArray.length} con el siguiente contenido ${numbersArray}`);


numbersArray.unshift(55,88);
console.log(`Este array tiene un contenido de ${numbersArray.length} con el siguiente contenido ${numbersArray}`);


// apartado 3  Escribe una funcion nombrada que devuelva true si el argumento dado es de tipo boolean


const booleanCheck = (argumento) => typeof argumento ==="boolean" ?true:false;
console.log(booleanCheck(true));
console.log(booleanCheck("true"));
console.log(booleanCheck(3));





function myFuncion(x) {
    
    if (typeof x === "boolean"){
        return true
    }else {
        return false
    }
    
}

let funci = myFuncion(true);
console.log(funci);

let funci1 = myFuncion("true");
console.log(funci1);