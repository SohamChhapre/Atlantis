import {INC_CART,DEC_CART,REMOVE_CART_ITEM,INC_INIT_FOOD,DEC_INIT_FOOD,ADD_CART_ITEM} from './OrderTypes.js';

export const AddCart = (item={category:"",id:""})=>{
    return {
        type:ADD_CART_ITEM,
        payload:item
    }
}
export const RemoveCart = (item={category:"",id:""})=>{
    return {
        type:REMOVE_CART_ITEM,
        payload:item
    }
}
export const IncrementCart = (item={category:"",id:""})=>{
    return {
        type:INC_CART,
        payload:item
    }
}
export const DecrementCart=(item={category:"",id:""})=>{
    return {
        type:DEC_CART,
        payload:item
    }
}
export const IncrementFood=(item={category:"",id:""})=>{
    return {
        type:INC_INIT_FOOD,
        payload:item
    }
}
export const DecrementFood=(item={category:"",id:""})=>{
    return {
        type:DEC_INIT_FOOD,
        payload:item
    }
}



// export default Remove