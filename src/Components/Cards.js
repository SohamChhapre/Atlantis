import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import check_right from './../Icons/Icons-Footer/check_tick.jpg'
import Swiper from 'react-id-swiper';
import minus_icon from './../Icons/Icons-Footer/subtract.png';
import plus_icon from './../Icons/Icons-Footer/plus_math.png';
import plus_icon2 from './../Icons/Icons-Footer/plus2.jpg';
import dummy_img from './../Icons/Icons-Footer/dummyimage.png';
import home_icon from './../Icons/Icons-Footer/home.png';
import cart_icon from './../Icons/Icons-Footer/shopping_cart.png';
import './Cards.css'
import { useSwipeable, Swipeable } from 'react-swipeable'
import mobiscroll from 'mobiscroll';
import {AddOrder,RemoveOrder} from './Redux/index.js';
import {connect } from 'react-redux'
import {initialdata} from './CategoryData.js'
// import 'mobiscroll/react/dist/css/mobiscroll.min.css';
// import {SwipeableList,SwipeableListItem} from '@sandstreamdev/react-swipeable-list'
// const MenuCard=({AddOrder,item})=>{
//     const handlers = useSwipeable({
//     onSwipedLeft: () => {console.log("left")},
//     // onSwipedRight: () => {};
//     // console.log("right")},
//     preventDefaultTouchmoveEvent: true,
//     trackMouse: true
//   });
//     return (
        
//         <div className="horizontal-card"  {...handlers}  >
//             <div className="float-right" style={{margin:"15px 5px 5px 0px"}} onClick={()=>{AddOrder({Category:"cat-1",id:"002",item:1})}}>
//             <img className="" src={plus_icon} height="50px" width="50px" style={{border:"2px solid white"}}/>
//             </div>
            
//         </div>
        
        
//     )
// }
 
const MenuCard=({item,AddOrder,RemoveOrder,order})=>{
    const [toggler,setToggler]=useState(true)
    useEffect(()=>{
        console.log("hello")
    },[toggler])
    var flag=0;
    console.log(item);
    for(var i=0;i<order.length;i++){
            console.log(i,)
        if(order[i].id===item.id && order[i].category===item.category )
                flag=order[i].items;
    }

    return (
        
        <div className="horizontal-card" style={{display:"flex",backgroundColor:"white",height:"auto"}}  >
        <div style={{float:"left",margin:"0px 10px 0px 10px",width:"35vw",height:"35vw"}}>
        <img src={dummy_img} height='100%' width="100%"   />
        
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:"15px"}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
        style={{fontSize:"34px",fontFamily:"Poppins-Bold",color:"#525252",lineHeight:"30px"}}
        >
        Nasi Goreng
        </div>
        <div 
        style={{
            // backgroundColor:"#c0c0c0",height:"15px",width:"25vw" ,float:"",margin:"0px 0px",
        marginTop:"2px",fontFamily:"Poppins-SemiBold",color:"#828282",fontSize:"21px"}}>
        250 grams
        </div>
            <div className="" style={{margin:"5px 5px 5px 0px"}}>
            <img className="" src={minus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white",backgroundColor:"#e5f5ee"}} onClick={()=>{RemoveOrder(item);setToggler(!toggler)}}/>
            <span style={{padding:"0px 10px"}}>{flag}</span>
            <img className="" src={plus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white",backgroundColor:"#e5f5ee"}} onClick={()=>{AddOrder(item);setToggler(!toggler)}}/>
            </div>

        <div style={{marginBottom:"5px"}}><button className="btn btn-success" style={{borderRadius:"20px 20px 20px 20px",padding:"0px 24px 2px 24px"}}>Add</button></div>
        </div>
        
            {/* <div className="float-right" style={{margin:"25px 5px 5px 0px"}}>
            <img className="" src={minus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white",backgroundColor:"#e5f5ee"}} onClick={()=>{RemoveOrder(item);setToggler(!toggler)}}/>
            <span style={{padding:"0px 10px"}}>{flag}</span>
            <img className="" src={plus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white",backgroundColor:"#e5f5ee"}} onClick={()=>{AddOrder(item);setToggler(!toggler)}}/>
            </div> */}
            
        </div>
        
        
    )
}
const defaultswipe={
    "left":false,
    "right":false
}
const Cards=({setOrders,order,AddOrder,RemoveOrder})=>{
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
            padding:"20px 0%",margin:"0",
            // backgroundColor:"#9BE0B8",
            marginLeft:"0px",marginRight:"0px"}}>

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
        <p style={{margin:"20px 0px 0px 0px",fontSize:"53px",color:"#00A852"}} className="mt-4"> 1.Popular</p>
                <div className="flex-container my-0" >
                
                                       
                   {initialdata.map((e,i)=>{return e.category==='cat1' && (<MenuCard item={e} AddOrder={AddOrder} key={i} RemoveOrder={RemoveOrder} order={order}/>)}) }
                                       
                                       {/* <MenuCard/> */}
                </div>
        <p style={{margin:"20px 0px 0px 0px"}} className="mt-5"> Category-2</p>
                    <div className="flex-container my-0" >
                
                   {initialdata.map((e,i)=>{return e.category==='cat2' && (<MenuCard item={e} AddOrder={AddOrder} key={i} order={order} RemoveOrder={RemoveOrder}/>)}) }
                    
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
         RemoveOrder:(item) => dispatch(RemoveOrder(item)),
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