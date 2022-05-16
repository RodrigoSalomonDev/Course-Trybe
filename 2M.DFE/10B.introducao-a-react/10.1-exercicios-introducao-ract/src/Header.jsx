import React from 'react';

const textoFrontEnd = <h1>Conteúdos de Front-End</h1>

class Header extends React.Component {
render() {
    return (
      <div>
      {textoFrontEnd}
      </div>
    )
  }
}

export default Header;