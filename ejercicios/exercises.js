//Escribe un programa que imprima los números del 1 al 100.
//impreme los numeros multiplos de 3 ym multiplos de 5 
//tambien imprime los multiplos de 3 y 5 a la vez
function bucle(){
    for(let i =1 ;i <=100 ; i++){
        if(i % 5 == 0){
            console.log("El número " + i + " es divisible por 5");
        }
        else if(i % 3 == 0){
            console.log("El número " + i + " es divisible por 3");
        }
        else if (i % 3 == 0 && i % 5 == 0 ){
            console.log("El número " + i + " es divisible por 3 y 5");
        }
    }
}

bucle();


//Escribe una función que tome una cadena y devuelva true si es un palíndromo
//(se lee igual al derecho y al revés), y false en caso contrario.


//split(separador, limite)

function Polidromo(word){
    const reversedWords = word.toLowerCase().split('').reverse();
    if(reversedWords.join('') === word){
        return `La palabra ${word} es polidormo`
    }else{
        return `La palabra ${word} no es polidromo`
    }
}


const res = Polidromo('313')

console.log(res);