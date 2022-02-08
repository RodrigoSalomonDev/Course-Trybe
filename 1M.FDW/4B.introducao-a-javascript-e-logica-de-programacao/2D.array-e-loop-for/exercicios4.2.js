// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 0; i < numbers.length; i+= 1) {
//     console.log(numbers[i])
// }
// let soma = 0;
// for (let i = 0; i < numbers.length; i+= 1) {
//     // soma = soma + numbers[i]
//     soma += numbers[i]
// }
//     console.log(soma)

// let soma = 0;
// for (let i = 0; i < numbers.length; i+= 1) {
//     // soma = soma + numbers[i]
//     soma += numbers[i]
// }
//     mediaAritimetica = soma / numbers.length;
//     console.log(mediaAritimetica)
//     console.log(numbers.length);

// Exercicio 4
// let soma = 0;
// for (let i = 0; i < numbers.length; i+= 1) {
//     // soma = soma + numbers[i]
//     soma += numbers[i]
// }
//     mediaAritimetica = soma / numbers.length;

//     if (mediaAritimetica > 20){
//         console.log("Valor maior que 20.");
//     } else {
//         console.log("Valor menor ou igual a 20.");
//     }
    
// Exercicio 5
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let numeroMaior = numbers[0];

// for (let i = 0; i < numbers.length; i+= 1) {
//        if (numeroMaior < numbers[i]){
//         numeroMaior = numbers[i]
//     }
//     console.log(numeroMaior)
//    }
//     console.log(numeroMaior)


// Exercicio 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numeroImpar = 0;

    for (let i = 0; i < numbers.length; i+= 1) {
         if (numbers[i] % 2 !== 0){
            numeroImpar += 1;
        } 
    }  
    if (numeroImpar === 0){
        console.log('Nenhum valor ímpar encontrado');
    } else {
        console.log(numeroImpar);
    }  
    



