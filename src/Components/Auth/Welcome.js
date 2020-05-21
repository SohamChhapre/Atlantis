import React,{useState,useEffect} from 'react';
import welcome_screen from './../../Icons/Icons-Dash/welcome_screen.png'
import white_logo from './../../Icons/Icons-Dash/rumakita_white.png'



const Welcome=({history})=>{
    const Todash=()=>{
            // setTimeout(() => {
            //     history.push("/")
            // }, 8000);

    }

    return (
        <div className="main-container" style={{position:"relative",margin:0,height:"100vh" ,width:"100%"}}>
        {Todash()}
        <div style={{fontFamily:"Poppins-Bold",color:"white",fontSize:"40px",position:"absolute",top:"30vh",left:"calc(50% - 132px)"}}>
        <img src={white_logo} height="45px" width="45px" style={{marginRight:"15px"}}/>
        RumaKita
        <div style={{textAlign:"center",margin:"10px 45%"}}>
        <div className="loader-1 "><span></span></div>
        </div>
        </div>

        
        <img src={welcome_screen} height={"100%"} width={"100%"}/>

        </div>


    )
}


export default Welcome