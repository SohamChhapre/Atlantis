import {REMOVE_ORDER} from './OrderTypes.js';
import {ADD_ORDER} from './OrderTypes.js';

const initialState={
    orders:[]
}

const OrderReducer=(state=initialState,action)=>{
    
    
    switch(action.type){
        case REMOVE_ORDER:{
        console.log(action.payload,"reducer")
        // const category=payload.category
        // if (category==="category1"){
        //     const newstate
        // }
        const newstate=state.orders.filter(e=>(e.category!==action.payload.category && e.id!==action.payload.id))
        return {
            ...state,
            orders:newstate
        }
        }
        case ADD_ORDER:{

            return {
                ...state,
                orders:[...state.orders,action.payload]
            }
        }
        // {
            // ...state,
            // orders:state.orders.filter(e=>e.category!=action.payload.category && e.id!=action.payload.id)
        
        // }
        default:return state
    }
}

export default OrderReducer;