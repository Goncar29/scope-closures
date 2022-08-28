/* Hoisting es un término para describir que las 
declaraciones de variables y funciones son 
desplazadas a la parte superior del scope más
 cercano, scope global o de función. Esto sucede 
 solamente con las declaraciones y no con las asignaciones.

El código permanece igual, solo es una interpretación 
del motor de JavaScript. En el caso de las variables 
solamente sucede cuando son declaradas con var.
 */

console.log(nombre) // undefined
var nombre = "Andres" 

// Hoisting
var nombre = undefined
console.log(nombre)
nombre = "Andres"



nameOfDog();

function nameOfDog(){
    console.log(`El mejor perro es ${namePerro}`);
}

// Pero si agregamos o definimos una varible si se ejecuta el codigo
var namePerro;

// "El mejor perro es _undefined_"