import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
// import {RemoveOrder} from './Redux/index.js';
import heart_icon from './../Icons/Icons-Footer/heart.png';
import delete_icon from './../Icons/Icons-Footer/delete.png';
import schedule_icon from './../Icons/Icons-Footer/watch.png';
import minus_icon from './../Icons/Icons-Footer/green_subtract.png';
import plus_icon from './../Icons/Icons-Footer/green_plus.png';
import {URL,Config,isAuth,checkAuth,LoginRequiredToast} from './Apiconfig.js';
import Axios from 'axios';
import {Cartwithprops,Upcoming,Completed} from './Cart.js'
import {RemoveCart} from './Redux/index.js'
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';
const handlers={
  width: 60,
  height: 100,
  format: "CODE128",
  displayValue: false,
  fontOptions: "",
  font: "monospace",
  textAlign: "center",
  textPosition: "bottom",
  textMargin: 2,
  fontSize: 20,
  background: "#ffffff",
  lineColor: "#000000",
  margin: 10,
  marginTop: undefined,
  marginBottom: undefined,
  marginLeft: undefined,
  marginRight: undefined
}

const orderCategorydata={
    "Cart":false,
    "Upcoming":false,
    "Completed":false
}

const Textslider=({orderCategory,setordercategory,cart})=>{
    const [toggler,setToggler]=useState(true)
    useEffect(()=>{
        setToggler(!toggler)
    },[])
    useEffect(()=>{
       
    },[orderCategory])
    

        return(
        <div>
            <div>
            <div  class="scrolling-wrapper" style={{overflowY:"none",overflowX:"none",textAlign:"center"}}>
    { cart.length!==0 && <span  className={`food-select-unactive ${orderCategory.Cart?"category-btn-active":"category-btn"} `} onClick={()=>{
          if(!orderCategory['Cart'])
          setordercategory({...orderCategorydata,"Cart":true})
      }}>Cart</span>
        } 
            <span  className={`food-select-unactive ${orderCategory.Upcoming?"category-btn-active":"category-btn"} `} style={{marginLeft:"20px"}} onClick={()=>{
                if(!orderCategory['Upcoming'])
          setordercategory({...orderCategorydata,"Upcoming":true})

            }}>Upcoming</span>

            <span  className={`food-select-unactive ${orderCategory.Completed?"category-btn-active":"category-btn"} `} style={{marginLeft:"20px"}} onClick={()=>{
                if(!orderCategory['Completed'])
                setordercategory({...orderCategorydata,"Completed":true})
            }}>Complete</span>
            
            
            </div>
            </div>
        
            
        </div>
        )
}

const FoodCard=({item,AddOrder,RemoveOrder,order,UpdateOrder})=>{
    const [toggler,setToggler]=useState(true)
    useEffect(()=>{
        console.log("hello")
    },[toggler])
    var flag=item.items;
  

    return (
        
        <div className="horizontal-card" style={{backgroundColor:"white",boxShadow:"0px 0px 0px",height:"38vw",margin:"35px 0px 5px 0px",position:"relative"}}  >
        <div style={{float:"left",margin:"0px 25px 0px 0px",backgroundColor:"#e5f5ee",width:"38vw",height:"38vw"}}>
        {/* <img src={dummy_img} height='100%' width="100%"   /> */}
        
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:""}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="food-menu-name"  style={{fontFamily:"Poppins-Bold",color:"#00A852",lineHeight:"30px"}}
        >
        Nasi Goreng
      
        </div>
        <div className="food-menu-qty"
        style={{
            // backgroundColor:"#c0c0c0",height:"15px",width:"25vw" ,float:"",margin:"0px 0px",
        marginTop:"-3px",fontFamily:"Poppins-SemiBold",color:"#828282"}}>
        250 grams
        </div>
        <div className="" style={{marginLeft:"calc(38vw + 16px)",position:"absolute"}}>
            {/* <Barcode value="#098@278" width="1"
  flat={true}  displayValue={false} height="25"/> */}

        {/* <div className="food-menu-btn" style={{}}><button className="btn btn-warning" style={{borderRadius:"20px 20px 20px 20px",padding:"0px 13px 0px 13px",backgroundColor:"#F49901",fontFamily:"Poppins-SemiBold",color:"white"}}>Schedule</button><img src={schedule_icon} height="22px" style={{paddingLeft:"9px"}}/></div> */}
        </div>
        {item.otp}

        </div>
            
            
        </div>
        
        
    )
}
const LaundaryCard=({item,UpdateLaundary})=>{
    const [toggler,setToggler]=useState(true)
    useEffect(()=>{
        console.log("hello")
    },[toggler])
    var flag=0;
    // console.log(item);
    // for(var i=0;i<order.length;i++){
    //         console.log(i,)
    //     if(order[i].id===item.id && order[i].category===item.category )
    //             flag=order[i].items;
    // }

    return (
        
        <div className="horizontal-card" style={{backgroundColor:"white",boxShadow:"0px 0px 0px",height:"38vw",margin:"35px 0px 5px 0px",position:"relative"}}  >
        <div style={{float:"left",margin:"0px 25px 0px 0px",backgroundColor:"#e5f5ee",width:"38vw",height:"38vw"}}>
        {/* <img src={dummy_img} height='100%' width="100%"   /> */}
        
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:""}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="food-menu-name"  style={{fontFamily:"Poppins-Bold",color:"#00A852",lineHeight:"30px"}}
        >
            Nasi Goreng       
        </div>
        
            <div className="" style={{marginLeft:"calc(38vw + 16px)",position:"absolute"}}>
            
        {/* <div className="" style={{position:"absolute",bottom:"1px",left:"calc(38vw + 25px)"}}><button className="btn btn-warning" style={{borderRadius:"20px 20px 20px 20px",padding:"0px 13px 0px 13px",backgroundColor:"#F49901",fontFamily:"Poppins-SemiBold",color:"white"}}>Schedule</button><img src={schedule_icon} height="22px" style={{paddingLeft:"9px"}}/></div> */}
        </div>
        </div>
            
            
        </div>
        
        
    )
}

