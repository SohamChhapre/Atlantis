import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import check_right from './../Icons/Icons-Footer/check_tick.jpg'
import Swiper from 'react-id-swiper';
import plus_icon from './../Icons/Icons-Footer/plus_math.png';
import home_icon from './../Icons/Icons-Footer/home.png';
import cart_icon from './../Icons/Icons-Footer/shopping_cart.png';
import './Cards.css'
import { useSwipeable, Swipeable } from 'react-swipeable'
import mobiscroll from 'mobiscroll';
import {AddOrder} from './Redux/index.js';
import {connect } from 'react-redux'
// import 'mobiscroll/react/dist/css/mobiscroll.min.css';
// import {SwipeableList,SwipeableListItem} from '@sandstreamdev/react-swipeable-list'
const MenuCard=({AddOrder,item})=>{
    const handlers = useSwipeable({
    onSwipedLeft: () => {console.log("left")},
    // onSwipedRight: () => {};
    // console.log("right")},
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
    return (
        
        <div className="horizontal-card"  {...handlers}  >
            <div className="float-right" style={{margin:"15px 5px 5px 0px"}} onClick={()=>{AddOrder({Category:"cat-1",id:"002",item:1})}}>
            <img className="" src={plus_icon} height="50px" width="50px" style={{border:"2px solid white"}}/>
            </div>
            
        </div>
        
        
    )
}

const defaultswipe={
    "left":false,
    "right":false
}
const Cards=({setOrders,order,AddOrder})=>{
    const [swipe,setSwipe]=useState({"left":false,"right":true})
    const [cate1,setCate1]=useState([]);

    useEffect(()=>{
        setSwipe({"left":false,"right":true});
    },[])
    useEffect(()=>{
        console.log("UseEffect");
    },[swipe])
    const params = {
    pagination: {
      
    },
    // effect: 'fade',
    // effect:"cube",
  slidesPerView: 'auto',
  paginationClickable: true,
  spaceBetween: 15
    }

    

    return (

        <div className="main-container"  style={{
            maxHeight:"calc(100vh - 110px)",overflowY:"scroll",
            padding:"20px 0%",margin:"0",backgroundColor:"#9BE0B8",marginLeft:"0px",marginRight:"0px"}}>

        <Link to="/cart"> <div className="text-right"><img src={cart_icon}/><span className="text-center" style={{position:"relative",right:"32px"}}>{order.length}</span></div></Link>
        <div className="card  dash-banner" style={{backgroundColor:"#E5F5EE",border:"0px",borderRadius:'5px',margin:"0px 5% 0px 5%"}}>
            
            </div>
         {/* <div className="flex-container" > */}
         
            {/* <div className="food-icon-card" > */}
            {/* </div> */}
            {/* <div className="food-icon-card mg-left" >
            </div> */}
            {/* </div> */}
         {/* <Swiper {...params} > */}
        <div >
                  <div className="flex-container" >
         
            <div className="food-icon-card" >
            1
            
            </div>
                        <div className="food-icon-card mg-left" >
            1
            
            </div>
            {/* <div className="food-icon-card mg-left" >
            </div> */}
            </div>
        <div  style={{marginBottom :"10px",padding:"0px 8px 12px 8px",borderRadius:"10px",marginLeft:"1%",marginRight:"1%"}}>
        <p style={{margin:"20px 0px 0px 0px"}} className="mt-4"> Category-1</p>
                <div className="flex-container my-0" >
                
                    <MenuCard  AddOrder={AddOrder}/>
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
        
        {/* </Swiper> */}

        

        </div>
    )
}



const mapStateToprops=state=>{
    return {
        order:state.orders
    }
}
const mapDispatchToprops=dispatch=>{
    return {
            AddOrder:(item)=> dispatch(AddOrder(item))
    }
}

// export default Orders;
export default connect(mapStateToprops,mapDispatchToprops)(Cards);
// export default Cards;
// export default Cards2;




// <div {...handlers} style={{display:swipe.right?'none':'block'}}>
//          <div className="flex-container" >
         
//             <div className="food-icon-card" >
//             2
            
//             </div>
//             {/* <div className="food-icon-card mg-left" >
//             </div> */}
//             </div>
//             <div></div>
//         <div style={{backgroundColor:"white",marginBottom :"10px",padding:"0px 8px 12px 8px",borderRadius:"10px",marginRight:"4%"}}>
        
//         <p style={{margin:"20px 0px 0px 0px"}} className="mt-4"> Category-1</p>
//         <div className="flex-container my-0" >
           
//             <MenuCard/>
//             <MenuCard/>
//         </div>
//         <p style={{margin:"20px 0px 0px 0px"}} className="mt-5"> Category-2</p>
//             <div className="flex-container my-0" >
//            <MenuCard/>
//            <MenuCard/>
//            <MenuCard/>
//            <MenuCard/>
//            <MenuCard/>
            
//         </div>
//         </div>
//         <div style={{backgroundColor:"white",width:"20px",float:"right"}}></div>
//         </div>