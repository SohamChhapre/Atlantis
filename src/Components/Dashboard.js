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
import ic_food from './../Icons/Icons-Dash/ic-food-new.png';
import ic_electricity from './../Icons/Icons-Dash/img-electricity.png'
import ic_roomservice from './../Icons/Icons-Dash/img-roomservice.png'
import ic_laundary from  './../Icons/Icons-Dash/ic-laundry-new.png'
import {Fooddata} from './CategoryData.js';
import banner_food_img from './../Icons/Icons-Dash/img-food-640.png';
import banner_laundry_img from './../Icons/Icons-Dash/img-cleaning-hero640.png'
import profile_men from './../Icons/Icons-Dash/profile_men.png';
import logo from './../Icons/Icons-Dash/logo.png';
import cross_icon from './../Icons/Icons-Dash/signs.png';
import { AddOrder ,IncrementOrder,DecrementOrder,IncrementLaundry,DecrementLaundry } from "./Redux/index.js";
import {connect} from 'react-redux';

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
const OrderNowPopUp=({item})=>{

    return(

        <div>
            <div class="modal fade" id="OrderModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="text-right" style={{height:"40px"}} data-dismiss="modal">
                    <img src={cross_icon} height="15px" width="15px" style={{float:"right",margin:"15px"}} />
                </div>
                <div class="modal-body">
                    <textarea className="form-control" placeholder="Add a Note" rows="4"/>
                    <div style={{margin:"30px 0px"}}>
                        <button className="btn btn-success" style={{fontSize:"11px",float:"left",marginLeft:"10%",borderRadius:"4px",padding:"6px 13px",fontFamily:"Poppins-Medium",color:"white",marginBottom:"2px"}}>Confirm</button>
                    <button className="btn " style={{borderRadius:"4px",fontSize:"11px",padding:"6px 16px",float:"right",marginRight:"10%",fontFamily:"Poppins-Medium",color:"#63364E",background:"white",border:"1px solid #63364E",marginBottom:"2px"}} data-dismiss="modal">Cancel</button>
                </div>
                </div>                
                </div>
               </div>
            </div>
        </div>

    )
}
    var d = new Date().toISOString();
    var k=new Date(d).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })
var Time=[];
    var m=new Date(k)
    m.setMinutes(0)
    for(let i=0;i<24;i++){
        
        m.setMinutes(m.getMinutes()+30);
        var mn= new Date(m)
        var k=mn.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }).split(',')[1].split(" ")
        Time.push(k[1].split(":")[0]+":"+k[1].split(":")[1]+" "+ k[2])
    }
