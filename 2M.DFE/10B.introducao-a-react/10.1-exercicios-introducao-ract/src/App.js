import './App.css';
import Header from './Header';
import Content from './Content';

const compromissos = ['fazer atividades físicas', 'imprimir procurações', 'comprar lâmpadas e bicicletário'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <ol>{ compromissos.map((xablau) => Task(xablau)) }</ol>
      <Header />
     
    </div>
  );
}

export default App;
