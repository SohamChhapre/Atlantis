import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import cart_icon from './../../Icons/Icons-Footer/green_shopping_cart.png';
import minus_icon from './../../Icons/Icons-Footer/green_subtract.png';
import plus_icon from './../../Icons/Icons-Footer/green_plus.png';
import {connect } from 'react-redux'
import {AddLaundary,RemoveLaundary,UpdateLaundary} from './../Redux/index.js';
import './Casual.css';
const data=[{id:1,name:"Wash & Fold",isset:false,desc:"Select number of clothes for wash and fold",amt:"Upto 50kg included"},{id:2,name:"Iron & Fold",isset:false,desc:"Select number of clothes for Iron & Fold ( Wash included )",amt:"Starts at just 12000 IDR"}]


const FormalMenu=({item,AddOrder,RemoveOrder,order})=>{
    const [toggler,setToggler]=useState(true)
    useEffect(()=>{
        console.log("hello")
    },[toggler])
    var flag=0;
    // console.log(item);
    // for(var i=0;i<order.length;i++){
    //         console.log(i,)
    //     if(order[i].id===item.id && order[i].category===item.category )
    //             flag=order[i].items;
    // }

    return (
        <div style={{margin:"10px",width:"calc(100% - 28px)"}}>
        <div className="horizontal-card" style={{backgroundColor:"white",height:"calc(36vw + 22px)",margin:"15px 0px 15px 0px",position:"relative",boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)"}}  >
        <div style={{float:"left",margin:"11px 20px 11px 11px",backgroundColor:"#e5f5ee",width:"36vw",height:"36vw"}}>
        {/* <img src={dummy_img} height='100%' width="100%"   /> */}
        
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:"10px"}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="food-menu-name"  style={{fontFamily:"Poppins-SemiBold",color:"#00A852",lineHeight:"30px"}}
        >
        {item.name}
        {/* <img src={heart_icon_2} className="food-heart"  style={{float:'right',marginRight:"16px",marginTop:"5px"}}/> */}
        </div>
        <div className="card-content"
        style={{
            // backgroundColor:"#c0c0c0",height:"15px",width:"25vw" ,float:"",margin:"0px 0px",
        margin:"3px 8px 0px 0px ",lineHeight:"10px",fontFamily:"Poppins-SemiBold",color:"#828282"}}>
        {item.desc}
        </div>
        <div className="text-center">
            <div className="laundary-menu-middle" style={{background:"#F5FBF8"}}>
            <img className={`${flag===0 ? "minus-plus-unactive" : ""}`} src={minus_icon} alt="dhf" height="23px" width="23px" style={{backgroundColor:"#",padding:"3px",borderRadius:"8px",float:"left"}} onClick={()=>{RemoveOrder(item);setToggler(!toggler)}}/>
            <span style={{padding:"0px 10px",position:"relative",bottom:"2px",color:"#00A852",fontFamily:"Poppins-SemiBold",fontSize:"14px",background:"#F5FBF8",borderRadius:"20px"}}>{flag}</span>
            <img className={`${flag>=3 ? "minus-plus-unactive" : ""}`} src={plus_icon} alt="dhf" height="23px" width="23px" style={{backgroundColor:"#",padding:"6px",borderRadius:"8px",float:"right"}} onClick={()=>{if(flag<=2){AddOrder(item);setToggler(!toggler)}}}/>
            </div>
            
        </div>
        
        </div>
           
            <div className="casual-card-bottom-text">{item.amt}</div>
        </div>
        <div className="food-menu-btn text-center" style={{}}><button className="btn btn-success" style={{fontSize:"11px",borderRadius:"4px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"white",marginRight:"50px"}}>Order Now</button>
        <button className="btn " style={{borderRadius:"4px",fontSize:"11px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"#F49901",background:"white",border:"1px solid #F49901"}}>Schedule</button>
        </div>

        </div>
        
    )
}
const Formal=({tempLaundaryorder,AddLaundary,RemoveLaundary,UpdateLaundary,Laundaryorder})=>{
        useEffect(()=>{

        },[tempLaundaryorder])
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
        
        <div style={{}}>
        {data.map((e,i)=>(<FormalMenu item={e} RemoveLaundary={RemoveLaundary} tempLaundaryorder={tempLaundaryorder} AddLaundary={AddLaundary} />))}
        {/* <CasualMenu/> */}
        {/* <CasualMenu/> */}
        </div>
        {
            tempLaundaryorder.length>0 && 
        <div className="text-center">
        <span style={{marginRight:"30px",color:"black",fontFamily:"Poppins-SemiBold",cursor:"pointer"}} onClick={()=>{
            RemoveLaundary({item:"",id:"all"})
        }}>Remove</span><span style={{marginRight:"",color:"black",fontFamily:"Poppins-SemiBold",cursor:"pointer"}} onClick={()=>{
            UpdateLaundary()
        }}>Continue</span>
        </div>
            }
            </div>
    )
}
const mapStateToprops=state=>{
    return {
        tempLaundaryorder:state.Laundaryorder.templaundaryOrder,
        Laundaryorder:state.Laundaryorder.laundaryOrder
    }
}
const mapDispatchToprops=dispatch=>{
    return {
        //  RemoveOrder:(item) => dispatch(RemoveOrder(item)),
            AddLaundary:(item)=> dispatch(AddLaundary(item)),
            RemoveLaundary:(item)=>dispatch(RemoveLaundary(item)),
            UpdateLaundary:()=>dispatch(UpdateLaundary())
    }
}

export default connect(mapStateToprops,mapDispatchToprops)(Formal);
