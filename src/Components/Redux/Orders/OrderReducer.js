import {REMOVE_ORDER,ADD_ORDER,UPDATE_ORDER,INC_INIT_FOOD,DEC_INIT_FOOD} from './OrderTypes.js';
import {initialdata} from './../../CategoryData.js'
const initialState={
    orders:[],
    FoodInitial:initialdata
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
         neworder=state.orders.filter(e=>( e.id!==action.payload.id))
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
                }
            return {
                ...state,
                orders:neworder
            }
        }
        case UPDATE_ORDER:{
            console.log(action.payload)
            neworder=state.orders.filter(e=>( e.id!==action.payload.id))
            return {
                ...state,
                orders:neworder
            }
        }
        case INC_INIT_FOOD:{
            var newFooddata=state.FoodInitial.map((e,i)=>{ if(e.id===action.payload.id){
                        return {...e,items:e.items+1}
                        return e;

            }});
            return {
                ...state,
                FoodInitial:newFooddata
            }
        }
        case DEC_INIT_FOOD:{
            var newFooddata=state.FoodInitial.map((e,i)=>{ if(e.id===action.payload.id){
                        return {...e,items:e.items-1}
                        return e;
            }});
            return {
                ...state,
                FoodInitial:newFooddata
            }
        }
        default:return state
    }
}

export default OrderReducer;