import React from 'react';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';


export const URL="http://192.168.43.168:3500";



export const Config=()=>
{
    const token=localStorage["token"]
    return {
    headers: {"Authorization" : `Bearer ${token}`}
    }
}
export const LoginRequiredToast=()=>{
    toast.notify(({ onClose }) => (
                <a href="" css={{color:"white", textDecoration: "none",background:"#00A852" }} onClick={onClose}>
                   <div style={{backgroundColor:"red",color:"white",padding:"10px 15px",fontFamily:"Poppins-SemiBold",borderRadius:"5px"}}> Login Required to Access this resource 
                    </div>
                        
                </a>
                ));
}
export const TokenExpiredToast=(msg)=>{
    toast.notify(({ onClose }) => (
                <a href="" css={{color:"white", textDecoration: "none",background:"#00A852" }} onClick={onClose}>
                   <div style={{backgroundColor:"red",color:"white",padding:"10px 15px",fontFamily:"Poppins-SemiBold",borderRadius:"5px"}}> {msg} 
                    </div>
                        
                </a>
                ));
}
export const isAuth=()=>{
    const token=localStorage["token"];
    if(token==="Invalid"){
        // LoginRequiredToast('Login required to Access this resource')
        return false
    }
    else
    return true

}

export const checkAuth=(status)=>{
    if(status===401){
    
    localStorage.setItem('token',"Invalid");
    localStorage.removeItem('data');
    
    }

}