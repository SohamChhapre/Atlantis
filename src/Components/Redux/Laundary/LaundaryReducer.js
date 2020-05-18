import {INC_LAUNDRY,DEC_LAUNDRY} from './LaundaryTypes.js'


const initialState={
    LaundryInit:[
    {id:48,name:"Wash & Fold",items:0,category:"Casual",url:"https://firebasestorage.googleapis.com/v0/b/rumakita.appspot.com/o/Icons%26Illustrations%2Fimg-laundry(1).png?alt=media&token=9260c795-4b14-4b76-9235-fed399349fb7"},  
        {id:49,name:"Iron & Fold",items:0,category:"Casual",url:"https://firebasestorage.googleapis.com/v0/b/rumakita.appspot.com/o/Icons%26Illustrations%2Fic-ironandfold(1).png?alt=media&token=12b6189b-9b76-47fd-a7e7-030c1c5f189c"},
    {id:50,name:"Wash & Fold",items:0,category:"Formal",url:"https://firebasestorage.googleapis.com/v0/b/rumakita.appspot.com/o/Icons%26Illustrations%2Fimg-laundry(1).png?alt=media&token=9260c795-4b14-4b76-9235-fed399349fb7"},
    {id:51,name:"Iron & Fold",items:0,category:"Formal",url:"https://firebasestorage.googleapis.com/v0/b/rumakita.appspot.com/o/Icons%26Illustrations%2Fic-ironandfold(1).png?alt=media&token=12b6189b-9b76-47fd-a7e7-030c1c5f189c"}
    ],
    CleaningInit:[{id:52,name:"Cleaning",items:0,url:"https://firebasestorage.googleapis.com/v0/b/rumakita.appspot.com/o/Icons%26Illustrations%2Fic-cleaning.png?alt=media&token=cd73415d-ecdb-421e-bf2f-2513e264f68b"},  
        {id:53,name:"Repair",items:0,url:"https://firebasestorage.googleapis.com/v0/b/rumakita.appspot.com/o/Icons%26Illustrations%2Fic-repair.png?alt=media&token=01e79fa4-3356-4db3-bb94-21d07ad8cb49"},
        ]
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