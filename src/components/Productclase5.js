import React, { Component } from 'react';

class Product extends Component {
    constructor(props){
        super(props)

        this.state={
            counter:props.counter
        }

        console.log(props)
    }

    increment=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    

    render() {
    return (
      <div className="Product-container">
            <h1>{this.props.title}</h1>
            <p>Contador: {this.state.counter}</p>
            <p>esto es una pruebaaaa</p>
            <button onClick={this.increment}>Comprar</button>    
      </div>
    );
  }
}

export default Product;
