// Una función es un pedaso de bloque que ejecuta un codigo cualquiera
// esta compuesto por la palabra clave funtion y el nombre de la funcion "getName"

function getName(){
    //función que ejecuta y no retorna nada
    console.log("Deyvi");  // Imprime el nombre en consola
}

//siempre debes llamar a la función para que esta se ejecute
getName();


// FUNCIÓN CON PARAMETRO Y RETORNO
//pasar un numero a la función y que lo multiplique
function Multiplicar(number){
    return number*10; // función que retorna la multiplicación
}

const number = Multiplicar(8);

console.log(number);

// FUCIÓN CON DOS PARAMETROS

function Sumar(num1, num2){
    return num1 + num2; // función que retorna la suma
}

console.log(Sumar(5, 10));