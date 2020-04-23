import React,{useState,useEffect} from 'react';
import minus_icon from './../Icons/Icons-Footer/green_subtract.png';
import plus_icon from './../Icons/Icons-Footer/green_plus.png';
import dummy_img from './../Icons/Icons-Footer/dummyimage.png';
import {AddOrder,RemoveOrder,UpdateOrder,UpdateLaundary} from './Redux/index.js';
import {connect } from 'react-redux'
import './Cart.css'
import heart_icon from './../Icons/Icons-Footer/heart.png';
import delete_icon from './../Icons/Icons-Footer/delete.png';
import schedule_icon from './../Icons/Icons-Footer/watch.png';
import Axios from 'axios';


const FoodCard=({item,AddOrder,RemoveOrder,order,UpdateOrder})=>{
    const [toggler,setToggler]=useState(true)
    useEffect(()=>{
        console.log("hello")
    },[toggler])
    var flag=item.items;
    // console.log(item);
    // for(var i=0;i<order.length;i++){
    //         console.log(i,)
    //     if(order[i].id===item.id && order[i].category===item.category )
    //             flag=order[i].items;
    // }

    return (
        
        <div className="horizontal-card" style={{backgroundColor:"white",boxShadow:"0px 0px 0px",height:"auto",margin:"35px 0px 5px 0px"}}  >
        <div style={{float:"left",margin:"0px 25px 0px 0px",backgroundColor:"#e5f5ee",width:"38vw",height:"38vw"}}>
        {/* <img src={dummy_img} height='100%' width="100%"   /> */}
        
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:""}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="food-menu-name"  style={{fontFamily:"Poppins-Bold",color:"#00A852",lineHeight:"30px"}}
        >
        Nasi Goreng
        <img src={delete_icon} className="food-heart"  style={{float:'right',marginRight:"5px",marginTop:"5px"}} onClick={()=>{
            UpdateOrder(item);setToggler(!toggler)
        }}/>
        </div>
        <div className="food-menu-qty"
        style={{
            // backgroundColor:"#c0c0c0",height:"15px",width:"25vw" ,float:"",margin:"0px 0px",
        marginTop:"-3px",fontFamily:"Poppins-SemiBold",color:"#828282"}}>
        250 grams
        </div>
        <div className="">
            <div className="food-menu-middle" style={{}}>
            <img className="" src={minus_icon} alt="dhf" height="23px" width="23px" style={{backgroundColor:"#e5f5ee",padding:"3px",borderRadius:"8px"}} onClick={()=>{RemoveOrder(item);setToggler(!toggler)}}/>
            <span style={{padding:"0px 20px"}}>{flag}</span>
            <img className={`${flag>=3 ? "minus-plus-unactive" : ""}`} src={plus_icon} alt="dhf" height="23px" width="23px" style={{backgroundColor:"#e5f5ee",padding:"6px",borderRadius:"8px"}} onClick={()=>{if(flag<=2){AddOrder(item);setToggler(!toggler)}}}/>
            </div>

        <div className="food-menu-btn" style={{}}><button className="btn btn-warning" style={{borderRadius:"20px 20px 20px 20px",padding:"0px 13px 0px 13px",backgroundColor:"#F49901",fontFamily:"Poppins-SemiBold",color:"white"}}>Schedule</button><img src={schedule_icon} height="22px" style={{paddingLeft:"9px"}}/></div>
        </div>
        </div>
            {/* <div className="float-right" style={{margin:"25px 5px 5px 0px"}}>
            <img className="" src={minus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white",backgroundColor:"#e5f5ee"}} onClick={()=>{RemoveOrder(item);setToggler(!toggler)}}/>
            <span style={{padding:"0px 10px"}}>{flag}</span>
            <img className="" src={plus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white",backgroundColor:"#e5f5ee"}} onClick={()=>{AddOrder(item);setToggler(!toggler)}}/>
            </div> */}
            
        </div>
        
        
    )
}
const LaundaryCard=({item,UpdateLaundary})=>{
    const [toggler,setToggler]=useState(true)
    useEffect(()=>{
        console.log("hello")
    },[toggler])
    var flag=item.items;
    // console.log(item);
    // for(var i=0;i<order.length;i++){
    //         console.log(i,)
    //     if(order[i].id===item.id && order[i].category===item.category )
    //             flag=order[i].items;
    // }

    return (
        
        <div className="horizontal-card" style={{backgroundColor:"white",boxShadow:"0px 0px 0px",height:"38vw",margin:"35px 0px 5px 0px",position:"relative"}}  >
        <div style={{float:"left",margin:"0px 25px 0px 0px",backgroundColor:"#e5f5ee",width:"38vw",height:"38vw"}}>
        {/* <img src={dummy_img} height='100%' width="100%"   /> */}
        
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:""}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="food-menu-name"  style={{fontFamily:"Poppins-Bold",color:"#00A852",lineHeight:"30px"}}
        >
        {item.name}
        <img src={delete_icon} className="food-heart"  style={{float:'right',marginRight:"5px",marginTop:"5px"}} onClick={()=>{
            UpdateLaundary({id:"all",name:""});setToggler(!toggler)
        }}/>
        </div>
        
        <div className="">
            

        <div className="" style={{position:"absolute",bottom:"1px",left:"calc(38vw + 25px)"}}><button className="btn btn-warning" style={{borderRadius:"20px 20px 20px 20px",padding:"0px 13px 0px 13px",backgroundColor:"#F49901",fontFamily:"Poppins-SemiBold",color:"white"}}>Schedule</button><img src={schedule_icon} height="22px" style={{paddingLeft:"9px"}}/></div>
        </div>
        </div>
            
            
        </div>
        
        
    )
}
const CartCard=({item,AddOrder,RemoveOrder})=>{
    const [toggler,setToggler]=useState(true)
    useEffect(()=>{
        console.log("hello")
    },[toggler])
    return (
        
        <div className="horizontal-card" style={{display:"flex"}}  >
        <div style={{float:"left",margin:"15px 10px 0px 10px"}}>
        <img src={dummy_img} height='50px' width="60px"   />
        
        </div>
        <div style={{width:"calc(100% - 175px)",paddingTop:"15px"}}>
        <div style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}>
        </div>
        <div style={{backgroundColor:"#c0c0c0",height:"15px",width:"25vw" ,float:"",margin:"0px 0px",marginTop:"15px"}}>
        </div>
        </div>
        
            <div className="float-right" style={{margin:"25px 5px 5px 0px"}}>
            <img className="" src={minus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white"}} onClick={()=>{RemoveOrder(item);setToggler(!toggler)}}/>
            <span style={{padding:"0px 10px"}}>{item.items}</span>
            <img className="" src={plus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white"}} onClick={()=>{AddOrder(item);setToggler(!toggler)}}/>
            </div>
            
        </div>
        
        
    )
}

const Cart =({Foodorder,AddOrder,RemoveOrder,UpdateOrder,Laundaryorder,UpdateLaundary})=>{
    
    const senddata = async ()=>{
        await Axios.post('http://localhost:3500/postorder',
            Foodorder[0])
        .then((data)=>{
                console.log(data)
        })
    }
useEffect(()=>{

},[])
    return(
<div className="main-container"  style={{
            height:"calc(100vh - 120px)",overflowY:"scroll",
            padding:"0px 0%",margin:"0",backgroundColor:"",marginLeft:"0px",marginRight:"0px"}}>


       {/* <h5 style={{marginLeft:"calc(1% + 10px)"}}>Cart</h5> */}
         { Foodorder.length>0 && 
            <div>
             <div className="big-container" style={{margin:"80px 2% 0px 2%" ,}}>
         
                    <div className="cart-circle rounded-circle">
                    </div>

                    <div className="cart-container" >
                    
                    

                    
                    {Foodorder && Foodorder.length>0 && Foodorder.map((e,i)=>(<FoodCard item={e} UpdateOrder={UpdateOrder} AddOrder={AddOrder} RemoveOrder={RemoveOrder} order={Foodorder} />))}
                    {/* <MenuCard/> */}
                    
                    </div>
            
            </div>
            <div className="cart-confirm-btn">
            <button className="btn btn-success" style={{fontFamily:"Poppins-SemiBold",borderRadius:"20px",padding:"1px 13px"}} onClick={()=>senddata()}>Confirm</button>
            </div>
            </div>
            }
            { Laundaryorder.length>0 && 
             <div>
             <div className="big-container" style={{margin:"40px 2% 0px 2%" ,}}>
         
                    <div className="cart-circle rounded-circle">
                    </div>

                    <div className="cart-container" >
                    
                    


                    {Laundaryorder.map((e,i)=><LaundaryCard  item={e} UpdateLaundary={UpdateLaundary}/>)}
                    
                    
                    </div>
            
            </div>
            <div className="cart-confirm-btn">
            <button className="btn btn-success" style={{fontFamily:"Poppins-SemiBold",padding:"1px 13px",borderRadius:"20px"}}>Confirm</button>
            </div>
            </div> 

            }
            {/* <div> */}
        {/* <div  style={{backgroundColor:"",marginBottom :"10px",padding:"0px 8px 12px 8px",borderRadius:"10px",marginLeft:"1%",marginRight:"1%"}}> */}
        {/* <p style={{margin:"20px 0px 0px 0px"}} className="mt-4"> Category-1</p> */}
                {/* <div className="flex-container my-0" >
                {order && order.length==0 && (<p className="text-danger my-5">No items in cart</p>)}               
                  {order && order.length>0 && order.map((e,i)=>( <CartCard  item={e} key={i} AddOrder={AddOrder} RemoveOrder={RemoveOrder}/>
))}                     
                {order && order.length>0 && <div className="text-right"><button className="btn " style={{background: 'white',margin: '10px 0px 0px 70vw'}}>Confirm</button></div>}
                </div> */}
        
        {/* </div> */}
        {/* </div> */}
        

        </div>


    )
}



const mapStateToprops=state=>{
    return {
        Foodorder:state.Foodorder.orders,
        Laundaryorder:state.Laundaryorder.laundaryOrder
    }
}
const mapDispatchToprops=dispatch=>{
    return {
            AddOrder:(item)=> dispatch(AddOrder(item)),
            RemoveOrder:(item)=> dispatch(RemoveOrder(item)),
            UpdateOrder:(item)=> dispatch(UpdateOrder(item)),
            UpdateLaundary:(item)=>dispatch(UpdateLaundary(item))

    }
}
export default connect(mapStateToprops,mapDispatchToprops)(Cart);
