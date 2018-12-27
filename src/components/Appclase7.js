import React, { Component } from 'react';
import './../App.css';
import ProductsList from './ProductsList';
import Styled from './styled/index'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Styled.Title>Titulo de la pagina</Styled.Title>
        <Styled.Subtitle>Subtitulo de la pagina</Styled.Subtitle>
        <ProductsList/>
      </div>
    );
  }
}

export default App;
