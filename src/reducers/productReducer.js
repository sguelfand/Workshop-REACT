

let initialState = {
    filter: "SELECT_ALL",
    products: [],
    filtered: []
}

export default  function (state = initialState, action){

    switch(action.type){
        case 'IGNORE':
            state = state.products.filter(product=>{
                return product.id != action.id
            })
            
        break;
        
        case 'AVAILABLE':
            state = {
                ...state,
                filter: "SELECT_ALL",
                filtered: state.products.filter(product => product.stock > 0)
            }
        break;

        case 'FETCH_PRODUCTS':
            state = {
                ...state,
                products: state.products.concat(action.products)
            }
        break;

        case 'REDUCE_STOCK':
            let productsNew = state.products.map(product=>{

            if(product.id==action.id){
                product.stock = product.stock-1
            }

            return product
            })

            state = {
                ...state,
                products: productsNew
            }
        break;
    }
    return state
    }

