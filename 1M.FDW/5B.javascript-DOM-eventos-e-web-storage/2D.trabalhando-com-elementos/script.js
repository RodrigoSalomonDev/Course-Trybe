// let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// // let pai = elementoOndeVoceEsta.parentElement
// //     pai.style.color = 'red';

// let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild
//     primeiroFilhoDoFilho.innerText = 'Esse é o danado do primeiro filho do filho!'

// let primeiroFilho = pai.firstElementChild

//     primeiroFilho.innerHTML = '<a href="https://google.com.br">Google</a>';

// let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling

// let textoAtencao = elementoOndeVoceEsta.nextSibling

// let terceiroFilho = elementoOndeVoceEsta.nextElementSibling

// // let terceiroFilho2 = pai.children[2]

// let terceiroFilho2 = pai.lastElementChild.previousElementSibling


// Exercicio 2 - createElement e appendChild

let pai = document.getElementById('pai');
let irmaoDoElemento = document.createElement('section');
    irmaoDoElemento.id = 'irmaoDoElemento'
    pai.appendChild(irmaoDoElemento)

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let filhoDoElemento = document.createElement('section');
    filhoDoElemento.id = 'filhoDoElemento'
    elementoOndeVoceEsta.appendChild(filhoDoElemento);
    

    let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
    let filhoDoPrimeiroFilho = document.createElement('section');
    filhoDoPrimeiroFilho.id = 'filhoDoPrimeiroFilho'
    elementoOndeVoceEsta.appendChild(filhoDoPrimeiroFilho);

  let filhinho = document.createElement('section');
	filhinho.id = 'filhinho'
	filhoDoPrimeiroFilho.appendChild(filhinho)

// Exercicio 3 - removeChild()

// for (let i = pai.childNodes.length - 1; i >= 0; i -= 1){
// let	apagaFilhos = pai.childNodes[i];
// 	if (apagaFilhos.id !== 'elementoOndeVoceEsta') {
// 		apagaFilhos.remove()
// 	}
// }


