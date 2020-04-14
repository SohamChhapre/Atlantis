import React from 'react';
import payment_icon from './../Icons/Icons-Footer/payment.png';
import home_icon from './../Icons/Icons-Footer/home.png';
import support_icon from './../Icons/Icons-Footer/online_support.png';
import food_icon from './../Icons/Icons-Footer/food_delivery.png';
import default_home from './../Icons/Icons-Footer/home_default.png';
import default_payment from './../Icons/Icons-Footer/payment_default.png';
import default_support from './../Icons/Icons-Footer/support_default.png';
import default_food_delivery from './../Icons/Icons-Footer/food_delivery_default.png';


const NavActiveicon=({img,name})=>{

    return (
        <div className="text-center pt-1" style={{borderTop:"2px solid #00a852 "}}> <img src={img} className="nav-icon" alt="home" /><p className="mb-1 nav-p-sty" style={{color:"#00a852",fontFamily:"Poppins-SemiBold"}}>{name}</p></div>
    )
}

const NavIcon=({img,name})=>{

    return (
        <div className="text-center pt-1"> <img src={img} className="nav-icon" alt="home" /><p className="mb-1 nav-p-sty" style={{color:"#b8bcc7",fontFamily:"Poppins-SemiBold"}}>{name}</p></div>
    )
}


const Dashboard=()=>{


    return(
            <div className="main-container" >
            
            <div className="mt-1 mb-4"> 
            <div className="text-left dash-text" >
           <span style={{fontFamily:"Anteb-Medium"}}> Hi</span>, <span style={{fontFamily:"Anteb-Black"}} >Alizabeth</span>
            </div>
            <div className="rounded-circle dash-profile"  >
                <div>
                </div>
            </div>
            </div>

            <div className="card mx-auto dash-banner" style={{backgroundColor:"#E5F5EE",border:"0px",borderRadius:'5px'}}>
            
            </div>

            <div className="flex-container" >
            <div className="icon-card" >
            </div>
            <div className="icon-card mg-left" >
            </div>
            </div>
            <div className="flex-container">
            <div className="icon-card" >
            </div>
            <div className="icon-card mg-left" >
            </div>
            </div>

            

            
            
            <nav class="navbar fixed-bottom dash-nav" style={{borderRadius:"0px 0px 30px 30px",padding:"0px 1rem 0rem 1rem"}}>
               {/* <div className="text-center pt-1"> <img src={home_icon} className="nav-icon" alt="home" /><p className="mb-1">Home</p></div>
                <div className="text-center pt-1"><img src={payment_icon}  className="nav-icon" alt="payment" /><p className="mb-1">Payments</p></div>
                <div className="text-center pt-1"><img src={food_icon} className="nav-icon" alt="food" /><p className="mb-1">Orders</p></div>
                <div className="text-center pt-1"><img src={support_icon} className="nav-icon mx-auto" alt="Support"/><p className="mb-1">Support</p></div> */}
                {/* <NavIcon img={default_home} name={"Home"}/> */}
                <NavActiveicon img={home_icon} name={"Home"}/>
                <NavIcon img={default_payment} name={"Payments"}/>
                <NavIcon img={default_food_delivery} name={"Orders"}/>
                <NavIcon img={default_support} name={"Support"}/>
            
            </nav> 

            
            </div>


    )
}


export default Dashboard;