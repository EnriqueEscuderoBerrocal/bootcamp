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


const grandParent = document.getElementById("grandparent");
console.log(grandParent);



const parent1= document.getElementsByClassName("parent");
console.log(parent1);
console.log("----");
for (let elementClass of parent1){ 
    console.log(elementClass);
    }

   

    const childr =document.getElementsByClassName("child");
    console.log(childr);
    console.log("---");
    for (let childClass of childr){  // listamos el array
        console.log(childClass);
        }

        

    const element = document.querySelector("div#grandparent>.parent>div.child#chil4");
    console.log(element);
    
    console.clear();

    const parents = document.getElementsByClassName("parent");
   const parent2 = parents[0];
   
  ;

   

   
    // ------- cambios en el DOM ------

    parent2.remove()

    // no hay manera

    console.log(parent2);
    
    


    
    
    



