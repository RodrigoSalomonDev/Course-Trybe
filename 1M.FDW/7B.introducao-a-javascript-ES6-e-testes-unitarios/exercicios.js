//Exercícios parte 1

// const testingScope = (escopo) => (escopo === true) ? console.log(`Não devo ser utilizada fora do meu escopo (if), ótimo, fui utilizada no escopo !`) : console.log('Não devo ser utilizada fora meu escopo (else)');
    
   
//     // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
 

//   testingScope(false);

// const testingScope = escopo => { 
//     if (escopo === true) { 
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const compararNumeros = (a, b) => a - b;//função declarada

// oddsAndEvens.sort(compararNumeros)

// // oddsAndEvens.sort((a, b) => a - b); função oculta, para ser utilizada apenas dentro do sort.

// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = () => {
//   oddsAndEvens[0] = 2;
//   oddsAndEvens[1] = 3;
//   oddsAndEvens[2] = 4;
//   oddsAndEvens[3] = 7;
//   oddsAndEvens[4] = 10;
//   oddsAndEvens[5] = 13;

//   return oddsAndEvens;
// }

// const sortedArray = sortOddsAndEvens();
// console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

// Exercícios parte 2

const fatorial = (numero) => {
    let resultado = 1;
    for (let i = 1; i <= numero; i += 1) {
        resultado = resultado * i;
    }
    return resultado
} 
console.log(fatorial(4));
