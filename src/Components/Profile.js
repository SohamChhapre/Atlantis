import React from 'react';
import './Profile.css'


const Profile=()=>{


    return (

        <div className="main-container" style={{margin:"0px 5%"}}>

        <div className="mt-3 mb-5" style={{position:"relative"}}> 
               
                <div className="text-left dash-text " style={{lineHeight:"16px"}}>
                       <span style={{fontFamily:"Anteb-Black"}} >Hello  </span>
                            <br/>
                       <span style={{fontFamily:"Anteb-Black" }} >Elizabeth </span>
                </div>
                
                <div className="rounded-circle dash-profile" style={{position:"absolute",top:"28px",right:"0"}}>
                    <div>
                    </div>
                </div>
            </div>
        <div>
                    <form>
            <div class="form-row">
                <div class="form-group col">
                <label for="inputEmail4">First Name</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="Elizabeth" disabled/>
                </div>
                <div class="form-group col">
                <label for="inputlastname">Last Name</label>
                <input type="text" class="form-control" id="inputlastname" placeholder="Sin" disabled />
                </div>
            </div>
            <div class="form-group">
                <label for="inputnumber">Contact Number</label>
                <input type="text" class="form-control" id="inputnumber" placeholder="6834232323" disabled />
            </div>
            <div class="form-group">
                <label for="inputemail">Email ID</label>
                <input type="email" class="form-control" id="inputemail" placeholder="elizabeth34@gmail.com" disabled />
            </div>
            <div class="form-group">
                <label for="inputlocation">Location</label>
                <input type="text" class="form-control" disabled id="inputlocation" placeholder="23,new street South Jakarta" />
            </div>
           
           <div className="text-center" >
            <button type="submit" className="btn" style={{padding:"6px 13px",margin:"20px 0px",backgroundColor:"red",fontFamily:"Poppins-SemiBold",fontSize:"11px",color:"white"}} >Logout</button>
            </div>
            </form>        
        </div>

        </div>
    )
}


export default Profile;