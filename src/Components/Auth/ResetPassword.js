import React,{useState,useEffect} from 'react';
import main_banner from './../../Icons/Icons-Dash/Dash_banner.jpg'
import Axios from 'axios';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';
const ForgotPassword=({setToken,history,match})=>{
        const [data,setData]=useState({})
        const [loading,setLoading]=useState(true)
        const [errSucc,setErr]=useState({})
        useEffect(()=>{
            setData({password:"",confirmpassword:""})
            setLoading(false)
            setErr({err:"",success:""})
        },[])
       



        useEffect(()=>{
            setErr({err:"",success:""})

        },[data]);
        useEffect(()=>{
                
        },[loading,errSucc])
        var token=match.params.token
        const handleClick=async (e)=>{
                e.preventDefault()
                console.log(data)
                if(data.password===data.confirmpassword){
                await Axios.put(`http://192.168.43.168:3500/password/reset/${token}`,data).then((res)=>{
                    console.log(res)
                    setErr({...errSucc,success:res.data.message})
                    history.push('/login')

                }).catch((err)=>{
                    console.log(err)

                    setErr({...errSucc,"err":err.response.data.errMessage})
                    setLoading(false)



                })
                }
                else
                    setErr({...errSucc,"err":"Password does not match"})
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
            {errSucc.err && <small className="text-danger" style={{fontFamily:"Poppins-SemiBold"}}>{errSucc.err}</small> }
            {errSucc.success && <small className="text-success" style={{fontFamily:"Poppins-SemiBold"}}>{errSucc.success}</small> }
            
            <form onSubmit={(e)=>{
                    handleClick(e)
                    setLoading(true)
            }}>
            <div class="form-group">
                <input type="password" class="form-control" onChange={(e)=>setData({...data,password:e.target.value})} style={{border:"1px solid #00ba66",opacity:"1",fontWeight:"502",color:"black"}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="New Password " />
            </div>
            
            <div class="form-group">
                <input type="password" class="form-control" onChange={(e)=>setData({...data,confirmpassword:e.target.value})} style={{border:"1px solid #00ba66",opacity:"1",fontWeight:"502",color:"black"}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Confirm Password " />
            </div>
            <div className="mt-4">
            <button type="submit" class="btn btn-success" style={{
                fontSize: "12px",
                marginRight: "20px",
                borderRadius: "4px",
                padding: "6px 23px",
                fontFamily: "Poppins-Medium",
                color: "white",
                marginBottom: "2px",
                float:"right"
                }}
                
                >Submit</button>
               

            
            </div>
            </form>
        </div>
        </div>
        </div>
    )
}




export default ForgotPassword;