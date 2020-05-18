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

const DashboardSkeleton=()=>{
    const Category={"Bento":[1,2,3,4],Burger:[1,2,3,4],"Light Meal":[1,2,3,4],"Ayam":[1,2,3,4]}
    const catarr=["Bento","Burger","Light Meal","Ayam"]
    return (
<div>
            <p className="view-block">Rotate to portrait mode </p>
            <p className="desktop-block">We Support Mobile View Only</p>
            <div className="main-container" style={{margin:"20px 0px 90px 0%"}}>
            <div className="mt-2 mb-5" style={{marginLeft:"5%"}}> 
                <div style={{float:"left"}}>
                    
                    
                        
                    <Skeleton height={45} width={45}  count={1} />
                        

                        
                </div>
                <div className="text-left dash-text text-center" >
                        <Skeleton   count={1} width={120} height={30} />
                         <span style={{fontFamily:"Anteb-Medium",width:"5%",opacity:0}}>Heyyyyy</span>
                </div>
                
                <div className="rounded-circle dash-profile" style={{marginTop:"-43px",marginRight:"5%",backgroundColor:"white"}}  >
                    {/* <SkeletonTheme color="#cde3d2" > */}
                        
                            <Skeleton  count={1} circle={true} width={50} height={50} />
                        

                        
                    <div>
                    </div>
                </div>
            </div>
        <div>
        
        <div className="scrolling-wrapper-dash" style={{marginLeft:"5%"}}>
            <div  className="icon icon-container" ><div style={{backgroundColor:"#",width:"62px",height:"62px",borderRadius:"50%",marginBottom:"5px"}}><Skeleton  count={1} circle={true} width={62} height={62} /></div><Skeleton  count={1}  width={55} height={8} /></div>
            <div  className="icon icon-container" ><div style={{backgroundColor:"#",width:"62px",height:"62px",borderRadius:"50%",marginBottom:"5px"}}><Skeleton  count={1} circle={true} width={62} height={62} /></div><Skeleton  count={1}  width={55} height={8} /></div>
            <div  className="icon icon-container"><div style={{backgroundColor:"#",width:"62px",height:"62px",borderRadius:"50%",marginBottom:"5px"}}><Skeleton  count={1} circle={true} width={62} height={62} /></div><Skeleton  count={1}  width={55} height={8} /></div>
            <div  className="icon icon-container"><div style={{backgroundColor:"#",width:"62px",height:"62px",borderRadius:"50%",marginBottom:"5px"}}><Skeleton  count={1} circle={true} width={62} height={62} /></div><Skeleton  count={1}  width={55} height={8} /></div>
            <div className="icon" style={{opacity:"0",width:"0px",height:"auto",marginRight:"5%"}}>
                  sk
                    </div>  
        </div> 
        </div>
            <div className="card dash-banner" style={{margin:"0 5%",backgroundColor:"white",border:"0px",borderRadius:'10px'}}>
           <Skeleton  count={1} width={"100%"} height={"18vh"} />
            </div>


{ catarr.map((e,i)=>(
            <div style={{margin:"25px 0px"}} key={i}>

        <div style={{fontSize:"19px",color:"#63364E",fontFamily:"Poppins-SemiBold",margin:"0px 5%",position:"relative"}}><Skeleton height={30} width={80}/>
      
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
            </div>


    )
}


export default DashboardSkeleton;