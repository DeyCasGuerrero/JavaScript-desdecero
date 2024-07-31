// Escribe una programa que envie datos por fumción y este se evalue si están correctamente

const username ='papuh@gmail.com', password ='papuh123456';

// Esta función recibe dos parámetros: user y password
function evaluarData(user, password) {
    // en la condicion tenemos el siguiente operador "&&", este se traduce como el y 
    // en otras palabras las dos condiciones deben de ser igual a true
    // user es igual a user name y password debe de ser igual password
    if(user === username && password === password){
        console.log('Correcto, el usario y contraseña es correcto');
    }else{
        console.log('Error: el usario o contraseña es incorrecta');
    }
}

evaluarData('papuh@gmail.com', 'papuh123456');

console.log('----------------------------------------------------------------')


// Escribe un programa que ingrese sus datos (nombre, sueldo, cargo profesional y edad) y que evalue si tiene un descuento en función a su edad
// si es mayor a 30 años se le descuenta 20% del sueldo totaly si es mayor a 50 se le descuenta 40% del sueldo total, caso contrario no se le descuenta nada

//NOTA PUEDES HACER LO MISMO CON EL CARGO PROFESIONAL Y DESCONTAR SEGÚN ESTE

function evaluarDescuento(edad, sueldo){
    // se evalua la edad pasada como parametro
    if(edad >= 30){
        // se usa 0.20 que es lo mismo que decir 20% = 20/100 (no se puede colocar 20% a secas porque js y creo que ningun lenguaje entiende el porcentaje)
        return sueldo-(sueldo*0.20);
    }else if (edad >= 50 && edad <= 100){
        return sueldo-(sueldo*0.40);
    } else {
        return sueldo;
    } 
}

const nombre = 'Papuh', sueldo = 5000, cargoProfesional = 'Desarrollador', edad = 30;

const descuento = evaluarDescuento(edad, sueldo);

console.log(`El sueldo de ${nombre} después del descuento según su edad y cargo es: $${descuento}`);

console.log('----------------------------------------------------------------')

// Escribe un programa que ingrese un número y muestre si es par o impar

// definimos la funcion para usarla despues 
function evaluarParImpar(){
    const numero = 43;
    // se evalua si el resto de la division del numero entre 2 es 0
    // si es 0, el numero es par, si no es 0, es impar
    const resultado = numero % 2 === 0;
    if(resultado === 0){
        console.log(`${numero} es un número par`);
    } else {
        console.log(`${numero} es un número impar`);
    }
}

// no envio ningun parametro porque ya lo defino dentro de la función
// en pocas palabras solo estoy ejecutando la función
evaluarParImpar();


