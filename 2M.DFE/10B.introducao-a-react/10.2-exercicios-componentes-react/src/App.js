import React from "react";
import Card from "./Components/Card";

class App extends React.Component {
  sayHello() {
    return <h1>Olá, Deus!</h1>
  }

  render(){

    return (
      <div>
        {
          this.sayHello()
        } 
        <section>
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    );
  }
}

export default App;
