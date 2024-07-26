// Objeto simple 
const User= {
    name: 'Dey',
    email: 'dey@example.com',
    age: 12,
    country: 'Japan'
}

console.log(`Nombre: ${User.name}`);
console.log(`Correo electrónico: ${User.email}`);
console.log(`Edad: ${User.age}`);
console.log(`País: ${User.country}`);


// Array de objetos

const Users = [
    {
        id:1,
        name: 'Dey',
        email: 'dey@example.com',
        age: 12,
        country: 'Japan',
        address:{
            street:'123 Main St',
            city:'Osaka',
            state:'Osaka'
        }
    },
    {
        id:2,
        name: 'John',
        email: 'john@example.com',
        age: 20,
        country: 'USA',
        address:{
            street:'456 Elm St',
            city:'New York',
            state:'New York'
        }
    },
    {
        id:3,
        name: 'Sarah',
        email:'sarah@example.com',
        age: 25,
        country: 'Canada',
        address:{
            street:'789 Oak St',
            city:'Vancouver',
            state:'British Columbia'
        }
    },
    {
        id:4,
        name: 'Michael',
        email:'michael@example.com',
        age: 30,
        country: 'France',
        address:{
            street:'101 Maple St',
            city:'Paris',
            state:'Paris'
        }
    }
]

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

//Mediante map()

const data = Users.map((user) => {
    return {
        id: user.id,
        name:user.name,
        correo:user.email,
        age:user.age,
        country:user.country,
        address:{
            street:user.address.street,
            city:user.address.city,
            estado:user.address.state
        }
    }
})

console.log(data);


console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

//mediante ForEach()

const users = Users.forEach((user)=> console.log(user));
console.log(user);