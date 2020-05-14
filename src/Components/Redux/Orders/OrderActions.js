import {REMOVE_ORDER} from './OrderTypes.js';
import {ADD_ORDER,UPDATE_ORDER,INC_INIT_FOOD,DEC_INIT_FOOD} from './OrderTypes.js';

export const RemoveOrder = (item={category:"",id:""})=>{
    return {
        type:REMOVE_ORDER,
        payload:item
    }
}
export const AddOrder = (item={category:"",id:""})=>{
    return {
        type:ADD_ORDER,
        payload:item
    }
}
export const UpdateOrder=(item={category:"",id:""})=>{
    return {
        type:UPDATE_ORDER,
        payload:item
    }
}
export const IncrementOrder=(item={category:"",id:""})=>{
    return {
        type:INC_INIT_FOOD,
        payload:item
    }
}
export const DecrementOrder=(item={category:"",id:""})=>{
    return {
        type:DEC_INIT_FOOD,
        payload:item
    }
}



// export default Remove