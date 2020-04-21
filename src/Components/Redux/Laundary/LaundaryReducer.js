import {ADD_LAUNDARY,UPDATE_LAUNDARY,REMOVE_LAUNDARY} from './LaundaryTypes.js'


const initialState={
    laundaryOrder:[]
}

const LaundaryReducer=(state=initialState,action)=>{

    switch(action.type){
        case ADD_LAUNDARY:{
            console.log(action.payload)
            return {
                ...state,
                laundaryOrder:[...state.laundaryOrder,action.payload]
            }
        }
        case REMOVE_LAUNDARY:{
            if(action.payload.id==="all")
                return {
                    ...state,
                    laundaryOrder:[]
                }
            return {
                ...state,
                laundaryOrder:state.laundaryOrder.filter((e)=>(e.id!==action.payload.id))
            }
        }
        default: return state
    }
}

export default LaundaryReducer;