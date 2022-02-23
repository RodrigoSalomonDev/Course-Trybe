
const paragraph = document.getElementById("paragraph");
paragraph.style.color = "#3DB77A";
paragraph.innerText = "O melhor filme de todos os tempos!";

let title = document.getElementById("page-title")
title.innerText = "Os Goonies";
title.style.color = "yellow";

let subtitle = document.getElementById("subtitle")
subtitle.innerText = "Sinopse";
subtitle.style.color = "yellow";

let secondparagraph = document.getElementById("second-paragraph")
secondparagraph.style.color = "#3DB77A";
secondparagraph.innerText = "Um grupo de jovens encontram um misterioso mapa do tesouro e começam a seguir as pistas, entrando em um fabuloso mundo subterrâneo de passagens secretas, perigosas armadilhas e um antigo navio pirata que esconde moedas de ouro."

// let classeParagrafos = document.getElementsByClassName("classeParagrafo");
// function mudaCorEEstilo(cor, estilo){
// for (const i in classeParagrafos) {
//     classeParagrafos[i].style.fontStyle = estilo;
//     classeParagrafos[i].style.color = cor;
//   }
// }
// mudaCorEEstilo('green', 'italic')

let cuidadoMudaACor = document.getElementsByTagName('h4');
cuidadoMudaACor[0].style.color = 'red';
