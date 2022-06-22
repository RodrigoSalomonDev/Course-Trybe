import React from "react";

class Testes extends React.Component{
  redner(){
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const itens = shoppingList.map((xablin) =>{
     return <li>{ xablin }</li>
   })
    return(
      <div>
        <h2>Lista de compras</h2>
        <ul>
          {itens}
        </ul>
      </div>
    )
  }
}

export default Testes;