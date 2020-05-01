import {UPDATE_CARD} from './PaymentsTypes.js';

export const UpdateCard = (item={name:"",expiry:"",card_no:""})=>{
    return {
        type:UPDATE_CARD,
        payload:item
    }
}