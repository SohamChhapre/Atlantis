import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const CardSkeleton=()=>{
    return (
        <div style={{margin:"",width:"256px"}}>
        <div className="horizontal-card" style={{backgroundColor:"white",height:"calc(137px)",margin:"15px 0px 15px 0px",position:"relative",boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)",borderRadius:"10px"}}  >
        <div style={{float:"left",margin:"11px 20px 11px 11px",backgroundColor:"white",width:"86px",height:"112px"}}>
        <Skeleton height={"112px"} width={"86px"} count={1}/>
        
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:"10px"}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="food-menu-name"  style={{whiteSpace:"normal",textAlign:"left",fontFamily:"Poppins-Bold",color:"white",lineHeight:"20px",fontSize:"18px"}}
        >
        <p style={{marginBottom:"5px"}}>
        <Skeleton width={90} height={20} count={1}/>
        </p>
        <Skeleton width={60} height={20} count={1}/>
        {/* <img src={item.isfav?like_icon:heart_svg_icon} className="food-heart"  style={{float:'right',marginRight:"16px",marginTop:"10px"}}/> */}
        
        </div>
        {/* <div className="card-content"
        style={{
            // backgroundColor:"#c0c0c0",height:"15px",width:"25vw" ,float:"",margin:"0px 0px",
        marginTop:"-3px",fontFamily:"Poppins-SemiBold",color:"#828282"}}>
        <span style={{fontFamily:"Poppins-Medium"}}> Fish </span> <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>   <span style={{fontFamily:"Poppins-Medium"}}> prawns </span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>  <span style={{fontFamily:"Poppins-Medium"}}> Tamatoes </span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>  <span style={{fontFamily:"Poppins-Medium"}}>Rice</span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}>  |  </span>  <span style={{fontFamily:"Poppins-Medium"}}> potatoes </span>
        </div> */}
        <div className="text-center">
            <div className="food-menu-middle" style={{width:"118px",left:"118px",background:"white",
            // width:"37vw",left:"calc(28vw + 30px)"
            }}>
            <Skeleton height={25} width={104}/>
            </div>
               
        </div>
        </div>
            
        </div>
        <div className="food-menu-btn text-center" ><div className="" style={{background:"white",fontSize:"11px",float:"left",marginLeft:"10%",borderRadius:"4px",padding:"6px 13px",fontFamily:"Poppins-Medium",color:"white",marginBottom:"2px"}} >
                <Skeleton width={60} height={30}/></div>
        <div className=" " style={{borderRadius:"4px",fontSize:"11px",padding:"6px 16px",float:"right",marginRight:"10%",fontFamily:"Poppins-Medium",color:"white",background:"white",marginBottom:"2px"}}  ><Skeleton width={60} height={30}/></div>
        </div>
        </div>
    )
}



export const DashFoodSkeleton=()=>{
    const Category={"Bento":[1,2,3,4],Burger:[1,2,3,4],"Light Meal":[1,2,3,4],"Ayam":[1,2,3,4]}
    const catarr=["Bento","Burger","Light Meal","Ayam"]
    return (
    <div>
           
    <div className="dash-banner" style={{background:"",margin:"0 5%"}}>
    <Skeleton height={"100%"} width={"100%"} />
    </div>
    { catarr.map((e,i)=>(
            <div style={{margin:"25px 0px"}} key={i}>

        <div style={{fontSize:"19px",color:"#63364E",fontFamily:"Poppins-SemiBold",margin:"0px 10%",position:"relative"}}><Skeleton height={30} width={80}/>
      
        <span style={{fontFamily:"Poppins-Medium",fontSize:"11px",float:"right",textDecoration:"Underline",position:"absolute",right:"1%",bottom:"5px"}}>
       <Skeleton height={25} width={40}/>
        </span>
        
        </div>
        
        <div style={{}}>
        
              <div className="scrolling-wrapper-dash" style={{marginTop:"0px",marginBottom:"10px"}}>
               <div style={{width:"4%",opacity:"0"}}>
               dhfdj
               </div>
                {Category[e].slice(0,5).map((k,key)=>(
                    <div className="icon" style={{width:"%",marginRight:"25px"}}>
                        <CardSkeleton/>
                    </div>
                    
                ))
                }
                
                  <div className="icon" style={{opacity:"0",width:"0px",height:"auto"}}>
                  sk
                    </div>  
                     
        
                </div>
        </div>
        </div>
         
     ))
        }
            

      

            
            </div>
           


    )
}


