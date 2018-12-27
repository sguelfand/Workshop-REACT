import React, { Component } from 'react';
import './../App.css';
import {connect} from 'react-redux'

import ProductsList from './ProductsList';
import Styled from './styled/index'
import { bindActionCreators } from 'redux';
import { INCREMENT } from '../actions';

class App extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div className="App">
        <p>{this.props.total}</p>
        <button onClick={this.props.increment}>Incrementar</button>
          
      </div>
    );
  }
}

let mapStateToProps = (state)=>({
  total:state.total
})

let mapDispatchToProps = dispatch=>({
  increment:()=>dispatch({type: INCREMENT})
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
