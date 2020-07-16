
import React,{useEffect,useState} from 'react';
import email_icon from '../../Icons/Icons-Dash/mail.png';
import whatsapp_icon from '../../Icons/Icons-Dash/whatsapp.png';
import {Link} from 'react-router-dom'


const SupportNext=({match})=>{

    const [data,setData]=useState({orderno:"",err:""});
    useEffect(()=>{
        setData({orderno:"",err:""})
    },[])
    useEffect(()=>{

    },[data])
    
    var userdata=localStorage['data'];
    var name;
    if(userdata){
         name=JSON.parse(userdata).name
    }
    else{
        name={firstname:"ELizabeth",lastname:"Sin"}
    }


    return (

        <div>
        
        <div className="main-container">
        {
                match.params.id==1 &&
                <div>
        <div style={{color:"#00A852",fontSize:"23px",marginBottom:"40px",fontFamily:"Poppins-SemiBold"}}>Support</div>
            <div style={{margin:"0px 40px",fontSize:"16px",fontFamily:"Poppins-SemiBold",color:"#63364e"}}>
                Order #
            <img src={email_icon} style={{float:"right",height:"20px",width:"auto"}}/>
            </div>
            <div style={{margin:"20px 40px"}}>
            <input className="form-control" style={{border:"1px solid black"}} onChange={(e)=>{setData({...data,orderno:e.target.value})}} />
           <div style={{margin:"40px 0px"}}>
           <Link to="/Support"> <button className="btn " style={{fontFamily:"Poppins-SemiBold",padding:"6px 16px",fontSize:"11px",border:"1px solid #63364e",marginLeft:"5vw",color:"#63364e"}}>Back</button>
            </Link>
           <a href={`mailto:someone@example.com?subject=Order#${data.orderno} ${name.firstname} ${name.lastname} &body=Order# ${data.orderno}  \n ${name.firstname} ${name.lastname}`} target="_blank"> <button className="btn btn-success" style={{fontFamily:"Poppins-SemiBold",padding:"6px 16px",fontSize:"11px",float:"right",marginRight:"5vw"}}>Send Now</button>
            </a>
            
           
            
            </div>
            </div>
            </div>
            }
            { match.params.id==2 && <div>
                        <div style={{color:"#00A852",fontSize:"23px",marginBottom:"40px",fontFamily:"Poppins-SemiBold"}}>Support</div>
            <div style={{margin:"0px 40px",fontSize:"16px",fontFamily:"Poppins-SemiBold",color:"#63364e"}}>
                Order #
            <img src={whatsapp_icon} style={{float:"right",height:"20px",width:"auto"}}/>
            </div>
            <div style={{margin:"20px 40px"}}>
            <input className="form-control" style={{border:"1px solid black"}} onChange={(e)=>{setData({...data,orderno:e.target.value})}} />
           <div style={{margin:"40px 0px"}}>
           <Link to="/Support"> <button className="btn " style={{fontFamily:"Poppins-SemiBold",padding:"6px 16px",fontSize:"11px",border:"1px solid #63364e",marginLeft:"5vw",color:"#63364e"}}>Back</button>
            </Link>
           <a href={`whatsapp://send?phone=+6282129511578&text=Order No. ${data.orderno}  ${name.firstname} ${name.lastname}`} target="_blank"> <button className="btn btn-success" style={{fontFamily:"Poppins-SemiBold",padding:"6px 16px",fontSize:"11px",float:"right",marginRight:"5vw"}}>Send Now</button>
            </a>
            
           
            </div>
            </div>
            </div>
            }
        </div>
        </div>
    )
}


export default SupportNext;
