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
import { AddOrder, RemoveOrder,IncrementOrder,DecrementOrder } from "./Redux/index.js";
import { connect } from "react-redux";
import { initialdata } from "./CategoryData.js";
import "./Cards.css";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";


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
        <div class="scrolling-wrapper">
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
        <option selected>Time</option>
        <option>3:00 PM</option>
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
const MenuCard = ({ item, AddOrder, order,FoodData,IncrementOrder,DecrementOrder }) => {
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
          <img src={item.url} height='auto' width="100%"   />
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
              fontFamily: "Poppins-SemiBold",
              color: "#00A852",
              lineHeight: "22px",
            }}
          >
            
            {item.name}
            <img
              src={item.isfav ? like_icon : heart_svg_icon}
              className="food-heart"
              style={{ float: "right", marginRight: "16px", marginTop: "10px" }}
            />
          </div>
          <div
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
          </div>
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
                  DecrementOrder(item);
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
                    IncrementOrder(item);
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
        <button
          className="btn btn-success"
          style={{
            fontSize: "11px",
            borderRadius: "4px",
            padding: "4px 24px 4px 24px",
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
        </button>
        <button
          className="btn "
          style={{
            borderRadius: "4px",
            fontSize: "11px",
            padding: "4px 24px 4px 24px",
            fontFamily: "Poppins-Medium",
            color: "#F49901",
            background: "white",
            border: "1px solid #F49901",
          }}
        data-toggle="modal"
        data-target={flag?"#ScheduleModal":""}       
        onClick={()=>{
          if(flag===0)
          setErr("Select Quantity")
        }}
        >
          Schedule
        </button>
      </div>
       <OrderNowPopUp item={item} order={order} AddOrder={AddOrder} />
        <SchedulePopUp item={item} order={order} AddOrder={AddOrder} />
    </div>
  );
};
const SliderCard = ({ item, AddOrder, RemoveOrder, order }) => {
  const [toggler, setToggler] = useState(true);
  useEffect(() => {
    console.log("hello");
  }, [toggler]);
  var flag = 0;
  // console.log(item);
  // for(var i=0;i<order.length;i++){
  //         console.log(i,)
  //     if(order[i].id===item.id && order[i].category===item.category )
  //             flag=order[i].items;
  // }

  return (
    <div style={{ margin: "10px", width: "calc(100% - 8px)" }}>
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
            width: "36vw",
            height: "36vw",
          }}
        >
          {/* <img src={dummy_img} height='100%' width="100%"   /> */}
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
              fontFamily: "Poppins-SemiBold",
              color: "#00A852",
              lineHeight: "30px",
            }}
          >
            Nasi Goreng
            <img
              src={item.isfav ? like_icon : heart_svg_icon}
              className="food-heart"
              style={{ float: "right", marginRight: "16px", marginTop: "10px" }}
            />
          </div>
          <div
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
            </span>{" "}
            <span style={{ fontFamily: "Poppins-Medium" }}> prawns </span>{" "}
            <span style={{ fontFamily: "Poppins-Thin", margin: "0px 5px" }}>
            </span>{" "}
            <span style={{ fontFamily: "Poppins-Medium" }}>
              Tamatoes
            </span>
            <span style={{ fontFamily: "Poppins-Thin", margin: "0px 5px" }}>
              {" "}
              |{" "}
            </span>{" "}
            <span style={{ fontFamily: "Poppins-Medium" }}>Rice</span>{" "}
            <span style={{ fontFamily: "Poppins-Thin", margin: "0px 5px" }}>
              {" "}
              |{" "}
            </span>{" "}
            <span style={{ fontFamily: "Poppins-Medium" }}> potatoes </span>
          </div>
          <div className="text-center">
            <div
              className="food-menu-middle"
              style={{ background: "#F5FBF8", width: "35vw" }}
            >
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
                  RemoveOrder(item);
                  setToggler(!toggler);
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
                    AddOrder(item);
                    setToggler(!toggler);
                  }
                }}
              />
            </div>
          </div>
        </div>
        {/* <div className="float-right" style={{margin:"25px 5px 5px 0px"}}>
            <img className="" src={minus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white",backgroundColor:"#e5f5ee"}} onClick={()=>{RemoveOrder(item);setToggler(!toggler)}}/>
            <span style={{padding:"0px 10px"}}>{flag}</span>
            <img className="" src={plus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white",backgroundColor:"#e5f5ee"}} onClick={()=>{AddOrder(item);setToggler(!toggler)}}/>
            </div> */}
      </div>
      <div className="food-menu-btn text-center" style={{}}>
        <button
          className="btn btn-success"
          style={{
            fontSize: "11px",
            borderRadius: "4px",
            padding: "4px 24px 4px 24px",
            fontFamily: "Poppins-Medium",
            color: "white",
          }}
        >
          Order Now
        </button>
        <button
          className="btn "
          style={{
            borderRadius: "4px",
            fontSize: "11px",
            padding: "4px 24px 4px 24px",
            fontFamily: "Poppins-Medium",
            color: "#F49901",
            background: "white",
            border: "1px solid #F49901",
          }}
        >
          Schedule
        </button>
      </div>
    </div>
  );
};

const Cards = ({ setOrders, order, AddOrder ,FoodData,IncrementOrder,DecrementOrder,location}) => {
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
            margin: "0px 5% 0px 5%",
          }}
        >
          <Link to="/cart">
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
          </Link>
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
                      AddOrder={AddOrder}
                      key={i}
                      DecrementOrder={DecrementOrder}
                      IncrementOrder={IncrementOrder}
                      FoodData={FoodData}
                      order={order}
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
    order: state.Foodorder.orders,
    FoodData:state.Foodorder.FoodInitial
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    AddOrder: (item) => dispatch(AddOrder(item)),
    IncrementOrder:(item)=> dispatch(IncrementOrder(item)),
    DecrementOrder:(item)=> dispatch(DecrementOrder(item))
  };
};
export default connect(mapStateToprops, mapDispatchToprops)(Cards);

