import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import check_right from "./../Icons/Icons-Footer/check_tick.jpg";
import Swiper from "react-id-swiper";
import minus_icon from "./../Icons/Icons-Footer/green_subtract.png";
import plus_icon from "./../Icons/Icons-Footer/green_plus.png";
import plus_icon2 from "./../Icons/Icons-Footer/plus2.jpg";
import dummy_img from "./../Icons/Icons-Footer/dummyimage.png";
import home_icon from "./../Icons/Icons-Footer/home.png";
import heart_icon from "./../Icons/Icons-Footer/heart.png";
import heart_icon_2 from "./../Icons/Icons-Food/heart_52px.png";
import cart_icon from "./../Icons/Icons-Footer/green_shopping_cart.png";
import like_icon from "./../Icons/Icons-Food/like.svg";
import heart_svg_icon from "./../Icons/Icons-Food/heart.svg";
import cross_icon from './../Icons/Icons-Dash/signs.png';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';
import "./Cards.css";
import { useSwipeable, Swipeable } from "react-swipeable";
import { AddCart,IncrementFood,DecrementFood } from "./Redux/index.js";
import { connect } from "react-redux";
import { initialdata } from "./CategoryData.js";
import "./Cards.css";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";
import banner_food_img from './../Icons/Icons-Dash/img-food-640.png';
import FoodSkeleton from './Skeletons/FoodSkeleton';
import Checked from './../Icons/Icons-Dash/checked_480.png';
import {isAuth,LoginRequiredToast} from './Apiconfig.js'
const Food_category_data = {
  "Bento": false,
  "Burger": false,
  "Light Meal": false,
  "Ayam": false,
};
const Textslider = ({ food, foodcategory, swipe, setFoodcategory }) => {
  const [toggler, setToggler] = useState({});
  useEffect(() => {
    setToggler({ 1: true, 2: true });
  }, []);
  useEffect(() => {
    // setToggler({1:!toggler[1],2:!toggler[2]})
  }, [foodcategory]);

  return (
    <div>
      {/* <LightSpeed  left collapse when={toggler[1] || toggler[2]} > */}
      <div>
        <div class="scrolling-wrapper" style={{marginBottom:"6px"}}>
          <span
            className={`food-select-unactive ${
              foodcategory.Bento ? "category-btn-active" : "category-btn"
            } `}
            onClick={() => {
              if (!foodcategory["Bento"])
                setFoodcategory({ ...Food_category_data, Bento: true });
            }}
          >
            Bento
          </span>

          <span
            className={`food-select-unactive ${
              foodcategory.Burger ? "category-btn-active" : "category-btn"
            } `}
            style={{ marginLeft: "20px" }}
            onClick={() => {
              if (!foodcategory["Burger"])
                setFoodcategory({ ...Food_category_data, Burger: true });
            }}
          >
            Burger
          </span>

          <span
            className={`food-select-unactive ${
              foodcategory["Light Meal"] ? "category-btn-active" : "category-btn"
            } `}
            style={{ marginLeft: "20px" }}
            onClick={() => {
              if (!foodcategory["Light Meal"])
                setFoodcategory({ ...Food_category_data, "Light Meal": true });
            }}
          >
            Light Meal
          </span>
          <span
            className={`food-select-unactive ${
              foodcategory["Ayam"] ? "category-btn-active" : "category-btn"
            } `}
            style={{ marginRight: "20px", marginLeft: "20px" }}
            onClick={() => {
              if (!foodcategory["Ayam"])
                setFoodcategory({ ...Food_category_data, "Ayam": true });
            }}
          >
            Ayam
          </span>
          {/* <div class="card" style={{width:"28vw",border:"None"}}><p style={{color:"#989898",fontFamily:"Poppins-SemiBold"}} className=" food-select-unactive" > {foodCat[1]}</p></div>
            <div class="card" style={{width:"44vw",border:"None"}}><p style={{color:"#525252",fontFamily:"Poppins-SemiBold"}} className=" text-center food-popular-text " > {foodCat[0]}</p></div>

            <div class="card" style={{width:"28vw",border:"None"}}><p style={{marginRight:"5px",color:"#989898",fontFamily:"Poppins-SemiBold"}} className=" text-right food-select-unactive" > {foodCat[2]}</p></div>
            
             */}
        </div>
      </div>
    </div>
  );
};
const AddedToast=()=>{
    toast.notify(({ onClose }) => (
                <a href="#" css={{color:"white", textDecoration: "none",background:"#00A852" }} onClick={onClose}>
                   <div style={{backgroundColor:"#00A852",color:"white",padding:"10px 15px",fontFamily:"Poppins-SemiBold",borderRadius:"5px"}}> Added To Cart <img src={Checked} height="20" width="20" style={{color:"white"}}/>
                    </div>
                        
                </a>
                ));
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

const MenuCard = ({ item, AddCart, cart,FoodData,IncrementFood,DecrementFood ,setLoading}) => {
  const [toggler, setToggler] = useState(true);
  const [err,setErr]=useState("")
  useEffect(()=>{
      setErr("")
  },[])
  useEffect(() => {
    console.log("hello");
    if(item.items>0)
    setErr("")
  }, [toggler]);
  useEffect(()=>{

  },[err])
  var flag = item.items

  return (
    <div style={{ margin: "10px", width: "calc(100% - 28px)" }}>
      <div
        className="horizontal-card"
        style={{
          backgroundColor: "white",
          height: "calc(36vw + 22px)",
          margin: "15px 0px 15px 0px",
          position: "relative",
          boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)",
        }}
      >
        <div
          style={{
            float: "left",
            margin: "11px 20px 11px 11px",
            backgroundColor: "#e5f5ee",
            width: "28vw",
            height: "36vw",
          }}
        >
          <img src={item.url} onLoad={()=>setLoading(false)} height='auto' width="100%" style={{borderRadius:"5px"}}  />
        </div>
        <div
          style={{
            // width:"calc(100% - 175px)",
            paddingTop: "10px",
          }}
        >
          <div
            // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
            className="food-menu-name"
            style={{
              fontFamily: "Poppins-Bold",
              color: "#00A852",
              lineHeight: "17px",
              fontSize:"18px"
            }}
          >
            
            {item.name}
            {/* <img
              src={item.isfav ? like_icon : heart_svg_icon}
              className="food-heart"
              style={{ float: "right", marginRight: "16px", marginTop: "10px" }}
            /> */}
          </div>
          {/* <div
            className="card-content"
            style={{
              // backgroundColor:"#c0c0c0",height:"15px",width:"25vw" ,float:"",margin:"0px 0px",
              marginTop: "-3px",
              fontFamily: "Poppins-SemiBold",
              color: "#828282",
            }}
          >
            <span style={{ fontFamily: "Poppins-Medium" }}> Fish </span>{" "}
            <span style={{ fontFamily: "Poppins-Thin", margin: "0px 5px" }}>
              {" "}
              |{" "}
            </span>{" "}
            <span style={{ fontFamily: "Poppins-Medium" }}> prawns </span>{" "}
            <span style={{ fontFamily: "Poppins-Thin", margin: "0px 5px" }}>
              
              
            </span>
            <span style={{ fontFamily: "Poppins-Medium" }}>
              
              Tamatoes
            </span>
            <span style={{ fontFamily: "Poppins-Thin", margin: "0px 5px" }}>
              {" "}
              |{" "}
            </span>{" "}
            <span style={{ fontFamily: "Poppins-Medium" }}>Rice</span>{" "}
            <span style={{ fontFamily: "Poppins-Thin", margin: "0px 5px" }}>
            </span>{" "}
            <span style={{ fontFamily: "Poppins-Medium" }}> potatoes </span>
          </div> */}
          <div className="text-center">
            <div className="food-menu-middle" style={{ background: "#F5FBF8" ,left:"calc(28vw + 30px)"}}>
              <img
                className={`${flag === 0 ? "minus-plus-unactive" : ""}`}
                src={minus_icon}
                alt="dhf"
                height="23px"
                width="23px"
                style={{
                  backgroundColor: "#",
                  padding: "3px",
                  borderRadius: "8px",
                  float: "left",
                }}
                onClick={() => {
                  if(flag>0){
                  DecrementFood(item);
                  setToggler(!toggler);
                  }
                }}
              />
              <span
                style={{
                  padding: "0px 10px",
                  position: "relative",
                  bottom: "2px",
                  color: "#00A852",
                  fontFamily: "Poppins-SemiBold",
                  fontSize: "14px",
                  background: "#F5FBF8",
                  borderRadius: "20px",
                }}
              >
                {flag}
              </span>
              <img
                className={`${flag >= 3 ? "minus-plus-unactive" : ""}`}
                src={plus_icon}
                alt="dhf"
                height="23px"
                width="23px"
                style={{
                  backgroundColor: "#",
                  padding: "6px",
                  borderRadius: "8px",
                  float: "right",
                }}
                onClick={() => {
                  if (flag <= 2) {
                    IncrementFood(item);
                    setToggler(!toggler);
                  }
                }}
              />
            </div>
          </div>
        </div>
             {err && <small  style={{color:"red",position:"absolute",bottom:"2px",width:"44vw",textAlign:"center"}}>{err}</small>}
        
      </div>
      <div className="food-menu-btn text-center" style={{}}>
        <div
          className="btn btn-success"
          style={{
            fontSize: "11px",
            borderRadius: "4px",
            padding: "6px 13px",
            fontFamily: "Poppins-Medium",
            color: "white",
            marginRight: "50px",
          }}
          data-toggle="modal"
        data-target={flag?`#OrderModal${item.id}`:""}       
        onClick={()=>{
          if(flag===0)
          setErr("Select Quantity")
        }}
        >
          Order Now
        </div>
        <div
          className="btn "
          style={{
            borderRadius: "4px",
            fontSize: "11px",
            padding: "6px 16px ",
            fontFamily: "Poppins-Medium",
            color: "#63364E",
            background: "white",
            border: "1px solid #63364E",
          }}
        data-toggle="modal"
        data-target={flag?`#ScheduleModal${item.id}`:""}       
        onClick={()=>{
          if(flag===0)
          setErr("Select Quantity")
        }}
        >
          Schedule
        </div>
      </div>
       {flag>0?<OrderFoodPopUp item={item} cart={cart} AddCart={AddCart} />:""}
      {flag>0?<ScheduleFoodPopUp item={item} cart={cart} AddCart={AddCart} />:""}
      
    </div>
  );
};


