import {REMOVE_ORDER} from './OrderTypes.js';
import {ADD_ORDER} from './OrderTypes.js';

export const RemoveOrder = (item={category:"",id:""})=>{
    return {
        type:REMOVE_ORDER,
        payload:item
    }
}
export const AddOrder=(item={category:"",id:""})=>{
    return {
        type:ADD_ORDER,
        payload:item
    }
}
// export default Remove