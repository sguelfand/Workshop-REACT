import React, {Component} from 'react'
import dataproducts from '../data/products'
import Product from './Product';

class ProductsList extends Component{
  
    constructor(props){
        super(props)

        this.state={
            products: dataproducts,
            selectAll:false
        }

        this.itemId = React.createRef()
    }

    selectAll=()=>{
    this.setState(
        {
            selectAll:!this.state.selectAll
        }
    )
    }
    ignore = () =>{
        let products = this.state.products.filter(product=>{
            return product.id != this.itemId.current.value
        })
        this.setState({
            products:products
        })

    }

    render(){
        return(
            <div>
                <label>
                    <input type="text" ref= {this.itemId}/>
                    <button onClick={this.ignore}>Filtrar</button>
                    <input type="checkbox" onChange={this.selectAll}/> Seleccionar todos   
                </label>
                
                {this.state.products.map(product=><Product key={product.id} data={product} select={this.state.selectAll}/>)}
            </div>
        )
    }

}

export default ProductsList