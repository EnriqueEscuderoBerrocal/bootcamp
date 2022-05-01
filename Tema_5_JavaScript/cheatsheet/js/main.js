
// uso de JS externo
function saludo(){
    console.log("pulsando desde un external Script");
    alert("saludos desde un Script externo");
    
}
document.getElementsByTagName("a").item(2).addEventListener("click" ,saludo);

// ------------------- depuracion /loggin -------------------------------

// alert("mensaje");
console.log("Mensaje");
// -------------------- VARIABLES ------------------------

// VAR --> FUNCTION SCOPE
// LET/CONST --> BLOCK SCOPE
function saludar() {
    console.log("inicial: ", contador);
    
    for ( let contador =0; contador <= 3; contador ++ ){
        console.log(contador);
    }
//console.log("Final: " , contador);
}

//saludar();
console.clear();

//   --------- Inicialización ------------
let day;
day =20;
let dia =20;

let monthName = "Octubre";

let hour, minute, second;

let array =[15,20,12];
console.log("Valor de array 0 y 2:",array[0], array [2]);

let [var1, var2, var3] = [15,55,65];// avanzada
console.log("Valores de var1, 2, y 3 :",var1,var2,var3);

//const --> block scope

const x =1;
//x =2; // error !!! .No se puede cambiar el valor de una constante
console.log(x);

let texto = 23;
console.log(typeof texto);
let suma = texto +dia;
console.log(suma);

 // ------------------- Tipos de datos -----------------
// datos primitivos
 console.clear();

 let str = String("hola tronco");
 let str2 = "hola caracola"; //recomentado
 console.log(typeof str, typeof str2);

 let num=5;
 let num2 = Number(5);
 console.log(typeof num, typeof num2);
 
 let bool = Boolean(true);
 let bool2 =false;
 console.log(typeof bool, typeof bool2);

 let undef;
console.log(typeof undef);

let selectedColor =null;  // Limpiar una variable
console.log(selectedColor, typeof selectedColor);

// Objetos
let array1 = Array(1,2,3,4);
let array2 = [1,2,3];
console.log(array1,array2);
console.log(typeof array1, typeof array2);

console.log(typeof new Date("2022-05-01"));
console.log(typeof new Error("Mensaje de Error 001"));

// --------------------- Strings ------------------------

str ="Hola Futuro";
console.log(str , str.length); // nos dice el numero de letras
console.log(str.toUpperCase());  // convierte el texto en mayuscula
console.log(str.indexOf("Futuro")); // nos dice donde empieza la palabra futuro dentro del String
console.log(str.indexOf("trololo")); // nos data como valor -1 al no existir dentro del String
console.log("La última ocurrencia de 'u' esta en el indice : ", str.lastIndexOf("u"));

console.log(str.substring(0,4)); // nos da como valor los caracteres empezando en 0 y terminando en 4

console.log(str.concat(" y Pasado")); //concatena Strings

console.log(str.replace("Futuro", "Manteca"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(`texto que me de la gana ${str} porque me da la gana. ${str2}`); // solo para ES6 "String Template",recuerda, el de la tecla del `` sombrerito

// --- Parsing -----

let number2 =Number ("1000");
console.log(number2, typeof number2);

 number2 =Number ("fdfdgfd"); // NaN = no es un numero , no genera error
console.log(number2, typeof number2);
number2 = 1000;
number2 += "1000"; // entiende que es una concatenación.
console.log(number2, typeof number2);




