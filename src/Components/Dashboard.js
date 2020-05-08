import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import payment_icon from './../Icons/Icons-Footer/payment.png';
import home_icon from './../Icons/Icons-Footer/home.png';
import support_icon from './../Icons/Icons-Footer/online_support.png';
import food_icon from './../Icons/Icons-Footer/food_delivery.png';
import default_home from './../Icons/Icons-Footer/home_default.png';
import default_payment from './../Icons/Icons-Footer/payment_default.png';
import default_support from './../Icons/Icons-Footer/support_default.png';
import default_food_delivery from './../Icons/Icons-Footer/food_delivery_default.png';
import Swiper from 'react-id-swiper';
import food_svg from './../Icons/Icons-Footer/img-food.svg';
import laundry_svg from './../Icons/Icons-Footer/img-laundry.svg';
import roomservice_svg from './../Icons/Icons-Footer/img-roomservice.svg';
import electricity_svg from './../Icons/Icons-Footer/img-electricity.svg';
import minus_icon from './../Icons/Icons-Footer/green_subtract.png';
import plus_icon from './../Icons/Icons-Footer/green_plus.png';
// import 'swiper/css/swiper.css';
const defaultState={
    "Food":false,
    "Laundary":false,
    "Cleaning":false,
    "Electricity":false

}

const NavActiveicon=({img,name})=>{

    return (
        <div className="text-center" style={{borderTop:"2px solid #00a852 ",paddingTop:"6px"}}> <img src={img} className="nav-icon" alt="home" /><p className="mb-1 nav-p-sty" style={{color:"#00a852",fontFamily:"Poppins-SemiBold"}}>{name}</p></div>
    )
}

