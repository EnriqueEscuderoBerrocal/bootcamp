// ------ DOM -------
console.log(document.title);
document.title  += " con DOM"  // esto concatena el titulo original y este nuevo
console.log(document.title);
console.log(document.scripts); // vemos los script que tiene la pagina
console.log(document.links); // vemos los link que tiene la pagina
console.log(document.lastModified);  // fecha demodificacion ultima del index.html


// ----------------------- selectores/ selectors  ----------------------
const family= document.getElementsByTagName("div");
console.log(family);
console.log(Array.from(family)); // parsea  el HTMLCollection en  el array 
Array.from(family).forEach(item => console.log(item));  // esto nos saca por consola todos los iten del nuevo array.

for (let familyMember of family){ // esto es otra forma de listarlo.
console.log(familyMember);
}


const grandParent = document.getElementById(".grandparent");
console.log(grandParent);



const parent1= document.getElementsByClassName(".parent");
console.log(parent1);
console.log("----");
for (let elementClass of parent1){ 
    console.log(elementClass);
    };

   

    const children1 =document.getElementsByClassName("child");
    console.log(children);
    console.log("---");
    for (let childClass of children1){  // listamos el array
        console.log(childClass);
        };

        

    let element = document.querySelector(".grandparent  .child"); // devuelve el primero de los valores
    const yellow = document.querySelectorAll(".child");// devuelve todos los valores
    console.log(element);
    
    console.clear();

    const parents = document.getElementsByClassName("parent");
    
   
  

   

   
    // ------- cambios en el DOM ------
    //console.log("es un yelow: "+ yellow);

    yellow[2].style.backgroundColor="#ddd";
    element.style.backgroundColor="#d5d";


    for (let item of yellow){
        item.style.backgroundColor="white";
    }
    //console.log(" es children?? : " + children1);
    children1[0].parentNode.style.backgroundColor = "yellow";

    // para ahorrarnos picar codigo, creamos una funcion y le pasamos argumentos 
    const  changeBackground = (elemento, color) => elemento.style.backgroundColor = color; // creamos funcion 
    changeBackground(children1[3],"grey"); // llamamos a la funcion y le damos un argumento
    changeBackground(yellow[0],"blue");

    changeBackground(parent2.children[0], "orange");




   
    

   

    

    
    
    


    
    
    



