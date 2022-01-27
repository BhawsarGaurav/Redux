import * as types from "./actionType";
const initialState={
   
    products: [],
   
}

const productsReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        default: 
        return state;
    }
}

export default productsReducer;