const Cards = ({  cart, AddCart ,FoodData,IncrementFood,DecrementFood,location,history}) => {
  const [food, setFood] = useState(true);
  const [foodcategory, setFoodcategory] = useState(Food_category_data);
  const handlers = useSwipeable({
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    if(!isAuth()){
      LoginRequiredToast()
      history.push('/login')
    }
    else{
    if(location.state && location.state.fromdash){
    var cat=location.state.fromdash
    setFoodcategory({ ...Food_category_data,[cat]:true});
    }
    else
    setFoodcategory({...Food_category_data,Bento:true})
    setLoading(true)
    }
  }, []);
  useEffect(() => {
    console.log("UseEffect");
    setTimeout(() => {
      console.log("sds");
    }, 100);
  }, [ foodcategory]);
  useEffect(()=>{
    setTimeout(() => {
      
    }, 1000);
  },[loading])

   var category;
   if(foodcategory["Bento"])
   category="Bento"
   else if(foodcategory["Burger"])
   category="Burger"
   else if (foodcategory["Light Meal"])
   category="Light Meal"
   else
   category="Ayam"


  return (
    <div>
       {loading &&  <FoodSkeleton/>}
    <div style={{display:loading?"none":"block"}}>

      <p className="view-block">Rotate to portrait mode </p>
      <p className="desktop-block">We Support Mobile View Only</p>
      <div
        className="main-container"
        style={{
         
          padding: "20px 0% 0px 0px",
          margin: "0px 0px 90px 0px",
          // backgroundColor:"#9BE0B8",
          marginLeft: "0px",
          marginRight: "0px",
        }}
      >
        <div
          className="card  dash-banner"
          style={{
            backgroundColor: "white",
            border: "0px",
            borderRadius: "5px",
            margin: "0px 5% 30px 5%"
          }}
        >
        <img src={banner_food_img} width="100%" height="100%" style={{ borderRadius:"5px" }}/>
          {/* <Link to="/cart">
            <div className="text-right">
              <img
                src={cart_icon}
                height="24px"
                width="24px"
                style={{ margin: "0px -25px 0px 0px" }}
              />
              <span
                className="text-center"
                style={{
                  position: "relative",
                  right: "-9px",
                  top: "-16px",
                  borderRadius: "50%",
                  background: "#E5F5EE",
                  color: "#00A852",
                  padding: "2px 7px",
                  border: "4px solid white",
                  fontSize: "12px",
                }}
              >
                {order.length}
              </span>
            </div>
          </Link> */}
        </div>

        <div>
          <div
            style={{
              marginBottom: "10px",
              padding: "0px 0px 12px 0px",
              borderRadius: "10px",
              marginLeft: "0%",
              marginRight: "0%",
            }}
          >
            {/* <Texttoggler handlers={handlers} foodCat={foodCat} swipe={swipe} food={food}/> */}
            <Textslider
              foodcategory={foodcategory}
              setFoodcategory={setFoodcategory}
             
              food={food}
            />
       

           
            <div className="flex-container my-0">
              {initialdata.map((e, i) => {
                return (
                  e.category === category  && (
                    <MenuCard
                      item={e}
                      AddCart={AddCart}
                      key={i}
                      DecrementFood={DecrementFood}
                      IncrementFood={IncrementFood}
                      FoodData={FoodData}
                      cart={cart}
                      setLoading={setLoading}
                    />
                  )
                );
              })}

              {/* <MenuCard/> */}
            </div>
            {/* <p style={{margin:"20px 0px 0px 0px"}} className="mt-5"> Category-2</p> */}
           
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


const mapStateToprops = (state) => {
  return {
    cart: state.Foodorder.cart,
    FoodData:state.Foodorder.FoodInitial
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    AddCart: (item) => dispatch(AddCart(item)),
    IncrementFood:(item)=> dispatch(IncrementFood(item)),
    DecrementFood:(item)=> dispatch(DecrementFood(item))
  };
};
export default connect(mapStateToprops, mapDispatchToprops)(Cards);

