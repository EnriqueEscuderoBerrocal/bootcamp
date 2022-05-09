
// uso de JS externo
function saludo(){
    console.log("pulsando desde un external Script");
    alert("saludos desde un Script externo");
    
}
//document.getElementsByTagName("a").item(2).addEventListener("click" ,saludo);

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



// ---------------- Objetos -----------------------------

let person = {
    name:"John",
    age: 30,
    blonde: false,
    phone:["952303307","691290594"],
    telefonos:[
        {
            fijo: "952303307",
            movil: "691290594"
        }],
    jump(){
        console.log(" Mira que función dentro de un objeto me hice!!!");
    },
    presentarse(){
        //let resultaPelo = this.blonde ? " marron" : " rubio ";
        console.log(`Me llamo ${this.name} , tengo ${this.age} años y el color de mi pelo es ${this.blonde ? " marron" : " rubio "} `);

    }
 };

 person.presentarse();

 person.jump(); // llamamos la funcion que esta dentro del objeto.

 // Acceso por punto / Dot notation
 console.log(person); 
 console.log(`Se llama ${person.name} y tiene ${person.age} años, sus números de telefono son : ${person.phone} `);
 
 // cambiar propiedad
 person.name = "Juan";
 console.log(`Ahora se llama ${person.name} y tiene ${person.age} años, su número de telefono Movil es : ${person.phone[1]} `);
 
 //Acceso por corchetes / Brackets notation

 let propertyName ="age";
 console.log(person[propertyName]);
  
 // Ampliación
 
 person.children =["Pepito", "Manolito"];
 console.log(person); 


 
 // -------------   This ---------------
 const person2 ={
     name:"Thomas",
     talk(){
         console.log(this); // hace referencia al mismo objeto en este caso person2 
         console.log(`Me llamo ${this.name}`);
     }
 }
 
person2.talk();

console.log(this);



// -------------------- Arrays ----------------------------

let selectedColors =["Red","Blue","Yellow"]; //array de Strings

console.log(selectedColors, selectedColors.length, typeof selectedColors);

selectedColors[3] = "Green"; // añade elemento al array

console.log(selectedColors, selectedColors.length);

selectedColors.push("Violet", "Black", "White"); // añade elementos al final del array
console.log(selectedColors, selectedColors.length);

selectedColors.pop();  // Quita el último elemento
console.log(selectedColors, selectedColors.length);

selectedColors.unshift("Magent");  // añade elemento al principio del Array
console.log(selectedColors, selectedColors.length);

let removeIni = selectedColors.shift(); // elimina el primer elemento del Array
console.log(`El color que he borrado es : ${removeIni}`);
console.log(selectedColors, selectedColors.length);
console.log("Este es el color que he metido en una variable : ",removeIni);

selectedColors.sort(); // ordena alfabeticamente
console.log(selectedColors, selectedColors.length);

let indiceBusca = selectedColors.indexOf("Green"); // busca indices de array
console.log(indiceBusca);

console.log("Busca : ",selectedColors.slice(1,3)); // nos da el valor del indice 1 y 2 dejando el 3 fuera
console.log("Borra : ",selectedColors.splice(1,1)); // elimina el indice 1
console.log("Borra : ",selectedColors.splice(1,3)); // elimina los indices que se indican , del 1 al 3
console.log("El array se ha quedado así : " ,selectedColors, selectedColors.length);



/*  ----- EJERCICIO -----
Crear un objeto niño
que tenga las proiedades , nombre ,altura, pelo y amigos
Amigos estara inicialmente vacio y lo añadiremos posteriormente 3 elementos 
con los nombres. Despues añadiremos uno al inicio.

*/

let children = {
    nombre:"Jonas",
    altura: 1.30,
    pelo: "marron",
    amigos:[],
    colegas(){        
        console.log("estos son mis amigos : ");
        for (j=0; j < children.amigos.length;j++){// bucle para recorrer el array
            console.log(children.amigos[j]);}; 
    },
    pierdeUltimoAmigo(){
        let pierdeAmi = this.amigos.pop();
        console.log(pierdeAmi ," Ya no es mi colega!!!");
        if (this.amigos.length == 0){
            console.log(" Me quedé sin Colegas!!!");
        };
    }    
 };

 children.amigos.push("Pepe", "Alberto", "Julian");
 children.amigos.unshift("Calletano");

 console.log(children);
 children.colegas()
 children.pierdeUltimoAmigo();
 children.pierdeUltimoAmigo();
 children.pierdeUltimoAmigo();
 children.pierdeUltimoAmigo();

 // ----- FIN DE EJERCICIO ------

 

 // ---- Condicionales --------------

 const randomNumber = 3;
 const guessedNumber = "5";
 if (typeof randomNumber !== typeof guessedNumber){
    console.log("Illooooo, o numeros o letras. No mezcles!!!");}

 else if (randomNumber === guessedNumber) { //  estrictamente igual
    console.log("Acertaste el número !!!");

 } else if(randomNumber > guessedNumber){
    console.log(" el número secreto es mayor !!!");

 } else if (randomNumber < guessedNumber) {
    console.log("el número secreto es menor !!!");

 } else{
    console.log("No diste una!!!");

 }

 //   -----------------       SWITCH         --------------------