const MenuCard=({item})=>{
    
    return (
        
        <div className="horizontal-card"   >
            <div className="float-right" style={{margin:"15px 5px 5px 0px"}}>
            <img className="" src={minus_icon} height="50px" width="50px" style={{border:"2px solid white"}}/>
            </div>
            {/* {item && item.id  } */}
        </div>
        
        
    )
}
const AddedToast=(msg)=>{
    toast.notify(({ onClose }) => (
                <a href="#" css={{color:"white", textDecoration: "none",background:"#00A852" }} onClick={onClose}>
                   <div style={{backgroundColor:"red",color:"white",padding:"10px 15px",fontFamily:"Poppins-SemiBold",borderRadius:"5px"}}>{msg}
                    </div>
                        
                </a>
                ));
}
const Orders=({cart,history})=>{

    const [upcomingData,setUpcomingdata]=useState([])
    const [completedData,setCompleteddata]=useState([])
    const [orderCategory,setordercategory]=useState({})
    console.log(Config,"checking")
    var token=localStorage.getItem("token")
    const getOrdersData= async ()=>{
        await Axios.get(`${URL}/order`,Config()).then(
        (data)=>{
            console.log(data)
            setUpcomingdata(data.data.Upcoming);
            setCompleteddata(data.data.Completed);
        }    
        ).catch((err)=>{
                // console.log(err.response)
                
                checkAuth(err.response.status,history)
                if(err.response.status===401){
                 history.push('/login')   
                }
                AddedToast(err.response.data.errMessage)
                
        })
    }
    useEffect( ()=>{
        if(!isAuth()){
            LoginRequiredToast()
            history.push('/login')
        }
      
        if(isAuth())
        getOrdersData()
        setordercategory({...orderCategorydata,"Cart":true})
    },[])
   
    useEffect(()=>{
        console.log("Upcomung completed Updated")
    },[upcomingData,completedData])
   useEffect(()=>{

        if(cart.length===0)
            {
                console.log("inside cardt")
            setordercategory({...orderCategory,Upcoming:true})
            if(isAuth())
            getOrdersData()
            }
    },[cart])
    
    
    return(
        <div>
        <p className="view-block">Rotate to portrait mode </p>
        <p className="desktop-block">We Support Mobile View Only</p>
        <div className="main-container"  style={{
            
            padding:"20px 0% 90px 0px",margin:"0",backgroundColor:"",marginLeft:"0px",marginRight:"0px"}}>


        <Textslider orderCategory={orderCategory} cart={cart} setordercategory={setordercategory}/>
        {orderCategory.Cart && <Cartwithprops  />}
        {orderCategory.Upcoming && <Upcoming upcomingData={upcomingData}/>}
        {orderCategory.Completed && <Completed completedData={completedData}/>}
        
        
        </div>
        </div>

    )
}



const mapStateToprops=state=>{
    return {
        // Foodorder:state.Foodorder.orders,
        cart :state.Foodorder.cart,
        
    }
}
const mapDispatchToprops=dispatch=>{
    return {
            
            RemoveCart:(item)=> dispatch(RemoveCart(item))
            
    }
}


export default connect(mapStateToprops,mapDispatchToprops)(Orders);