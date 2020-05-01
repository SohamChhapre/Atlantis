import React from 'react';
import {Link} from 'react-router-dom'

import Credit_card from './../../Icons/Icons-Payment/credit card.png'

const master_card="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyOTEuNzkxIDI5MS43OTEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5MS43OTEgMjkxLjc5MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0UyNTc0QzsiIGQ9Ik0xODIuMjk4LDE0NS44OTVjMCw1MC4zNjYtNDAuODAxLDkxLjE3Ni05MS4xNDksOTEuMTc2UzAsMTk2LjI1MiwwLDE0NS44OTUgICBzNDAuODExLTkxLjE3Niw5MS4xNDktOTEuMTc2UzE4Mi4yOTgsOTUuNTM4LDE4Mi4yOTgsMTQ1Ljg5NXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGNEI0NTk7IiBkPSJNMjAwLjYxNiw1NC43MTljLTIwLjQ0MiwwLTM5LjI2MSw2LjgxMS01NC40NjksMTguMTgxbDAuMDczLDAuMDA5ICAgYzIuOTkxLDIuODksNi4yOTEsNC45MjQsOC44MzUsOC4yNTFsLTE4Ljk2NSwwLjMwMWMtMi45NzIsMy01LjY4LDYuMjY0LTguMjMzLDkuNjU2SDE2MS4zYzIuNTQ0LDMuMDU0LDQuODk2LDUuNzA4LDcuMDMsOS4wODEgICBoLTQ2LjUzNmMtMS43MDUsMi45MzYtMy4yODIsNS45NTQtNC42NTksOS4wOWg1Ni40OTNjMS40NzcsMy4xMjcsMi43OTksNS40ODksMy45MjEsOC43OTloLTYzLjc2ICAgYy0xLjAxMiwzLjE0Ni0xLjg3OCw2LjM2NC0yLjUzNSw5LjY0Nmg2OC45NjZjMC42NzUsMy4xNTUsMS4xOTQsNi4wNzIsMS41NSw5LjA0NWgtNzEuODg0Yy0wLjMwMSwzLTAuNDU2LDYuMDQ1LTAuNDU2LDkuMTE4ICAgaDcyLjg1OWMwLDMuMjI4LTAuMjI4LDYuMjE4LTAuNTU2LDkuMTE4aC03MS44NDdjMC4zMSwzLjA5MSwwLjc2Niw2LjEyNywxLjM2OCw5LjExOGg2OC44NTZjLTAuNzExLDIuOTU0LTEuNTMyLDUuOTI2LTIuNTYyLDkuMDA4ICAgaC02My45NjljMC45NjYsMy4xMTgsMi4xNDMsNi4xNDUsMy40MjgsOS4wOTloNTYuNjIxYy0xLjU2OCwzLjMxOS0zLjM0Niw1Ljk3Mi01LjMwNiw5LjA4MWgtNDYuNjkxICAgYzEuODQyLDMuMTkxLDMuODc1LDYuMjM2LDYuMDgxLDkuMTU0bDMzLjU4OSwwLjUwMWMtMi44NjMsMy40MzctNi41MzcsNS41MDctOS44ODQsOC41MTZjMC4xODIsMC4xNDYtNS4zNTItMC4wMTgtMTYuMjQ4LTAuMTkxICAgYzE2LjU3NiwxNy4xMDUsMzkuNzQ0LDI3Ljc3Miw2NS40NDYsMjcuNzcyYzUwLjM1NywwLDkxLjE3Ni00MC44Miw5MS4xNzYtOTEuMTc2UzI1MC45ODEsNTQuNzE5LDIwMC42MTYsNTQuNzE5eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
const close_icon="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDA5LjgwNiA0MDkuODA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDkuODA2IDQwOS44MDY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjI4LjkyOSwyMDUuMDFMNDA0LjU5NiwyOS4zNDNjNi43OC02LjU0OCw2Ljk2OC0xNy4zNTIsMC40Mi0yNC4xMzJjLTYuNTQ4LTYuNzgtMTcuMzUyLTYuOTY4LTI0LjEzMi0wLjQyICAgIGMtMC4xNDIsMC4xMzctMC4yODIsMC4yNzctMC40MiwwLjQyTDIwNC43OTYsMTgwLjg3OEwyOS4xMjksNS4yMWMtNi43OC02LjU0OC0xNy41ODQtNi4zNi0yNC4xMzIsMC40MiAgICBjLTYuMzg4LDYuNjE0LTYuMzg4LDE3LjA5OSwwLDIzLjcxM0wxODAuNjY0LDIwNS4wMUw0Ljk5NywzODAuNjc3Yy02LjY2Myw2LjY2NC02LjY2MywxNy40NjgsMCwyNC4xMzIgICAgYzYuNjY0LDYuNjYyLDE3LjQ2OCw2LjY2MiwyNC4xMzIsMGwxNzUuNjY3LTE3NS42NjdsMTc1LjY2NywxNzUuNjY3YzYuNzgsNi41NDgsMTcuNTg0LDYuMzYsMjQuMTMyLTAuNDIgICAgYzYuMzg3LTYuNjE0LDYuMzg3LTE3LjA5OSwwLTIzLjcxMkwyMjguOTI5LDIwNS4wMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzVFNUU1RSIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+"

