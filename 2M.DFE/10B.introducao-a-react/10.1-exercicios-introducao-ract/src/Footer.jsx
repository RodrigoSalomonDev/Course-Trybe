import React from 'react';

const textoFooter = <h1>"E isso é só o começo..."</h1>

class Footer extends React.Component {
render() {
    return (
      <footer className=''>
      {textoFooter}
      </footer>
    )
  }
}

export default Footer;