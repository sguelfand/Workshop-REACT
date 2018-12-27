import './../App.css';
import {connect} from 'react-redux'

import Styled from './styled/index'
import { bindActionCreators } from 'redux';
import React, {Component} from 'react'
import Product from './Product';

class ProductsList extends Component {

    

    render() {

        return(
            <div className="card-columns">
                {this.props.products.map(product=><Product key={product.id} data={product} select={false}/>)}
            </div>
        );
    }
}

let mapStateToProps = (state)=>({
    products: state.products.products,
    selectAll:false
  })
  
  let mapDispatchToProps = dispatch=>({
    selectAllF:()=>dispatch({type:'SELECT_ALL'}),
    ignore:(id)=>dispatch({type:'IGNORE',id:id}),
    fetch: () => dispatch({type: "FETCH_PRODUCTS"})

  })

export default connect(mapStateToProps,mapDispatchToProps)(ProductsList);