let fruta= "Melon"; // variable con la opción.
 switch (fruta){
     case "Pera":   //cuando coincida el caso con la variable ejecuta el codigo del case que corresponda
            console.log(" quieres una :", fruta);
            break; // si no ponemos break , ejecutaria todo el código.
     case "Platano":
        console.log(" quieres un :", fruta);
            break;
     case "Manzanas":
             console.log(" quieres unas :", fruta);
            break;
    default: // si no se ajusta niguno de los CASE se ejecuta este.
        console.log("Se ve que no quiero na"); 
        // Aqui no es necesario poner break. 


 }

 
 // ------------------ Ternary Operator ---------------

  let variable = 12 < 10 ? "es menor" : " es mayor";

  console.log(variable);

  
  // ------- FUNCIONES --------------

  // nombradas

    
  function prueba(uno,dos){
       let resultado = uno + dos;
       console.log(" El resultado es : ",resultado);
      return resultado;
  };

  prueba();
  prueba(1,2);

// funcion que devuelve el cuadrado de un número que recive por parametro
  function square(valor){
      let = cuadrado = valor * valor;
      return cuadrado;


  };
  let parametro = 20;
  console.log("El cuadrado de ",parametro, " es ",square(parametro));
  //console.log(prueba);

  console.clear();
  // ---- ANóNIMAS -------
  let numbersArray = [5,51,1,15];
  console.log(numbersArray);
  numbersArray.sort(); // ordena segun ASCII
  console.log(numbersArray);

function orderNumber(a,b){ // esta es la forma basica para ordenar con sort.
    if (a < b){
        return -1;
         } else if (a ===b){
             return 0;
         } else {
             return 1;
         }
};

function orderNumber(a,b){ // esta es la forma basica para ordenar con sort.
    if (a < b){
        return -1;
         } else if (a ===b){
             return 0;
         } else {
             return 1;
         }
};
function orderNumber2(a,b){ // esta funcion hace lo mismo que la primera 
    return a-b;
};

  numbersArray.sort(orderNumber2); // añadimos la funcion creada orderNumber2
  console.log(numbersArray, " Ordenado por a - b ");

  numbersArray.sort(function (a,b){return a-b}); // aqui podemos ver la función anónima
  console.log(numbersArray, " Función anónima a- b");
  
  
  // ------   Arrow function - funciones de Flecha . Solo para JS6 -----------
  const perimeterOfSquare = (side) => side*4; // despues dela flecha ira lo que nos devuelve como en el return
  console.log(perimeterOfSquare(5), " arrow function");

  console.log(typeof function () {});
  console.log(typeof (()=>{}));

  // esta seria la version anonima  de la arrow function creada arriba
  const perimeterOfSquare2 =function (side){
      return side *4;
  };
  

  //   ------ BUCLES -------

  // --- For ----
  for (let i=0; i <=10; i++){
    console.log(`indice : ${i}`);
  }

   // añadiendo valores a un array 

   let arrayFor =[]; // creamos el array
  for (let i=0; i <=10; i++){ // creamos el bucle 
      arrayFor.push(i);  // añadimos indice al final con Push    
  }
  console.log(`array : ${arrayFor}`);
  console.log(typeof arrayFor);

  // --- ejemplo de multiplicación, en este caso por 9  ----
  let arrayMultipl =[]; // creamos el array
  for (let i=1; i <=10; i++){ // creamos el bucle 
      arrayMultipl.push(i*9);  // añadimos indice al final con Push    
  }
  console.log(`Tabla del 9  : ${arrayMultipl}`);
  
  // ----- for each ,  se aplica a los array-----
  let arrayFe=[2,4,66,78];
  arrayFe.forEach(function (item){  // espera siempre una funcion
      console.log("Valores del array ",item);

  });

  // ----- for ...of ----------

  let prueba2 ="Hola";
  for (let item of prueba2){ // podemos utilizar string o Array
      console.log("for of : ",item);
  };


 
 // ------ Continue --------

 for (let i=0 ; i< 5; i++){
     if (i === 3){ 
         continue; // salta la siguiente interacion   
        }

     console.log("usando continue", i);
 };


 // ------ Break   -------

  mainLoop : while (true){  // mainLoop es una etiqueta para relaciorar el bucle
     while (true){
         break mainLoop //rompe o para el bucle en el que este

     }
 };
 console.clear();

 let i =0;
 let k ;

 mainLoop2 : while (true){  
     console.log("Outer loop ", i);
     i++;
     k=1;

    while (true){
        console.log("inner loop : ", k);
        k++;
        if (i === 3 && k === 3){
            break mainLoop2;
        }else if ( k === 3){
            break;
        }

    }
};

  // ------Bucle  WHILE ------
  let contador = 0;  // este while seria unoa forma de utilizarlo como un for, no tendria sentido!!
  while (contador <= 10){
      console.log(contador);
      contador ++;
  };

  
  


  



