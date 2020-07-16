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
import banner_cleaning_img from './../Icons/Icons-Dash/Cleaning_banner.jpg'
import banner_electricity_img from './../Icons/Icons-Dash/Electricity_banner.jpg'
import main_banner from './../Icons/Icons-Dash/Dash_banner.jpg'
import profile_men from './../Icons/Icons-Dash/profile_men.png';
import logo from './../Icons/Icons-Dash/logo.png';
import formal_logo from './../Icons/Icons-Dash/formal_logo.png'
import casual_logo from './../Icons/Icons-Dash/casual_logo.png'
import cross_icon from './../Icons/Icons-Dash/signs.png';
import Checked from './../Icons/Icons-Dash/checked_480.png';
import {AddCart, IncrementCart,DecrementCart,RemoveCart ,IncrementFood,DecrementFood,IncrementLaundry,DecrementLaundry } from "./Redux/index.js";
import {connect} from 'react-redux';
import DashboardSkeleton from './Skeletons/DashboardSkeleton.js';
import {DashFoodSkeleton,CleaningSkeleton,SliderCleaningSkeleton} from './Skeletons/DashUtilsSkeleton.js';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';
import {isAuth,LoginRequiredToast} from './Apiconfig.js'

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
const AddedToast=()=>{
    toast.notify(({ onClose }) => (
                <a href="#" css={{color:"white", textDecoration: "none",background:"#00A852" }} onClick={onClose}>
                   <div style={{backgroundColor:"#00A852",color:"white",padding:"10px 15px",fontFamily:"Poppins-SemiBold",borderRadius:"5px"}}> Added To Cart <img src={Checked} height="20" width="20" style={{color:"white"}}/>
                    </div>
                        
                </a>
                ));
}
const OrderNowPopUp=({item})=>{

    return(

        <div>
            <div class="modal fade" id="OrderModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="text-right" style={{height:"40px"}} data-dismiss="modal">
                    <img src={cross_icon} data-dismiss="modal" height="15px" width="15px" style={{float:"right",margin:"15px"}} />
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
const OrderFoodPopUp=({item,AddCart})=>{
    const [neworder,setNeworder]=useState({...item,orderCat:"food",note:{
        spice:"",
        garlic:"",
        curry:""
    }})
    var spiceinit={"high":false,"low":false,"medium":false}
    
    const [spice,setSpice]=useState(spiceinit);
    const [garlic,setGarlic]=useState({yes:false,no:false})
    const [curry,setCurry]=useState({mixed:false,seperate:false})
    useEffect(()=>{
            setNeworder({...item,orderCat:"Food",note:{
                    spice:"",
                    garlic:"",
                    curry:""
                }})
            setSpice(spiceinit)
            setGarlic({yes:false,no:false})
            setCurry({mixed:false,seperate:false})
    },[])
    useEffect(()=>{

    },[neworder,spice,curry,garlic])

    const Addtocart=()=>{
        var cartitem={...neworder}
        if(spice.high)
        cartitem={...cartitem,note:{
            ...cartitem.note,spice:"high"
        }}
        else if(spice.low)
        cartitem={...cartitem,note:{
            ...cartitem.note,spice:"low"
        }}
        else if(spice.medium)
       cartitem={...cartitem,note:{
            ...cartitem.note,spice:"medium"
        }}
        if(curry.mixed)
        cartitem={...cartitem,note:{
            ...cartitem.note,curry:"mixed"
        }}
        else if(curry.seperate)
        cartitem={...cartitem,note:{
            ...cartitem.note,curry:"seperate"
        }}
        if(garlic.yes)
         cartitem={...cartitem,note:{
            ...cartitem.note,garlic:"yes"
        }}
        else if(garlic.no)
        cartitem={...cartitem,note:{
            ...cartitem.note,garlic:"no"
        }}
        console.log(cartitem);
        AddCart(cartitem)
        AddedToast()
            

    }
    return(

        <div>
            <div class="modal fade" id={`OrderModal${item.id}`} style={{marginTop:"calc(50vh - 170px)"}} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content" style={{maxWidth:"298px",margin:"auto auto"}}>
                <div class="text-right" style={{height:"20px",padding:"20px"}} data-dismiss="modal" >
                    <img src={cross_icon} height="13px" width="13px" style={{float:"right",margin:"0px"}} data-dismiss="modal" />

                </div>
                <div class="modal-body" style={{margin:"0px auto",fontFamily:"Poppins-Medium"}}>
                <div style={{margin:"0px 0px 30px 0px",height:"auto",textAlign:"left"}}>
                
                  
               <div style={{color:"#00A852",marginBottom:"10px",marginTop:"0px",fontSize:"14px" }}>SPICE</div>
                <div className="btn" style={{background:spice.low?"#00A852":"",padding:"2px 10px",fontSize:"14px",color:spice.low?"white":"#606060",border:spice.low?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setSpice({...spiceinit,low:!spice.low})
                }}>Low</div>
                <div className="btn" style={{background:spice.medium?"#00A852":"",color:spice.medium?"white":"#606060",marginLeft:"15px",padding:"2px 10px",fontSize:"14px",border:spice.medium?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setSpice({...spiceinit,medium:!spice.medium})
                }}>Medium</div>  
                <div className="btn" style={{background:spice.high?"#00A852":"" ,marginLeft:"15px",padding:"2px 10px",fontSize:"14px",color:spice.high?"white":"#606060",border:spice.high?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setSpice({...spiceinit,high:!spice.high})    
                }} >High</div>  
                

               <div style={{color:"#00A852",marginBottom:"10px",marginTop:"20px",fontSize:"14px" }}>GARLIC</div>
                <div className="btn" style={{background:garlic.yes?"#00A852":"",padding:"2px 10px",fontSize:"14px",color:garlic.yes?"white":"#606060",border:garlic.yes?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setGarlic({no:false,yes:!garlic.yes})
                }}>Yes</div>
                <div className="btn" style={{background:garlic.no?"#00A852":"",marginLeft:"15px",padding:"2px 10px",fontSize:"14px",color:garlic.no?"white":"#606060",border:garlic.no?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setGarlic({yes:false,no:!garlic.no})
                }}>No</div>  
                
                { item.category && item.category!="Burger" && 
                <div>

                <div style={{color:"#00A852",marginBottom:"10px",marginTop:"20px",fontSize:"14px" }}>CURRRY</div>
                <div className="btn" style={{background:curry.mixed?"#00A852":"",padding:"2px 10px",fontSize:"14px",color:curry.mixed?"white":"#606060",border:curry.mixed?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setCurry({seperate:false,mixed:!curry.mixed})
                }}>Mixed</div>
                <div className="btn" style={{background:curry.seperate?"#00A852":"",marginLeft:"15px",padding:"2px 10px",fontSize:"14px",color:curry.seperate?"white":"#606060",border:curry.seperate?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setCurry({mixed:false,seperate:!curry.seperate})
                }}>Seperate</div>  

                </div>
                }
                
                </div>
                
                    <div style={{fontFamily:"Poppins-SemiBold",margin:"30px 10px 0px 5px",fontSize:"14px",textAlign:"right",color:"#00A852"}} data-dismiss="modal" onClick={()=>{
                           Addtocart()
                            

                    }}>
                        OK
                </div>

                </div>
                
                </div>
            </div>
            </div>
</div>
      
    )
}

//     var d = new Date().toISOString();
//     var k=new Date(d).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })
// var Time=[];
    // var m=new Date(k)
//     m.setMinutes(0)
//     for(let i=0;i<24;i++){        
//         m.setMinutes(m.getMinutes()+30);
//         var mn= new Date(m)
//         var k=mn.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }).split(',')[1].split(" ")
//         Time.push(k[1].split(":")[0]+":"+k[1].split(":")[1]+" "+ k[2])
    // }

const ScheduleLaundryPopUp=({item,AddCart,orderCat})=>{
    const [neworder,setNeworder]=useState({...item})
    const [daytime,setDaytime]=useState({day:"",time:""})
    const [err,setErr]=useState("")
    useEffect(()=>{
            if(orderCat)
            setNeworder({...item,daytime:daytime,id:item.id+100,orderCat:"Cleaning"})
                
            else            
            setNeworder({...item,daytime:daytime,id:item.id+100,orderCat:"Laundry"})
            setDaytime({day:"",time:""})
            setErr("")
    },[])
    var timearr=["9AM - 12PM","12PM - 3PM","3PM - 6PM","6PM - 9PM"]
    useEffect(()=>{
        setErr("")
    },[neworder,daytime])
    useEffect(()=>{

    },[err])
        const Addtocart=()=>{
                
                if(daytime.day=="" || daytime.time==="")
                    setErr("Select Day and Time")
                else{
                    var cartitem={...neworder,daytime:{...daytime,time:timearr[daytime.time-1]}};
                    console.log(cartitem);
                    AddCart(cartitem);
                    AddedToast()
                }
        }


    return(

        <div>
            <div class="modal fade" id={`ScheduleModal${item.id}`} style={{marginTop:"calc(50vh - 144px)"}} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content" style={{maxWidth:"298px",margin:"auto auto"}}>
                <div class="text-right" style={{height:"20px"}} data-dismiss="modal">
                    <img src={cross_icon} data-dismiss="modal" height="13px" width="13px" style={{float:"right",margin:"15px"}} />
                </div>
                <div class="modal-body" style={{margin:"0px auto",fontFamily:"Poppins-Medium"}}>
                <div style={{margin:"0px 0px 30px 0px",height:"auto",textAlign:"left"}}>
                <div style={{color:"#00A852",marginBottom:"10px",fontSize:"14px" }}>DAY</div>
                <div className="btn" style={{background:daytime.day==="today"?"#00A852":"",padding:"2px 10px",fontSize:"14px",color:daytime.day==="today"?"white":"#606060",border:daytime.day==='today'?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setDaytime({...daytime,day:"today"})
                }}>Today</div>
                <div className="btn" style={{background:daytime.day==="tommorow"?"#00A852":"", marginLeft:"15px",padding:"2px 10px",fontSize:"14px",color:daytime.day==="tommorow"?"white":"#606060",border:daytime.day==="tommorow"?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setDaytime({...daytime,day:"tommorow"})
                }}>Tommorow</div>  
              
               <div style={{color:"#00A852",marginBottom:"10px",marginTop:"20px",fontSize:"14px" }}>TIME</div>
                <div className="btn" style={{background:daytime.time==1?"#00A852":"", padding:"2px 10px",fontSize:"14px",color:daytime.time===1?"white":"#606060",border:daytime.time===1?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setDaytime({...daytime,time:1})
                }}>9AM - 12PM</div>
                <div className="btn" style={{marginLeft:"15px",background:daytime.time==2?"#00A852":"", padding:"2px 10px",fontSize:"14px",color:daytime.time===2?"white":"#606060",border:daytime.time===2?"1px solid #00A852":`1px solid #606060`}} onClick={()=>{
                    setDaytime({...daytime,time:2})
                }}>12PM - 3PM</div>
                <div style={{marginTop:"20px"}}>
                <div className="btn" style={{background:daytime.time==3?"#00A852":"", padding:"2px 12px",fontSize:"14px",color:daytime.time===3?"white":"#606060",border:daytime.time===3?"1px solid #00A852":`1px solid #606060`}} onClick={()=>{
                    setDaytime({...daytime,time:3})
                }}>3PM - 6PM</div>
                <div className="btn" style={{marginLeft:"15px",background:daytime.time==4?"#00A852":"", padding:"2px 12px",fontSize:"14px",color:daytime.time===4?"white":"#606060",border:daytime.time===4?"1px solid #00A852":`1px solid #606060`}} onClick={()=>{
                    setDaytime({...daytime,time:4})
                }}>6PM - 9PM</div>
                </div>

                </div>
                
            {err && <small className="text-danger">{err}</small>}
                    <div style={{fontFamily:"Poppins-SemiBold",margin:"30px 10px 0px 5px",fontSize:"14px",textAlign:"right",color:"#00A852"}} data-dismiss={daytime.day && daytime.time ?"modal":""} onClick={()=>{
                        Addtocart()                                 
                    }}>
                                    OK
                </div>

                </div>
                
                </div>
            </div>
            </div>
</div>
      
    )
}
const ScheduleFoodPopUp=({item,AddCart})=>{
    console.log(item,"items")
    const [daytime,setDaytime]=useState({day:"",time:""})
    
    const [neworder,setNeworder]=useState({...item,orderCat:"Food",note:{
        spice:"",
        garlic:"",
        curry:""
    }})
    var spiceinit={"high":false,"low":false,"medium":false}
    
    const [spice,setSpice]=useState(spiceinit);
    const [garlic,setGarlic]=useState({yes:false,no:false})
    const [curry,setCurry]=useState({mixed:false,seperate:false})
    const [err,setErr]=useState("")
    useEffect(()=>{
            setNeworder({...item,id:item.id+100,daytime:daytime,orderCat:"Food",note:{
                    spice:"",
                    garlic:"",
                    curry:""
                }})
            setDaytime({day:"",time:""})
            setSpice(spiceinit)
            setGarlic({yes:false,no:false})
            setCurry({mixed:false,seperate:false})
    },[])
    useEffect(()=>{
            setErr("")
    },[neworder,daytime,spice,garlic,curry])
    const Addtocart=()=>{
        var cartitem={...neworder}
        if(spice.high)
        cartitem={...cartitem,note:{
            ...cartitem.note,spice:"high"
        }}
        else if(spice.low)
        cartitem={...cartitem,note:{
            ...cartitem.note,spice:"low"
        }}
        else if(spice.medium)
       cartitem={...cartitem,note:{
            ...cartitem.note,spice:"medium"
        }}
        if(curry.mixed)
        cartitem={...cartitem,note:{
            ...cartitem.note,curry:"mixed"
        }}
        else if(curry.seperate)
        cartitem={...cartitem,note:{
            ...cartitem.note,curry:"seperate"
        }}
        if(garlic.yes)
         cartitem={...cartitem,note:{
            ...cartitem.note,garlic:"yes"
        }}
        else if(garlic.no)
        cartitem={...cartitem,note:{
            ...cartitem.note,garlic:"no"
        }}
        cartitem={...cartitem,daytime:daytime}
        console.log(cartitem)
        if(daytime.day=="" || daytime.time==="")
            setErr("Select Day and Time")
        else
            {
                AddCart(cartitem)
                AddedToast()
            }

    }

    return(

        <div>
            <div class="modal fade" id={`ScheduleModal${item.id}`} style={{marginTop:"calc(50vh - 255px)"}} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content" style={{maxWidth:"298px",margin:"auto auto"}}>
                <div class="text-right" style={{height:"20px"}} data-dismiss="modal">
                    <img src={cross_icon} data-dismiss="modal" height="13px" width="13px" style={{float:"right",margin:"15px"}} />
                </div>
                <div class="modal-body" style={{margin:"0px auto",fontFamily:"Poppins-Medium"}}>
                <div style={{margin:"0px 0px 30px 0px",height:"auto",textAlign:"left"}}>
                <div style={{color:"#00A852",marginBottom:"10px",fontSize:"14px" }}>DAY</div>
                <div className="btn" style={{background:daytime.day==="today"?"#00A852":"",padding:"2px 10px",fontSize:"14px",color:daytime.day==="today"?"white":"#606060",border:daytime.day==='today'?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setDaytime({...daytime,day:"today"})
                }}>Today</div>
                <div className="btn" style={{background:daytime.day==="tommorow"?"#00A852":"", marginLeft:"15px",padding:"2px 10px",fontSize:"14px",color:daytime.day==="tommorow"?"white":"#606060",border:daytime.day==="tommorow"?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setDaytime({...daytime,day:"tommorow"})
                }}>Tommorow</div>  
               
               
               <div style={{color:"#00A852",marginBottom:"10px",marginTop:"20px",fontSize:"14px" }}>TIME</div>
                <div className="btn" style={{background:daytime.time==="lunch"?"#00A852":"",padding:"2px 10px",fontSize:"14px",color:daytime.time==="lunch"?"white":"#606060",border:daytime.time==='lunch'?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setDaytime({...daytime,time:"lunch"})
                }}>Lunch</div>
                <div className="btn" style={{background:daytime.time==="dinner"?"#00A852":"", marginLeft:"15px",padding:"2px 10px",fontSize:"14px",color:daytime.time==="dinner"?"white":"#606060",border:daytime.time==="dinner"?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setDaytime({...daytime,time:"dinner"})
                }}>Dinner</div>  
                  
                <div style={{color:"#00A852",marginBottom:"10px",marginTop:"20px",fontSize:"14px" }}>SPICE</div>
                <div className="btn" style={{background:spice.low?"#00A852":"",padding:"2px 10px",fontSize:"14px",color:spice.low?"white":"#606060",border:spice.low?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setSpice({...spiceinit,low:!spice.low})
                }}>Low</div>
                <div className="btn" style={{background:spice.medium?"#00A852":"",color:spice.medium?"white":"#606060",marginLeft:"15px",padding:"2px 10px",fontSize:"14px",border:spice.medium?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setSpice({...spiceinit,medium:!spice.medium})
                }}>Medium</div>  
                <div className="btn" style={{background:spice.high?"#00A852":"" ,marginLeft:"15px",padding:"2px 10px",fontSize:"14px",color:spice.high?"white":"#606060",border:spice.high?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setSpice({...spiceinit,high:!spice.high})    
                }} >High</div>  
                

               <div style={{color:"#00A852",marginBottom:"10px",marginTop:"20px",fontSize:"14px" }}>GARLIC</div>
                <div className="btn" style={{background:garlic.yes?"#00A852":"",padding:"2px 10px",fontSize:"14px",color:garlic.yes?"white":"#606060",border:garlic.yes?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setGarlic({no:false,yes:!garlic.yes})
                }}>Yes</div>
                <div className="btn" style={{background:garlic.no?"#00A852":"",marginLeft:"15px",padding:"2px 10px",fontSize:"14px",color:garlic.no?"white":"#606060",border:garlic.no?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setGarlic({yes:false,no:!garlic.no})
                }}>No</div>  
                
                { item.category && item.category!="Burger" && 
                <div>

                <div style={{color:"#00A852",marginBottom:"10px",marginTop:"20px",fontSize:"14px" }}>CURRRY</div>
                <div className="btn" style={{background:curry.mixed?"#00A852":"",padding:"2px 10px",fontSize:"14px",color:curry.mixed?"white":"#606060",border:curry.mixed?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setCurry({seperate:false,mixed:!curry.mixed})
                }}>Mixed</div>
                <div className="btn" style={{background:curry.seperate?"#00A852":"",marginLeft:"15px",padding:"2px 10px",fontSize:"14px",color:curry.seperate?"white":"#606060",border:curry.seperate?"1px solid #00A852":"1px solid #606060"}} onClick={()=>{
                    setCurry({mixed:false,seperate:!curry.seperate})
                }}>Seperate</div>  

                </div>
                }
                

                </div>
                {err && <small className="text-danger" >{err}</small>}
                    <div style={{margin:"30px 10px 0px 5px",fontFamily:"Poppins-SemiBold",fontSize:"14px",textAlign:"right",color:"#00A852"}} data-dismiss={daytime.day && daytime.time ? "modal":""} onClick={()=>{

                        Addtocart()
                    }}>
                                    OK
                </div>

                </div>
                
                </div>
            </div>
            </div>
</div>
      
    )
}

const SliderCardLaundry=({AddCart,cart,item,IncrementLaundry,DecrementLaundry,toggler,setToggler})=>{
    const [err,setErr]=useState("")
    const [loading,setLoading]=useState(true)
    // useEffect(()=>{
    //     setLoading(false)
    // },[])
    useEffect(()=>{
    if(item.items>0)
        setErr("")

        // console.log("hello")
    },[toggler])
    useEffect(()=>{

    },[err])
        var flag=item.items;
    

    return (
        <div>
        {loading && <SliderCleaningSkeleton/> }
        <div style={{margin:"",width:"256px",display:loading?"none":"block"}}>
        <div className="horizontal-card" style={{backgroundColor:"white",height:"calc(137px)",margin:"15px 0px 15px 0px",position:"relative",boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)",borderRadius:"10px"}}  >
        <div style={{float:"left",margin:"-1px 20px 11px 11px",paddingTop:"10px",backgroundColor:"",width:item.name==="Wash & Fold"?"97px":"94px",height:"96px",borderRadius:"5px"}}>
        <img src={item.url} height='auto' width="100%"  onLoad={()=>{
             setTimeout(() => {
            setLoading(false)    
            }, 500);
        }}  style={{borderRadius:"5px",marginRight:item.name==="Iron & Fold"?"6px":"0px"}} />
        
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
        <div className="food-menu-btn text-center" ><div className="btn btn-success" style={{fontSize:"11px",float:"left",marginLeft:"10%",borderRadius:"4px",padding:"6px 13px",fontFamily:"Poppins-Medium",color:"white",marginBottom:"2px"}} 
        onClick={()=>{if(flag===0)
                        setErr("Select Quantity")
                      else
                       { 
                         AddCart({...item,orderCat:"Laundry"})
                         AddedToast()
                       }
                    }} data-target={`#OrderModal${item.id}`} data-toggle="modal" >Order Now</div>
        <div className=" " style={{borderRadius:"4px",fontSize:"11px",padding:"6px 16px",float:"right",marginRight:"10%",fontFamily:"Poppins-Medium",color:"#63364E",background:"white",border:"1px solid #63364E",marginBottom:"2px"}} data-toggle="modal" data-target={flag?`#ScheduleModal${item.id}`:"" } 
        onClick={()=>{if(flag===0)
                setErr("Select Quantity")}} >Schedule</div>
        </div>
        {/* <OrderNowPopUp item={item} cart={cart} AddCart={AddCart} /> */}
       {flag>0?<ScheduleLaundryPopUp item={item}  AddCart={AddCart} />:""}
        </div>
        </div>
    )
}

const SliderCardCleaning=({item,toggler,setToggler,AddCart,setLoading})=>{


    return (
        <div style={{margin:"",width:"256px"}}>
        <div className="horizontal-card" style={{backgroundColor:"white",height:"calc(137px)",margin:"15px 0px 15px 0px",position:"relative",boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)",borderRadius:"10px"}}  >
        <div style={{float:"left",margin:"-1px 20px 11px 11px",paddingTop:"10px",backgroundColor:"",width:item.name==="Wash & Fold"?"97px":"94px",height:"96px",borderRadius:"5px"}}>
        <img src={item.url} onLoad={()=>{
            setTimeout(() => {
                setLoading(false)
            }, 500);
        }} height='auto' width="100%"  style={{borderRadius:"5px",marginRight:item.name==="Iron & Fold"?"6px":"0px"}} />
        
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
                        AddedToast()
                    }} >Order Now</div>
        <div className=" " style={{borderRadius:"4px",fontSize:"11px",padding:"6px 16px",float:"right",marginRight:"10%",fontFamily:"Poppins-Medium",color:"#63364E",background:"white",border:"1px solid #63364E",marginBottom:"2px"}} data-toggle="modal" data-target={`#ScheduleModal${item.id}`}
         >Schedule</div>
        </div>
        {/* <OrderNowPopUp item={item} cart={cart} AddCart={AddCart} /> */}
        <ScheduleLaundryPopUp item={item}  AddCart={AddCart} orderCat={"Cleaning"}/>
        </div>
        
    )
}


const SliderCard=({item,IncrementFood,DecrementFood,cart,toggler,setToggler,AddCart,setLoading})=>{
    const [err,setErr]=useState("")
    const [flag,setFlag]=useState(item.items)
    useEffect(()=>{
            setFlag(item.items)
    },[])
    useEffect(()=>{
    if(item.items>0)
        setErr("")
        setFlag(item.items)
    },[toggler])
    useEffect(()=>{

    },[err,flag])
        
    var ispopup=false

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
      className="food-menu-name"  style={{whiteSpace:"normal",textAlign:"left",fontFamily:"Poppins-Bold",color:"#00A852",lineHeight:"20px",fontSize:"14px",paddingRight:"4px"}}
        >
        {/* Wash & Fold  */}
        {item && item.name}
        {/* <img src={item.isfav?like_icon:heart_svg_icon} className="food-heart"  style={{float:'right',marginRight:"16px",marginTop:"10px"}}/> */}
        
        </div>
        {item.id===2 && <div className="card-content"
        style={{
            // backgroundColor:"#c0c0c0",height:"15px",width:"25vw" ,float:"",margin:"0px 0px",
        marginTop:"1px",fontFamily:"Poppins-Medium",color:"rgb(60,60,60)",fontSize:"8px",lineHeight:"9px",paddingRight:"8px",whiteSpace:"initial"}}>
        Nasi Goreng Saus Tiram dengan telus mata sapi dan slice chicken BBQ
        </div>
            }
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
        <div className="food-menu-btn text-center" ><div className="btn btn-success" style={{fontSize:"11px",float:"left",marginLeft:"10%",borderRadius:"4px",padding:"6px 13px",fontFamily:"Poppins-Medium",color:"white",marginBottom:"2px"}}
        onClick={()=>{if(flag===0)
                   setErr("Select Quantity")
                 
                   }} data-target={flag?`#OrderModal${item.id}`:""} data-toggle="modal" >Order Now</div>
        <div className=" " style={{borderRadius:"4px",fontSize:"11px",padding:"6px 16px",float:"right",marginRight:"10%",fontFamily:"Poppins-Medium",color:"#63364E",background:"white",border:"1px solid #63364E",marginBottom:"2px"}} data-toggle="modal" data-target={flag?`#ScheduleModal${item.id}`:"" } onClick={()=>{if(flag===0)setErr("Select Quantity")}} >Schedule</div>
        </div>
        
       { flag>0 ? <OrderFoodPopUp item={item}  AddCart={AddCart} />:"" }

       {flag>0 ? <ScheduleFoodPopUp item={item}  AddCart={AddCart} /> :""}
        
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

const FoodDash=({FoodData,IncrementFood,DecrementFood,cart,AddCart,setLoading,loading})=>{
    const [toggler,setToggler]=useState(true);
    const [loadingfood,setLoadingfood]=useState(true)
  

    const [FoodCategory,setFoodcategory]=useState({"Bento":[],"Burger":[],"Light Meal":[],"Ayam":[]})
    useEffect(()=>{
        setFoodcategory({Bento:FoodData.slice(0,18),Burger:FoodData.slice(18,22),"Light Meal":FoodData.slice(22,27),"Ayam":FoodData.slice(27,)})
    },[])
      
    useEffect(()=>{
        setFoodcategory({Bento:FoodData.slice(0,18),Burger:FoodData.slice(18,22),"Light Meal":FoodData.slice(22,27),"Ayam":FoodData.slice(27,)})
    
    },[FoodData,toggler])
    var category=["Bento","Burger","Light Meal","Ayam"];
    const setbothLoading=(e)=>{
        setLoading(false);
        setLoadingfood(false)
    }
    return (
        <div>
        {loadingfood && <DashFoodSkeleton/> }
    <div style={{opacity:loading?"0":1,display:loading?"none":"block"}}>
     <div className="card dash-banner" style={{margin:"0 5%",backgroundColor:"#E5F5EE",border:"0px",borderRadius:'10px'}}>
             <img src={banner_food_img}  height="100%" width="100%" style={{borderRadius:"5px"}}/>
    </div>
    {(toggler || ! toggler) && 
     category.map((e,i)=>(
          
    <div style={{margin:"25px 0px"}} key={i}>

        <div style={{fontSize:"20px",color:"rgb(60,60,60)",fontFamily:"Poppins-Bold",margin:"0px 10%",position:"relative"}}>{e}
       <Link exact to={{
        pathname: '/food',
        state: {
            fromdash: e
        }
        }}
    style={{color:"rgb(60,60,60)"}}>
        <span style={{fontFamily:"Poppins-Medium",fontSize:"12px",float:"right",textDecoration:"Underline",position:"absolute",right:"2%",bottom:"5px"}}>
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
                    <SliderCard item={k} key={key} setToggler={setToggler} setLoading={setbothLoading} toggler={toggler} AddCart={AddCart} IncrementFood={IncrementFood} DecrementFood={DecrementFood} cart={cart}/>
                   
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
        </div>
        )
}

const FoodDashwithProps = connect(mapStateToprops, mapDispatchToprops)(FoodDash);
const LaundaryDash=({LaundryInit,IncrementLaundry,DecrementLaundry,cart,AddCart})=>{
    const [toggler,setToggler]=useState(true);
    const [page,setPage]=useState({"first":true,"formal":false,"casual":false})

    useEffect(()=>{
        setToggler(true)
        setPage({"first":true,"formal":false,"casual":false})
    },[])
    useEffect(()=>{

    },[toggler,page])

    return (
        <div>
        <div className="card dash-banner" style={{margin:"0 5%",backgroundColor:"#E5F5EE",border:"0px",borderRadius:'10px'}}>
             <img src={banner_laundry_img} height="100%" width="100%" style={{borderRadius:"5px"}}/>
            
            </div>
        {
            page["first"] && 
        <div className="flex-container" style={{marginLeft:"5%",marginRight:"5%"}}>
        <div style={{textAlign:"center",fontSize:"16px",fontFamily:"Poppins-SemiBold",color:"#00a852"}}>
        <div className="icon-card" onClick={()=>{
            setPage({"first":false,"casual":true,"formal":false})
        }} style={{marginBottom:"10px",width:"40vw", height:"40vw",background:"white",boxShadow:"rgba(154, 154, 154, 0.1) 0px 5px 31.54px 6.46px"}}>
        <img src={casual_logo} height="70%" width="auto" style={{margin:"15% 0px 0px 0%"}}/>
        </div>
        CASUAL
        </div>
        <div style={{marginLeft:"10%",textAlign:"center",fontSize:"16px",fontFamily:"Poppins-SemiBold",color:"#00a852"}}>
        <div className="icon-card" onClick={()=>{
            setPage({"first":false,"casual":false,"formal":true})
        }} style={{marginBottom:"10px",width:"40vw",height:"40vw",boxShadow:"rgba(154, 154, 154, 0.1) 0px 5px 31.54px 6.46px",background:"white" }}>
        <img src={formal_logo} height="70%" width="auto" style={{margin:"15% 0px 0px 0"}}/>
        </div>
        FORMALS
        </div>
        </div>
        }
        {page["casual"] && 
        <div>
        <div onClick={()=>{
            setPage({...page,first:true,casual:false})
        }} style={{textDecoration:"underline",cursor:"pointer",fontSize:"11px",margin:"15px 0px 0px 5%",color:"black",fontFamily:"Poppins-Medium",float:"left"}}> back ></div>

        <div style={{padding:"35px 0px 0px 0px"}}>

        <div style={{fontSize:"19px",color:"#63364E",fontFamily:"Poppins-SemiBold",margin:"0px 5%",position:"relative"}}>

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
        </div>
            }
        { page["formal"] && 
        <div>
        <div onClick={()=>{
            setPage({...page,formal:false,first:true})
        }} style={{textDecoration:"underline",cursor:"pointer",fontSize:"11px",margin:"15px 0px 0px 5%",color:"black",fontFamily:"Poppins-Medium",float:"left"}}>back ></div>
         
         <div style={{padding:"35px 0px 0px 0px"}}>

        <div style={{fontSize:"19px",color:"#63364E",fontFamily:"Poppins-SemiBold",margin:"0px 5%",position:"relative"}}>

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
            }
         </div>
    
    

    
    )
}
const LaundaryDashwithProps=connect(mapStateToprops, mapDispatchToprops)(LaundaryDash);

const CleaningDash=({CleaningInit,AddCart})=>{
    const [toggler,setToggler]=useState(true);
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setToggler(true)
        setLoading(true)
    },[])

    useEffect(()=>{

    },[toggler])
   
    
    return (
        <div>
            {loading && <CleaningSkeleton/>}
        <div style={{display:loading?"none":"block"}}>
        <div className="card dash-banner" style={{margin:"0 5%",backgroundColor:"#E5F5EE",border:"0px",borderRadius:'10px'}}>
             <img src={banner_cleaning_img} height="100%" width="100%" style={{borderRadius:"5px"}}/>
            
            </div>
        <div style={{margin:"25px 0px"}}>

        <div style={{fontSize:"19px",color:"#63364E",fontFamily:"Poppins-SemiBold",margin:"0px 5%",position:"relative"}}>

        </div>
        <div >
        
              <div className="scrolling-wrapper-dash" style={{marginTop:"0px",marginBottom:"10px"}}>
                <div style={{width:"4%",opacity:"0"}}>sh</div>
             
                {
                CleaningInit.map((e,i)=>(
                    
                    <div key={i} className="icon" style={{width:"%",marginRight:"25px"}}>
                    <SliderCardCleaning item={e} setToggler={setToggler} toggler={toggler} IncrementLaundry={IncrementLaundry} DecrementLaundry={DecrementLaundry} AddCart={AddCart} setLoading={setLoading}/>
                    
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
        </div>
    )
}
const CleaningDashwithProps=connect(mapStateToprops, mapDispatchToprops)(CleaningDash)
const ElectricityDash=()=>{
    return (
        <div className="card dash-banner" style={{margin:"0 5%",backgroundColor:"#E5F5EE",border:"0px",borderRadius:'10px'}}>
             <img src={banner_electricity_img} height="100%" width="100%" style={{borderRadius:"5px"}}/>
            </div>
    )
}

const Dashboard=({history})=>{
    
    const [active,setActive]=useState({'Food':true,"Laundary":false,"Cleaning":false,"Electricity":false})
    const [loading,setLoading]=useState(true)    

    const showpage=()=>{
        setTimeout(() => {
        setLoading(false)
    }, 5000);

    }
    useEffect(()=>{
        if(!isAuth()){
      LoginRequiredToast()
      history.push('/login')

    }
        setActive({...defaultState,"Food":true})
        setLoading(true)
    

    },[])
    useEffect(()=>{
            
    },[active,loading])
    if(isAuth())
    var {name}=JSON.parse(localStorage["data"])
    else
    var name="Elizabeth"

    return(
        <div>
            { loading && <DashboardSkeleton/>}
            <div style={{opacity:loading?"0":"1",display:loading?"none":"block"}}>
            {showpage()}
            <p className="view-block">Rotate to portrait mode </p>
            <p className="desktop-block">We Support Mobile View Only</p>
            <div className="main-container" style={{margin:"20px 0px 90px 0%"}}>
            <div className="mt-2 mb-4" style={{marginLeft:"5%"}}> 
               
                <div className="text-left dash-text" style={{color:"rgb(60,60,60)",lineHeight:"16px"}} >
                       <span style={{fontFamily:"Poppins-SemiBold",fontSize:"14px"}} >Hello,</span>
                       <br/>
                         <span style={{fontFamily:"Anteb-Black"}}>{name.firstname}</span>
                </div>
                <div className="rounded-circle dash-profile" style={{marginTop:"-46px",marginRight:"5%"}}  >
                <Link  to="/profile" >

                    <img src={profile_men} height="100%" width="100%"/>
                    </Link>

                    
                </div>
            </div>
        <div>
        <div className="card dash-banner" style={{margin:"0 0%",height:"auto",backgroundColor:"#E5F5EE",border:"0px",borderRadius:'10px'}}>
            <img src={main_banner} height="auto" width="100%"/>
            </div>
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
            {/* <div className="card dash-banner" style={{margin:"0 5%",backgroundColor:"#E5F5EE",border:"0px",borderRadius:'10px'}}>
            {active.Food && <img src={banner_food_img}  height="100%" width="100%" style={{borderRadius:"5px"}}/>}
            { active.Laundary && <img src={banner_laundry_img} height="100%" width="100%" style={{borderRadius:"5px"}}/>}
            {active.Cleaning && <img src={banner_cleaning_img} height="100%" width="100%" style={{borderRadius:"5px"}}/>}
            {active.Electricity && <img src={banner_electricity_img} height="100%" width="100%" style={{borderRadius:"5px"}}/>}
            
            </div> */}


            {active.Food && <div><FoodDashwithProps loading={loading} setLoading={setLoading} /></div>}

            {active.Laundary && <LaundaryDashwithProps/>}

            {active.Cleaning && <CleaningDashwithProps/> }

            {active.Electricity && <ElectricityDash/>}
            </div>        

            </div>
                
            </div>

    )
}



export default connect(mapStateToprops, mapDispatchToprops)(Dashboard);
// export default Dashboard;