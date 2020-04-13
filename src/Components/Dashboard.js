import React from 'react';
import payment_icon from './../Icons/Icons-Footer/payment.png';
import home_icon from './../Icons/Icons-Footer/home.png';
import support_icon from './../Icons/Icons-Footer/online_support.png';
import food_icon from './../Icons/Icons-Footer/food_delivery.png';
const Dashboard=()=>{


    return(
            <div className="main-container" >
            
            <div className="mt-2 mb-4"> 
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
            <div className="icon-card" style={{marginLeft:"2%"}} >
            </div>
            
            <div className="icon-card" >
            </div>
            <div className="icon-card" style={{marginLeft:"2%"}}>
            </div>
            </div>

            

            
            
            <nav class="navbar fixed-bottom dash-nav" style={{backgroundColor:"#E5F5EE",borderRadius:"0px 0px 30px 30px"}}>
                <img src={home_icon} className="nav-icon" alt="home" />
                <img src={payment_icon}  className="nav-icon" alt="payment" />
                <img src={food_icon} className="nav-icon" alt="food" />
                <img src={support_icon} className="nav-icon" alt="Support"/>
            </nav> 
            </div>


    )
}


export default Dashboard;