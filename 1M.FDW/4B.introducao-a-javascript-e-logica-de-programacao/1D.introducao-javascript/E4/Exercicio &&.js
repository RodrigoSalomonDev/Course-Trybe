// const comida = 'pão com manteiga';
// const bebida = 'cafézinho';

// if (bebida === 'cafézinho' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');

// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

// const conditionOne = true;
// const conditionTwo = false;

// console.log(conditionOne && conditionTwo);

// const cenouras = true;
// const leite = true;
// const arroz = true;
// const feijao = true;

// const listaDeCompras = cenouras && leite && arroz && feijao;

// console.log(listaDeCompras)

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

const currentHour = 1;
let message = "";

    if (currentHour >= 22){
        console.log(message = "Não deveríamos comer nada, é hora de dormir!")
}
    else if (currentHour >= 18 && currentHour < 22){
        console.log(message = "Rango da noite, vamos jantar :D")
}
    else if (currentHour >= 14 && currentHour < 18){
        console.log(message = "Vamos fazer um bolo pro café da tarde?")
    }
    else if (currentHour >= 11 && currentHour < 14){
        console.log(message = "Hora do almoço!!!")
        }
    else if (currentHour >= 4 && currentHour < 11){
        console.log(message = "Hmmm, cheiro de café recém passado")
    }

console.log(message);
