import React from 'react';
import './App.css';
import './Welcom';
import Welcom from './Welcom';

class App extends React.Component {
  
  render(){
      return(
        <nav className="nav">
          <a className="nav-link active" href="#">Active</a>
          <a className="nav-link" href="#">Ajouter Produit</a>
          <a className="nav-link" href="#">Lister Produits</a>
          <a className="nav-link" href="#">Entrer</a>
          <a className="nav-link" href="#">Sortie</a>
        </nav>
      );
  }
    
    
      
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gestion de Stock
        </a>
      </header>
    </div>*/
}

export default App;
