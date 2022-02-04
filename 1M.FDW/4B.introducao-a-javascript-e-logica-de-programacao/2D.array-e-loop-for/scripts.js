let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let numeros of numbers){
//     console.log(numeros)
// }

// false = 0
// true = 1

let somaNumeros = 0;
for (i =0; i < numbers.length; i += 1){
    // somaNumeros = somaNumeros + numbers[i]
    somaNumeros += numbers[i]
    console.log(somaNumeros)
}
console.log(somaNumeros)

