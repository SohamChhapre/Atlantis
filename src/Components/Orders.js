import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
// import {RemoveOrder} from './Redux/index.js';
import {AddOrder,RemoveOrder,UpdateOrder,UpdateLaundary} from './Redux/index.js';
import heart_icon from './../Icons/Icons-Footer/heart.png';
import delete_icon from './../Icons/Icons-Footer/delete.png';
import schedule_icon from './../Icons/Icons-Footer/watch.png';
import minus_icon from './../Icons/Icons-Footer/green_subtract.png';
import plus_icon from './../Icons/Icons-Footer/green_plus.png';
import Barcode from 'react-barcode';
import Axios from 'axios';
import {Cart,Upcoming,Completed} from './Cart.js'

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

const Textslider=({orderCategory,setordercategory})=>{
    const [toggler,setToggler]=useState(true)
    useEffect(()=>{
        setToggler(!toggler)
    },[])
    useEffect(()=>{
        // setToggler({1:!toggler[1],2:!toggler[2]})
    },[orderCategory])

        return(
        <div>
            <div>
            <div  class="scrolling-wrapper" style={{overflowY:"none",overflowX:"none",textAlign:"center"}}>
      <span  className={`food-select-unactive ${orderCategory.Cart?"category-btn-active":"category-btn"} `} onClick={()=>{
          if(!orderCategory['Cart'])
          setordercategory({...orderCategorydata,"Cart":true})
      }}>Cart</span>
      
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
            <Barcode value="#098@278" width="1"
  flat={true}  displayValue={false} height="25"/>
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

const Orders=({RemoveOrder,Laundaryorder,foodorder})=>{

    const [Foodorder,setFoodorder]=useState([])
    const [orderCategory,setordercategory]=useState({})
    useEffect( ()=>{
        const func= async ()=>{
        await Axios.get('http://localhost:3500/').then(
        (data)=>{
            setFoodorder(data.data.data)
            console.log(data.data.data)
        }    
        ).catch((err)=>{
                console.log(err)
        })
    }
    func()
    setordercategory({...orderCategorydata,"Cart":true})
    },[])
    
    return(
        
        <div className="main-container"  style={{
            maxHeight:"calc(100vh - 115px)",overflowY:"scroll",
            padding:"20px 0%",margin:"0",backgroundColor:"",marginLeft:"0px",marginRight:"0px"}}>


        <Textslider orderCategory={orderCategory} setordercategory={setordercategory}/>
        {orderCategory.Cart && <Cart/>}
        {orderCategory.Upcoming && <Upcoming/>}
        {orderCategory.Completed && <Completed/>}
        
        
        </div>

    )
}




const mapStateToprops=state=>{
    return {
        Foodorder:state.Foodorder.orders,
        Laundaryorder:state.Laundaryorder.laundaryOrder
    }
}
const mapDispatchToprops=dispatch=>{
    return {
            AddOrder:(item)=> dispatch(AddOrder(item)),
            RemoveOrder:(item)=> dispatch(RemoveOrder(item)),
            UpdateOrder:(item)=> dispatch(UpdateOrder(item)),
            UpdateLaundary:(item)=>dispatch(UpdateLaundary(item))

    }
}

export default connect(mapStateToprops,mapDispatchToprops)(Orders);