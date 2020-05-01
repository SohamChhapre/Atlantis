import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';
import Credit_card from './../../Icons/Icons-Payment/credit card.png'
import './../Payements.css'
import Datetime from 'react-datetime';
import {connect} from 'react-redux'
import {UpdateCard} from './../Redux/index.js';
const master_card="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyOTEuNzkxIDI5MS43OTEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5MS43OTEgMjkxLjc5MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0UyNTc0QzsiIGQ9Ik0xODIuMjk4LDE0NS44OTVjMCw1MC4zNjYtNDAuODAxLDkxLjE3Ni05MS4xNDksOTEuMTc2UzAsMTk2LjI1MiwwLDE0NS44OTUgICBzNDAuODExLTkxLjE3Niw5MS4xNDktOTEuMTc2UzE4Mi4yOTgsOTUuNTM4LDE4Mi4yOTgsMTQ1Ljg5NXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGNEI0NTk7IiBkPSJNMjAwLjYxNiw1NC43MTljLTIwLjQ0MiwwLTM5LjI2MSw2LjgxMS01NC40NjksMTguMTgxbDAuMDczLDAuMDA5ICAgYzIuOTkxLDIuODksNi4yOTEsNC45MjQsOC44MzUsOC4yNTFsLTE4Ljk2NSwwLjMwMWMtMi45NzIsMy01LjY4LDYuMjY0LTguMjMzLDkuNjU2SDE2MS4zYzIuNTQ0LDMuMDU0LDQuODk2LDUuNzA4LDcuMDMsOS4wODEgICBoLTQ2LjUzNmMtMS43MDUsMi45MzYtMy4yODIsNS45NTQtNC42NTksOS4wOWg1Ni40OTNjMS40NzcsMy4xMjcsMi43OTksNS40ODksMy45MjEsOC43OTloLTYzLjc2ICAgYy0xLjAxMiwzLjE0Ni0xLjg3OCw2LjM2NC0yLjUzNSw5LjY0Nmg2OC45NjZjMC42NzUsMy4xNTUsMS4xOTQsNi4wNzIsMS41NSw5LjA0NWgtNzEuODg0Yy0wLjMwMSwzLTAuNDU2LDYuMDQ1LTAuNDU2LDkuMTE4ICAgaDcyLjg1OWMwLDMuMjI4LTAuMjI4LDYuMjE4LTAuNTU2LDkuMTE4aC03MS44NDdjMC4zMSwzLjA5MSwwLjc2Niw2LjEyNywxLjM2OCw5LjExOGg2OC44NTZjLTAuNzExLDIuOTU0LTEuNTMyLDUuOTI2LTIuNTYyLDkuMDA4ICAgaC02My45NjljMC45NjYsMy4xMTgsMi4xNDMsNi4xNDUsMy40MjgsOS4wOTloNTYuNjIxYy0xLjU2OCwzLjMxOS0zLjM0Niw1Ljk3Mi01LjMwNiw5LjA4MWgtNDYuNjkxICAgYzEuODQyLDMuMTkxLDMuODc1LDYuMjM2LDYuMDgxLDkuMTU0bDMzLjU4OSwwLjUwMWMtMi44NjMsMy40MzctNi41MzcsNS41MDctOS44ODQsOC41MTZjMC4xODIsMC4xNDYtNS4zNTItMC4wMTgtMTYuMjQ4LTAuMTkxICAgYzE2LjU3NiwxNy4xMDUsMzkuNzQ0LDI3Ljc3Miw2NS40NDYsMjcuNzcyYzUwLjM1NywwLDkxLjE3Ni00MC44Miw5MS4xNzYtOTEuMTc2UzI1MC45ODEsNTQuNzE5LDIwMC42MTYsNTQuNzE5eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
const close_icon="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDA5LjgwNiA0MDkuODA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDkuODA2IDQwOS44MDY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjI4LjkyOSwyMDUuMDFMNDA0LjU5NiwyOS4zNDNjNi43OC02LjU0OCw2Ljk2OC0xNy4zNTIsMC40Mi0yNC4xMzJjLTYuNTQ4LTYuNzgtMTcuMzUyLTYuOTY4LTI0LjEzMi0wLjQyICAgIGMtMC4xNDIsMC4xMzctMC4yODIsMC4yNzctMC40MiwwLjQyTDIwNC43OTYsMTgwLjg3OEwyOS4xMjksNS4yMWMtNi43OC02LjU0OC0xNy41ODQtNi4zNi0yNC4xMzIsMC40MiAgICBjLTYuMzg4LDYuNjE0LTYuMzg4LDE3LjA5OSwwLDIzLjcxM0wxODAuNjY0LDIwNS4wMUw0Ljk5NywzODAuNjc3Yy02LjY2Myw2LjY2NC02LjY2MywxNy40NjgsMCwyNC4xMzIgICAgYzYuNjY0LDYuNjYyLDE3LjQ2OCw2LjY2MiwyNC4xMzIsMGwxNzUuNjY3LTE3NS42NjdsMTc1LjY2NywxNzUuNjY3YzYuNzgsNi41NDgsMTcuNTg0LDYuMzYsMjQuMTMyLTAuNDIgICAgYzYuMzg3LTYuNjE0LDYuMzg3LTE3LjA5OSwwLTIzLjcxMkwyMjguOTI5LDIwNS4wMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzVFNUU1RSIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+"
const visa_icon="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMTQxLjczMiAxNDEuNzMyIj48ZyBmaWxsPSIjMjU2NmFmIj48cGF0aCBkPSJNNjIuOTM1IDg5LjU3MWgtOS43MzNsNi4wODMtMzcuMzg0aDkuNzM0ek00NS4wMTQgNTIuMTg3TDM1LjczNSA3Ny45bC0xLjA5OC01LjUzNy4wMDEuMDAyLTMuMjc1LTE2LjgxMnMtLjM5Ni0zLjM2Ni00LjYxNy0zLjM2NmgtMTUuMzRsLS4xOC42MzNzNC42OTEuOTc2IDEwLjE4MSA0LjI3M2w4LjQ1NiAzMi40NzloMTAuMTQxbDE1LjQ4NS0zNy4zODVINDUuMDE0ek0xMjEuNTY5IDg5LjU3MWg4LjkzN2wtNy43OTItMzcuMzg1aC03LjgyNGMtMy42MTMgMC00LjQ5MyAyLjc4Ni00LjQ5MyAyLjc4Nkw5NS44ODEgODkuNTcxaDEwLjE0NmwyLjAyOS01LjU1M2gxMi4zNzNsMS4xNCA1LjU1M3ptLTEwLjcxLTEzLjIyNGw1LjExNC0xMy45OSAyLjg3NyAxMy45OWgtNy45OTF6TTk2LjY0MiA2MS4xNzdsMS4zODktOC4wMjhzLTQuMjg2LTEuNjMtOC43NTQtMS42M2MtNC44MyAwLTE2LjMgMi4xMTEtMTYuMyAxMi4zNzYgMCA5LjY1OCAxMy40NjIgOS43NzggMTMuNDYyIDE0Ljg1MXMtMTIuMDc1IDQuMTY0LTE2LjA2Ljk2NWwtMS40NDcgOC4zOTRzNC4zNDYgMi4xMTEgMTAuOTg2IDIuMTExYzYuNjQyIDAgMTYuNjYyLTMuNDM5IDE2LjY2Mi0xMi43OTkgMC05LjcyLTEzLjU4My0xMC42MjUtMTMuNTgzLTE0Ljg1MS4wMDEtNC4yMjcgOS40OC0zLjY4NCAxMy42NDUtMS4zODl6Ii8+PC9nPjxwYXRoIGQ9Ik0zNC42MzggNzIuMzY0bC0zLjI3NS0xNi44MTJzLS4zOTYtMy4zNjYtNC42MTctMy4zNjZoLTE1LjM0bC0uMTguNjMzczcuMzczIDEuNTI4IDE0LjQ0NSA3LjI1M2M2Ljc2MiA1LjQ3MiA4Ljk2NyAxMi4yOTIgOC45NjcgMTIuMjkyeiIgZmlsbD0iI2U2YTU0MCIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMTQxLjczMnYxNDEuNzMySDB6Ii8+Cgk8bWV0YWRhdGE+CgkJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpyZGZzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzAxL3JkZi1zY2hlbWEjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgoJCQk8cmRmOkRlc2NyaXB0aW9uIGFib3V0PSJodHRwczovL2ljb25zY291dC5jb20vbGVnYWwjbGljZW5zZXMiIGRjOnRpdGxlPSJ2aXNhIiBkYzpkZXNjcmlwdGlvbj0idmlzYSIgZGM6cHVibGlzaGVyPSJJY29uc2NvdXQiIGRjOmRhdGU9IjIwMTctMDYtMTciIGRjOmZvcm1hdD0iaW1hZ2Uvc3ZnK3htbCIgZGM6bGFuZ3VhZ2U9ImVuIj4KCQkJCTxkYzpjcmVhdG9yPgoJCQkJCTxyZGY6QmFnPgoJCQkJCQk8cmRmOmxpPkljb24gTWFmaWE8L3JkZjpsaT4KCQkJCQk8L3JkZjpCYWc+CgkJCQk8L2RjOmNyZWF0b3I+CgkJCTwvcmRmOkRlc2NyaXB0aW9uPgoJCTwvcmRmOlJERj4KICAgIDwvbWV0YWRhdGE+PC9zdmc+Cg=="


