import React,{useEffect} from 'react';
import './Profile.css'
import {isAuth,LoginRequiredToast} from './Apiconfig.js';

const Profile=({history})=>{


    useEffect(()=>{
        if(!isAuth()){
        LoginRequiredToast()
        history.push('/login')
        }

    },[])

    const handleLogout=()=>{
        
        
        
        localStorage.removeItem("token");
        localStorage.removeItem("data");
        history.push('/login')

    }
    if(isAuth())
        var userdata=JSON.parse(localStorage["data"])
    else
        var userdata={name:{firstname:"",lastname:""},phone:"",location:"",email:""}
    
    return (

        <div className="main-container" style={{margin:"0px 5% 90px 5%"}}>

        <div className="mt-3 mb-5" style={{position:"relative"}}> 
               
                <div className="text-left dash-text " style={{lineHeight:"16px"}}>
                       <span style={{fontFamily:"Anteb-Black"}} >Hello  </span>
                            <br/>
                       <span style={{fontFamily:"Anteb-Black" }} >{userdata.name.firstname} </span>
                </div>
                
                <div className="rounded-circle dash-profile" style={{position:"absolute",top:"28px",right:"0"}}>
                    <div>
                    </div>
                </div>
            </div>
        <div>
                    <form  className="profile-container">
            <div class="form-row">
                <div class="form-group col">
                <label for="inputEmail4">First Name</label>
                <input type="text" class="form-control" id="inputEmail4" value={userdata.name.firstname} placeholder="Elizabeth" disabled/>
                </div>
                <div class="form-group col">
                <label for="inputlastname">Last Name</label>
                <input type="text" class="form-control" id="inputlastname" placeholder="Sin" disabled  value={userdata.name.lastname}/>
                </div>
            </div>
            <div class="form-group">
                <label for="inputnumber">Contact Number</label>
                <input type="text" class="form-control" id="inputnumber" placeholder="6834232323" disabled value={userdata.phone}/>
            </div>
            <div class="form-group">
                <label for="inputemail">Email ID</label>
                <input type="email" class="form-control" id="inputemail" placeholder="elizabeth34@gmail.com" disabled value={userdata.email}/>
            </div>
            <div class="form-group">
                <label for="inputlocation">Location</label>
                <input type="text" class="form-control" disabled id="inputlocation" placeholder="23,new street South Jakarta" value={userdata.location} />
            </div>
           
           <div className="text-center" >
            <button type="submit" className="btn" style={{padding:"6px 13px",margin:"20px 0px",backgroundColor:"red",fontFamily:"Poppins-SemiBold",fontSize:"11px",color:"white"}} onClick={()=>{
                handleLogout()
            }} >Logout</button>
            </div>
            </form>        
        </div>

        </div>
    )
}


export default Profile;