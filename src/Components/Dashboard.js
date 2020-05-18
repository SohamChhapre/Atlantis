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
import banner_cleaning_img from './../Icons/Icons-Dash/banner-cleaning-cropped.png'
import profile_men from './../Icons/Icons-Dash/profile_men.png';
import logo from './../Icons/Icons-Dash/logo.png';
import cross_icon from './../Icons/Icons-Dash/signs.png';
import {AddCart, IncrementCart,DecrementCart,RemoveCart ,IncrementFood,DecrementFood,IncrementLaundry,DecrementLaundry } from "./Redux/index.js";
import {connect} from 'react-redux';
import DashboardSkeleton from './Skeletons/DashboardSkeleton.js';
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
                
                    {/* <textarea className="form-control" placeholder="Add a Note" rows="4" /> */}
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
const SliderCardLaundry=({item,IncrementLaundry,DecrementLaundry,toggler,setToggler})=>{
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
        <div style={{float:"left",margin:"-1px 20px 11px 11px",paddingTop:"10px",backgroundColor:"",width:item.name==="Wash & Fold"?"97px":"94px",height:"96px",borderRadius:"5px"}}>
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
        <div className="food-menu-btn text-center" ><div className="btn btn-success" style={{fontSize:"11px",float:"left",marginLeft:"10%",borderRadius:"4px",padding:"6px 13px",fontFamily:"Poppins-Medium",color:"white",marginBottom:"2px"}} data-toggle="modal" data-target={flag?"#OrderModal87":""} 
        onClick={()=>{if(flag===0)
                        setErr("Select Quantity")
                      else
                        AddCart({...item,orderCat:"Laundry"})
                    }} >Order Now</div>
        <div className=" " style={{borderRadius:"4px",fontSize:"11px",padding:"6px 16px",float:"right",marginRight:"10%",fontFamily:"Poppins-Medium",color:"#63364E",background:"white",border:"1px solid #63364E",marginBottom:"2px"}} data-toggle="modal" data-target={flag?"#ScheduleModal":"" } 
        onClick={()=>{if(flag===0)
                setErr("Select Quantity")}} >Schedule</div>
        </div>
        {/* <OrderNowPopUp item={item} cart={cart} AddCart={AddCart} /> */}
       {flag>0?<SchedulePopUp item={item}  AddCart={AddCart} />:""}
        </div>
        
    )
}
const SliderCardCleaning=({item,toggler,setToggler})=>{
    
    
        
    

    return (
        <div style={{margin:"",width:"256px"}}>
        <div className="horizontal-card" style={{backgroundColor:"white",height:"calc(137px)",margin:"15px 0px 15px 0px",position:"relative",boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)",borderRadius:"10px"}}  >
        <div style={{float:"left",margin:"-1px 20px 11px 11px",paddingTop:"10px",backgroundColor:"",width:item.name==="Wash & Fold"?"97px":"94px",height:"96px",borderRadius:"5px"}}>
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
        {/* <div className="text-center">
            <div className="food-menu-middle" style={{width:"118px",left:"122px",bottom:"25px",background:"#F5FBF8",
            // width:"37vw",left:"calc(28vw + 30px)"
            }}>
            <img className={`${flag===0 ? "minus-plus-unactive" : ""}`} src={minus_icon} alt="dhf" height="27px" width="27px" style={{backgroundColor:"#",padding:"3px",borderRadius:"8px",float:"left"}} onClick={()=>{if(flag>0){DecrementLaundry(item);setToggler(!toggler)}}}/>
            <span style={{padding:"0px 10px",position:"relative",bottom:"-2px",color:"#00A852",fontFamily:"Poppins-SemiBold",fontSize:"14px",background:"#F5FBF8",borderRadius:"20px"}}>{flag}</span>
            <img className={`${flag>=3 ? "minus-plus-unactive" : ""}`} src={plus_icon} alt="dhf" height="27px" width="27px" style={{backgroundColor:"#",padding:"6px",borderRadius:"8px",float:"right"}} onClick={()=>{if(flag<=2){IncrementLaundry(item);setToggler(!toggler)}}}/>
            </div>
               
        </div> */}
        </div>
             {/* {err && <small  style={{color:"red",position:"absolute",bottom:"2px",left:"142px"}}>{err}</small>} */}
            
        </div>
        <div className="food-menu-btn text-center" ><div className="btn btn-success" style={{fontSize:"11px",float:"left",marginLeft:"10%",borderRadius:"4px",padding:"6px 13px",fontFamily:"Poppins-Medium",color:"white",marginBottom:"2px"}} 
        onClick={()=>{
                        AddCart({...item,orderCat:"Cleaning"})
                    }} >Order Now</div>
        <div className=" " style={{borderRadius:"4px",fontSize:"11px",padding:"6px 16px",float:"right",marginRight:"10%",fontFamily:"Poppins-Medium",color:"#63364E",background:"white",border:"1px solid #63364E",marginBottom:"2px"}} data-toggle="modal" data-target="#ScheduleModal" 
         >Schedule</div>
        </div>
        {/* <OrderNowPopUp item={item} cart={cart} AddCart={AddCart} /> */}
        <SchedulePopUp item={item}  AddCart={AddCart} />
        </div>
        
    )
}


const SliderCard=({item,IncrementFood,DecrementFood,cart,toggler,setToggler,AddCart,setLoading})=>{
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
        <img src={item.url} height='auto' width="100%" onLoad={()=>setLoading(false)} style={{borderRadius:"5px"}} />
        
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
            <img className={`${flag===0 ? "minus-plus-unactive" : ""}`} src={minus_icon} alt="dhf" height="27px" width="27px" style={{backgroundColor:"#",padding:"3px",borderRadius:"8px",float:"left"}} onClick={()=>{if(flag>0){DecrementFood(item);setToggler(!toggler)}}}/>
            <span style={{padding:"0px 10px",position:"relative",bottom:"-2px",color:"#00A852",fontFamily:"Poppins-SemiBold",fontSize:"14px",background:"#F5FBF8",borderRadius:"20px"}}>{flag}</span>
            <img className={`${flag>=3 ? "minus-plus-unactive" : ""}`} src={plus_icon} alt="dhf" height="27px" width="27px" style={{backgroundColor:"#",padding:"6px",borderRadius:"8px",float:"right"}} onClick={()=>{if(flag<=2){IncrementFood(item);setToggler(!toggler)}}}/>
            </div>
               
        </div>
        </div>
             {err && <small  style={{color:"red",position:"absolute",bottom:"2px",left:"142px"}}>{err}</small>}
            
        </div>
        <div className="food-menu-btn text-center" ><div className="btn btn-success" style={{fontSize:"11px",float:"left",marginLeft:"10%",borderRadius:"4px",padding:"6px 13px",fontFamily:"Poppins-Medium",color:"white",marginBottom:"2px"}} data-toggle="modal" data-target={flag?"#OrderModal78":""} 
        onClick={()=>{if(flag===0)
                   setErr("Select Quantity")
                   else
                       {
                           console.log("add order")
                           AddCart({...item,orderCat:"Food"})
                       }
                   }} >Order Now</div>
        <div className=" " style={{borderRadius:"4px",fontSize:"11px",padding:"6px 16px",float:"right",marginRight:"10%",fontFamily:"Poppins-Medium",color:"#63364E",background:"white",border:"1px solid #63364E",marginBottom:"2px"}} data-toggle="modal" data-target={flag?"#ScheduleModal":"" } onClick={()=>{if(flag===0)setErr("Select Quantity")}} >Schedule</div>
        </div>
        
        {/* <OrderNowPopUp item={item} cart={cart} AddCart={AddCart} /> */}

       {flag>0?<SchedulePopUp item={item} cart={cart} AddCart={AddCart} />:""}
        </div>
        
    )
}
const mapStateToprops = (state) => {
  return {
    cart: state.Foodorder.cart,
    FoodData:state.Foodorder.FoodInitial,
    LaundryInit:state.Laundaryorder.LaundryInit,
    CleaningInit:state.Laundaryorder.CleaningInit
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    AddCart: (item) => dispatch(AddCart(item)),
    IncrementFood:(item)=> dispatch(IncrementFood(item)),
    DecrementFood:(item)=> dispatch(DecrementFood(item)),
    IncrementLaundry:(item)=> dispatch(IncrementLaundry(item)),
    DecrementLaundry:(item)=> dispatch(DecrementLaundry(item))
  };
};
const RoomServicedata=[{id:1,name:"Cleaning",content:["Dusting","Bedding","Floor","Washroom"],timing:"10AM - 6PM"},{id:2,name:"Repairs",content:["Furniture","AC","Washroom"],timing:"10AM - 6PM"}]
const ServiceMenu=({item,AddCart,RemoveOrder,cart})=>{
    
    var contentarr=item.content.slice(0,item.content.length-1);
    var flag=0;
    // console.log(item);
    // for(var i=0;i<cart.length;i++){
    //         console.log(i,)
    //     if(cart[i].id===item.id && cart[i].category===item.category )
    //             flag=cart[i].items;
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
      className="cart-menu-name"  style={{fontFamily:"Poppins-SemiBold",color:"#00A852",lineHeight:"30px"}}
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

const FoodDash=({FoodData,IncrementFood,DecrementFood,cart,AddCart,setLoading})=>{
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
        <div style={{}}>
        
              <div className="scrolling-wrapper-dash" style={{marginTop:"0px",marginBottom:"10px"}}>
               <div style={{width:"4%",opacity:"0"}}>
               dhfdj
               </div>
                {FoodCategory[e].slice(0,5).map((k,key)=>(
                    <div className="icon" style={{width:"%",marginRight:"25px"}}>
                    <SliderCard item={k} key={key} setToggler={setToggler} setLoading={setLoading} toggler={toggler} AddCart={AddCart} IncrementFood={IncrementFood} DecrementFood={DecrementFood} cart={cart}/>
                   
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
const LaundaryDash=({LaundryInit,IncrementLaundry,DecrementLaundry,cart,AddCart})=>{
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
        <div >
        
              <div className="scrolling-wrapper-dash" style={{marginTop:"0px",marginBottom:"10px"}}>
                <div style={{width:"4%",opacity:"0"}}>sh</div>

                {
                LaundryInit.map((e,i)=>(
                    e.category==="Casual" &&
                    <div key={i} className="icon" style={{width:"%",marginRight:"25px"}}>
                    <SliderCardLaundry item={e}  setToggler={setToggler} toggler={toggler} AddCart={AddCart} IncrementLaundry={IncrementLaundry} DecrementLaundry={DecrementLaundry} cart={cart}/>
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
        <div >
        
              <div className="scrolling-wrapper-dash" style={{marginTop:"0px",marginBottom:"10px"}}>
                <div style={{width:"4%",opacity:"0"}}>sh</div>
               
                {
                LaundryInit.map((e,i)=>(
                    e.category==="Formal" &&
                    <div key={i} className="icon" style={{width:"%",marginRight:"25px"}}>
                    <SliderCardLaundry item={e} setToggler={setToggler} toggler={toggler} IncrementLaundry={IncrementLaundry} DecrementLaundry={DecrementLaundry} cart={cart} AddCart={AddCart}/>
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
const CleaningDash=({CleaningInit,cart})=>{
    const [toggler,setToggler]=useState(true);

    useEffect(()=>{
        setToggler(true)
    },[])

    useEffect(()=>{

    },[toggler])
    const params = {
   slidesPerView: 1.15,
  spaceBetween: 15,
  freeMode: true,
    }
    
    return (
        <div style={{margin:"25px 0px"}}>

        <div style={{fontSize:"19px",color:"#63364E",fontFamily:"Poppins-SemiBold",margin:"0px 5%",position:"relative"}}>

        </div>
        <div >
        
              <div className="scrolling-wrapper-dash" style={{marginTop:"0px",marginBottom:"10px"}}>
                <div style={{width:"4%",opacity:"0"}}>sh</div>
             
                {
                CleaningInit.map((e,i)=>(
                    
                    <div key={i} className="icon" style={{width:"%",marginRight:"25px"}}>
                    <SliderCardCleaning item={e} setToggler={setToggler} toggler={toggler} IncrementLaundry={IncrementLaundry} DecrementLaundry={DecrementLaundry} cart={cart} AddCart={AddCart}/>
                    
                    </div>
                    
                ))
                }
                
                  <div className="icon" style={{opacity:"0",width:"0px",height:"auto"}}>
                  sk
                    </div>  
                     
        
                </div>
        </div>
        </div>
    )
}
const CleaningDashwithProps=connect(mapStateToprops, mapDispatchToprops)(CleaningDash)


const Dashboard=()=>{
    
    const [active,setActive]=useState({'Food':true,"Laundary":false,"Cleaning":false,"Electricity":false})
    const [loading,setLoading]=useState(true)    

     
    useEffect(()=>{
    setActive({...defaultState,"Food":true})
    setLoading(true)
    // setTimeout(() => {
    //     setLoading(true)
    // }, 3000);

    },[])
    useEffect(()=>{
            
    },[active,loading])

    return(
        <div>
            { loading && <DashboardSkeleton/>}
            <div style={{opacity:loading?"0":"1"}}>
            <p className="view-block">Rotate to portrait mode </p>
            <p className="desktop-block">We Support Mobile View Only</p>
            <div className="main-container" style={{margin:"20px 0px 90px 0%"}}>
            <div className="mt-2 mb-5" style={{marginLeft:"5%"}}> 
                <div style={{float:"left"}}>
                    <img src={logo} height="45px" width="45px" />
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
            {active.Food && <img src={banner_food_img}  height="100%" width="100%" style={{borderRadius:"5px"}}/>}
            { active.Laundary && <img src={banner_laundry_img} height="100%" width="100%" style={{borderRadius:"5px"}}/>}
            {active.Cleaning && <img src={banner_cleaning_img} height="100%" width="100%" style={{borderRadius:"5px"}}/>}
            
            </div>


            {active.Food && <div><FoodDashwithProps setLoading={setLoading} /></div>}

            {active.Laundary && <LaundaryDashwithProps/>}

            {active.Cleaning && <CleaningDashwithProps/> }


            </div>        

            </div>
                
            </div>

    )
}



export default connect(mapStateToprops, mapDispatchToprops)(Dashboard);
// export default Dashboard;