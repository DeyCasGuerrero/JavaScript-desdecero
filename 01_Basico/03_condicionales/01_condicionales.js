// condicionales sirven para llevar a cabo desiciones, pues es necesario 
//ejecutar acciones dependiento del contexto de la situación 

//asignación de rol
const rol = 'admin'

// ESTRUCTURA CONDICIONAL
// simplemente esta condición se ejecuta cuando sea verdad

if(rol=='admin'){
    console.log('Eres administrador')
}

console.log('----------------------------------------------------------------')
// ESTRUCTURA CONDICIONAL ELSE
// en este caso está evaluando cuando es verdad o cuando es falso

if(rol=='user'){
    // cuando sea verdad (true)
    console.log('Eres administrador')
} else{
    // cuando sea falso (false)
    console.log('No eres administrador')
}

console.log('----------------------------------------------------------------')
// ESTRUCTURA CONDICIONAL ANIDADA
// puedes anidar condicionales cuantas tu quieras 
if(rol=='admin'){
    // se ejecutará cuando sea verdad (true)
    console.log('Eres administrador')
    // esta condicion tambien se ejecutará porque entraste al bloque true y esta condición es true
    //puede cambiar el true por false y verás que no se ejecutará porque estas en el bloque true como ya mencioné
    if(true){
        console.log('Estás dentro de la condición admin')
    }
} else{
    // se ejecutará cuando sea falso (false)
    console.log('No eres administrador')
}

console.log('----------------------------------------------------------------')
// EJEMPLO PRACTICO CON UNA FUNCIÓN PARA EVALUAR

function getMessage(parametro){
    if(parametro=='admin'){
        // ejecutará este bloque cuando paramtro sea igual a admin
        return 'Bienvenido, tú eres administrador'
    }else{
        // ejecuta este bloque porque todo diferente a admin es falso
        return 'Error al inicio ded sessión, tú no eres administrador'
    }
}

// Llama a la función, envia el paramtro y almacena el resultado en la variable message
const message = getMessage('user')
console.log(message);


