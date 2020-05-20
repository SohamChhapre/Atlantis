import React from 'react';

import main_banner from './../../Icons/Icons-Dash/Dash_banner.jpg'


const Login=()=>{

    return (


        <div className="main-container" style={{overflowY:"scroll",minHeight:"530px",margin:"0"}}>
        <div className="dash-banner" style={{margin:0,height:"auto"}}>
        <img src={main_banner} height="auto" width="100%"/>
        </div>
        <div style={{margin:"45px 0px 30px 0px",fontSize:"23px",width:"100%",textAlign:"center",fontFamily:"Poppins-SemiBold"}}>
        Welcome To <span style={{fontFamily:"Anteb-Black",fontSize:"26px"}}>RumaKita</span>
        </div>
        <div style={{maxWidth:"280px",margin:"0px auto"}}>
            <form>
            <div class="form-group">
                <input type="text" class="form-control" style={{border:"1px solid #00ba66",opacity:"1",fontWeight:"502",color:"black"}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Name" />
            </div>
            <div class="form-group" style={{marginTop:"30px",marginBottom:"30px"}}>
                <input type="password" style={{border:"1px solid #00ba66",opacity:"1",fontWeight:"502",color:"black"}} class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="mt-4">
            <button type="submit" class="btn btn-success" style={{
                fontSize: "12px",
                marginLeft: "20px",
                borderRadius: "4px",
                padding: "6px 23px",
                fontFamily: "Poppins-Medium",
                color: "white",
                marginBottom: "2px"}}
                >Login</button>
            <div style={{color:"#3c3c3c",float:"right",marginRight:"20px",width:"76px",marginTop:"-8px",textAlign:"left",textDecoration:"underline",fontSize:"14px"}}>
            Forgot Password ?
            </div>
            </div>
            </form>
        </div>
        </div>
    )
}




export default Login;