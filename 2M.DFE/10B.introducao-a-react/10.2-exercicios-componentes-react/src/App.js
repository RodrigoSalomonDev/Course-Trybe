import React from "react";
import Card from "./Components/Card";
import contents from "./data";
import Greeting from "./Components/Exercícios/ExGreeting";
import ImagemGato from "./Components/Exercícios/imgs/catExercicio.jpg";
import Image from "./Components/Exercícios/ExercicioGato";

class App extends React.Component {
  sayHello() {
    return <h1>Olá, Deus!</h1>
  }
  gratidao() {
    return <p>Obrigado pela benção de estar comigo.</p>
  }

  render(){
        console.log(contents);
    return (
      <div>
        {
          this.sayHello()
        }
        {
          this.gratidao()
        }
        <section>
          {
          contents.map((item) => {
            // return <Card modulo={item.name} nome={item.title} imagem={item.imageUrl}/>
            return <Card key={item.id} PropriedadesData={item}/>
          } )
          /* <Card modulo={1} titulo='Fundamentos'/>
          <Card modulo={2} titulo='Front-End'/>
          <Card modulo={3} titulo='Back-End'/>
          <Card modulo={4} titulo='Ciências da Computação'/> */}
          
          <Greeting name="Rodrigo" lastName="Salomon" />
        </section>
        <Image source="logo512.png" alternativeText="Cute cat staring" />
        <Image source={ImagemGato} alternativeText="Cute cat staring" />
      </div>
    );
  }
}

export default App;
