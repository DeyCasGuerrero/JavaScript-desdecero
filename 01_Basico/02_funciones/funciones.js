// Una función es un pedaso de bloque que ejecuta un codigo cualquiera
// esta compuesto por la palabra clave funtion y el nombre de la funcion "getName"

function getName(){
    //función que ejecuta y no retorna nada
    console.log("Deyvi");  // Imprime el nombre en consola
}

//siempre debes llamar a la función para que esta se ejecute
getName();


// FUNCIÓN CON PARAMETRO Y RETORNO
//pasar un numero a la función y que lo multiplique por 10
function multiplicar(number){
    return number*10; // función que retorna la multiplicación
}

//el number recibe lo que retorna la funcion Multiplicar()
const number = multiplicar(8);

console.log("la multiplicación por 10 es :",number);


// FUCIÓN CON DOS PARAMETROS
function sumar(num1, num2){
    return num1 + num2; // función que retorna la suma
}

// puedes enviar directamente desde la funcion los parametos y dentro de la consola
console.log(sumar(5, 10));


// FUCIÓN CON TRES PARAMETROS
function SumarTresParametros(num1, num2, num3){
    return num1 + num2 + num3; // función que retorna la suma de tres numeros
}

// en este caso está separado y ordenado 
//recibe lo que retorna de la función con un const sumatoria
const sumatoria = SumarTresParametros(4,3,1);

// llamamos el const sumatoria detro del console.log
console.log("La sumatoria de 3 numeros es :", sumatoria);





