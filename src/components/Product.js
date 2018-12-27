import React, { Component } from 'react';
import '../styles/Product.css'
import {connect} from 'react-redux'

class Product extends Component {
    
    // buyProduct = () => {//cuando es una funcion dentro de una clase hay que ponerla como arrowfunction
    //     this.props.incrementCartCounter();
    //     this.props.reduceStock(this.props.data.id);
    //     this.forceUpdate()
    // }

    render() {

        return (
        
      <div className={"card"}>
            <div className={"card-header"}>
                <h1>{this.props.data.title}</h1>
            </div>
            <div className={"card-body"}>
            
                <p>{this.props.data.description}</p>
                <p>Stock {this.props.data.stock}</p>  
                <button className="btn btn-primary" onClick={this.props.buy}>Comprar</button>
            </div>
      </div>
    );
  }
}

function incrementCartCounter(){
    return {type:'INCREMENT'}
}

function decrementProductStock(id){
    return {type:'REDUCE_STOCK',id:id}
}

let mapDispatchToProps = dispatch =>({
    buy: (id)=>{
        // return function(dispatch){
        //     incrementCartCounter().then(payload=>{
        //         dispatch(decrementProductStock(id)
        //     )})

        }
    })


export default connect(null,mapDispatchToProps)(Product);
