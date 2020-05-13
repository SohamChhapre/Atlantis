import React from 'react';



const Login=()=>{

    return (


        <div className="main-container" style={{overflowY:"scroll",minHeight:"530px"}}>

        <div style={{height:"35vh",width:"100%"}}>
        </div>
        <div style={{maxWidth:"450px",margin:"20px auto 0px auto"}}>
            <form>
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" />
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="mt-4">
            <button type="submit" class="btn btn-success" style={{
                fontSize: "11px",
                marginLeft: "20px",
                borderRadius: "4px",
                padding: "6px 13px",
                fontFamily: "Poppins-Medium",
                color: "white",
                marginBottom: "2px"}}
                >Submit</button>
            <div style={{float:"right",marginRight:"20px",width:"76px",marginTop:"-8px",textAlign:"left",textDecoration:"underline",fontSize:"14px"}}>
            Forgot Password ?
            </div>
            </div>
            </form>
        </div>
        </div>
    )
}




export default Login;