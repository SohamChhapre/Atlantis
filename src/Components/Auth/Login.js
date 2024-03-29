import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import main_banner from './../../Icons/Icons-Dash/Dash_banner.jpg'
import Axios from 'axios';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';
const Login=({setToken,history})=>{
        const [data,setData]=useState({})
        const [loading,setLoading]=useState(true)
        const [err,setErr]=useState("")
        useEffect(()=>{
            setData({username:"",password:""})
            setLoading(false)
            setErr("")
        },[])

        useEffect(()=>{
                setErr("")
        },[data]);
        useEffect(()=>{
                
        },[loading,err])

        const handleClick=async (e)=>{
                e.preventDefault()
                console.log(data)
                await Axios.post('http://192.168.43.168:3500/user/login',data).then((res)=>{
                    console.log(res)
                    localStorage.setItem("token",res.data.token);
                    setToken(res.data.token)
                    localStorage.setItem("data",JSON.stringify(res.data.data))
                    setLoading(false)
                    history.push("/welcome")

                }).catch((err)=>{
                    setErr(err.response.data.errMessage)
                    setLoading(false)


                })
        }

    return (

        <div>
        <p className="view-block">Rotate to portrait mode </p>
    <p className="desktop-block">We Support Mobile View Only</p>
        <div className="main-container" style={{overflowY:"scroll",minHeight:"530px",margin:"0"}}>
        <div className="dash-banner" style={{margin:0,height:"auto"}}>
        <img src={main_banner} height="auto" width="100%"/>
        </div>
        <div style={{margin:"45px 0px 30px 0px",fontSize:"23px",width:"100%",textAlign:"center",fontFamily:"Poppins-SemiBold"}}>
        Welcome To <span style={{fontFamily:"Anteb-Black",fontSize:"26px"}}>RumaKita</span>
        </div>

        <div style={{maxWidth:"280px",margin:"0px auto"}}>
            {err && <small className="text-danger" style={{fontFamily:"Poppins-SemiBold"}}>{err}</small> }
            
            <form onSubmit={(e)=>{
                    handleClick(e)
                    setLoading(true)
                }}>
            <div class="form-group">
                <input type="text" class="form-control" onChange={(e)=>setData({...data,username:e.target.value})} style={{border:"1px solid #00ba66",opacity:"1",fontWeight:"502",color:"black"}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Name" required />
            </div>
            <div class="form-group" style={{marginTop:"30px",marginBottom:"30px"}}>
                <input type="password" onChange={(e)=>setData({...data,password:e.target.value})} style={{border:"1px solid #00ba66",opacity:"1",fontWeight:"502",color:"black"}} class="form-control" id="exampleInputPassword1" placeholder="Password" required />
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
               
            <Link exact to="/forgot">
            <div style={{color:"#3c3c3c",float:"right",marginRight:"20px",width:"76px",marginTop:"-8px",textAlign:"left",textDecoration:"underline",fontSize:"14px"}}>
            Forgot Password ?
            </div>
            </Link>
            </div>
            </form>
        </div>
        </div>
        </div>
    )
}




export default Login;