const SchedulePopUp=({item})=>{
    const [neworder,setNeworder]=useState({...item})

    useEffect(()=>{
            setNeworder({...item,note:""})
    },[])

    useEffect(()=>{

    },[neworder])


    

    return(

        <div>
            <div class="modal fade" id="ScheduleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="text-right" style={{height:"40px"}} data-dismiss="modal">
                    <img src={cross_icon} height="15px" width="15px" style={{float:"right",margin:"15px"}} />
                </div>
                <div class="modal-body">
                <div style={{margin:"10px 0px 30px 0px",height:"36px"}}>
                <select  style={{float:"left",width:"40%"}} defaultValue={Time[0]} class="form-control" onChange={(e)=>{
                    
                    setNeworder({...neworder,day:e.target.value})
                    // console.log(neworder)
                }}>
                    <option selected>Today</option>
                    <option>Tommorow</option>
                </select>
                <select style={{float:"right",width:"40%"}} defaultValue={Time[0]} class="form-control" onChange={(e)=>{
                    setNeworder({...neworder,time:e.target.value})
                    // console.log(neworder)
                }}>
                    {Time.map((e,i)=>(<option >{e}</option>)) }
                </select>
                </div>
                
                    <textarea className="form-control" placeholder="Add a Note" rows="4" />
                    <div style={{margin:"30px 0px"}}>
                        <button className="btn btn-success" style={{fontSize:"11px",float:"left",marginLeft:"10%",borderRadius:"4px",padding:"6px 13px",fontFamily:"Poppins-Medium",color:"white",marginBottom:"2px"}}>Confirm</button>
                    <button className="btn " style={{borderRadius:"4px",fontSize:"11px",padding:"6px 16px",float:"right",marginRight:"10%",fontFamily:"Poppins-Medium",color:"#63364E",background:"white",border:"1px solid #63364E",marginBottom:"2px"}} data-dismiss="modal">Cancel</button>
                </div>

                </div>
                
                </div>
            </div>
            </div>
</div>
      
    )
}
const SliderCardLaundry=({item,IncrementLaundry,DecrementLaundry,order,toggler,setToggler})=>{
    const [err,setErr]=useState("")
    
    useEffect(()=>{
    if(item.items>0)
        setErr("")
        // console.log("hello")
    },[toggler])
    useEffect(()=>{

    },[err])
        var flag=item.items;
    

    return (
        <div style={{margin:"",width:"256px"}}>
        <div className="horizontal-card" style={{backgroundColor:"white",height:"calc(137px)",margin:"15px 0px 15px 0px",position:"relative",boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)",borderRadius:"10px"}}  >
        <div style={{float:"left",margin:"3px 20px 11px 11px",paddingTop:"10px",backgroundColor:"",width:item.name==="Wash & Fold"?"97px":"94px",height:"96px",borderRadius:"5px"}}>
        <img src={item.url} height='auto' width="100%"  style={{borderRadius:"5px",marginRight:item.name==="Iron & Fold"?"6px":"0px"}} />
        
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:"20px"}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="food-menu-name"  style={{whiteSpace:"normal",textAlign:"left",fontFamily:"Poppins-Bold",color:"#00A852",lineHeight:"20px",fontSize:"18px"}}
        >
        {/* Wash & Fold  */}
        {item && item.name}
        {/* <img src={item.isfav?like_icon:heart_svg_icon} className="food-heart"  style={{float:'right',marginRight:"16px",marginTop:"10px"}}/> */}
        
        </div>
        {/* <div className="card-content"
        style={{
            // backgroundColor:"#c0c0c0",height:"15px",width:"25vw" ,float:"",margin:"0px 0px",
        marginTop:"-3px",fontFamily:"Poppins-SemiBold",color:"#828282"}}>
        <span style={{fontFamily:"Poppins-Medium"}}> Fish </span> <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>   <span style={{fontFamily:"Poppins-Medium"}}> prawns </span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>  <span style={{fontFamily:"Poppins-Medium"}}> Tamatoes </span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>  <span style={{fontFamily:"Poppins-Medium"}}>Rice</span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}>  |  </span>  <span style={{fontFamily:"Poppins-Medium"}}> potatoes </span>
        </div> */}
        <div className="text-center">
            <div className="food-menu-middle" style={{width:"118px",left:"122px",bottom:"25px",background:"#F5FBF8",
            // width:"37vw",left:"calc(28vw + 30px)"
            }}>
            <img className={`${flag===0 ? "minus-plus-unactive" : ""}`} src={minus_icon} alt="dhf" height="27px" width="27px" style={{backgroundColor:"#",padding:"3px",borderRadius:"8px",float:"left"}} onClick={()=>{if(flag>0){DecrementLaundry(item);setToggler(!toggler)}}}/>
            <span style={{padding:"0px 10px",position:"relative",bottom:"-2px",color:"#00A852",fontFamily:"Poppins-SemiBold",fontSize:"14px",background:"#F5FBF8",borderRadius:"20px"}}>{flag}</span>
            <img className={`${flag>=3 ? "minus-plus-unactive" : ""}`} src={plus_icon} alt="dhf" height="27px" width="27px" style={{backgroundColor:"#",padding:"6px",borderRadius:"8px",float:"right"}} onClick={()=>{if(flag<=2){IncrementLaundry(item);setToggler(!toggler)}}}/>
            </div>
               
        </div>
        </div>
             {err && <small  style={{color:"red",position:"absolute",bottom:"2px",left:"142px"}}>{err}</small>}
            
        </div>
        <div className="food-menu-btn text-center" ><div className="btn btn-success" style={{fontSize:"11px",float:"left",marginLeft:"10%",borderRadius:"4px",padding:"6px 13px",fontFamily:"Poppins-Medium",color:"white",marginBottom:"2px"}} data-toggle="modal" data-target={flag?"#OrderModal":""} onClick={()=>{if(flag===0)setErr("Select Quantity")}} >Order Now</div>
        <div className=" " style={{borderRadius:"4px",fontSize:"11px",padding:"6px 16px",float:"right",marginRight:"10%",fontFamily:"Poppins-Medium",color:"#63364E",background:"white",border:"1px solid #63364E",marginBottom:"2px"}} data-toggle="modal" data-target={flag?"#ScheduleModal":"" } onClick={()=>{if(flag===0)setErr("Select Quantity")}} >Schedule</div>
        </div>
        <OrderNowPopUp item={item} order={order} AddOrder={AddOrder} />
       {flag>0?<SchedulePopUp item={item} order={order} AddOrder={AddOrder} />:""}
        </div>
        
    )
}
const SliderCard=({item,IncrementOrder,DecrementOrder,order,toggler,setToggler})=>{
    const [err,setErr]=useState("")
    
    useEffect(()=>{
    if(item.items>0)
        setErr("")
        // console.log("hello")
    },[toggler])
    useEffect(()=>{

    },[err])
        var flag=item.items;
    

    return (
        <div style={{margin:"",width:"256px"}}>
        <div className="horizontal-card" style={{backgroundColor:"white",height:"calc(137px)",margin:"15px 0px 15px 0px",position:"relative",boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)",borderRadius:"10px"}}  >
        <div style={{float:"left",margin:"11px 20px 11px 11px",backgroundColor:"#e5f5ee",width:"86px",height:"112px"}}>
        <img src={item.url} height='auto' width="100%"  style={{borderRadius:"5px"}} />
        
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:"10px"}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="food-menu-name"  style={{whiteSpace:"normal",textAlign:"left",fontFamily:"Poppins-Bold",color:"#00A852",lineHeight:"20px",fontSize:"18px"}}
        >
        {/* Wash & Fold  */}
        {item && item.name}
        {/* <img src={item.isfav?like_icon:heart_svg_icon} className="food-heart"  style={{float:'right',marginRight:"16px",marginTop:"10px"}}/> */}
        
        </div>
        {/* <div className="card-content"
        style={{
            // backgroundColor:"#c0c0c0",height:"15px",width:"25vw" ,float:"",margin:"0px 0px",
        marginTop:"-3px",fontFamily:"Poppins-SemiBold",color:"#828282"}}>
        <span style={{fontFamily:"Poppins-Medium"}}> Fish </span> <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>   <span style={{fontFamily:"Poppins-Medium"}}> prawns </span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>  <span style={{fontFamily:"Poppins-Medium"}}> Tamatoes </span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}> |  </span>  <span style={{fontFamily:"Poppins-Medium"}}>Rice</span>  <span style={{fontFamily:"Poppins-Thin",margin:"0px 5px"}}>  |  </span>  <span style={{fontFamily:"Poppins-Medium"}}> potatoes </span>
        </div> */}
        <div className="text-center">
            <div className="food-menu-middle" style={{width:"118px",left:"118px",background:"#F5FBF8",
            // width:"37vw",left:"calc(28vw + 30px)"
            }}>
            <img className={`${flag===0 ? "minus-plus-unactive" : ""}`} src={minus_icon} alt="dhf" height="27px" width="27px" style={{backgroundColor:"#",padding:"3px",borderRadius:"8px",float:"left"}} onClick={()=>{if(flag>0){DecrementOrder(item);setToggler(!toggler)}}}/>
            <span style={{padding:"0px 10px",position:"relative",bottom:"-2px",color:"#00A852",fontFamily:"Poppins-SemiBold",fontSize:"14px",background:"#F5FBF8",borderRadius:"20px"}}>{flag}</span>
            <img className={`${flag>=3 ? "minus-plus-unactive" : ""}`} src={plus_icon} alt="dhf" height="27px" width="27px" style={{backgroundColor:"#",padding:"6px",borderRadius:"8px",float:"right"}} onClick={()=>{if(flag<=2){IncrementOrder(item);setToggler(!toggler)}}}/>
            </div>
               
        </div>
        </div>
             {err && <small  style={{color:"red",position:"absolute",bottom:"2px",left:"142px"}}>{err}</small>}
            
        </div>
        <div className="food-menu-btn text-center" ><div className="btn btn-success" style={{fontSize:"11px",float:"left",marginLeft:"10%",borderRadius:"4px",padding:"6px 13px",fontFamily:"Poppins-Medium",color:"white",marginBottom:"2px"}} data-toggle="modal" data-target={flag?"#OrderModal":""} onClick={()=>{if(flag===0)setErr("Select Quantity")}} >Order Now</div>
        <div className=" " style={{borderRadius:"4px",fontSize:"11px",padding:"6px 16px",float:"right",marginRight:"10%",fontFamily:"Poppins-Medium",color:"#63364E",background:"white",border:"1px solid #63364E",marginBottom:"2px"}} data-toggle="modal" data-target={flag?"#ScheduleModal":"" } onClick={()=>{if(flag===0)setErr("Select Quantity")}} >Schedule</div>
        </div>
        <OrderNowPopUp item={item} order={order} AddOrder={AddOrder} />
       {flag>0?<SchedulePopUp item={item} order={order} AddOrder={AddOrder} />:""}
        </div>
        
    )
}
const mapStateToprops = (state) => {
  return {
    order: state.Foodorder.orders,
    FoodData:state.Foodorder.FoodInitial,
    LaundryInit:state.Laundaryorder.LaundryInit
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    AddOrder: (item) => dispatch(AddOrder(item)),
    IncrementOrder:(item)=> dispatch(IncrementOrder(item)),
    DecrementOrder:(item)=> dispatch(DecrementOrder(item)),
    IncrementLaundry:(item)=> dispatch(IncrementLaundry(item)),
    DecrementLaundry:(item)=> dispatch(DecrementLaundry(item))
  };
};
const RoomServicedata=[{id:1,name:"Cleaning",content:["Dusting","Bedding","Floor","Washroom"],timing:"10AM - 6PM"},{id:2,name:"Repairs",content:["Furniture","AC","Washroom"],timing:"10AM - 6PM"}]
const ServiceMenu=({item,AddOrder,RemoveOrder,order})=>{
    
    var contentarr=item.content.slice(0,item.content.length-1);
    var flag=0;
    // console.log(item);
    // for(var i=0;i<order.length;i++){
    //         console.log(i,)
    //     if(order[i].id===item.id && order[i].category===item.category )
    //             flag=order[i].items;
    // }

    return (
        <div style={{margin:"14px 14px 34px 14px",width:"calc(100% - 28px)"}}>
        <div className="horizontal-card" style={{backgroundColor:"white",borderRadius:"20px",height:"calc(18vw + 22px)",margin:"15px 0px 15px 0px",position:"relative",boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)"}}  >
        <div style={{float:"left",margin:"11px 20px 11px 11px",backgroundColor:"#e5f5ee",width:"18vw",height:"18vw",borderRadius:"10px"}}>
        
        {/* <img src={dummy_img} height='100%' width="100%"   /> */}
        
        </div>
          
        <div style={{
            paddingTop:"10px"}}>
        <div 
      className="order-menu-name"  style={{fontFamily:"Poppins-SemiBold",color:"#00A852",lineHeight:"30px"}}
        >
        {item.name}
        </div>
       
            <div className="">
                <div className="service-content">
                 {contentarr.map((e,i)=>(<span key={i}> {e}<span style={{margin:"0px 5px"}}>|</span></span>))}
                   {item.content[item.content.length-1]}
              
                </div>
            <div style={{position:"absolute",bottom:"10px",left:"calc(18vw + 30px)",fontSize:"9px",fontFamily:"Poppins-MediumItalic",color:"rgb(130,130,130)",textAlign:"center"}}>
               Timing : 10AM - 6PM
                </div>

            </div>
            
        </div>
        
           
           
        </div>
        
<div className="food-menu-btn text-center" style={{}}><button className="btn btn-success" style={{fontSize:"11px",borderRadius:"4px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"white",marginRight:"50px"}}>Order Now</button>
        <button className="btn " style={{borderRadius:"4px",fontSize:"11px",padding:"4px 24px 4px 24px",fontFamily:"Poppins-Medium",color:"#63364E",background:"white",border:"1px solid #63364E"}}>Schedule</button>
        </div>
        </div>
        
    )
}

const FoodDash=({FoodData,IncrementOrder,DecrementOrder,order})=>{
    const [toggler,setToggler]=useState(true);

  

    const [FoodCategory,setFoodcategory]=useState({"Bento":[],"Burger":[],"Light Meal":[],"Ayam":[]})
    useEffect(()=>{
        setFoodcategory({Bento:FoodData.slice(0,18),Burger:FoodData.slice(18,22),"Light Meal":FoodData.slice(22,27),"Ayam":FoodData.slice(27,)})
    },[])
      
    useEffect(()=>{
        setFoodcategory({Bento:FoodData.slice(0,18),Burger:FoodData.slice(18,22),"Light Meal":FoodData.slice(22,27),"Ayam":FoodData.slice(27,)})
    
    },[FoodData,toggler])
    var category=["Bento","Burger","Light Meal","Ayam"];
    return (
    <div>
    {(toggler || ! toggler) && 
     category.map((e,i)=>(
          
    <div style={{margin:"25px 0px"}} key={i}>

        <div style={{fontSize:"19px",color:"#63364E",fontFamily:"Poppins-SemiBold",margin:"0px 5%",position:"relative"}}>{e}
       <Link exact to={{
        pathname: '/food',
        state: {
            fromdash: e
        }
        }}
    style={{color:"#63364E"}}>
        <span style={{fontFamily:"Poppins-Medium",fontSize:"11px",float:"right",textDecoration:"Underline",position:"absolute",right:"1%",bottom:"5px"}}>
        View All > 
        </span>
        </Link>
        </div>
        <div style={{marginLeft:"3%"}}>
        
              <div className="scrolling-wrapper-dash" style={{marginTop:"0px",marginBottom:"10px"}}>
                {FoodCategory[e].slice(0,5).map((k,key)=>(
                    <div className="icon" style={{width:"%",marginRight:"25px"}}>
                    <SliderCard item={k} key={key} setToggler={setToggler} toggler={toggler} IncrementOrder={IncrementOrder} DecrementOrder={DecrementOrder} order={order}/>
                   
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

const FoodDashwithProps = connect(mapStateToprops, mapDispatchToprops)(FoodDash);
const LaundaryDash=({LaundryInit,IncrementLaundry,DecrementLaundry,order})=>{
    const [toggler,setToggler]=useState(true);

    useEffect(()=>{
        setToggler(true)
    },[])
    useEffect(()=>{

    },[toggler])

    return (
        <div>
        <div style={{margin:"25px 0px"}}>

        <div style={{fontSize:"19px",color:"#63364E",fontFamily:"Poppins-SemiBold",margin:"0px 5%",position:"relative"}}>Casual

        </div>
        <div style={{marginLeft:"3%"}}>
        
              <div className="scrolling-wrapper-dash" style={{marginTop:"0px",marginBottom:"10px"}}>
                {
                LaundryInit.map((e,i)=>(
                    e.category==="Casual" &&
                    <div key={i} className="icon" style={{width:"%",marginRight:"25px"}}>
                    <SliderCardLaundry item={e}  setToggler={setToggler} toggler={toggler} IncrementLaundry={IncrementLaundry} DecrementLaundry={DecrementLaundry} order={order}/>
                    </div>
                    
                ))
                }
                
                  <div className="icon" style={{opacity:"0",width:"0px",height:"auto"}}>
                  sk
                    </div>  
                     
        
                </div>
        </div>
        </div>
         <div style={{margin:"25px 0px"}}>

        <div style={{fontSize:"19px",color:"#63364E",fontFamily:"Poppins-SemiBold",margin:"0px 5%",position:"relative"}}>Formal

        </div>
        <div style={{marginLeft:"3%"}}>
        
              <div className="scrolling-wrapper-dash" style={{marginTop:"0px",marginBottom:"10px"}}>
                {
                LaundryInit.map((e,i)=>(
                    e.category==="Formal" &&
                    <div key={i} className="icon" style={{width:"%",marginRight:"25px"}}>
                    <SliderCardLaundry item={e} setToggler={setToggler} toggler={toggler} IncrementLaundry={IncrementLaundry} DecrementLaundry={DecrementLaundry} order={order}/>
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
const LaundaryDashwithProps=connect(mapStateToprops, mapDispatchToprops)(LaundaryDash)
const CleaningDash=()=>{
    
    const params = {
   slidesPerView: 1.15,
  spaceBetween: 15,
  freeMode: true,
    }
    
    return (
       <div style={{margin:"15px 0px"}}>

      
        <div style={{marginLeft:"3%"}}>
        
                <Swiper {...params}>
                
                <div style={{width:"",marginRight:"10px"}}>
                    <SliderCard item={{isfav:true}}/>
                    </div>
                    <div style={{width:"",marginRight:"10px"}}>
                    <SliderCard item={{isfav:true}}/>
                    </div>
                    
                     
        
                </Swiper>
        </div>
        </div>
    )
}


const Dashboard=()=>{
    
    const [active,setActive]=useState({'Food':true,"Laundary":false,"Cleaning":false,"Electricity":false})
    const [Yoffset,setYoffset]=useState(window.pageYOffset)
    function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        console.log("Scroll down")
        } else {
            console.log("scroll top")
    }
    }
    
    window.onscroll = function() {scrollFunction()};

     
    useEffect(()=>{
    setActive({...defaultState,"Food":true})
    },[])
    useEffect(()=>{
            
    },[active])

    return(
            <div>
            <p className="view-block">Rotate to portrait mode </p>
            <p className="desktop-block">We Support Mobile View Only</p>
            <div className="main-container" style={{margin:"20px 0px 90px 0%"}}>
            <div className="mt-2 mb-5" style={{marginLeft:"5%"}}> 
                <div style={{float:"left"}}>
                    <img src={logo} height="45px" width="45px"/>
                </div>
                <div className="text-left dash-text text-center" >
                       <span style={{fontFamily:"Anteb-Black"}} >Good Evening</span>
                         <span style={{fontFamily:"Anteb-Medium",width:"5%",opacity:0}}>Heyyyyy</span>
                </div>
                
                <div className="rounded-circle dash-profile" style={{marginRight:"5%"}}  >
                    <img src={profile_men} height="100%" width="100%"/>
                    <div>
                    </div>
                </div>
            </div>
        <div>
        
        <div className="scrolling-wrapper-dash" style={{marginLeft:"5%"}}>
            <div onClick={()=>{if(!active.Food)
                    setActive({...defaultState,Food:true})
            }} className="icon icon-container" ><div style={{backgroundColor:"#f2faf6",width:"62px",height:"62px",borderRadius:"50%",marginBottom:"5px"}}><img src={ic_food} height="80%" width="80%" style={{margin:"10% 0px"}} /></div><span style={{opacity:active.Food?1:0.6}}>Food</span></div>
            <div onClick={()=>{if(!active.Laundary)
                    setActive({...defaultState,Laundary:true})
            }} className="icon icon-container" ><div style={{backgroundColor:"#f2faf6",width:"62px",height:"62px",borderRadius:"50%",marginBottom:"5px"}}><img src={ic_laundary} height="70%" width="70%" style={{margin:"15% 0px"}}/></div><span style={{opacity:active.Laundary?1:0.6}}>Laundry</span></div>
            <div onClick={()=>{if(!active.Cleaning)
                    setActive({...defaultState,Cleaning:true})
            }} className="icon icon-container"><div style={{backgroundColor:"#f2faf6",width:"62px",height:"62px",borderRadius:"50%",marginBottom:"5px"}}><img src={ic_roomservice} height="70%" width="70%" style={{margin:"15% 0px"}}/></div><span style={{opacity:active.Cleaning?1:0.6}}>Cleaning</span></div>
            <div onClick={()=>{
                if(!active.Electricity)
                    setActive({...defaultState,Electricity:true})
            }} className="icon icon-container"><div style={{backgroundColor:"#f2faf6",width:"62px",height:"62px",borderRadius:"50%",marginBottom:"5px"}}><img src={ic_electricity} height="70%" width="70%" style={{margin:"15% 0px"}}/></div><span style={{opacity:active.Electricity?1:0.6}}>Electricity</span></div>
            <div className="icon" style={{opacity:"0",width:"0px",height:"auto",marginRight:"5%"}}>
                  sk
                    </div>  
        </div> 
        </div>
            <div className="card dash-banner" style={{margin:"0 5%",backgroundColor:"#E5F5EE",border:"0px",borderRadius:'10px'}}>
            {active.Food && <img src={banner_food_img} height="100%" width="100%" style={{borderRadius:"5px"}}/>}
            { active.Laundary && <img src={banner_laundry_img} height="100%" width="100%" style={{borderRadius:"5px"}}/>}
            {active.Cleaning && <img src={banner_food_img} height="100%" width="100%" style={{borderRadius:"5px"}}/>}
            
            </div>


            {active.Food && <div><FoodDashwithProps  /></div>}

            {active.Laundary && <LaundaryDashwithProps/>}

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



export default connect(mapStateToprops, mapDispatchToprops)(Dashboard);
// export default Dashboard;