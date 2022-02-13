// let fatorial = 1;

// for (let index = 10; index > 0; index -= 1) {
//     fatorial = fatorial * index;
//     console.log(fatorial); 
// }

// let word = 'tryber';
// let palavra = '';
// for (let index = 5; index >= 0; index -= 1) {
//     palavra = palavra + word[index]
// }
// console.log(palavra);


// let word = 'tryber';
// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//   reverseWord = reverseWord + word[word.length -1 - index]
// }

// console.log(reverseWord);


// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = [0];
// let menorPalavra = [0];

// for (let index = 0; index < array.length; index += 1) {
//     if(array[index] > maiorPalavra){
//         maiorPalavra = array[index]
//     }
// }

// console.log(maiorPalavra);


// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = [0];
// let menorPalavra = [0];

// for (let index = 0; index < array.length; index += 1) {
//     if(array[index].length > maiorPalavra.length){
//         maiorPalavra = array[index]
//     }
// }

// console.log(maiorPalavra);


// carros = ["Civic", "Elantra", "Focus", "Jetta", "Cruze", "Corolla"];
// carrosLinha = '';
// for (var pos = 0; pos < carros.length; pos++) {
//   carrosLinha = carrosLinha + " " + carros[pos];
// }
// console.log(carrosLinha)


let maiorNumero = 0;

for (let numero = 0; numero <= 50; numero += 1) {
  let isPrime = true;
  for (let divisor = 2; divisor < numero; divisor += 1) {
    if (numero % divisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    maiorNumero = numero;
  }
}

console.log(maiorNumero);