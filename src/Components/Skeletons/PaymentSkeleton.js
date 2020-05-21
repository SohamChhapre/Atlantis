import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const PaymentSkeleton=()=>{


    return (
        <div className="main-container"  style={{
            // maxHeight:"calc(100vh - 120px)",overflowY:"scroll",
            padding:"20px 0% 120px 0%",margin:"0",
            // backgroundColor:"#9BE0B8",
            marginLeft:"0px",marginRight:"0px"}}>

        
        <div className="card  dash-banner" style={{backgroundColor:"",border:"0px",borderRadius:'5px',margin:"0px 5% 0px 5%"}}>
           <Skeleton width={"100%"} height={"90vw"}/>

        </div>
        
            
 
        
  
</div>
    )
    
}


export default PaymentSkeleton;