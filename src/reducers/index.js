import {combineReducers} from 'redux'
import cartReducer from './cartReducer'
import profileReducer from './profileReducer'
import totalReducer from './totalReducer'
import productReducer from './productReducer'

let previewItem = function(state = {} ,action){
    switch(action.type){
        case 'SET_ITEM':
            state=action.item
        break;
        case 'UNSET_ITEM':
            state={}
        break;
    }
    return state
}

export default combineReducers({//exporta lo que devuelve esta funcion, osea un objeto
    cart: cartReducer, 
    profile: profileReducer,
    total: totalReducer,
    products: productReducer,
    previewItem

})