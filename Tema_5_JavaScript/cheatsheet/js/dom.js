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



const parent1= document.getElementsByClassName("parent");
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

    changeBackground(grandparent.children[1].previousElementSibling ,"green");
    
    // ------ PROPIEDADES -------
   //grandparent.innerHTML = ""; // esto borraria todo lo que cuelga de grandparent
   // grandparent.innerHTML ="<h1>Tronco!!!\n</h1>"; // con esto añadimos codigo.

    /*const nuevoValor = 0;
    if (nuevoValor > 0 ){
        grandparent.innerHTML ="<h1>nuevoValor es mayor a: 0!!!</h1>";

    }else {
        grandparent.innerHTML ="<h1>nuevoValor vale:  0</h1>";
    }
*/
   console.log(children1[0].innerHTML);
   console.log(children1[0].textContent);// ignora etiqueta html
   console.log("Classlist: ", parent1[0].classList);
   console.log(parent1);

   document.querySelector("h1").id ="nuevoID";
   parent1[0].setAttribute("name","nombre-del-parent-1");

   //create / Remove Elements

   let myDiv =document.createElement("div");
   myDiv.id = "new-div";
   myDiv.classList.add("child");
   myDiv.textContent= "child 2.5";
   parent1[0].appendChild(myDiv);// esto le dice donde colocar el nuevo div

   myDiv2 = myDiv.cloneNode(true);// creamos un nuevo nodo a partir del original
   myDiv2.textContent= "child 5";

   parent1[1].appendChild(myDiv2);

   myDiv.remove();

   let myDiv3 =myDiv.cloneNode();
   parent1[1].before(myDiv3); // lo pone al principio de parent[1]
   myDiv3.textContent= "child nuevo";
   parent1[1].after(myDiv.cloneNode()); // con esto , lo pone al final

// crea una funcion que devuelva un nodo nuevo con etiqueta ID

function crearNode(etiqueta, identificador) {
    let myNodo =document.createElement(etiqueta);
   myNodo.id = identificador;
       
    return myNodo;
            
}
let newDiv = crearNode("div","identificador1");
let table = crearNode("table","identificador2");

parent1[0].appendChild(newDiv);
parent1[1].appendChild(table);

parent1[0].before(newDiv);

// otro ejemplo de funcion con un href

function crearNode(etiqueta1, identificador4) {
    let myNode =document.createElement(etiqueta1);
   myNode.id = identificador4;
   
    
    return myNode;
    
    
    
}
let newDiv1 = crearNode("div","identificador3");
let link = crearNode("a","mainLink");

link.textContent ="Texto de Enlace";
link.setAttribute("href", "https://google.com");

document.body.appendChild(link);// esto lo anexa a donde yo quiera



// **************** EVENTOS ********************







   






    




   
    

   

    

    
    
    


    
    
    



