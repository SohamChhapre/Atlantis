import React from 'react';
import minus_icon from './../Icons/Icons-Footer/subtract.png'
import {connect} from 'react-redux';
import {RemoveOrder} from './Redux/index.js';
// const 

const MenuCard=({item})=>{
    
    return (
        
        <div className="horizontal-card"   >
            <div className="float-right" style={{margin:"15px 5px 5px 0px"}}>
            <img className="" src={minus_icon} height="50px" width="50px" style={{border:"2px solid white"}}/>
            </div>
            {/* {item && item.id  } */}
        </div>
        
        
    )
}

const Orders=({match,order,setOrders,RemoveOrder})=>{
    
    // console.log(match,orders)
    console.log(RemoveOrder);
    return(
        
        <div className="main-container"  style={{
            maxHeight:"calc(100vh - 115px)",overflowY:"scroll",
            padding:"20px 0%",margin:"0",backgroundColor:"#9BE0B8",marginLeft:"0px",marginRight:"0px"}}>


       <h5 style={{marginLeft:"calc(1% + 10px)"}}>Orders</h5>
         
        <div >
                  <div className="flex-container" >
         
            <div className="food-icon-card" >
            
            
            </div>
                        <div className="food-icon-card mg-left" >
            
            
            </div>
             <div className="food-icon-card mg-left" >
            
            
            </div>
            {/* <div className="food-icon-card mg-left" >
            </div> */}
            </div>
            <p className="mt-3 text-center">Upcoming   |    Completed <button onClick={()=> RemoveOrder({category:"cat-1",id:"001"})}>{order && order.length}</button></p>
        <div  style={{backgroundColor:"",marginBottom :"10px",padding:"0px 8px 12px 8px",borderRadius:"10px",marginLeft:"1%",marginRight:"1%"}}>
        <p style={{margin:"20px 0px 0px 0px"}} className="mt-4"> Category-1</p>
                <div className="flex-container my-0" >
                
                    <MenuCard  />
                    
                </div>
        <p style={{margin:"20px 0px 0px 0px"}} className="mt-5"> Category-2</p>
                    <div className="flex-container my-0" >
                <MenuCard/>
                
                    
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
            RemoveOrder:(item)=> dispatch(RemoveOrder(item))
    }
}

// export default Orders;
export default connect(mapStateToprops,mapDispatchToprops)(Orders);