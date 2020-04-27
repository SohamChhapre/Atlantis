import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import check_right from './../Icons/Icons-Footer/check_tick.jpg'
import Swiper from 'react-id-swiper';
import minus_icon from './../Icons/Icons-Footer/green_subtract.png';
import plus_icon from './../Icons/Icons-Footer/green_plus.png';
import plus_icon2 from './../Icons/Icons-Footer/plus2.jpg';
import dummy_img from './../Icons/Icons-Footer/dummyimage.png';
import home_icon from './../Icons/Icons-Footer/home.png';
import heart_icon from './../Icons/Icons-Footer/heart.png';
import heart_icon_2 from './../Icons/Icons-Food/heart_52px.png';
import cart_icon from './../Icons/Icons-Footer/green_shopping_cart.png';
import './Cards.css'
import { useSwipeable, Swipeable } from 'react-swipeable'
import mobiscroll from 'mobiscroll';
import {AddOrder,RemoveOrder} from './Redux/index.js';
import {connect } from 'react-redux'
import {initialdata} from './CategoryData.js'
import './Cards.css'
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';
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
const Food_category_data={
    "Popular":false,
    'Balanced':false,
    'Salad':false
}
const Textslider=({food,foodcategory,swipe,setFoodcategory})=>{
    const [toggler,setToggler]=useState({})
    useEffect(()=>{
        setToggler({1:true,2:true})
    },[])
    useEffect(()=>{
        // setToggler({1:!toggler[1],2:!toggler[2]})
    },[foodcategory])

        return(
        <div  >
            {/* <LightSpeed  left collapse when={toggler[1] || toggler[2]} > */}
            <div>
            <div  class="scrolling-wrapper">
      <span  className={`food-select-unactive ${foodcategory.Popular?"category-btn-active":"category-btn"} `} onClick={()=>{
          if(!foodcategory['Popular'])
          setFoodcategory({...Food_category_data,"Popular":true})
      }}>Popular</span>
      
            <span  className={`food-select-unactive ${foodcategory.Balanced?"category-btn-active":"category-btn"} `} style={{marginLeft:"20px"}} onClick={()=>{
                if(!foodcategory['Balanced'])
          setFoodcategory({...Food_category_data,"Balanced":true})

            }}>Balanced</span>

            <span  className={`food-select-unactive ${foodcategory.Salad?"category-btn-active":"category-btn"} `} style={{marginRight:"25px",marginLeft:"20px"}} onClick={()=>{
                if(!foodcategory['Salad'])
                setFoodcategory({...Food_category_data,"Salad":true})
            }}>Salad</span>
            
            {/* <div class="card" style={{width:"28vw",border:"None"}}><p style={{color:"#989898",fontFamily:"Poppins-SemiBold"}} className=" food-select-unactive" > {foodCat[1]}</p></div>
            <div class="card" style={{width:"44vw",border:"None"}}><p style={{color:"#525252",fontFamily:"Poppins-SemiBold"}} className=" text-center food-popular-text " > {foodCat[0]}</p></div>

            <div class="card" style={{width:"28vw",border:"None"}}><p style={{marginRight:"5px",color:"#989898",fontFamily:"Poppins-SemiBold"}} className=" text-right food-select-unactive" > {foodCat[2]}</p></div>
            
             */}
            </div>
            </div>
        
            
        </div>
        )
}
const Texttoggler=({food,handlers,foodCat,swipe})=>{
    const [toggler,setToggler]=useState({})
    useEffect(()=>{
        setToggler({1:true,2:true})
    },[])
    useEffect(()=>{
        setToggler({1:!toggler[1],2:!toggler[2]})
    },[food])

        return(
        <div {...handlers} style={{marginTop:"20px",marginBottom:"30px",marginLeft:"20px",marginRight:"8px"}} >
            {/* <LightSpeed  left collapse when={toggler[1] || toggler[2]} > */}
            <div>
            <div  class="text-center">
            <span style={{color:"white",backgroundColor:"green",fontFamily:"Poppins-SemiBold",padding:"2px 13px",borderRadius:"20px",border:"1px solid black"}} className=" text-center food-select-unactive " > {foodCat[0]}</span>
      
            <span style={{color:"#989898",fontFamily:"Poppins-SemiBold",marginLeft:"20px",padding:"2px 13px",borderRadius:"20px",border:"1px solid black"}} className=" food-select-unactive" > {foodCat[1]}</span>

            <span style={{marginLeft:"20px",color:"#989898",fontFamily:"Poppins-SemiBold",padding:"2px 13px",borderRadius:"20px",border:"1px solid black"}} className=" text-right food-select-unactive" > {foodCat[2]}</span>
            
            
            </div>
            </div>
        
            
        </div>
        )
}
 
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
        <div style={{margin:"10px",width:"calc(100% - 28px)"}}>
        <div className="horizontal-card" style={{backgroundColor:"white",height:"calc(36vw + 22px)",margin:"15px 0px 15px 0px",position:"relative"}}  >
        <div style={{float:"left",margin:"11px 20px 11px 11px",backgroundColor:"#e5f5ee",width:"36vw",height:"36vw"}}>
        {/* <img src={dummy_img} height='100%' width="100%"   /> */}
        
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:"10px"}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="food-menu-name"  style={{fontFamily:"Poppins-SemiBold",color:"#00A852",lineHeight:"30px"}}
        >
        Nasi Goreng
        <img src={heart_icon_2} className="food-heart"  style={{float:'right',marginRight:"16px",marginTop:"5px"}}/>
        </div>
        <div className="card-content"
        style={{
            // backgroundColor:"#c0c0c0",height:"15px",width:"25vw" ,float:"",margin:"0px 0px",
        marginTop:"-3px",fontFamily:"Poppins-SemiBold",color:"#828282"}}>
        <span style={{fontFamily:"Poppins-Medium"}}> Fish </span> <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>   <span style={{fontFamily:"Poppins-Medium"}}> prawns </span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>  <span style={{fontFamily:"Poppins-Medium"}}> Tamatoes </span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>  <span style={{fontFamily:"Poppins-Medium"}}>Rice</span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}>  |  </span>  <span style={{fontFamily:"Poppins-Medium"}}> potatoes </span>
        </div>
        <div className="text-center">
            <div className="food-menu-middle" style={{background:"#F5FBF8"}}>
            <img className={`${flag===0 ? "minus-plus-unactive" : ""}`} src={minus_icon} alt="dhf" height="23px" width="23px" style={{backgroundColor:"#",padding:"3px",borderRadius:"8px",float:"left"}} onClick={()=>{RemoveOrder(item);setToggler(!toggler)}}/>
            <span style={{padding:"0px 10px",position:"relative",bottom:"2px",color:"#00A852",fontFamily:"Poppins-SemiBold",fontSize:"14px",background:"#F5FBF8",borderRadius:"20px"}}>{flag}</span>
            <img className={`${flag>=3 ? "minus-plus-unactive" : ""}`} src={plus_icon} alt="dhf" height="23px" width="23px" style={{backgroundColor:"#",padding:"6px",borderRadius:"8px",float:"right"}} onClick={()=>{if(flag<=2){AddOrder(item);setToggler(!toggler)}}}/>
            </div>

        </div>
        </div>
            {/* <div className="float-right" style={{margin:"25px 5px 5px 0px"}}>
            <img className="" src={minus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white",backgroundColor:"#e5f5ee"}} onClick={()=>{RemoveOrder(item);setToggler(!toggler)}}/>
            <span style={{padding:"0px 10px"}}>{flag}</span>
            <img className="" src={plus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white",backgroundColor:"#e5f5ee"}} onClick={()=>{AddOrder(item);setToggler(!toggler)}}/>
            </div> */}
            
        </div>
        <div className="food-menu-btn text-center" style={{}}><button className="btn btn-success" style={{fontSize:"11px",borderRadius:"4px",padding:"4px 26px 4px 26px",fontFamily:"Poppins-Medium",color:"white",marginRight:"50px"}}>ADD</button>
        <button className="btn " style={{borderRadius:"4px",fontSize:"11px",padding:"4px 26px 4px 26px",fontFamily:"Poppins-Medium",color:"#F49901",background:"white",border:"2px solid #F49901"}}>Schedule</button>
        </div>

        </div>
        
    )
}
const defaultswipe={
    "left":false,
    "right":false
}
const Cards=({setOrders,order,AddOrder,RemoveOrder})=>{
    const [swipe,setSwipe]=useState({"left":true,"right":false})
    const [food,setFood]=useState(true)
    const [foodCat,setFoodCat]=useState(["Popular","Balanced","Salad"]);
    const [foodcategory,setFoodcategory]=useState(Food_category_data);
    const handlers = useSwipeable({
        // onSwipedLeft: () => {console.log("left");
        // setSwipe({'left':true,"right":false})
        // setFood(!food)
        // let cat=foodCat.slice(1,3);
        // setFoodCat([...cat,foodCat[0]]);
        // },
        // onSwipedRight: () => {console.log("right");
        // setSwipe({"right":true,"left":false})
        // let cat=foodCat.slice(0,2);
        // setFood(!food)
        // setFoodCat([foodCat[2],...cat]);},

        preventDefaultTouchmoveEvent: true,
        trackMouse: true
      });
    useEffect(()=>{
        setSwipe({"left":false,"right":true});
        setFoodcategory({Food_category_data,"Popular":true})
        
    },[])
    useEffect(()=>{
        console.log("UseEffect");
        setTimeout(() => {
            console.log("sds")
        }, 100);
    },[swipe,foodcategory])
    

    

    return (

        <div className="main-container"  style={{
            maxHeight:"calc(100vh - 120px)",overflowY:"scroll",
            padding:"20px 0%",margin:"0",
            // backgroundColor:"#9BE0B8",
            marginLeft:"0px",marginRight:"0px"}}>

        
        <div className="card  dash-banner" style={{backgroundColor:"white",border:"0px",borderRadius:'5px',margin:"0px 5% 0px 5%"}}>
            <Link to="/cart"> <div className="text-right"><img src={cart_icon} height="24px" width="24px" style={{margin:"0px -25px 0px 0px"}}/><span className="text-center" style={{position:"relative",
    right: '-9px',
    top: '-16px',
    borderRadius: '50%',
    background: '#E5F5EE',
    color: '#00A852',
    padding: '2px 7px',
    border:"4px solid white",
    fontSize:"12px"

}}>{order.length}</span></div></Link>
            </div>
         {/* <div className="flex-container" > */}
         
            {/* <div className="food-icon-card" > */}
            {/* </div> */}
            {/* <div className="food-icon-card mg-left" >
            </div> */}
            {/* </div> */}
         {/* <Swiper {...params} > */}
        <div >
                  {/* <div className="flex-container" >
         
            <div className="food-icon-card" >
            
            
            </div>
                        <div className="food-icon-card mg-left" >
            
            
            </div>
           
            </div> */}
        <div  style={{marginBottom :"10px",padding:"0px 0px 12px 0px",borderRadius:"10px",marginLeft:"0%",marginRight:"0%"}}>
        {/* <Texttoggler handlers={handlers} foodCat={foodCat} swipe={swipe} food={food}/> */}
        <Textslider  foodcategory={foodcategory} setFoodcategory={setFoodcategory} swipe={swipe} food={food}/>
        {/* <Slide left>
        <div>
        <div {...handlers} class="scrolling-wrapper">
      
            <div class="card" style={{width:"28vw",border:"None"}}><p style={{color:"#989898",fontFamily:"Poppins-SemiBold"}} className=" food-select-unactive" > {foodCat[1]}</p></div>
            <div class="card" style={{width:"44vw",border:"None"}}><p style={{color:"#525252",fontFamily:"Poppins-SemiBold"}} className=" text-center food-popular-text " > {foodCat[0]}</p></div>

            <div class="card" style={{width:"28vw",border:"None"}}><p style={{marginRight:"5px",color:"#989898",fontFamily:"Poppins-SemiBold"}} className=" text-right food-select-unactive" > {foodCat[2]}</p></div>
            
            
            </div>
            </div>
        </Slide> */}
        {/* <Slide right when={swipe.right} >
        <div>
        <div {...handlers} class="scrolling-wrapper">
      
            <div class="card" style={{width:"28vw",border:"None"}}><p style={{color:"#989898",fontFamily:"Poppins-SemiBold"}} className=" food-select-unactive" > {foodCat[1]}</p></div>
            <div class="card" style={{width:"44vw",border:"None"}}><p style={{color:"#525252",fontFamily:"Poppins-SemiBold"}} className=" text-center food-popular-text " > {foodCat[0]}</p></div>

            <div class="card" style={{width:"28vw",border:"None"}}><p style={{marginRight:"5px",color:"#989898",fontFamily:"Poppins-SemiBold"}} className=" text-right food-select-unactive" > {foodCat[2]}</p></div>
            
            
            </div>
            </div>
        </Slide> */}


                <div className="flex-container my-0" >
                
                                       
                   {initialdata.map((e,i)=>{return e.category==='cat1' && (<MenuCard item={e} AddOrder={AddOrder} key={i} RemoveOrder={RemoveOrder} order={order}/>)}) }
                                       
                                       {/* <MenuCard/> */}
                </div>
        {/* <p style={{margin:"20px 0px 0px 0px"}} className="mt-5"> Category-2</p> */}
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
        order:state.Foodorder.orders
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