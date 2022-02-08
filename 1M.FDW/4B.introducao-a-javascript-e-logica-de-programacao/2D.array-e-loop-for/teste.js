// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// let listaDeArrays = [patientId, isEnrolled, patientInfo, patientEmail]
// console.log("os tipos são:")
// for (let tipo of listaDeArrays){
//         console.log(typeof tipo)
// }

// console.log(typeof patientAge)


// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf("Portfólio");

// console.log(indexOfPortfolio);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu.push("Contato")

// console.log(menu);

// let array = [7, 9, 10, 20, 30, 40, 50, 60, 70];
// let numero = 9;
// // for (let index = 0; index < array.length; index +=1) {
// //       const tabuada = numero * array[index];
//   for (let index = 1; index <= 9; index +=1){
//     const tabuada = numero * index;
//     console.log("");
//     console.log(tabuada);
  // }

  // let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

  // for (i = 0; i < groceryList.length; i += 1){
  //     console.log(groceryList[i])
  // }

//   let names = [10, 'Maria', 'Antônio', 'Margarida'];
// for (let nomes of names){
//     nomes += 1;
//     console.log(nomes)
//       }

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let higherNumber = numbers[2];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);
  



