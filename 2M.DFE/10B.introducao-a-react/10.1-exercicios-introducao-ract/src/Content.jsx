import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

/* class Content extends React.Component {
  render() {
    return(
      <div className="content">
        {conteudos.map((elem) => (
          <div key={elem.conteudo} className="card">
            <h4>{`O conteudo é: ${elem.conteudo}`}</h4>
            <p>{`status: ${elem.status}`}</p>
            <p>{`bloco: ${elem.bloco}`}</p>
          </div>
        ))}
      </div>
    );
  }
} */

class Content extends React.Component {
  render() {
    return (
      <div className=''>
        { conteudos.map((xablau) => {
         return <div key={xablau.conteudo}>
            <h4>{`O conteudo é: ${xablau.conteudo}`}</h4>
            <p>{`Status: ${xablau.status}`}</p>
            <p>{`Bloco: ${xablau.bloco}`}</p>
          </div>
        })}
      </div>
    )
}
}

export default Content;