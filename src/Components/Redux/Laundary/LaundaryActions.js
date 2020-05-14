import {DEC_LAUNDRY,INC_LAUNDRY} from './LaundaryTypes.js';

export const DecrementLaundry = (item={name:"",id:""})=>{
    return {
        type:DEC_LAUNDRY,
        payload:item
    }
}
export const IncrementLaundry = (item={name:"",id:""})=>{
    return {
        type:INC_LAUNDRY,
        payload:item
    }
}

