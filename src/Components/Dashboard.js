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
// import 'swiper/css/swiper.css';
const defaultState={
    "Home":false,
    "Orders":false,
    "Payments":false,
    "Support":false

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


const Dashboard=()=>{
    const params = {
    pagination: {
      el: '.swiper-pagination.customized-swiper-pagination',
      type: 'bullets',
      clickable: true
    },
//   slidesPerView: 2,
  paginationClickable: true,
  spaceBetween: 30
    }
    const [active,setActive]=useState({'Home':true,"Payments":false,"Orders":false,"Support":false})
    useEffect(()=>{
        setActive({...defaultState,"Home":true})
    },[])
    useEffect(()=>{
            console.log(10);
    },[active])
    return(
            <div>
            {/* <p className="view-block">Rotate to portrait mode </p>
            <p className="desktop-block">We Support Mobile View Only</p> */}
            <div className="main-container" >
            
            <div className="mt-1 mb-4"> 
            <div className="text-left dash-text" >
           <span style={{fontFamily:"Anteb-Medium"}}> Hi</span>, <span style={{fontFamily:"Anteb-Black"}} >Alizabeth</span>
            </div>
            <div className="rounded-circle dash-profile"  >
                <div>
                </div>
            </div>
            </div>

            <div className="card mx-auto dash-banner" style={{backgroundColor:"#E5F5EE",border:"0px",borderRadius:'5px'}}>
            
            </div>
            <div className="swipper-sty">
        <Swiper {...params} >
        <div style={{display:"flex",justifyContent:"center"}}>
             <Link exact to="/food" className="icon-card">
             <div className="swipper-card-1" >
             <img src={food_svg} height="100%" width="100%"/>
            </div >
            </Link>
            <Link exact to="/laundary" className="icon-card mg-left">
            <div className="swipper-card-2 " >
            <img src={laundry_svg} height="100%" width="100%"/>
            </div>
            </Link>
            
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
            <div className="icon-card swipper-card-2" >
            <img src={roomservice_svg} height="100%" width="100%"/>
            
            </div>
            <div className="icon-card swipper-card-3 mg-left" >
            <img src={electricity_svg} height="100%" width="100%"/>
            
            </div>
        </div>
        </Swiper>
        </div>
         
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