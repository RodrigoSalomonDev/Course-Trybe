import React from "react";
import Card from "./Components/Card";
import contents from "./data";
import Greeting from "./Components/Exercícios/ExGreeting";
import ImagemGato from "./Components/Exercícios/imgs/catExercicio.jpg";
import Image from "./Components/Exercícios/ExercicioGato";
import Testes from "./Components/Exercícios/testes";

class App extends React.Component {
  sayHello() {
    return <h1>Olá, Deus!</h1>
  }
  gratidao() {
    return <p>Obrigado pela benção de estar comigo.</p>
  }

  render(){
        // console.log(contents);
        // const headphone = {
        //   id: 102,
        //   user: "cena@gmail.com",
        //   product: "Razer Headphone",
        //   price: {
        //     value: 99.99,
        //     currency: "dollars"
        //   }
        // };
    
        // const energyDrink = {
        //   id: 77,
        //   user: "cena@gmail.com",
        //   product: "Monster 500mL",
        //   price: {
        //     value: 9.99,
        //     currency: "dollars"
        //   }
        // };
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
        </section>
        <section>
          <Greeting name="Rodrigo" lastName="Salomon" />
          <Image source="logo512.png" alternativeText="Cute cat staring" />
          <Image source={ImagemGato} alternativeText="Cute cat staring" />
        </section>
        <section>
        
         
        
        {/* <h1> Orders recently created </h1>
        <Order PropriedadesOrder={headphone}/>
        <Order PropriedadesOrder={energyDrink}/> */}
        </section>
      </div>
    );
  }
}

export default App;