const NavIcon=({img,name,setActive})=>{

    return (
        <div className="text-center " style={{paddingTop:"8px"}} onClick={()=>{
            setActive({...defaultState,[name]:true})
        }}> <img src={img} className="nav-icon" alt="home" /><p className="mb-1 nav-p-sty" style={{color:"#b8bcc7",fontFamily:"Poppins-SemiBold"}}>{name}</p></div>
    )
}
const SliderCard=({item,AddOrder,RemoveOrder,order})=>{
    const [toggler,setToggler]=useState(true)
    useEffect(()=>{
        console.log("hello")
    },[toggler])
    var flag=0;
    // console.log(item);
    // for(var i=0;i<order.length;i++){
    //         console.log(i,)
    //     if(order[i].id===item.id && order[i].category===item.category )
    //             flag=order[i].items;
    // }

    return (
        <div style={{margin:"",width:"80vw"}}>
        <div className="horizontal-card" style={{backgroundColor:"white",height:"calc(36vw + 22px)",margin:"15px 0px 15px 0px",position:"relative",boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)"}}  >
        <div style={{float:"left",margin:"11px 20px 11px 11px",backgroundColor:"#e5f5ee",width:"28vw",height:"36vw"}}>
        <img src="https://firebasestorage.googleapis.com/v0/b/rumakita.appspot.com/o/Food-Images%2Fnasi-kebuli-ayam.jpg?alt=media&token=67c3cd2d-ea15-4ff6-baf6-5804e5327a33" height='auto' width="100%"  style={{borderRadius:"5px"}} />
        
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:"10px"}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="food-menu-name"  style={{fontFamily:"Poppins-Bold",color:"#00A852",lineHeight:"30px"}}
        >
        Nasi Goreng
        {/* <img src={item.isfav?like_icon:heart_svg_icon} className="food-heart"  style={{float:'right',marginRight:"16px",marginTop:"10px"}}/> */}
        
        </div>
        {/* <div className="card-content"
        style={{
            // backgroundColor:"#c0c0c0",height:"15px",width:"25vw" ,float:"",margin:"0px 0px",
        marginTop:"-3px",fontFamily:"Poppins-SemiBold",color:"#828282"}}>
        <span style={{fontFamily:"Poppins-Medium"}}> Fish </span> <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>   <span style={{fontFamily:"Poppins-Medium"}}> prawns </span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>  <span style={{fontFamily:"Poppins-Medium"}}> Tamatoes </span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>  <span style={{fontFamily:"Poppins-Medium"}}>Rice</span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}>  |  </span>  <span style={{fontFamily:"Poppins-Medium"}}> potatoes </span>
        </div> */}
        <div className="text-center">
            <div className="food-menu-middle" style={{background:"#F5FBF8",width:"37vw",left:"calc(28vw + 30px)"}}>
            <img className={`${flag===0 ? "minus-plus-unactive" : ""}`} src={minus_icon} alt="dhf" height="27px" width="27px" style={{backgroundColor:"#",padding:"3px",borderRadius:"8px",float:"left"}} onClick={()=>{RemoveOrder(item);setToggler(!toggler)}}/>
            <span style={{padding:"0px 10px",position:"relative",bottom:"2px",color:"#00A852",fontFamily:"Poppins-SemiBold",fontSize:"14px",background:"#F5FBF8",borderRadius:"20px"}}>{flag}</span>
            <img className={`${flag>=3 ? "minus-plus-unactive" : ""}`} src={plus_icon} alt="dhf" height="27px" width="27px" style={{backgroundColor:"#",padding:"6px",borderRadius:"8px",float:"right"}} onClick={()=>{if(flag<=2){AddOrder(item);setToggler(!toggler)}}}/>
            </div>

        </div>
        </div>
            {/* <div className="float-right" style={{margin:"25px 5px 5px 0px"}}>
            <img className="" src={minus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white",backgroundColor:"#e5f5ee"}} onClick={()=>{RemoveOrder(item);setToggler(!toggler)}}/>
            <span style={{padding:"0px 10px"}}>{flag}</span>
            <img className="" src={plus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white",backgroundColor:"#e5f5ee"}} onClick={()=>{AddOrder(item);setToggler(!toggler)}}/>
            </div> */}
            
        </div>
        <div className="food-menu-btn text-center" style={{}}><button className="btn btn-success" style={{fontSize:"11px",borderRadius:"4px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"white"}}>Order Now</button>
        <button className="btn " style={{borderRadius:"4px",fontSize:"11px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"#F49901",background:"white",border:"1px solid #F49901"}}>Schedule</button>
        </div>

        </div>
        
    )
}
const FoodDash=()=>{

    const params = {
   slidesPerView: 1.15,
  spaceBetween: 5,
  freeMode: true,
    }
    return (<div style={{margin:"15px 0px"}}>

        <div style={{fontSize:"19px",color:"#63364E",fontFamily:"Poppins-SemiBold"}}>Nasi Gang
        <span style={{fontFamily:"Poppins-Medium",fontSize:"9px",float:"right",marginRight:"5%"}}>
        View All >
        </span>
        </div>
        
                <Swiper {...params}>
                
                <div style={{width:"%",marginRight:"10px"}}>
                    <SliderCard item={{isfav:true}}/>
                    </div>
                    <div style={{width:"%",marginRight:"10px"}}>
                    <SliderCard item={{isfav:true}}/>
                    </div>
                    <div style={{width:"%",marginRight:"10px"}}>
                    <SliderCard item={{isfav:true}}/>
                    </div>
                    <div style={{width:"%",marginRight:"10px"}}>
                    <SliderCard item={{isfav:true}}/>
                    </div>
                     
        
                </Swiper>
        </div>)
}
const LaundaryDash=()=>{

    return (
         <div style={{display:"flex",justifyContent:"center",margin:"20px 5% 0px 0px"}}>
             <Link exact to="/casual" className="icon-card">
             <div className=" swipper-card-1" >
            </div >
            </Link>
            <Link exact to="/formal" className="icon-card mg-left">
            <div className=" swipper-card-2 " >
            </div>
            </Link>
        </div>
    )
}
const CleaningDash=()=>{
    
    
    
    return (
        <div>
        </div>
    )
}
const Dashboard=()=>{
    const params = {
//     pagination: {
//       el: '.swiper-pagination.customized-swiper-pagination',
//       type: 'bullets',
//       clickable: true
//     },
// //   slidesPerView: 2,
//   paginationClickable: true,
//   spaceBetween: 0
   slidesPerView: 1.10,
//   paginationClickable: true,
  spaceBetween: 5,
  freeMode: true,
    }
    
    const [active,setActive]=useState({'Food':true,"Laundary":false,"Cleaning":false,"Electricity":false})
    useEffect(()=>{
    setActive({...defaultState,"Food":true})
    },[])
    useEffect(()=>{
            
    },[active])

    return(
            <div>
            <p className="view-block">Rotate to portrait mode </p>
            <p className="desktop-block">We Support Mobile View Only</p>
            <div className="main-container" style={{margin:"20px 0px 0px 5%"}}>
            
            <div className="mt-1 mb-4"> 
            <div className="text-left dash-text" >
           <span style={{fontFamily:"Anteb-Medium"}}> Hi</span>, <span style={{fontFamily:"Anteb-Black"}} >Alizabeth</span>
            </div>
            <div className="rounded-circle dash-profile" style={{marginRight:"5%"}}  >
                <div>
                </div>
            </div>
            </div>
        <div>
        <div className="scrolling-wrapper-dash">
            <div onClick={()=>{if(!active.Food)
                    setActive({...defaultState,Food:true})
            }} className="icon" style={{margin:"0px 30px 0px 0px"}}><div style={{backgroundColor:"#E5F5EE",width:"62px",height:"62px",borderRadius:"50%",marginBottom:"5px"}}></div>Food</div>
            <div onClick={()=>{if(!active.Laundary)
                    setActive({...defaultState,Laundary:true})
            }} className="icon" style={{margin:"0px 30px 0px 0px"}}><div style={{backgroundColor:"#E5F5EE",width:"62px",height:"62px",borderRadius:"50%",marginBottom:"5px"}}></div>laundary</div>
            <div onClick={()=>{if(!active.Cleaning)
                    setActive({...defaultState,Cleaning:true})
            }} className="icon" style={{margin:"0px 30px 0px 0px"}}><div style={{backgroundColor:"#E5F5EE",width:"62px",height:"62px",borderRadius:"50%",marginBottom:"5px"}}></div>Service</div>
            <div onClick={()=>{
                if(!active.Electricity)
                    setActive({...defaultState,Electricity:true})
            }} className="icon" style={{margin:"0px 10px 0px 0px"}}><div style={{backgroundColor:"#E5F5EE",width:"62px",height:"62px",borderRadius:"50%",marginBottom:"5px"}}></div>Service</div>
        
        </div> 
        </div>
            <div className="card dash-banner" style={{marginRight:"5%",backgroundColor:"#E5F5EE",border:"0px",borderRadius:'5px'}}>
            
            </div>


            {active.Food && <FoodDash/>}

            {active.Laundary && <LaundaryDash/>}

            {active.Cleaning && <CleaningDash/> }


            {/* <div className="swipper-sty">
        <Swiper {...params} >
        <div style={{display:"flex",justifyContent:"center"}}>
             <Link exact to="/food" className="icon-card text-center" style={{backgroundColor:"white"}}>
             <div className="swipper-card-1" style={{margin:"15% 0px"}}>
             <img src={food_svg} height="70%" width="70%"/>
            </div >
            </Link>
            <Link exact to="/laundary" className="icon-card text-center mg-left" style={{backgroundColor:"white"}}>
            <div className="swipper-card-2 " style={{margin:"15% 0px"}}>
            <img src={laundry_svg} height="70%" width="70%"/>
            </div>
            </Link>
            
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <Link to="/service" className="icon-card  text-center" style={{backgroundColor:"white"}}>
            <div className=" swipper-card-2 " style={{margin:"15% 0px"}}>
            <img src={roomservice_svg} height="70%" width="70%"/>
            
            </div>
            </Link>
            <Link to="/laundary" className="icon-card mg-left text-center" style={{backgroundColor:"white"}}>
            <div className="swipper-card-3" style={{margin:"15% 0px"}}>
            <img src={electricity_svg} height="70%" width="70%"/>
            
            </div>
            </Link>
        </div>
        </Swiper>
        </div> */}
         
            {/* <div className="flex-container" >
            <div className="icon-card" >
            </div>
            <div className="icon-card mg-left" >
            </div>
            </div>
            <div className="flex-container">
            <div className="icon-card" >
            </div>
            <div className="icon-card mg-left" >
            </div>
            </div> */}

            

            
            
            {/* <nav className="navbar fixed-bottom dash-nav" style={{borderRadius:"0px 0px 18px 18px",padding:"0px 1rem 0rem 1rem"}}>
               

                { active["Home"]?(<NavActiveicon img={home_icon} name={"Home"}/>):(<NavIcon img={default_home} name={"Home"} setActive={setActive}/>)}
                { active["Payments"]?(<NavActiveicon img={payment_icon} name={"Payments"}/>):(<NavIcon img={default_payment} name={"Payments"} setActive={setActive}/>)}
                { active["Orders"]?(<NavActiveicon img={food_icon} name={"Orders"}/>):(<NavIcon img={default_food_delivery} name={"Orders"} setActive={setActive}/>)}
                { active["Support"]?(<NavActiveicon img={support_icon} name={"Support"}/>):(<NavIcon img={default_support} name={"Support"} setActive={setActive}/>)}
            
            
            </nav>  */}

            
            </div>
            </div>

    )
}


export default Dashboard;