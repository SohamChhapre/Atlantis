import React from 'react';
import {Link} from 'react-router-dom';
import email_icon from '../../Icons/Icons-Dash/mail.png';
import whatsapp_icon from '../../Icons/Icons-Dash/whatsapp.png';

const Whatsapp=()=>{
    

    return (
        <div style={{margin:"24px 0px 14px 0px",width:"calc(100%)"}}>
        <Link to="/Support/2">
       
        <div className="horizontal-card" style={{backgroundColor:"white",borderRadius:"20px",height:"calc(18vw + 22px)",margin:"15px 0px 15px 0px",position:"relative",boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)"}}  >
        <div style={{float:"left",margin:"11px 20px 11px 11px",backgroundColor:"#f2faf6",width:"18vw",height:"18vw",borderRadius:"10px"}}>
        
        <img src={whatsapp_icon} height='auto' width="80%"  style={{borderRadius:"5px",margin:"10%"}}/>
        
        </div>
          {/* <div className="trash-container" >
          <img src={""} className="trash-wrapper"/>
        </div> */}
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:"10px"}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="order-menu-name"  style={{fontFamily:"Poppins-SemiBold",color:"#00A852",marginTop:"0px",fontSize:"23px"}}
        >
        Whatsapp
        </div>
       
        <div className="">
            <div className="">
                <div style={{float:"left",position:"absolute",left:"calc(18vw + 30px)",bottom:"10px",fontSize:"14px",fontFamily:"Poppins-Medium",color:"rgb(60,60,60)",textAlign:"center"}}>
                Mon - Fri , 9AM - 6PM
                <div style={{marginTop:"5px",color:"#f49a04"}}>
                </div>
                </div>
            

            </div>
            
        </div>
        
        </div>
           
           
        </div>
        
        </Link>
        </div>
        
    )
}


const Email=()=>{
    

    return (
        <div style={{margin:"24px 0px 14px 0px",width:"calc(100%)"}}>
        <Link to="/Support/1">
        
        <div className="horizontal-card" style={{backgroundColor:"white",borderRadius:"20px",height:"calc(18vw + 22px)",margin:"15px 0px 15px 0px",position:"relative",boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)"}}  >
        <div style={{float:"left",margin:"11px 20px 11px 11px",backgroundColor:"#f2faf6",width:"18vw",height:"18vw",borderRadius:"10px"}}>
        
        <img src={email_icon} height='auto' width="80%"  style={{borderRadius:"5px",margin:"10%"}}/>
        
        </div>
          {/* <div className="trash-container" >
          <img src={""} className="trash-wrapper"/>
        </div> */}
        
        
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:"10px"}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="order-menu-name"  style={{fontFamily:"Poppins-SemiBold",color:"#00A852",marginTop:"0px",fontSize:"23px"}}
        >
        Email
        </div>
       
        <div className="">
            <div className="">
                <div style={{float:"left",position:"absolute",left:"calc(18vw + 30px)",bottom:"10px",fontSize:"14px",fontFamily:"Poppins-Medium",color:"rgb(60,60,60)",textAlign:"center"}}>
                Mon - Fri , 9AM - 6PM
                <div style={{marginTop:"5px",color:"#f49a04"}}>
                </div>
                </div>
            

            </div>
            
        </div>
        
        </div>
           
           
        </div>
        </Link>

        </div>
        
    )
}


const SupportDefault=()=>{



    return (

        <div>

        <div className="main-container">
        <div style={{color:"#00A852",fontSize:"23px",marginBottom:"40px",fontFamily:"Poppins-SemiBold"}}>Support</div>
            <Email/>
            <Whatsapp/>

        </div>
        </div>
    )
}


export default SupportDefault;