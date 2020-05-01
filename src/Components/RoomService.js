import React from 'react';
import {Link} from 'react-router-dom';

import cart_icon from './../Icons/Icons-Footer/green_shopping_cart.png';

const RoomServicedata=[{id:1,name:"Cleaning",content:["Dusting","Bedding","Floor","Washroom"],timing:"10AM - 6PM"},{id:2,name:"Repairs",content:["Furniture","AC","Washroom"],timing:"10AM - 6PM"}]
const ServiceMenu=({item,AddOrder,RemoveOrder,order})=>{
    // const [toggler,setToggler]=useState(true)
    // useEffect(()=>{
    //     console.log("hello")
    // },[toggler])
    var contentarr=item.content.slice(0,item.content.length-1);
    var flag=0;
    // console.log(item);
    // for(var i=0;i<order.length;i++){
    //         console.log(i,)
    //     if(order[i].id===item.id && order[i].category===item.category )
    //             flag=order[i].items;
    // }

    return (
        <div style={{margin:"14px 14px 34px 14px",width:"calc(100% - 28px)"}}>
        <div className="horizontal-card" style={{backgroundColor:"white",borderRadius:"20px",height:"calc(18vw + 22px)",margin:"15px 0px 15px 0px",position:"relative",boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)"}}  >
        <div style={{float:"left",margin:"11px 20px 11px 11px",backgroundColor:"#e5f5ee",width:"18vw",height:"18vw",borderRadius:"10px"}}>
        
        {/* <img src={dummy_img} height='100%' width="100%"   /> */}
        
        </div>
          
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:"10px"}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="order-menu-name"  style={{fontFamily:"Poppins-SemiBold",color:"#00A852",lineHeight:"30px"}}
        >
        {item.name}
        </div>
       
            <div className="">
                <div className="service-content">
                 {contentarr.map((e,i)=>(<span key={i}> {e}<span style={{margin:"0px 5px"}}>|</span></span>))}
                   {item.content[item.content.length-1]}
              
                </div>
            <div style={{position:"absolute",bottom:"10px",left:"calc(18vw + 30px)",fontSize:"9px",fontFamily:"Poppins-MediumItalic",color:"rgb(130,130,130)",textAlign:"center"}}>
               Timing : 10AM - 6PM
                </div>

            </div>
            
        </div>
        
           
           
        </div>
        
<div className="food-menu-btn text-center" style={{}}><button className="btn btn-success" style={{fontSize:"11px",borderRadius:"4px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"white",marginRight:"50px"}}>Order Now</button>
        <button className="btn " style={{borderRadius:"4px",fontSize:"11px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"#F49901",background:"white",border:"1px solid #F49901"}}>Schedule</button>
        </div>
        </div>
        
    )
}

const RoomService=()=>{


    return (
        <div>
        <p className="view-block">Rotate to portrait mode </p>
    <p className="desktop-block">We Support Mobile View Only</p>
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

}}>{0}</span></div></Link>
            </div>
            {RoomServicedata.map((e,i)=>(<ServiceMenu item={e}/>))}
            
            {/* <ServiceMenu/> */}
            </div>
            </div>
    )
}



export default RoomService;