import {REMOVE_ORDER} from './OrderTypes.js';
import {ADD_ORDER} from './OrderTypes.js';

const initialState={
    orders:[]
}

const OrderReducer=(state=initialState,action)=>{
    
    
    switch(action.type){
        case REMOVE_ORDER:{
        console.log(action.payload,"reducer")
        var neworder =state.orders;
                var flg=false;
                
                for(var i=0;i<state.orders.length;i++){
                    console.log(neworder[i])
                    if(neworder[i].category===action.payload.category && action.payload.id===neworder[i].id ){
                        if(neworder[i].items>1){
                            neworder[i].items=neworder[i].items-1;
                            break;
                        }
                        else
                            flg=true;
                    }
                }

            if (flg)
         neworder=state.orders.filter(e=>(e.category!==action.payload.category && e.id!==action.payload.id))
        console.log(neworder)
        return {
            ...state,
            orders:neworder
        }
        }
        case ADD_ORDER:{
                var neworder =state.orders;
                var flg=true;
                for(var i=0;i<state.orders.length;i++){
                    console.log(neworder[i])
                    if(neworder[i].category===action.payload.category && action.payload.id===neworder[i].id){
                        neworder[i].items=neworder[i].items+1;
                        flg=false
                    }
                }
               
                if(flg){
                 var item=action.payload;
                item.items=1
                neworder=[...state.orders,item];
        // console.log(neworder,action.payload)
                }
            return {
                ...state,
                orders:neworder
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