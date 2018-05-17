import React, { Component } from 'react';
import './App.css';
import LocalizadorTiempo from './Components/LocalizadorTiempo';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Mi Aplicacion del tiempo</h1>
        </header>
        <div>
            <LocalizadorTiempo ></LocalizadorTiempo>
        </div>
      </div>
    );
  }
}

export default App;
