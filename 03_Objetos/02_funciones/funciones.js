// Array de objetos
const producto =[
    {
        id: 1,
        nombre: 'Fresas',
        precio: 100
    },
    {
        id: 2,
        nombre: 'Pollo',
        precio: 200
    },
    {
        id: 3,
        nombre: 'Papaya',
        precio: 150
    }, 
    {
        id: 4,
        nombre: 'Manzana',
        precio: 50
    },
    { id: 5, nombre: 'Pollo con menestra', precio: 150 },
    { id: 6, nombre: 'Pollo con arroz', precio: 100 },
    { id: 7, nombre: 'Pollo con manteca', precio: 150 },
    { id: 8, nombre: 'Pollo con arroz y manteca', precio: 120 },
    { id: 9, nombre: 'Pollo con menestra y manteca', precio:300}
]

function buscarProducto(name){
    const resultado = producto.find(dato => dato.nombre === name); // find retorna el primer elemento que cumpla con la codicion
    return resultado ? `Este es el producto encontrado: ${resultado.nombre} y su precio ${resultado.precio}`:'No se encontro nada'
}

function productosConPrecioMayorA() {
    const resultado = producto.filter(dato => dato.precio >= 150); // filter retorna un array de objetos, en este caso, que cumpla con la condicion
    return resultado;
}

function filtrarPorNombre(name){

    const resultado = producto.filter(dato => dato.nombre.includes(name)); // Un claro ejemplo que los objetos que cumplen con la condicion
    return resultado?  "se encontro lo siguiente " + resultado.map((dato)=>{
        return `${dato.id}) Producto: ${dato.nombre} - precio ${dato.precio}`
    }):'No se encontro nada'
}

console.log(productosConPrecioMayorA());
console.log(filtrarPorNombre('Pollo'));

console.log(buscarProducto('Fresas')); //Devuelve el producto es el siguiente : { id: 1, nombre: 'Fresas', precio}

// CLONAR EL OBJETO Y AÑADIR UN OBJETO

console.log("----------------------------------------------------------------")

const autos =[
    {
        id: 1,
        marca: 'Chevrolet',
        modelo: 'Spark',
        año: 2020
    },
    {
        id: 2,
        marca: 'Ford',
        modelo: 'Mustang',
        año: 2015
    }
]

const autoNuevo = {
    id: 3,
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2018
}


const masAutos=[
    {
        id: 4,
        marca: 'Honda',
        modelo: 'Civic',
        año: 2017
    },
    {
        id: 5,
        marca: 'Nissan',
        modelo: 'Leaf',
        año: 2019
    }
]


//[...autos, autoNuevo, ...masAutos]: El operador de propagación (...) 
//descompone masAutos en sus elementos individuales y los agrega al arreglo autoNuevos. Así, autoNuevos 
//contendrá todos los elementos de autos, autoNuevo y masAutos en un solo arreglo.

const autoNuevos = [...autos, autoNuevo, ...masAutos]

console.log("Objetos añadidos",autoNuevos); // Imprime los autos nuevos junto con los ya existentes

console.log("----------------------------------------------------------------")
console.log("añadir desde una función")

// ACEPTA VARIOS OBJETOS
function añadirObjeto(...objs) {
    const newObj = [...autoNuevos, ...objs];
    return newObj;
}

// SOLO ACEPTA UN SOLO OBJETO
// function añadirObjeto(obj) {
//     // Agrega el nuevo objeto al arreglo autos
//     const newObj = [...autoNuevos, obj];
//     return newObj;
// }

console.log(añadirObjeto({id: 20, marca: 'Tesla', modelo: 'Model S', 'año': 2015},
    {id: 20, marca: 'Ferrari', modelo: 'Idk', año: 2019}
));
