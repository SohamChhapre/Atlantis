import {INC_LAUNDRY,DEC_LAUNDRY} from './LaundaryTypes.js'


const initialState={
    LaundryInit:[{id:1,name:"Wash & Fold",items:0,category:"Casual"},{id:2,name:"Dry & Fold",items:0,category:"Casual"},{id:3,name:"Wash & Fold",items:0,category:"Formal"},{id:4,name:"Dry & Fold",items:0,category:"Formal"}]
}

const LaundaryReducer=(state=initialState,action)=>{

    switch(action.type){
        case INC_LAUNDRY:{
            var newLaundry=state.LaundryInit;
            for(let i=0;i<newLaundry.length;i++){
                if(newLaundry[i].id===action.payload.id)
                {
                    newLaundry[i].items=newLaundry[i].items+1
                    break
                }
            }
            return {
                ...state,
                LaundryInit:newLaundry
                            }
        }
        case DEC_LAUNDRY:{
            var newLaundry=state.LaundryInit;
            for(let i=0;i<newLaundry.length;i++){
                if(newLaundry[i].id===action.payload.id)
                {
                    newLaundry[i].items=newLaundry[i].items-1
                    break
                }
            }
            return {
                ...state,
                LaundryInit:newLaundry
            }
        }
        
        default: return state
    }
}

export default LaundaryReducer;