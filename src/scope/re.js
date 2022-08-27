var firstName;      //Declaramos, valor Undefined (indefinido)
firstName = 'Carlos';//Asignacion
console.log(firstName);          //Mostramos

var lastName = 'David'   //Declaramos y asignamos
lastName = 'Ana'            //Reasignacion
console.log(lastName);

var secondName = 'David'
var secondName = 'Ana'      //asignamos y redeclaramos
console.log(secondName)         //mostramos

//Let
let fruit = 'Apple'             //declara y asignar
fruit = 'Kiwi'                  //reasignar
console.log(fruit);

// let fruit = 'Bannana'         //Con let no se puede redeclarar, solo reasignar
console.log(fruit);

const animal = 'dog';           //declaramos y asignamos
// animal = 'cat'                  //no podemos reasignar ni redeclarar
console.log(animal);

const vehicles = [];
vehicles.push('auto')           //no estamos reassignando ni redeclarando, usamos metodos de arreglos
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
