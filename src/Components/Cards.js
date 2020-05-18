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

import "./Cards.css";
import { useSwipeable, Swipeable } from "react-swipeable";
import { AddCart,IncrementFood,DecrementFood } from "./Redux/index.js";
import { connect } from "react-redux";
import { initialdata } from "./CategoryData.js";
import "./Cards.css";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";
import banner_food_img from './../Icons/Icons-Dash/img-food-640.png';


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

const SchedulePopUp=({item})=>{
    const [neworder,setNeworder]=useState({...item})

    useEffect(()=>{
            setNeworder({...item,note:""})
    },[])

    useEffect(()=>{

    },[neworder])
    var d = new Date().toISOString();
    var k=new Date(d).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })

    var Time=[];
    var m=new Date(k)
    m.setMinutes(0)
    for(let i=0;i<24;i++){
        
        m.setMinutes(m.getMinutes()+30*i);
        var mn= new Date(m)
        var k=mn.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }).split(',')[1].split(" ")
        Time.push(k[1].split(":")[0]+":"+k[1].split(":")[1]+" "+ k[2])
    }
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
      <select  style={{float:"left",width:"40%"}} class="form-control">
        <option selected>Today</option>
        <option>Tommorow</option>
      </select>
      <select style={{float:"right",width:"40%"}}  class="form-control">
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
const MenuCard = ({ item, AddCart, cart,FoodData,IncrementFood,DecrementFood }) => {
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
          <img src={item.url} height='auto' width="100%" style={{borderRadius:"5px"}}  />
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
              lineHeight: "22px",
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
        data-target={flag?"#OrderModal":""}       
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
        data-target={flag?"#ScheduleModal":""}       
        onClick={()=>{
          if(flag===0)
          setErr("Select Quantity")
        }}
        >
          Schedule
        </div>
      </div>
       <OrderNowPopUp item={item} cart={cart} AddCart={AddCart} />
      {flag>0?<SchedulePopUp item={item} cart={cart} AddCart={AddCart} />:""}
      
    </div>
  );
};


const Cards = ({  cart, AddCart ,FoodData,IncrementFood,DecrementFood,location}) => {
  const [swipe, setSwipe] = useState({ left: true, right: false });
  const [food, setFood] = useState(true);
  const [foodcategory, setFoodcategory] = useState(Food_category_data);
  const handlers = useSwipeable({
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  useEffect(() => {
    if(location.state && location.state.fromdash){
    var cat=location.state.fromdash
    setFoodcategory({ ...Food_category_data,[cat]:true});
    }
    else
    setFoodcategory({...Food_category_data,Bento:true})
  }, []);
  useEffect(() => {
    console.log("UseEffect");
    setTimeout(() => {
      console.log("sds");
    }, 100);
  }, [ foodcategory]);

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
      <p className="view-block">Rotate to portrait mode </p>
      <p className="desktop-block">We Support Mobile View Only</p>
      <div
        className="main-container"
        style={{
          maxHeight: "calc(100vh - 120px)",
          overflowY: "scroll",
          padding: "20px 0%",
          margin: "0",
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
              swipe={swipe}
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

