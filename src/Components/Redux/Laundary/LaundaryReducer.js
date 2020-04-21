import {ADD_LAUNDARY,UPDATE_LAUNDARY,REMOVE_LAUNDARY} from './LaundaryTypes.js'


const initialState={
    laundaryOrder:[],
    templaundaryOrder:[]
}

const LaundaryReducer=(state=initialState,action)=>{

    switch(action.type){
        case ADD_LAUNDARY:{
            console.log(action.payload)
            return {
                ...state,
                templaundaryOrder:[...state.templaundaryOrder,action.payload]
            }
        }
        case REMOVE_LAUNDARY:{
            if(action.payload.id==="all")
                return {
                    ...state,
                    templaundaryOrder:[]
                }
            return {
                ...state,
                templaundaryOrder:state.templaundaryOrder.filter((e)=>(e.id!==action.payload.id))
            }
        }
        case UPDATE_LAUNDARY:{
            if(action.payload.id=="all")
            return {
                ...state,
                laundaryOrder:[]
            }
            return {
                ...state,
                laundaryOrder:state.templaundaryOrder
            }
        }
        default: return state
    }
}

export default LaundaryReducer;