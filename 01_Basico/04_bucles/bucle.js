// Un bluque no es mas que un estructura que se repite 


// ESTRUCTURA FOR()

// contador del 0 al 100
// la sintaxis de este ejemplo sería for(definir el iterador, hasta donde se debe iterar, decirle que sume uno por uno (i++))
// puedes remplazar el i++ por i=i+1; que es lo mismo para que el i aumente en 1
// simplemente le estas diciendo que i aumente en 1, si quieres que aumente en 10 se usa i=i+10;
for(let i = 0; i <= 100; i++){
    console.log(i);  // imprime los valores del 0 al 100
}
// En el bucle anterior, la variable 'i' se incrementa en 1 cada vez que se ejecuta.


console.log();
console.log('--------------------------------------------------------'); 
console.log();


// ESTRUCTURA DO-WHILE()
// contador del 0 al 5
// la sintaxis de este ejemplo sería while(condición){comando a ejecutar}

let contador = 0;

do {
    // Se ejecuta antes de la condición
    // se ejecuta cuando sea true = verdad
    console.log(`El valor de i es: ${contador}`);  /*NOTA IMPORTANTE XDDDD */ 
                                            /* sinceramente no me he visto usar esta estructura y a otras personas tampoco XD*/
    contador++;
} while (contador <= 5); //se evalua si el contador es menor a 5, si este es verdadero (true), vuelve al bucle
                        // si contador llega a punto de ser 6, osea ser mayor, este termina el bucle y ya no entra al bloque true


console.log();
console.log('--------------------------------------------------------'); 
console.log();

//ESTRUCTURA WHILE()

// contador del 0 al 29
let i = 0;
while(i < 30){
    console.log(i);  // imprime los valores del 0 al 99
    i++;  // incremento de la variable 'i' en cada iteración (esto se incrementa en 1 cada vez que pasa por aquí)
}
