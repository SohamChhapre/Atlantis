import React from 'react';
import check_right from './../Icons/Icons-Footer/check_tick.jpg'


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


    return (

        <div className="main-container" style={{height:"calc(100vh - 150px)",overflowY:"scroll",padding:"0px 5%",marginLeft:"0px",marginRight:"0px"}}>


        <div className="card mx-auto dash-banner" style={{backgroundColor:"#E5F5EE",border:"0px",borderRadius:'5px'}}>
            
            </div>


        
         <div className="flex-container" >
         
            <div className="food-icon-card" >
            </div>
            <div className="food-icon-card mg-left" >
            </div>
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
        </div>
    )
}

export default Cards;
