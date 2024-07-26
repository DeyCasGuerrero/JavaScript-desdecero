// Declaración de un array vacío
// (Nombre del Array) = [] 
// este simbolo '[]' convierte a la variable en un array
// entienda que simplemente un array es para alamacenar datos

const arrayVacio = []; // Array vacio, no tiene elementos

// Declaración de un array con elementos
let arrayNumeros = [1, 2, 3, 4, 5]; // array con number
let arrayCadenas = ['uno', 'dos', 'tres']; // array con strings


// puedes acceder a los datos de la siguiente manera
// recuerda que una array siempre empieza por el index[0]

// en este caso el array tiene los siguientes index [idx[0], idx[1], idx[2], idx[3], idx[4]]
const numeros = [10, 20, 30, 40, 50];
console.log(numeros[0]); // Output: 10 - este es el primer elemento
console.log(numeros[3]); // Output: 40 - este es el cuarto elemento

console.log('------------------------------------------------'); 

// modificar un elemento del array mediante el index[n]

let frutas = ['manzana', 'banana', 'cereza'];
frutas[1] = 'naranja';
console.log("array modificado",frutas); // Output: ['manzana', 'naranja', 'cereza']

console.log('------------------------------------------------'); 

//METODOS DE UN ARRAY

//AÑADIR ELEMENTOS EN UN ARRAY 
// los metodos de un array ya esta definidos y listos para que simplemente los llames

// los metodos basicos son "push" y "unshift"
let colores = ['rojo', 'verde'];
colores.push('azul'); // Añade al final
colores.unshift('amarillo'); // Añade al inicio
console.log(colores); // Output: ['amarillo', 'rojo', 'verde', 'azul']

console.log('++++++++++++++++++++++++++++++++++++++++++++++++') 

// ELIMINAR ELEMENTOS DE UN ARRAY
// los metodos basicos son "pop" y "shift"
let animales = ['perro', 'gato', 'ratón'];

animales.pop(); // Elimina el último
animales.shift(); // Elimina el primero

console.log(animales); // Output: ['gato']