const ADD1=()=>{
    return (
        <div class="">
    <div class="" style={{margin:"0px",width:"100vw",height:"100%"}}>
      <div class="" style={{height:"100%",maxHeight:"100%",overflowY:"scroll"}}>
      
       
        <div class="">
         
          <Link exact to="/payments"><img src={close_icon}  data-dismiss="modal" style={{float:"right",height:"15px",float:"right",margin:"5% 5% 0px 0px"}}/></Link>
        </div>
        
       
        <div class="" style={{padding:"10px"}}>
         <div style={{height:"50vw",width:"100%",marginTop:"60px"}}>
         <img src={Credit_card} height="100%" width="100%"/>
         </div>
         
        <div style={{textAlign:"center",width:"100%",marginTop:"50px"}}>
        <input className="form-control" type="number" style={{width: '90%',marginLeft:"5%"
            }} placeholder="Enter Card Number"/>
        <button className="btn " style={{opacity:"0",borderRadius:"4px",fontSize:"11px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"#F49901",background:"white",border:"1px solid #F49901",margin:"30px 50px 0px 0px"}} >Back</button>
       
        {/* <button className="btn btn-success" style={{fontSize:"11px",borderRadius:"4px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"white",marginTop:"30px"}} data-toggle="modal" data-target="#myModal2">Next</button> */}
       <a href="#myModal2" data-toggle="modal" data-dismiss="modal"> <button className="btn btn-success" style={{fontSize:"11px",borderRadius:"4px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"white",marginTop:"30px"}} >Next</button></a>
        </div>
        </div>
        
        
       
        
      </div>
    </div>
  </div>
    )
}

const ADD2=()=>{
    return (

        <div>
        </div>
    )
}

const PaymentsModels=(props)=>{

        console.log(props);

    return (


        <div class="">
    <div class="" style={{margin:"0px",width:"100vw",height:"100%"}}>
      <div class="" style={{height:"100%",maxHeight:"100%",overflowY:"scroll"}}>
      
       
        <div class="">
         
          <Link exact to="/payments"><img src={close_icon}  data-dismiss="modal" style={{float:"right",height:"15px",float:"right",margin:"5% 5% 0px 0px"}}/></Link>
        </div>
        
       
        <div class="" style={{padding:"10px"}}>
         <div style={{height:"50vw",width:"100%",marginTop:"60px"}}>
         <img src={Credit_card} height="100%" width="100%"/>
         </div>
         
        <div style={{textAlign:"center",width:"100%",marginTop:"50px"}}>
        <input className="form-control" type="number" style={{width: '90%',marginLeft:"5%"
            }} placeholder="Enter Card Number"/>
        <button className="btn " style={{opacity:"0",borderRadius:"4px",fontSize:"11px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"#F49901",background:"white",border:"1px solid #F49901",margin:"30px 50px 0px 0px"}} >Back</button>
       
        {/* <button className="btn btn-success" style={{fontSize:"11px",borderRadius:"4px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"white",marginTop:"30px"}} data-toggle="modal" data-target="#myModal2">Next</button> */}
       <a href="#myModal2" data-toggle="modal" data-dismiss="modal"> <button className="btn btn-success" style={{fontSize:"11px",borderRadius:"4px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"white",marginTop:"30px"}} >Next</button></a>
        </div>
        </div>
        
        
       
        
      </div>
    </div>
  </div>
    )
}



export default PaymentsModels;