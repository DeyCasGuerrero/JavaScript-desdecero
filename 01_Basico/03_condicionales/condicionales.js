// condicionales sirven para llevar a cabo desiciones, pues es necesario 
//ejecutar acciones dependiento del contexto de la situación 


const rol = 'admin'


if(rol=='admin'){
    console.log('Eres administrador')
}else{
    console.log('No eres administrador')
}


function getMessage(rol){
    if(rol=='admin'){
        return 'Bienvenido, tú eres administrador'
    }else{
        return 'Error al inicio ded sessión, tú no eres administrador'
    }
}
const message = getMessage('user')

console.log(message);


