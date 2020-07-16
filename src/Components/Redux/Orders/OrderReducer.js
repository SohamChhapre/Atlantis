import {ADD_CART_ITEM,REMOVE_CART_ITEM,INC_CART,DEC_CART,INC_INIT_FOOD,DEC_INIT_FOOD} from './OrderTypes.js';
import {initialdata} from './../../CategoryData.js';

const initialState={
    cart:[],
    FoodInitial:initialdata

}

const OrderReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_CART_ITEM:{
            let flg=true
            let tempcart=state.cart
        // console.log(action.payload,"In reducer")

            for(var i=0;i<tempcart.length;i++){
                if(action.payload.id===tempcart[i].id)
                {
                    tempcart[i]=action.payload
                    flg=false
                    break;
                }
            }
            
            if(!flg)
            return {
                ...state,
                cart:tempcart
            }
            tempcart.push(action.payload);
            console.log(tempcart)
            return {
                ...state,
                cart:tempcart
            }
        }
        case REMOVE_CART_ITEM:{
            console.log(action.payload,action.payload.id==="all")
            if(action.payload.id=="all")
                return {
                ...state,
                cart:[]
                }

            var updatedcart=state.cart.filter((e,i)=>(e.id!==action.payload.id));
            
        return {
            ...state,
            cart:updatedcart
        }
        }
        case INC_CART:{
                var newcart =state.cart;
                var flg=true;
                for(var i=0;i<newcart.length;i++){
                    if(action.payload.id===newcart[i].id){
                        newcart[i].items=newcart[i].items+1;
                        break
                    }
                }
                console.log("Increment",action.payload)
            return {
                ...state,
                cart:newcart
            }
        }
        case DEC_CART:{
         var newcart =state.cart;
                var flg=true;
                for(var i=0;i<newcart.length;i++){
                    if(action.payload.id===newcart[i].id){
                        newcart[i].items=newcart[i].items-1;
                        break
                    }
                }
                console.log("Decrement",action.payload)

            return {
                ...state,
                cart:newcart
            }
        }

        case INC_INIT_FOOD:{
            var newFooddata=state.FoodInitial
            for (let i=0;i<newFooddata.length;i++){
                if(newFooddata[i].id==action.payload.id)
                    {
                        newFooddata[i].items=newFooddata[i].items+1;
                        break
                    }
            }
            console.log(newFooddata,action.payload)

            return {
                ...state,
                FoodInitial:newFooddata
            }
        }
        case DEC_INIT_FOOD:{
            var newFooddata=state.FoodInitial
            for (let i=0;i<newFooddata.length;i++){
                if(newFooddata[i].id==action.payload.id)
                    {
                        newFooddata[i].items=newFooddata[i].items-1;
                        break
                    }
            }
            return {
                ...state,
                FoodInitial:newFooddata
            }
        }
        default:return state
    }
}

export default OrderReducer;