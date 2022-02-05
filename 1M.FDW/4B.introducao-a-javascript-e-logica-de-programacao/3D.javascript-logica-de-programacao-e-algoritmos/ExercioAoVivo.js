// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

// let idadeCarolzita = 15;
// let idadeMurilo = 18;
// let idadeBaêta = 23;

// let idadeDosTres = [idadeCarolzita, idadeMurilo, idadeBaêta]

// let menorIdade = []

// for (let i = 0; i < idadeDosTres.length; i +=1){

// }

let Carolzita = 50;
let Murilo = 16;
let Baêta = 24;

// let idades = [50, 16, 24];
let nomes = [Carolzita, Murilo, Baêta];
let menor = 1000;
let indice;


for (let index = 0; index < idades.length; index +=1) {
    if (idades[index] < menor) {
        menor = idades[index]
        indice = index;
    }
}

console.log('Pessoa mais nova '+nomes[indice])