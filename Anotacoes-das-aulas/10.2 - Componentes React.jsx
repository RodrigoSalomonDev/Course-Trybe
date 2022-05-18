/* 
THIS
Utilização do this para identificar uma função dentro de uma classe.

PROPRIEDADES (Como passar de um componente para o outro)
Quando falamos de função const, como por exemplo: sum = (a, b) => a + b."a e b" são os parâmetros dessa função. Quando falamos de componentes no react e vamos passar algo para eles, nós chamamos de PROPRIEDADES. As propriedades são inseridas da mesma forma que em um input, exemplo <input type='text'> onde o type será a propriedade e o text o valor dessa propriedade.

Podemos usar propriedade em componentes criados no React. Por exemplo: Em um <card /> Posso inserir um title como propriedade ou qualquer outro nome de propriedade que eu deseje. Assim, o compontenente ficará dessa forma <card title="fundamentos" /> logo o meu componente card, recebeu uma propriedade title com uma string chamada fundamentos.Essa informação é transformada em um objeto, para acessa-la usamos this.props, o this.props irá retornar apenas um objeto, para pegar a informação específica devemos adicionar a chave do objeto: this.props.title.Para acessar a propriedade de <card MelhorDiaDaSemana="Sexta" />, usamos this.props.MelhorDiaDaSemana.

PropTypes

É um teste de tipagem dinâmica. Utilizado para definir o tipo de uma propriedade e evitar erros de digitação. Por exemplo quando esperamos um número 8 e digitamos uma string "8".*/

// Forma de uso:

import PropTypes from 'prop-trypes'

// E no final do componente, antes de exportar:

NomeDoComopnente.propTypes = {
  nomeDaPropriedade: PropTypes.number
};

// Definindo o PropTypes para um objeto:

NomeDoComopnente.propTypes = {
  nomeDoObjeto: PropTypes.shape({
    keyDoObjeto: PropTypes.string,
    keyDoObjeto: PropTypes.number,
    keyDoObjeto: PropTypes.string,
  })
}
