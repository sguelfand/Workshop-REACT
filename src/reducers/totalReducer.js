import { INCREMENT } from '../actions';


export default function (state = 0,action){

    switch(action.type){
        case INCREMENT:
            state = state+1    
            
        break;
       
    }
    return state
}