import React from "react";
import Card from "./Components/Card";
import contents from "./data";

class App extends React.Component {
  sayHello() {
    return <h1>Olá, Deus!</h1>
  }

  render(){
        console.log(contents);
    return (
      <div>
        {
          this.sayHello()
        } 
        <section>
          {
          contents.map((item) => {
            return <Card modulo={item.name} nome={item.title} imagem={item.imageUrl}/>
          } )
          /* <Card modulo={1} titulo='Fundamentos'/>
          <Card modulo={2} titulo='Front-End'/>
          <Card modulo={3} titulo='Back-End'/>
          <Card modulo={4} titulo='Ciências da Computação'/> */}
        </section>
      </div>
    );
  }
}

export default App;


//Parei em 01:19:00.