import {UPDATE_CARD} from './PaymentsTypes.js';

const initialState={
    NewCard:{
        expiry:{month:"",year:""},
        name:"",
        card_no:""
    }
}

const CardReducer=(state=initialState,action)=>{
    
    
    switch(action.type){
        case UPDATE_CARD:{
            return {
                ...state,
                NewCard:action.payload
            }
        }
        default:return state
    }
}

export default CardReducer;