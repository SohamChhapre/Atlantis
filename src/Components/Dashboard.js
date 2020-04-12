import React from 'react';
import payment_icon from './../Icons/Icons-Footer/payment.png';
import home_icon from './../Icons/Icons-Footer/home.png';
import support_icon from './../Icons/Icons-Footer/online_support.png';
import food_icon from './../Icons/Icons-Footer/food_delivery.png';
const Dashboard=()=>{


    return(
            <div className="mx-auto" style={{minWidth:"640px",width:"640px"}}>
            
            <div className="mt-2 mb-4"> 
            <div className="text-left" style={{color:" #00A852",fontSize:"48px",paddingLeft:"65px"}}>
            Hi, <span style={{fontWeight:"700"}}>Alizabeth</span>
            </div>
            <div className="rounded-circle" style={{height:"74px" ,marginTop: '-68px',marginLeft: '-74px',marginRight: '62px',float:'right',width:"74px",backgroundColor:"#9BE0B8"}} >
                <div>
                </div>
            </div>
            </div>
            <div className="card mx-auto " style={{backgroundColor:"#E5F5EE",border:"0px",borderRadius:'5px',width:"498px" ,height:"273px"}}>
            
            </div>

            <div className="row" style={{margin:"30px 70px 0px 70px"}}>
            <div className="col-xs-6" style={{backgroundColor:"#E5F5EE",border:"0px",width:"234px" ,borderRadius:'5px',height:"212px"}}>
            </div>
            <div className="col-xs-6" style={{backgroundColor:"#E5F5EE",border:"0px",width:"234px", borderRadius:'5px',height:"212px",marginLeft:"30px"}}>
            </div>
            </div>
            <div className="row" style={{margin:"30px 70px 125px 70px"}}>
            <div className="col-xs-6" style={{backgroundColor:"#E5F5EE",border:"0px",width:"234px" ,borderRadius:'5px',height:"212px"}}>
            </div>
            <div className="col-xs-6" style={{backgroundColor:"#E5F5EE",border:"0px",width:"234px" ,height:"212px",borderRadius:'5px',marginLeft:"30px"}}>
            </div>
            </div>

            

            
            
            <nav class="navbar fixed-bottom mb-3 mx-auto " style={{backgroundColor:"#E5F5EE",borderRadius:"0px 0px 30px 30px",width:"498px"}}>
                <img src={home_icon} alt="home" />
                <img src={payment_icon} alt="payment" />
                <img src={food_icon} alt="food" />
                <img src={support_icon} alt="Support"/>
            </nav> 
            </div>


    )
}


export default Dashboard;