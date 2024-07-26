
// TIPOS EN JS 
// veremos lo basico de los tipos que podrás usar en js

let myNumber = 10; // numerico o number

// ESTOS SON LOS TRES TIPOS DE COMILLAS QUE DEFINEN UN STRING
let myString = 'Hello World!'; // string o cadena de caracteres
//COMILLAS DOBLES
const lastname="";// string o cadena de caracteres 
//COMILLAS SIMPLES
const name=''; // string o cadena de caracteres 
//PLANTILLAS DE CADENA
const country=``;// string o cadena de caracteres 



let myBoolean = true; // booleano

const myNull = null; // objeto null

const myUndefined = undefined; // valor indefinido



// en js existe la propiedad typeof para decirnos el tipo de variable que es

console.log("El tipo de la variable 'myNumber' es:",typeof myNumber); // imprime 'number'

console.log('El tipo de la variable name es: ',typeof name); // imprime'string'

console.log("El tipo de la variable myBoolean es",typeof myBoolean); // imprime 'boolean'

console.log("El tipo de la variable myNull es",typeof myNull); // imprime 'object' (null es un objeto en js)

console.log("El tipo de la variable myUndefined es",typeof myUndefined); // imprime 'undefined'



// Los objetos en js son una colección de clave-valor
// name es la clave
// 'Juan' es el valor de la clave

const myObjectUser = {
    name: 'Juan', // clave : valor -> el valor es string
    age: 30, // clave : valor -> el valor number
};

console.log("el tipo es:",typeof myObjectUser); // imprime 'object'

console.log("el nombre es:",myObjectUser.name); // imprime 'Juan'

console.log("la edad es: ",myObjectUser.age); // imprime 30


// Los arrays en js son una colección de valores indexados
// Sería algo así la sintaxis 'myArray[indice[0],indece[1], indece[2], ... indice[n], indices[n+1]]'
// indice tambien se le conoce como index

// En este caso tenemos que Papuh está en el indice[0] (siempre el array empieza desde el index[0])
// Y 30 sería en indice[1]

let myArray = ['Papuh', 30];

console.log("el tipos del array es :",typeof myArray); // imprime 'object'

console.log("el primer valor es ",myArray[0]); // imprime 'Papuh'

console.log("el segundo valor es",myArray[1]); // imprime 30




