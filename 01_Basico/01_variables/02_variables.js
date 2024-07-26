// usamos let para variables que puedan cambiar
let name = 'Deyvis';
console.log('--------------------------------------------------------');
console.log('primer nombre',name); // console.log se utiliza para la salida en la terminal
name='Juan'
console.log('nombre cambiado',name);

//usamos const para valores fijos que no deban cambiar 
const pi = 3.1416;
console.log('--------------------------------------------------------');
console.log("el numero pi es :",pi);
//no puede cambiar pi en este caso
//  pi= 2.32;
//  console.log('nuevo pi?',pi); // saldrá error 


// variables que son declaradas en una linea separada por coma 
// esto se puede porque JS entiende que let toma todas las variables en relación a las comas 
let nombre = 'Juan', trabajo = 'Programador', pais = 'Japon';
console.log('--------------------------------------------------------');
console.log("su nombre es: ", nombre ,", trabaja como", trabajo , "y vive en", pais);