/* 
No primeiro conteúdo do bloco ensina como instalar um novo projeto React. Segue abaixo os comandos de de forma resumida.

npx create-react-app nome-do-projeto(Que será o nome da pasta.);
 npm start

Métodos

Uma classe pode possuir métodos, que nada mais são do que ações que toda entidade criada a partir de uma classe pode realizar. 

Classes

Agrupar funções que façam sentido juntas. Utilizamos esse conjunto de funções para agrupar o que vai aparecer na tela. Cada pedaço da tela vai ser um componente da tela.
*/
// Exemplo de criação de componente por classe:
import React from 'react';

class ReactClass extends React.Component {
  render() {
    return (
      <h1>My first React Class Component!</h1>
    )
  }
}

/* 
TAG FRAGMENT

A tag fragment: <fragment></fragment> usada o React exige um elemento pai, mas não queremos criar uma div. Pode ser usada também vazia. <></>
*/