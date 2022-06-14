// apartado 1 -- Gerneracion de array

function valorRandom(start,end){
    // creamos esta funcion para poder reciclarla cuando queramos

    return Math.floor(Math.random() * (end-start) + start )

}

let employees=[];
for (let i= 1; i <= 100; i++) {
    const newEmployee={
        cargo: `Empleado ${i}`,
        rendimiento : Number(Math.random().toFixed(2)), // lo limita a 2 decimales
        salario: valorRandom(1250,4000)
    };
    employees.push(newEmployee);
}
console.log("1. Generacion de array",employees);


