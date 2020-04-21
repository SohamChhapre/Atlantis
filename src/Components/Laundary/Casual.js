import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import cart_icon from './../../Icons/Icons-Footer/green_shopping_cart.png';

import {connect } from 'react-redux'
import {AddLaundary,RemoveLaundary} from './../Redux/index.js';

const data=[{id:1,name:"Wash & Fold"},{id:2,name:"Iron & Fold"},{id:3,name:"Dry Clean"}]
const MenuCard=({item,AddLaundary,Laundaryorder,RemoveLaundary})=>{
    const [toggler,setToggler]=useState(true)
    useEffect(()=>{
        console.log("hello")
    },[toggler])
    var flag=false;
    console.log(item);
    for(var i=0;i<Laundaryorder.length;i++){

        if(Laundaryorder[i].id===item.id )
                flag=true
    }

    return (
        
        <div className="horizontal-card" style={{backgroundColor:"white",boxShadow:"0px 0px 0px",height:"30vw",margin:"25px 0px 5px 0px",position:"relative"}}  >
        <div style={{float:"left",margin:"0px 25px 0px 0px",backgroundColor:"#e5f5ee",width:"30vw",height:"30vw"}}>
        {/* <img src={dummy_img} height='100%' width="100%"   /> */}
        
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:""}}>
        <div className="food-menu-name"  style={{fontFamily:"Poppins-Bold",color:"#525252",lineHeight:"30px",    position: 'absolute',
    left: 'calc(25px + 30vw)',
    top: '-2px'
}} >
       {item.name}

        {/* <img src={heart_icon} className="food-heart"  style={{float:'right',marginRight:"20px"}}/> */}
        </div>
        
            

        
        </div>
        <div className="" style={{position: "absolute",
left: 'calc(30vw + 25px)',
bottom: '-34px',
top: 'calc(30vw - 30px)'}}><button className="btn btn-success"  style={{borderRadius:"20px 20px 20px 20px",padding:"0px 13px 0px 13px",fontFamily:"Poppins-Bold",opacity:flag?"0.5":"1"}} onClick={()=>{
    
    
    if(flag){
        RemoveLaundary(item)
    }
    else{
        AddLaundary(item)
    }
}}>ADD</button></div>
            
            
        </div>
        
        
    )
}
const Casual=({Laundaryorder,AddLaundary,RemoveLaundary})=>{
        useEffect(()=>{

        },[Laundaryorder])
    return (
        <div className="main-container"  style={{
            maxHeight:"calc(100vh - 120px)",overflowY:"scroll",
            padding:"20px 0%",margin:"0",
            // backgroundColor:"#9BE0B8",
            marginLeft:"0px",marginRight:"0px"}}>

        
        <div className="card  dash-banner" style={{backgroundColor:"white",border:"0px",borderRadius:'5px',margin:"0px 5% 0px 5%"}}>
            <Link to="/cart"> <div className="text-right"><img src={cart_icon} height="24px" width="24px" style={{margin:"0px -25px 0px 0px"}}/><span className="text-center" style={{position:"relative",
                right: '-9px',
                top: '-16px',
                borderRadius: '50%',
                background: '#E5F5EE',
                color: '#00A852',
                padding: '2px 7px',
                border:"4px solid white",
                fontSize:"12px"

                }}>{Laundaryorder.length}</span></div></Link>
            </div>
        
        <div style={{margin:"30px 20px "}}>
        {data.map((e,i)=>(<MenuCard item={e} RemoveLaundary={RemoveLaundary} Laundaryorder={Laundaryorder} AddLaundary={AddLaundary} />))}
        
        </div>
        {
            Laundaryorder.length>0 && 
        <div className="text-right">
        <span style={{marginRight:"20px",color:"black",fontFamily:"Poppins-SemiBold"}} onClick={()=>{
            RemoveLaundary({item:"",id:"all"})
        }}>Remove</span><span style={{marginRight:"20px",color:"black",fontFamily:"Poppins-SemiBold"}}>Continue</span>
        </div>
            }
            </div>
    )
}
const mapStateToprops=state=>{
    return {
        Laundaryorder:state.Laundaryorder.laundaryOrder
    }
}
const mapDispatchToprops=dispatch=>{
    return {
        //  RemoveOrder:(item) => dispatch(RemoveOrder(item)),
            AddLaundary:(item)=> dispatch(AddLaundary(item)),
            RemoveLaundary:(item)=>dispatch(RemoveLaundary(item))
           
    }
}

export default connect(mapStateToprops,mapDispatchToprops)(Casual);
