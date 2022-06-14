// define e inicializa un array con 5 elementos string en una sola linea.
let array = ["1","2","3","4","5"];
//console.log(array);

/* 
define un array vacio, añade tres elementos detipò number elimina por completo el primero 

*/ 
let numbersArray =[];
//console.log(`Este array tiene un contenido de ${numbersArray.length} con el siguiente contenido ${numbersArray}`);

numbersArray.push(12,45,76);
//console.log(`Este array tiene ahora un contenido de ${numbersArray.length}  que son : ${numbersArray}`);

numbersArray.shift();

//console.log(`Este array tiene un contenido de ${numbersArray.length} con el siguiente contenido ${numbersArray}`);


numbersArray.unshift(55,88);
//console.log(`Este array tiene un contenido de ${numbersArray.length} con el siguiente contenido ${numbersArray}`);


// apartado 3  Escribe una funcion nombrada que devuelva true si el argumento dado es de tipo boolean


const booleanCheck = (argumento) => typeof argumento ==="boolean" ?true:false;
//console.log(booleanCheck(true));
//console.log(booleanCheck("true"));
//console.log(booleanCheck(3));





function myFuncion(x) {
    
    if (typeof x === "boolean"){
        return true
    }else {
        return false
    }
    
}

let funci = myFuncion(true);
//console.log(funci);

let funci1 = myFuncion("true");
//console.log(funci1);
console.clear();
// 4 escribe una funcion que devuelva la longitud de un string recibido por argumento.

const lengthString =(string) => string.length;
console.log(lengthString("hola, como estas ? que estas muy perdio por esos barrios de dios!!!!"));

// crea una funcion de flecha que reciba una cantidad de minutos y lo devuelva convertido a segundos.


const funcMinutos = (minutos) =>  minutos *60;


console.log(funcMinutos(7), " Segundos");


//6 Crea una funcion que reciba un número y devuelva el siguiente numero par, si Es par lo devolvera directamente.

function numero(num) {
    if (num % 2 == 0){
        return num;
    } else { return num +1;}
    
}

console.log(numero(3));

// 7 . crea una funcion que reciba una edad y devuelva la cantidad de dias que esa persona ha vivido, obiando los años bisiestos.

function funcEdad(years) {
    return years*365
    
}

console.log("de momento llevas ", funcEdad(50)," dias vivo");

// 8 . Crea una funcion que reciba un array y debuelva su ultimo elemento, 
//prueba tu funcion con arrays de diferentes longitudes.

const ultArray=array => array[array.length -1];

const array1 = [3,5,6];
const array2 =[4,56,5,4,5,6,4,34,35];

console.log(ultArray(array1));

console.log(ultArray(array2));

/* 9. un grangero necesita contar la cantidad de patas 
de los animales en sus diferentes grangas muy frecuentement, pero tiene tres especies
 pollos(2 patas), vacas (4patas), y cerdos (4patas), la funcion
 recive la cantidad de animales en ese orden y devuelve la cantidad de patas totales */

function animales(pollos,vacas, cerdos) {
    let ppollos= pollos*2;
    let pvacas = vacas*4;
    let pcerdos= cerdos*4;
    return pcerdos+ppollos+pvacas
    
}


console.log("El total de patas de tus animales es : ", animales(1,1,1));

// 10 crea una funcion que determine que dos datos recibidos por argumentos son del mismo tipo.

function equal(a,b) {
    if (typeof a === typeof b){
        return true
    }else {
        return false
    }
    
}
console.log(" los datos son del mismo tipo ? ", equal(2,3));
console.log(" los datos son del mismo tipo ? ", equal(2,"2"));

console.clear()
// reduce  --  suma el array y aparte le suma 10 al valor inicial de sum

const arr =[10,25];

console.log(arr.reduce((sum,currentNumber)=> sum + currentNumber, 10));
