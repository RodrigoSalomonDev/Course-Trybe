import users from "./UserProfile"
import Greeting from "./Greeting";

function App() {
  const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
  const items = shoppingList.map((item, index) => {
    // console.log("item: ", item);
    return (<li key={index}>{ item }</li>);
  });
  // console.log(users)
  return (
    <div className="App">
      <section>
     <h2>Lista de compras</h2>
     <ul>
       { items }
     </ul>
     </section> 
     <section>
       {
         users.map((valor)=> {
           return <li key={valor.id}>{valor.name}</li>
         })
       }
     </section>
     <section>
       <Greeting name="Rodrigo" lastName="Salomon" />
     </section>
    </div>
  );
}

export default App;