export const LaundrySkeleton=()=>{


    return (
        <div>
        </div>
    )
}
export const SliderCleaningSkeleton=()=>{

    return (
        <div style={{margin:"",width:"256px"}}>
        <div className="horizontal-card" style={{backgroundColor:"white",height:"calc(137px)",margin:"15px 0px 15px 0px",position:"relative",boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)",borderRadius:"10px"}}  >
        <div style={{float:"left",margin:"-1px 20px 11px 11px",paddingTop:"10px",backgroundColor:"white",width:"94px",height:"96px",borderRadius:"5px"}}>
            <Skeleton width="100%" height="100%"/>
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:"20px"}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="food-menu-name"  style={{whiteSpace:"normal",textAlign:"left",fontFamily:"Poppins-Bold",color:"#00A852",lineHeight:"20px",fontSize:"18px"}}
        >
        {/* Wash & Fold  */}
        <p style={{marginBottom:"5px"}}>
        <Skeleton width="110px" height="20px"/>
        </p>
        <Skeleton width="80px" height="250x"/>
        {/* <img src={item.isfav?like_icon:heart_svg_icon} className="food-heart"  style={{float:'right',marginRight:"16px",marginTop:"10px"}}/> */}
        
        </div>
        {/* <div className="card-content"
        style={{
            // backgroundColor:"#c0c0c0",height:"15px",width:"25vw" ,float:"",margin:"0px 0px",
        marginTop:"-3px",fontFamily:"Poppins-SemiBold",color:"#828282"}}>
        <span style={{fontFamily:"Poppins-Medium"}}> Fish </span> <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>   <span style={{fontFamily:"Poppins-Medium"}}> prawns </span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>  <span style={{fontFamily:"Poppins-Medium"}}> Tamatoes </span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>  <span style={{fontFamily:"Poppins-Medium"}}>Rice</span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}>  |  </span>  <span style={{fontFamily:"Poppins-Medium"}}> potatoes </span>
        </div> */}
        {/* <div className="text-center">
            <div className="food-menu-middle" style={{width:"118px",left:"122px",bottom:"25px",background:"#F5FBF8",
            // width:"37vw",left:"calc(28vw + 30px)"
            }}>
            <img className={`${flag===0 ? "minus-plus-unactive" : ""}`} src={minus_icon} alt="dhf" height="27px" width="27px" style={{backgroundColor:"#",padding:"3px",borderRadius:"8px",float:"left"}} onClick={()=>{if(flag>0){DecrementLaundry(item);setToggler(!toggler)}}}/>
            <span style={{padding:"0px 10px",position:"relative",bottom:"-2px",color:"#00A852",fontFamily:"Poppins-SemiBold",fontSize:"14px",background:"#F5FBF8",borderRadius:"20px"}}>{flag}</span>
            <img className={`${flag>=3 ? "minus-plus-unactive" : ""}`} src={plus_icon} alt="dhf" height="27px" width="27px" style={{backgroundColor:"#",padding:"6px",borderRadius:"8px",float:"right"}} onClick={()=>{if(flag<=2){IncrementLaundry(item);setToggler(!toggler)}}}/>
            </div>
               
        </div> */}
        </div>
             {/* {err && <small  style={{color:"red",position:"absolute",bottom:"2px",left:"142px"}}>{err}</small>} */}
            
        </div>
        <div className="food-menu-btn text-center" ><div className="btn btn-success" style={{border:0,background:"white",fontSize:"11px",float:"left",marginLeft:"10%",borderRadius:"4px",padding:"6px 13px",fontFamily:"Poppins-Medium",color:"white",marginBottom:"2px"}} 
        ><Skeleton width="70px" height="30px"/></div>
        <div className=" " style={{borderRadius:"4px",fontSize:"11px",padding:"6px 16px",float:"right",marginRight:"10%",fontFamily:"Poppins-Medium",color:"#63364E",background:"white",border:"1px solid white",marginBottom:"2px"}} 
         ><Skeleton width="70px" height="30px"/></div>
        </div>
        
        </div>)
}


export const CleaningSkeleton=()=>{

    var CleaningInit=[1,2]
    
            return (
        <div>
        <div className="card dash-banner" style={{margin:"0 5%",backgroundColor:"white",border:"0px",borderRadius:'10px'}}>
            <Skeleton height={"18vh"} width="100%"/>
            </div>
        <div style={{margin:"25px 0px"}}>

        <div style={{fontSize:"19px",color:"#63364E",fontFamily:"Poppins-SemiBold",margin:"0px 5%",position:"relative"}}>

        </div>
        <div >
        
              <div className="scrolling-wrapper-dash" style={{marginTop:"0px",marginBottom:"10px"}}>
                <div style={{width:"4%",opacity:"0"}}>sh</div>
             
                {
                CleaningInit.map((e,i)=>(
                    
                    <div key={i} className="icon" style={{width:"%",marginRight:"25px"}}>
                    <SliderCleaningSkeleton />
                    
                    </div>
                    
                ))
                }
                
                  <div className="icon" style={{opacity:"0",width:"0px",height:"auto"}}>
                  sk
                    </div>  
                     
        
                </div>
        </div>
        </div>
        </div>
    )

    
}