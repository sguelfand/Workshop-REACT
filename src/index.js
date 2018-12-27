import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers/index'//importa el objeto que  exporto ese archivo y lo pone dentro de la variable 'rootReducer'
import thunk from 'redux-thunk'

// function logger({ getState }) {
//     return (next) => (action) => {
//       console.log('will dispatch', action)
  
//       let returnValue = next(action)
  
//       console.log('state after dispatch', getState())
  
//       return returnValue
//     }
//   }

let store= createStore(rootReducer,applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
