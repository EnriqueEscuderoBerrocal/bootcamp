
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

 console.clear();

 let str = String("hola tronco");
 let str2 = "hola caracola"; //recomentado
 console.log(typeof str, typeof str2);

 let num=5;
 let num2 = Number(5);
 console.log(typeof num, typeof num2);
 