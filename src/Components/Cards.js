import React from 'react';
import check_right from './../Icons/Icons-Footer/check_tick.jpg'
import Swiper from 'react-id-swiper';
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
      el: '.swiper-pagination.customized-swiper-pagination',
      type: 'bullets',
      clickable: true
    },
//   slidesPerView: 2,
  paginationClickable: true,
  spaceBetween: 30
    }

    return (

        <div className="main-container" style={{height:"calc(100vh - 150px)",overflowY:"scroll",padding:"0px 5%",marginLeft:"0px",marginRight:"0px"}}>


        <div className="card mx-auto dash-banner" style={{backgroundColor:"#E5F5EE",border:"0px",borderRadius:'5px'}}>
            
            </div>

         <Swiper {...params} >
        <div>
         <div className="flex-container" >
         
            <div className="food-icon-card" >
            </div>
            {/* <div className="food-icon-card mg-left" >
            </div> */}
            </div>
        <p style={{margin:"20px 0px 0px 0px"}} className="mt-5"> Category-1</p>
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
        <div>
         <div className="flex-container" >
         
            <div className="food-icon-card" >
            </div>
            {/* <div className="food-icon-card mg-left" >
            </div> */}
            </div>
        <p style={{margin:"20px 0px 0px 0px"}} className="mt-5"> Category-1</p>
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
