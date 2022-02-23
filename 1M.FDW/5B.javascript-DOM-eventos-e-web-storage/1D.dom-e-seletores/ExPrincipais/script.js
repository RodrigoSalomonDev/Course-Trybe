/* Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
 - document.getElementById()
 - document.getElementsByClassName()
 - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)*/
	function escolheTexto(texto){
		let descrição = document.getElementsByTagName('p')
		descrição[1].innerText = texto;
	}
	escolheTexto('Novo texto para testar! :)')

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function mudaCor(cor){
		let quadradoAmarelo = document.getElementsByClassName('main-content')
    quadradoAmarelo[0].style.background = cor;
	}
	mudaCor('rgb(76,164,109)')

// Crie uma função que mude a cor do quadrado vermelho para branco.
function mudaCorCentro(cor){
		let quadradoVermelho = document.getElementsByClassName('center-content')
    quadradoVermelho[0].style.background = cor
	}
	mudaCorCentro('white')

// Crie uma função que corrija o texto da tag <h1>.
		function corrigeTexto(texto){
		let novoTexto = document.getElementsByTagName('h1');
    novoTexto[0].innerHTML = texto
	}
corrigeTexto('Exercício 5.1 - Javascript!')

// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function tagMaiusculo(valor){
		let minusculo = document.getElementsByTagName('p')[valor]
		minusculo.innerHTML = minusculo.innerHTML.toUpperCase()
}
	tagMaiusculo(0)

// Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function exibeTags(){
		let mostraTags = document.getElementsByTagName('p')
		for (let key in mostraTags){
			console.log(mostraTags[key].innerHTML); 
		}
	}
	exibeTags()




