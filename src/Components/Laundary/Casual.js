import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import cart_icon from './../../Icons/Icons-Footer/green_shopping_cart.png';

const MenuCard=({item,AddOrder,RemoveOrder,order})=>{
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
        
        <div className="horizontal-card" style={{backgroundColor:"white",boxShadow:"0px 0px 0px",height:"30vw",margin:"25px 0px 5px 0px",position:"relative"}}  >
        <div style={{float:"left",margin:"0px 25px 0px 0px",backgroundColor:"#e5f5ee",width:"30vw",height:"30vw"}}>
        {/* <img src={dummy_img} height='100%' width="100%"   /> */}
        
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:""}}>
        <div className="food-menu-name"  style={{fontFamily:"Poppins-Bold",color:"#00A852",lineHeight:"30px",    position: 'absolute',
    left: 'calc(25px + 30vw)',
    top: '-2px'
}} >
        Wash And Fold

        {/* <img src={heart_icon} className="food-heart"  style={{float:'right',marginRight:"20px"}}/> */}
        </div>
        
            

        
        </div>
        <div className="" style={{position: "absolute",
left: 'calc(30vw + 25px)',
bottom: '-34px',
top: 'calc(30vw - 30px)'}}><button className="btn btn-success" style={{borderRadius:"20px 20px 20px 20px",padding:"0px 13px 0px 13px",fontFamily:"Poppins-Bold"}}>ADD</button></div>
            
            
        </div>
        
        
    )
}
const Casual=()=>{

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

}}>{1}</span></div></Link>
            </div>
        
        <div style={{margin:"30px 20px "}}>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        </div>
        <div>
        <button className="btn btn-success">Submit</button>
        </div>
            </div>
    )
}

export default Casual;