const ADD1=({newcard,UpdateCard})=>{
    const [number,setNumber]=useState("");
    const [err,setErr]=useState("");
    const [icon,setIcon]=useState("")

    useEffect(()=>{
        setNumber(newcard.card_no)
        setErr("")
        setIcon("")
    },[])
    useEffect(()=>{
      
    if( number.length >1 && (!(number.startsWith("4") || number.startsWith("5"))) )
            setTimeout(() => {
            setErr("Invalid Card number")   
                    }, 50);
    else if (number.length > 16)
      setErr("Exceeds 16 digits")
    else{
      
          setErr("")
    }
    if(number.startsWith(5))
    setIcon(master_card);
    else if (number.startsWith(4))
    setIcon(visa_icon)
    else{
    setIcon("")
    }
                },[number])
      useEffect(()=>{

      },[err])
   var inputvalue=number
   
    
    return (
        <div>
    <div  style={{margin:"0px",width:"100vw",height:"100%"}}>
      <div class="" style={{height:"100%",maxHeight:"100%",overflowY:"scroll"}}>
      
       
        <div class="">
         
          <Link exact to="/payments"><img src={close_icon}  data-dismiss="modal" style={{float:"right",height:"15px",float:"right",margin:"5% 5% 0px 0px"}}/></Link>
        </div>
        
       
        <div class="" style={{padding:"10px"}}>
         <div style={{height:"50vw",width:"100%",marginTop:"60px",position:"relative"}}>
         <img src={icon} style={{position:"absolute",bottom:"2px",right:"5%",height:"22%"}}/>
         <p style={{position:"absolute",
                left: "10%",
                color: "#d6d6d6",
                fontFamily: "Poppins-SemiBold",
                top: "46%",
                marginBottom: "0px",
                fontSize: "6vw"         
         }}>
         {number.slice(0,4)} {number.slice(4,8)} {number.slice(8,12)} {number.slice(12,16)}</p>
         {/* <p style={{position:"absolute",left:"74%",bottom:"23%",marginBottom:"0px",color:"#d6d6d6",fontFamily:"Poppins-SemiBold",fontSize:"4vw"}}>08/2020</p>
         <p style={{position:"absolute",left:"10%",bottom:"6%",color:"#d6d6d6",fontFamily:"Poppins-SemiBold",fontSize:"4vw",marginBottom:"0px"}}>Elizabeth </p> */}
         <img src={Credit_card} height="100%" width="100%"/>
         </div>
         
        <div style={{textAlign:"center",width:"100%",marginTop:"50px"}}>
        <input className="form-control" type="number" style={{width: '90%',marginLeft:"5%"
            }} placeholder="Enter Card Number" value={inputvalue} onChange={(e)=>{
                
                setNumber(`${e.target.value}`)
                if(number==="")
                    setErr("")
               
            }}/>

                <p style={{color:"red",fontSize:"10px",textAlign:"center"}}>{err}</p>
            

        <button className="btn " style={{opacity:"0",borderRadius:"4px",fontSize:"11px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"#F49901",background:"white",border:"1px solid #F49901",margin:"30px 50px 0px 0px"}} >Back</button>
       
        {/* <button className="btn btn-success" style={{fontSize:"11px",borderRadius:"4px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"white",marginTop:"30px"}} data-toggle="modal" data-target="#myModal2">Next</button> */}
       <Link exact to="/payments/2" onClick={(e)=>{
           if(!(number.startsWith("4") || number.startsWith("5")) )
                {setErr("Invalid Card number")
                    e.preventDefault()
                }
           else if(number.length!==16){
               setErr("Number should be of 16 digit")
               e.preventDefault()
           }
           
           else{
                UpdateCard({...newcard,"card_no":number})
           }
       
       }}><button className="btn btn-success" style={{fontSize:"11px",borderRadius:"4px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"white",marginTop:"30px"}} >Next</button></Link>
        </div>
        </div>
        
        
       
        
      </div>
    </div>
  </div>
    )
}

const ADD2=({newcard,UpdateCard})=>{
    const [expirydate,setExpirydate]=useState({month:"",year:""});
    const [err,setErr]=useState("")
    useEffect(()=>{
     setExpirydate(newcard.expiry)   ;
     setErr('')
    },[])
    useEffect(()=>{
      // console.log(expirydate)
    if(expirydate.month){
      setErr("")
    }

    },[expirydate,err])
    var icon=newcard.card_no.startsWith("4")?visa_icon:master_card;
    icon=!icon && newcard.card_no.startsWith("5")?master_card:""
    
    return (

       <div  >
    <div  style={{margin:"0px",width:"100vw",height:"100%"}}>
      <div  style={{height:"100vh",maxHeight:"100vh",overflowY:"scroll"}}>
      
       
        <div >
        <Link exact to="/payments">  <img src={close_icon}  style={{float:"right",height:"15px",float:"right",margin:"5% 5% 0px 0px"}}/>
         </Link>
        </div>
        
       
        <div class="" style={{padding:"10px"}}>
         <div style={{height:"50vw",width:"100%",marginTop:"60px",position:"relative"}}>
         <img src={icon} style={{position:"absolute",bottom:"2px",right:"5%",height:"22%"}}/>
         <p style={{position:"absolute",
                left: "10%",
                color: "#d6d6d6",
                fontFamily: "Poppins-SemiBold",
                top: "46%",
                marginBottom: "0px",
                fontSize: "6vw"         
         }}>
         XXXX XXXX XXXX {newcard.card_no.slice(12,16)}</p>
         <p style={{position:"absolute",left:"74%",bottom:"23%",marginBottom:"0px",color:"#d6d6d6",fontFamily:"Poppins-SemiBold",fontSize:"4vw"}}>{expirydate.month?`${expirydate.month} / `:""}{expirydate.year}</p>
         
         <img src={Credit_card} height="100%" width="100%"/>
         </div>
         <div style={{textAlign:"center",width:"100%",marginTop:"50px"}}>
        {/* <input type="month" style={{width: '90%',
            height: "41px",borderRadius: '10px',
            padding: "0px 10px",
            textDecoration: "none"}} placeholder="Expiry Date"/> */}
            <Datetime  inputProps={{  placeholder: 'Expiry Date' }}   onChange={(e)=>{
                    console.log(e);
                    var dateobj=e._d;

                    setExpirydate({month:dateobj.getMonth()+1,year:dateobj.getFullYear()})

            }} className="date-picker" dateFormat="MM/YYYY" timeFormat={false} />
        <p style={{fontSize:"10px",color:"red",textAlign:"center"}}>{err}</p>
        <Link exact to="/payments/1">
        
        <button className="btn " style={{borderRadius:"4px",fontSize:"11px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"#F49901",background:"white",border:"1px solid #F49901",margin:"30px 50px 0px 0px"}}>Back</button>
        </Link>
        {/* <button className="btn " style={{borderRadius:"4px",fontSize:"11px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"#F49901",background:"white",border:"1px solid #F49901",margin:"30px 50px 0px 0px"}}>Back</button> */}
        {/* <button className="btn btn-success" style={{fontSize:"11px",borderRadius:"4px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"white",marginTop:"30px"}} data-toggle="modal" data-target="#myModal3">Next</button> */}
        <Link exact to="/payments/3" onClick={(e)=>{
              if(!expirydate.month || !expirydate.year)
                {
                  setErr("Selct Expiry")
                  e.preventDefault();
                }
                else{
                  UpdateCard({...newcard,expiry:expirydate})
                }
        }}>
        <button className="btn btn-success" style={{fontSize:"11px",borderRadius:"4px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"white",marginTop:"30px"}} >Next</button>
        </Link>
        </div>
        </div>

      </div>
    </div>
  </div>
    )
}

const ADD3=({newcard,UpdateCard})=>{
    const [firstname,setFirstname]=useState("");
    const [err,setErr]=useState("")
    useEffect(()=>{
            setFirstname(newcard.name)
            setErr("")
    },[])
    useEffect(()=>{
        if(firstname.length>2){
          setErr("")
        }
    },[firstname,err])
    // console.log(newcard)


    var icon=newcard.card_no.startsWith("4")?visa_icon:master_card;
    icon=!icon && newcard.card_no.startsWith("5")?master_card:""
    return (
         <div  >
    <div  style={{margin:"0px",width:"100vw",height:"100%"}}>
      <div  style={{height:"100%",maxHeight:"100%",overflowY:"scroll"}}>
      
       
        <div >
          <Link exact to="/payments"><img src={close_icon}  data-dismiss="modal" style={{float:"right",height:"15px",float:"right",margin:"5% 5% 0px 0px"}}/>
         </Link>
        </div>
        
       
        <div class="" style={{padding:"10px"}}>
         <div style={{height:"50vw",width:"100%",marginTop:"60px",position:"relative"}}>
         
         
         <img src={icon} style={{position:"absolute",bottom:"2px",right:"5%",height:"22%"}}/>
         
         <p style={{position:"absolute",
                left: "10%",
                color: "#d6d6d6",
                fontFamily: "Poppins-SemiBold",
                top: "46%",
                marginBottom: "0px",
                fontSize: "6vw"         
         }}>
         XXXX XXXX XXXX {newcard.card_no.slice(12,16)}</p>
         <p style={{position:"absolute",left:"74%",bottom:"23%",marginBottom:"0px",color:"#d6d6d6",fontFamily:"Poppins-SemiBold",fontSize:"4vw"}}>{newcard.expiry.month?`${newcard.expiry.month} / `:""}{newcard.expiry.year}</p>
         <p style={{position:"absolute",left:"10%",bottom:"6%",color:"#d6d6d6",fontFamily:"Poppins-SemiBold",fontSize:"4vw",marginBottom:"0px"}}>{firstname} </p>
         <img src={Credit_card} height="100%" width="100%"/>
         </div>
         <div style={{textAlign:"center",width:"100%",marginTop:"50px"}}>
        <input className="form-control" type="text" value ={firstname} style={{width: '90%',marginLeft:"5%"
                }} placeholder="Enter Firstname" onChange={(e)=>{
                    setFirstname(e.target.value)
                }}/>
        <p style={{fontSize:"10px",color:"red",textAlign:"center"}}>{err}</p>
        
    <Link exact to="/payments/2">    <button className="btn " style={{borderRadius:"4px",fontSize:"11px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"#F49901",background:"white",border:"1px solid #F49901",margin:"30px 50px 0px 0px"}} >Back</button></Link>
        {/* <button className="btn " style={{borderRadius:"4px",fontSize:"11px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"#F49901",background:"white",border:"1px solid #F49901",margin:"30px 50px 0px 0px"}} >Back</button> */}
      <Link exact to="/payments" onClick={(e)=>{
          if(firstname===""){
            setErr("Invalid First name")
            e.preventDefault();
          }
        else{
          UpdateCard({...newcard,'name':firstname});
        }
      }}>  <button className="btn btn-success" style={{fontSize:"11px",borderRadius:"4px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"white",marginTop:"30px"}}  >Next</button></Link>
        </div>
        </div>
        
    
        
        </div>
      </div>
      </div>
    )
}

const PaymentsModels=({newcard,UpdateCard,match})=>{
    const [components,setComponents]=useState({})
    var path=match.params.id

    useEffect(()=>{

    },[match.params.id])
    console.log(path);

    return (

        <div>
        <p className="Desktop-block">We Support only for Mobiles</p>
       <Zoom>
        <div className="payment-modal-container">
        {match.params.id==1 && <ADD1 newcard={newcard} UpdateCard={UpdateCard}/>}
        {match.params.id==2 && <ADD2 newcard={newcard} UpdateCard={UpdateCard} />}
        {match.params.id==3 && <ADD3 newcard={newcard} UpdateCard={UpdateCard} />}
        </div>
        </Zoom>
  </div>
    )
}



const mapStateToprops=state=>{
    return {
        newcard:state.Card.NewCard
    }
}
const mapDispatchToprops=dispatch=>{
    return {
         UpdateCard:(item) => dispatch(UpdateCard(item)),
            // AddOrder:(item)=> dispatch(AddOrder(item))
    }
}


export default connect(mapStateToprops,mapDispatchToprops)(PaymentsModels);

// export default ;