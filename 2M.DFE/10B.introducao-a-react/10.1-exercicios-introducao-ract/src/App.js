import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const compromissos = ['fazer atividades físicas', 'imprimir procurações', 'comprar lâmpadas e bicicletário'];

const Task = (value) => {
  return (
    //a Key é utilizada para identificar uma lista no React. Poderia usar como identificação o parâmetro da função Task (value) e a identificação nesse caso seria a string de cada item do array.Colocar uma string nessa key, por se tratar de uma lista, irá dar erro, porque, como estou usando map, vão ter dois filhos com o mesmo nome.
    <li key={value}>{value}</li>
  );
}

function App() {
  return (
    <div className="">
      <ol>{ compromissos.map((xablau) => Task(xablau)) }</ol>
      <Header />
     <Content />
     <Footer/>
    </div>
  );
}

export default App;
