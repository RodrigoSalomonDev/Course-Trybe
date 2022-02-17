// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log('Bem vinda, ' + info.personagem + '!');

// // info['recorrente'] = 'sim'

// info.recorrente = 'sim'

// console.log(info);

// for (let keys in info){
//     console.log(keys)
// }

// for (let keys in info){
//     console.log(info[keys])
// }


	// let info = {
	// 	personagem: 'Margarida',
	// 	origem: 'Pato Donald',
	// 	nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
	// 	recorrente: 'sim'
	// }
	// let	info2 = {
	// 		personagem: 'Tio Patinhas',
	// 		origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
	// 		nota: 'O último MacPatinhas',
	// 		recorrente: 'sim'
	// 	}

	// for(let properties in info){
	// 	if (properties === 'recorrente' && info[properties] === 'sim' && info2[properties] === 'sim'){
	// 		console.log('Ambos recorrentes');
	// 	} else {
	// 		console.log(info[properties] + ' e ' + info2[properties]);
	// 	}
	// }

	let leitor = {
		nome: 'Julia',
		sobrenome: 'Pessoa',
		idade: 21,
		livrosFavoritos: [
			{
				titulo: 'O Pior Dia de Todos',
				autor: 'Daniela Kopsch',
				editora: 'Tordesilhas',
			},
		],
	};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo)
