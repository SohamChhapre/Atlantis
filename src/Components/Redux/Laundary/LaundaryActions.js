import {ADD_LAUNDARY,REMOVE_LAUNDARY,UPDATE_LAUNDARY} from './LaundaryTypes.js';

export const RemoveLaundary = (item={name:"",id:""})=>{
    return {
        type:REMOVE_LAUNDARY,
        payload:item
    }
}
export const AddLaundary = (item={name:"",id:""})=>{
    return {
        type:ADD_LAUNDARY,
        payload:item
    }
}
export const UpdateLaundary=(item={name:"",id:""})=>{
    return {
        type:UPDATE_LAUNDARY,
        payload:item
    }
}
