// let a = 5;
// let b = 6;

// let adicao = a + b;
// console.log(adicao);

// let subtracao = a - b;
// console.log(subtracao);

// let multiplicacao = a * b;
// console.log(multiplicacao);

// let divisao = a / b;
// console.log(divisao);

// console.log('Módulo: ' + (a % b));

// const num1 = 5;
// const num2 = 10;

//   if (num1 > num2){
//     console.log(num1 + " é o maior número.")
// }
//   if (num2 > num1){
//     console.log(num2 + " é o maior número.")
// }

// const num1 = 5;
// const num2 = 30;
// const num3 = 15;

//   if (num1 > num2 && num1 > num3){
//     console.log(num1 + " é o maior número.");
// }
//   else if (num2 > num1 && num2 > num3){
//     console.log(num2 + " é o maior número.");
// } else {
//     console.log(num3 + " é o maior número.");
// }

// let valorDefinido = 0;

//   if (valorDefinido > 0){
//     console.log("Positive");
//   }
//   else if (valorDefinido < 0){
//     console.log("Negative")
//   } else {
//     console.log("Zero");
//   }

// const a1 = 65;
// const a2 = 100;
// const a3 = 15;

// let triangulo = a1 + a2 + a3;

//   if (triangulo === 180){
//     console.log(true);
// } else if (a1 < 0 || a2 < 0 || a3 < 0){
//     console.log("Número inválido");
// } else {
//     console.log(false);
// }

// const a1 = 65;
// const a2 = 100;
// const a3 = 15;

// let triangulo = a1 + a2 + a3;
// let angulosPositivos = a1 > 0 && a2 > 0 && a3 > 0;

//   if (angulosPositivos){
//     if (triangulo === 180) {
//       console.log("Construiu uma pirâmide");
//     } else {
//       console.log("Ângulos incorretos");
//     }
// } else {
//     console.log("Erro: Número inválido");
// }

// let  peçaDeXadrez = "Cavalo";

//   switch (peçaDeXadrez.toLowerCase()) {
//     case "cavalo":
//       console.log("Mova qualquer número de casas desocupadas em linha reta");
//       break;
//     case "rei":
//       console.log("Mova uma casa para qualquer lado");
//       break;

//     default:
//       console.log("Erro: Essa peça não existe.");
//       break; 
//   }

// let nota = 100;

//   switch (true) {
//     case nota >= 90 && nota <= 100:
//       console.log("A");
//     break;

//     case nota >= 80:
//       console.log("B");
//     break;
    
//     case nota >= 70:
//       console.log("C");
//     break;

//     case nota >= 60:
//     console.log("D");
//     break;

//     case nota >= 50:
//       console.log("E");
//     break;

//     case nota < 50 && nota >= 0:
//       console.log("F" );
//     break;

//     default:
//       console.log("Erro: Nota inválida.");
//       break;
//   }

// let nota = 135;
// let notaInvalida = nota > 100 || nota < 0;

//   if (notaInvalida){
//     console.log("Erro:Nota inválida");
//   }
//   else if (nota >= 90 ) {
//     console.log("A")
//   }
//   else if (nota >= 80) {
//     console.log("B")
//   }
//   else if (nota >= 70) {
//     console.log("C")
//   }
//   else if (nota >= 60) {
//     console.log("D")
//   }
//   else if (nota >= 50) {
//     console.log("E")
//   }
//   else if (nota < 50) {
//     console.log("F")
//   } 


// const n1 = 5;
// const n2 = 7;
// const n3 = 8;

// let par = false;

//   if (n1 % 2 === 0 || n2 % 2 === 0 ||n3 % 2 === 0){
//     par = true;
//   }
//     console.log(par);
 
// const n1 = 2;
// const n2 = 7;
// const n3 = 8;

// let impar = false;

//   if (n1 % 2 !== 0 || n2 % 2 !== 0 ||n3 % 2 !== 0){
//     impar = true;
//   }
//     console.log(impar);

// const valorCusto = 1;
// const valorVenda = 3;

// let impostoSobreOCusto = (20*valorCusto) / (100);

// let valorCustoTotal = valorCusto + impostoSobreOCusto

// let lucro = valorVenda - valorCustoTotal;

// let quantidadeProdutos = 1000;

//   if (valorCusto < 0 || valorVenda < 0){
//     console.log("Erro:Valor menor que zero.")
//   } else{
//       lucroTotal = quantidadeProdutos * lucro
//       console.log(lucroTotal);
//   }

// const valorCusto = 2;
// const valorVenda = 3;

// let quantidadeProdutos = 1000;

//   if (valorCusto > 0 && valorVenda > 0){
//     let valorCustoTotal = valorCusto + (valorCusto*20) / 100;
//     let lucro = (valorVenda - valorCustoTotal) * quantidadeProdutos;
//       console.log(lucro);
//   } else{
//     console.log("Erro:Valor menor que zero.");
//   }


// const costOfProduct = 1;
// const saleValue = 3;

// if (costOfProduct >= 0 && saleValue >= 0) {
//   const totalCostOfProduct = costOfProduct * 1.2;
//   const totalProfit = (saleValue - totalCostOfProduct) * 1000;
//   console.log(totalProfit);
// } else {
//   console.log("Error, os valores não podem ser negativos");
// };


// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 3000.00;
let salarioBase;
let IR;
let INSS;

  if (salarioBruto <= 1556.94){
    salarioBase = salarioBruto - (salarioBruto * 0.08);
}
  if (salarioBruto <= 2594.92){
    salarioBase = salarioBruto - (salarioBruto * 0.09);
  }
  if (salarioBruto <= 5189.82){
    salarioBase = salarioBruto - (salarioBruto * 0.11);
  }
  if (salarioBruto > 5189.82){
    salarioBase = salarioBruto - 570.88;
  }


  if (salarioBase <= 1903.98){
    IR = 0;
  }
  if (salarioBase <= 2826.65){
    IR = (salarioBase * 0.075) - 142.80;
  }
  if (salarioBase <= 3751.05){
    IR = (salarioBase * 0.15) - 354.80;
  }
  if (salarioBase <= 4664.68){
    IR = (salarioBase * 0.225) - 636.13;
  } else {
    IR = (salarioBase *0.275) - 869,36;
  }

    console.log(salarioBase - IR)