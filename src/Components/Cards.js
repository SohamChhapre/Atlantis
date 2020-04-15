import React from 'react';
import check_right from './../Icons/Icons-Footer/check_tick.jpg'
import Swiper from 'react-id-swiper';
import payment_icon from './../Icons/Icons-Footer/payment.png';
import home_icon from './../Icons/Icons-Footer/home.png';
import './Cards.css'
const MenuCard=()=>{
    return (
        <div className="horizontal-card" >
            <div className="float-right" style={{margin:"6px"}}>
            <img className="mr-2" src={check_right} height="30px" width="30px" />
            </div>
        </div>
    )
}
const Cards=()=>{
    // const container = document.querySelector('. container')
    // console.log(container.scrollTop)
    // container.scrollLeft
    const params = {
    pagination: {
      
    },
    // effect: 'fade',
    // effect:"cube",
  slidesPerView: 1.08,
  paginationClickable: true,
  spaceBetween: 15
    }

    return (

        <div className="main-container" style={{
            // maxHeight:"calc(100vh - 110px)",overflowY:"scroll",
            padding:"20px 0%",margin:"0",backgroundColor:"#9BE0B8",marginLeft:"0px",marginRight:"0px"}}>


        <div className="card  dash-banner" style={{backgroundColor:"#E5F5EE",border:"0px",borderRadius:'5px',margin:"0px 5% 0px 5%"}}>
            
            </div>
         {/* <div className="flex-container" > */}
         
            {/* <div className="food-icon-card" > */}
            {/* </div> */}
            {/* <div className="food-icon-card mg-left" >
            </div> */}
            {/* </div> */}
         <Swiper {...params} >
        <div>
                  <div className="flex-container" >
         
            <div className="food-icon-card" >
            1
            <img src={home_icon}/>
            </div>
            {/* <div className="food-icon-card mg-left" >
            </div> */}
            </div>
        <div style={{backgroundColor:"white",marginBottom :"10px",padding:"0px 8px 12px 8px",borderRadius:"10px",marginLeft:"4%"}}>
        <p style={{margin:"20px 0px 0px 0px"}} className="mt-4"> Category-1</p>
                <div className="flex-container my-0" >
                
                    <MenuCard/>
                    <MenuCard/>
                </div>
        <p style={{margin:"20px 0px 0px 0px"}} className="mt-5"> Category-2</p>
                    <div className="flex-container my-0" >
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                    
                </div>
        </div>
        </div>
        <div>
         <div className="flex-container" >
         
            <div className="food-icon-card" >
            2
             <img src={payment_icon}/>
            </div>
            {/* <div className="food-icon-card mg-left" >
            </div> */}
            </div>
            <div></div>
        <div style={{backgroundColor:"white",marginBottom :"10px",padding:"0px 8px 12px 8px",borderRadius:"10px",marginRight:"4%"}}>
        
        <p style={{margin:"20px 0px 0px 0px"}} className="mt-4"> Category-1</p>
        <div className="flex-container my-0" >
           
            <MenuCard/>
            <MenuCard/>
        </div>
        <p style={{margin:"20px 0px 0px 0px"}} className="mt-5"> Category-2</p>
            <div className="flex-container my-0" >
           <MenuCard/>
           <MenuCard/>
           <MenuCard/>
           <MenuCard/>
           <MenuCard/>
            
        </div>
        </div>
        <div style={{backgroundColor:"white",width:"20px",float:"right"}}></div>
        </div>
            {/* <div className="flex-container">
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
            </div>
            <div className="flex-container">
            <div className="icon-card" >
            </div>
            <div className="icon-card mg-left" >
            </div>
            </div> */}
            {/* <div className="flex-container" >
            <div className="icon-card" >
            </div>
            <div className="icon-card mg-left" >
            </div>
            </div> */}
        
        </Swiper>
        </div>
    )
}

export default Cards;
