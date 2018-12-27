import React, { Component } from 'react';
import './../App.css';
import {connect} from 'react-redux'

import ProductsList from './ProductsList';
import Styled from './styled/index'
import { bindActionCreators } from 'redux';
import { INCREMENT } from '../actions';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './Navbar'
import Modal from 'react-modal'

Modal.setAppElement('#root')

class App extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
  
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillMount(){
    fetch('http://localhost:3001/products')
    .then(response=> response.json())
    .then(response=>{
      this.props.fillProducts(response)
    })
  }

  render() {
    return (
      <div className="container">
      <NavBar/>
      <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        ></Modal>
        <div className="row">
          <div className="col">
            <ProductsList/>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state)=>({
  total:state.total
})

let mapDispatchToProps = dispatch=>({
  increment:()=>dispatch({type: INCREMENT}),
  fillProducts: (products)=>dispatch({type:'FETCH_PRODUCTS', products})
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
