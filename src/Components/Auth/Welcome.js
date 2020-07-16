import React,{useState,useEffect} from 'react';
import welcome_screen from './../../Icons/Icons-Dash/welcome_screen.png'
import white_logo from './../../Icons/Icons-Dash/rumakita_white.png'
import welcome_webp from './../../Icons/Icons-Dash/img-login-portrait.png'


const Welcome=({history})=>{
    const Todash=()=>{
            setTimeout(() => {
                history.push("/")
            }, 8000);

    }
    var heightInner=window.innerHeight;
    // console.log(heightInner)
    return (
        <div className="main-container" style={{overflowY:"hidden",position:"relative",margin:0,width:"100%",textAlign:"center"}}>
         { Todash() }
        {/* <div style={{fontFamily:"Poppins-Bold",color:"white",fontSize:"40px",position:"absolute",top:"30vh",left:"calc(50% - 132px)"}}>
        <img src={white_logo} height="45px" width="45px" style={{marginRight:"15px"}}/>
        RumaKita
        <div style={{textAlign:"center",margin:"10px 45%"}}>
        <div className="loader-1 "><span></span></div>
        </div>
        </div>

        
        <img src={welcome_screen} height={"100%"} width={"100%"}/> 
         */}
       {/* <picture>
        <source srcset={welcome_webp} type="image/webp"/>
       </picture> */}
        <img src={welcome_webp} height={`${heightInner}px`} width={"auto"}/> 


        </div>


    )
}


export default Welcome