import React from 'react';
import minus_icon from './../Icons/Icons-Footer/subtract.png';
import plus_icon from './../Icons/Icons-Footer/plus_math.png';
import dummy_img from './../Icons/Icons-Footer/dummyimage.png';
import {AddOrder,RemoveOrder} from './Redux/index.js';
import {connect } from 'react-redux'
const CartCard=({item})=>{
    
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
            <img className="" src={minus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white"}}/>
            <span style={{padding:"0px 10px"}}>4</span>
            <img className="" src={plus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white"}}/>
            </div>
            
        </div>
        
        
    )
}

const Cart =({order})=>{
    

    return(
<div className="main-container"  style={{
            height:"calc(100vh - 115px)",overflowY:"scroll",
            padding:"20px 0%",margin:"0",backgroundColor:"#9BE0B8",marginLeft:"0px",marginRight:"0px"}}>


       <h5 style={{marginLeft:"calc(1% + 10px)"}}>Cart</h5>
         
        <div >
                  {/* <div className="flex-container" >
         
            <div className="food-icon-card" >
            
            
            </div>
                        <div className="food-icon-card mg-left" >
            
            
            </div>
             <div className="food-icon-card mg-left" >
            
            
            </div>
            
            </div> */}
            
        <div  style={{backgroundColor:"",marginBottom :"10px",padding:"0px 8px 12px 8px",borderRadius:"10px",marginLeft:"1%",marginRight:"1%"}}>
        {/* <p style={{margin:"20px 0px 0px 0px"}} className="mt-4"> Category-1</p> */}
                <div className="flex-container my-0" >
                {order && order.length==0 && (<p className="text-danger my-5">No items in cart</p>)}               
                  {order && order.length>0 && order.map((e,i)=>( <CartCard  item={e} key={i}/>
))}                     
                {order && order.length>0 && <div className="text-right"><button className="btn " style={{background: 'white',margin: '10px 0px 0px 70vw'}}>Confirm</button></div>}
                </div>
        
        </div>
        </div>
        

        </div>


    )
}



const mapStateToprops=state=>{
    return {
        order:state.orders
    }
}
const mapDispatchToprops=dispatch=>{
    return {
            AddOrder:(item)=> dispatch(AddOrder(item)),
            RemoveOrder:(item)=> dispatch(RemoveOrder(item))
    }
}
export default connect(mapStateToprops,mapDispatchToprops)(Cart);
