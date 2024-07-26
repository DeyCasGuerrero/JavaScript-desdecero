// OPERADORES TERNARIOS

const rol = 'Admin';

// definimos la variable (let mensaje) esta para que nos de el resultado de la condición

// luego definimos la condición (rol === 'Admin')

// si la condición es true, la variable mensaje se le asigne a la primera (expr1) 
// si la condición es false, la variable mensaje se le asigne a la segunda (expr2)

//puedes cambiar el rol a esto (rol === 'User') y verlo por tu mismo

// sintaxis condición ? expr1 : expr2
let mensaje = (rol === 'Admin') ? 'Eres administrador' : 'No eres administrador'; 
console.log(mensaje);

// sintaxis condición ? expr1 : expr2
const isAuthenticated=false;

// aqui no igualo la condición (isAuthenticated===false) debido a que isAuthenticated por si solo es false y es entonces que entrara a la expr2 
const boolean = isAuthenticated? 'Está authenticado':'No está authenticado';
console.log(boolean);