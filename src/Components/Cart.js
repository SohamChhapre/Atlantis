import React,{useState,useEffect} from 'react';
import minus_icon from './../Icons/Icons-Footer/green_subtract.png';
import plus_icon from './../Icons/Icons-Footer/green_plus.png';
import dummy_img from './../Icons/Icons-Footer/dummyimage.png';
import {AddCart,RemoveCart,IncrementCart,DecrementCart} from './Redux/index.js';
import {connect } from 'react-redux'
import './Cart.css'
import heart_icon from './../Icons/Icons-Footer/heart.png';
import delete_icon from './../Icons/Icons-Footer/delete.png';
import schedule_icon from './../Icons/Icons-Footer/watch.png';
import trash_icon from './../Icons/Icons-Food/interface.png';
import Axios from 'axios';
import food_svg from './../Icons/Icons-Footer/img-food.svg';
import laundry_svg from './../Icons/Icons-Footer/img-laundry.svg';
import ic_food from './../Icons/Icons-Dash/ic-food-new.png';
import ic_roomservice from './../Icons/Icons-Dash/img-roomservice.png'
import ic_laundary from  './../Icons/Icons-Dash/ic-laundry-new.png'
import cross_icon from './../Icons/Icons-Dash/signs.png';

const FoodCard=({item,AddCart,IncrementCart,order,DecrementCart})=>{
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
        
        <div className="horizontal-card" style={{backgroundColor:"white",boxShadow:"0px 0px 0px",height:"auto",margin:"35px 0px 5px 0px"}}  >
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
        <img src={delete_icon} className="food-heart"  style={{float:'right',marginRight:"5px",marginTop:"5px"}} onClick={()=>{
            DecrementCart(item);setToggler(!toggler)
        }}/>
        </div>
        <div className="food-menu-qty"
        style={{
            // backgroundColor:"#c0c0c0",height:"15px",width:"25vw" ,float:"",margin:"0px 0px",
        marginTop:"-3px",fontFamily:"Poppins-SemiBold",color:"#828282"}}>
        250 grams
        </div>
        <div className="">
            <div className="food-menu-middle" style={{}}>
            <img className="" src={minus_icon} alt="dhf" height="23px" width="23px" style={{backgroundColor:"#e5f5ee",padding:"3px",borderRadius:"8px"}} onClick={()=>{IncrementCart(item);setToggler(!toggler)}}/>
            <span style={{padding:"0px 20px"}}>{flag}</span>
            <img className={`${flag>=3 ? "minus-plus-unactive" : ""}`} src={plus_icon} alt="dhf" height="23px" width="23px" style={{backgroundColor:"#e5f5ee",padding:"6px",borderRadius:"8px"}} onClick={()=>{if(flag<=2){AddCart(item);setToggler(!toggler)}}}/>
            </div>

        <div className="food-menu-btn" style={{}}><button className="btn btn-warning" style={{borderRadius:"20px 20px 20px 20px",padding:"0px 13px 0px 13px",backgroundColor:"#F49901",fontFamily:"Poppins-SemiBold",color:"white"}}>Schedule</button><img src={schedule_icon} height="22px" style={{paddingLeft:"9px"}}/></div>
        </div>
        </div>
            {/* <div className="float-right" style={{margin:"25px 5px 5px 0px"}}>
            <img className="" src={minus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white",backgroundColor:"#e5f5ee"}} onClick={()=>{IncrementCart(item);setToggler(!toggler)}}/>
            <span style={{padding:"0px 10px"}}>{flag}</span>
            <img className="" src={plus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white",backgroundColor:"#e5f5ee"}} onClick={()=>{AddCart(item);setToggler(!toggler)}}/>
            </div> */}
            
        </div>
        
        
    )
}
const LaundaryCard=({item,RemoveCart})=>{
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
          <div style={{float:'right',background:"red",width:"10vw"}}>
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:""}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="food-menu-name"  style={{fontFamily:"Poppins-Bold",color:"#00A852",lineHeight:"30px"}}
        >
        {item.name}
        <img src={delete_icon} className="food-heart"  style={{float:'right',marginRight:"5px",marginTop:"5px"}} onClick={()=>{
            RemoveCart({id:"all",name:""});setToggler(!toggler)
        }}/>
        </div>
        
        <div className="">
            

        <div className="" style={{position:"absolute",bottom:"1px",left:"calc(38vw + 25px)"}}><button className="btn btn-warning" style={{borderRadius:"20px 20px 20px 20px",padding:"0px 13px 0px 13px",backgroundColor:"#F49901",fontFamily:"Poppins-SemiBold",color:"white"}}>Schedule</button><img src={schedule_icon} height="22px" style={{paddingLeft:"9px"}}/></div>
        </div>
        </div>
            
            
        </div>
        
        
    )
}
const CartCard=({item,AddCart,IncrementCart})=>{
    const [toggler,setToggler]=useState(true)
    useEffect(()=>{
        console.log("hello")
    },[toggler])
    return (
        
        <div className="horizontal-card" style={{display:"flex"}}  >
        <div style={{float:"left",margin:"15px 10px 0px 10px"}}>
        <img src={dummy_img} height='50px' width="60px"   />
        
        </div>
      

        <div style={{width:"calc(100% - 175px)",paddingTop:"15px"}}>
        <div style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}>
        </div>
        <div style={{backgroundColor:"#c0c0c0",height:"15px",width:"25vw" ,float:"",margin:"0px 0px",marginTop:"15px"}}>
        </div>
        </div>
        
            <div className="float-right" style={{margin:"25px 5px 5px 0px"}}>
            <img className="" src={minus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white"}} onClick={()=>{IncrementCart(item);setToggler(!toggler)}}/>
            <span style={{padding:"0px 10px"}}>{item.items}</span>
            <img className="" src={plus_icon} alt="dhf" height="25px" width="25px" style={{border:"2px solid white"}} onClick={()=>{AddCart(item);setToggler(!toggler)}}/>
            </div>
            
        </div>
        
        
    )
}



const RemovePopup=({item})=>{
    useEffect(()=>{
       
       },[])
    


    

    return(

        <div>
            <div class="modal fade" id={`RemoveModal${item.id}`} style={{marginTop:"calc(50vh - 77px)"}} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content" style={{maxWidth:"298px",margin:"auto auto"}}>
                <div class="text-right" style={{height:"20px"}} data-dismiss="modal">
                    <img src={cross_icon} data-dismiss="modal" height="13px" width="13px" style={{float:"right",margin:"15px"}} />
                </div>
                <div class="modal-body" style={{margin:"0px auto",fontFamily:"Poppins-Medium"}}>
                <div style={{margin:"0px 0px 10px 0px",height:"auto",textAlign:"center"}}>
                <div style={{color:"#00A852",marginBottom:"10px",fontSize:"14px" }}>Are you sure ?</div>
                <div style={{marginTop:"20px"}}>
                <div className="btn" style={{padding:"2px 10px",fontSize:"14px",color:"#606060",border:"1px solid #606060"}} onClick={()=>{
                    
                }}>Yes</div>
                <div className="btn" style={{ marginLeft:"45px",padding:"2px 10px",fontSize:"14px",color:"#606060",border:"1px solid #606060"}} >No</div>  
               </div>
               
                
                
                
                </div>
                
                    

                </div>
                
                </div>
            </div>
            </div>
</div>
      
    )
}
const CartFoodMenu=({item,AddCart,IncrementCart,DecrementCart,order})=>{
    const [toggler,setToggler]=useState(true)
    useEffect(()=>{
        console.log("hello")
    },[toggler])
    var flag=item.items;
    

    return (
        <div style={{margin:"24px 14px 14px 14px",width:"calc(100% - 28px)"}}>
        <div className="horizontal-card" style={{backgroundColor:"white",borderRadius:"20px",height:"calc(23vw + 22px)",margin:"15px 0px 15px 0px",position:"relative",boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)"}}  >
        <div style={{float:"left",margin:"11px 20px 11px 11px",backgroundColor:"",width:"18vw",height:"24vw",borderRadius:"10px"}}>
        
        <img src={item.url} height='auto' width="100%" style={{borderRadius:"5px"}}  />
        
        </div>
          <div className="trash-container" style={{height:"calc(23vw + 22px)"}}>
          <img src={trash_icon} className="trash-wrapper" style={{marginTop:"12vw"}}/>
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:"12px"}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="order-menu-name"  style={{fontFamily:"Poppins-SemiBold",color:"#00A852",lineHeight:"18px",position: "absolute",left: "calc(18vw + 30px)",
                width: "calc(72vw - 60px)",top: "16px"}}
        >
        {item.name}
        {/* <img src={heart_icon_2} className="food-heart"  style={{float:'right',marginRight:"16px",marginTop:"5px"}}/> */}
        </div>
       
        <div className="text-center">
            <div className="cart-menu-middle" style={{background:"#F5FBF8"}}>
            <img className={`${flag===0 ? "minus-plus-unactive" : ""}`} src={minus_icon} alt="dhf" height="23px" width="23px" style={{backgroundColor:"#",padding:"3px",borderRadius:"8px",float:"left"}} onClick={()=>{if(flag>=2){DecrementCart(item);setToggler(!toggler)}}}/>
            <span style={{padding:"0px 10px",position:"relative",bottom:"2px",color:"#00A852",fontFamily:"Poppins-SemiBold",fontSize:"14px",background:"#F5FBF8",borderRadius:"20px"}}>{flag}</span>
            <img className={`${flag>=3 ? "minus-plus-unactive" : ""}`} src={plus_icon} alt="dhf" height="23px" width="23px" style={{backgroundColor:"#",padding:"6px",borderRadius:"8px",float:"right"}} onClick={()=>{if(flag<=2){IncrementCart(item);setToggler(!toggler)}}}/>
            </div>
            
        </div>
        
        </div>
           
           
        </div>
        

        </div>
        
    )
}
const CartMenu=({item,AddCart,IncrementCart,DecrementCart,order})=>{
    const [toggler,setToggler]=useState(true)
    useEffect(()=>{
        console.log("hello")
    },[toggler])
    var flag=item.items;
    

    return (
        <div style={{margin:"24px 14px 14px 14px",width:"calc(100% - 28px)"}}>
        <div className="horizontal-card" style={{backgroundColor:"white",borderRadius:"20px",height:"calc(18vw + 22px)",margin:"15px 0px 15px 0px",position:"relative",boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)"}}  >
        <div style={{float:"left",margin:"11px 20px 11px 11px",backgroundColor:"#e5f5ee",width:"18vw",height:"18vw",borderRadius:"10px"}}>
        
        <img src={item.url} height='100%' width="100%"   />
        
        </div>
          <div className="trash-container" data-toggle="modal" data-target={`#RemoveModal${item.id}`} >
          <img src={trash_icon} className="trash-wrapper"/>
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:"10px"}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="order-menu-name"  style={{fontFamily:"Poppins-SemiBold",color:"#00A852",lineHeight:"30px"}}
        >
        {item.name}
        {/* <img src={heart_icon_2} className="food-heart"  style={{float:'right',marginRight:"16px",marginTop:"5px"}}/> */}
        </div>
       
        <div className="text-center">
            <div className="cart-menu-middle" style={{background:"#F5FBF8"}}>
            <img className={`${flag===0 ? "minus-plus-unactive" : ""}`} src={minus_icon} alt="dhf" height="23px" width="23px" style={{backgroundColor:"#",padding:"3px",borderRadius:"8px",float:"left"}} onClick={()=>{if(flag>=2){DecrementCart(item);setToggler(!toggler)}}}/>
            <span style={{padding:"0px 10px",position:"relative",bottom:"2px",color:"#00A852",fontFamily:"Poppins-SemiBold",fontSize:"14px",background:"#F5FBF8",borderRadius:"20px"}}>{flag}</span>
            <img className={`${flag>=3 ? "minus-plus-unactive" : ""}`} src={plus_icon} alt="dhf" height="23px" width="23px" style={{backgroundColor:"#",padding:"6px",borderRadius:"8px",float:"right"}} onClick={()=>{if(flag<=2){IncrementCart(item);setToggler(!toggler)}}}/>
            </div>
            
        </div>
        
        </div>
           
           
        </div>
        <RemovePopup item={item} />

        </div>
        
    )
}
const UpcomingMenu=({item,AddCart,IncrementCart,order})=>{
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
        <div style={{margin:"24px 14px 14px 14px",width:"calc(100% - 28px)"}}>
        <div className="horizontal-card" style={{backgroundColor:"white",borderRadius:"20px",height:"calc(18vw + 22px)",margin:"15px 0px 15px 0px",position:"relative",boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)"}}  >
        <div style={{float:"left",margin:"11px 20px 11px 11px",backgroundColor:"#e5f5ee",width:"18vw",height:"18vw",borderRadius:"10px"}}>
        
        {/* <img src={dummy_img} height='100%' width="100%"   /> */}
        
        </div>
          <div className="trash-container" >
          <img src={trash_icon} className="trash-wrapper"/>
        </div>
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:"10px"}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="order-menu-name"  style={{fontFamily:"Poppins-SemiBold",color:"#00A852",lineHeight:"30px"}}
        >
        Nasi Goreng
        {/* <img src={heart_icon_2} className="food-heart"  style={{float:'right',marginRight:"16px",marginTop:"5px"}}/> */}
        </div>
       
        <div className="">
            <div className="">
                <div style={{float:"left",position:"absolute",left:"calc(18vw + 30px)",bottom:"10px",fontSize:"12px",fontFamily:"Poppins-SemiBold",color:"rgb(130,130,130)",textAlign:"center"}}>
                order
                <div style={{marginTop:"5px",color:"#f49a04"}}>
                #3465
                </div>
                </div>
            <div style={{float:"right",position:"absolute",bottom:"10px",right:"calc(10vw + 20px)",fontSize:"12px",fontFamily:"Poppins-SemiBold",color:"rgb(130,130,130)",textAlign:"center"}}>
                Otp
                <div style={{marginTop:"2px",padding:"1px 10px",backgroundColor:"#F5FBF8",borderRadius:"10px",color:"#00A852"}}>
                9346
                </div>
                </div>

            </div>
            
        </div>
        
        </div>
           
           
        </div>
        

        </div>
        
    )
}
const CompletedMenu=({item,AddCart,IncrementCart,order})=>{
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
        <div style={{margin:"24px 14px 14px 14px",width:"calc(100% - 28px)"}}>
        <div className="horizontal-card" style={{backgroundColor:"white",borderRadius:"20px",height:"calc(18vw + 22px)",margin:"15px 0px 15px 0px",position:"relative",boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)"}}  >
        <div style={{float:"left",margin:"11px 20px 11px 11px",backgroundColor:"#e5f5ee",width:"18vw",height:"18vw",borderRadius:"10px"}}>
        
        {/* <img src={dummy_img} height='100%' width="100%"   /> */}
        
        </div>
          {/* <div className="trash-container" >
          <img src={trash_icon} className="trash-wrapper"/>
        </div> */}
        <div style={{
            // width:"calc(100% - 175px)",
            paddingTop:"10px"}}>
        <div 
        // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
      className="order-menu-name"  style={{fontFamily:"Poppins-SemiBold",color:"#00A852",lineHeight:"30px"}}
        >
        Nasi Goreng
        {/* <img src={heart_icon_2} className="food-heart"  style={{float:'right',marginRight:"16px",marginTop:"5px"}}/> */}
        </div>
       
        <div className="">
            <div className="">
                <div style={{float:"left",position:"absolute",left:"calc(18vw + 30px)",bottom:"10px",fontSize:"12px",fontFamily:"Poppins-SemiBold",color:"rgb(130,130,130)",textAlign:"center"}}>
                order
                <div style={{marginTop:"5px",color:"#f49a04"}}>
                #3465
                </div>
                </div>
            <div style={{float:"right",position:"absolute",bottom:"10px",right:"calc(20px)",fontSize:"12px",fontFamily:"Poppins-SemiBold",color:"rgb(130,130,130)",textAlign:"center"}}>
               
                <div style={{marginTop:"2px",padding:"1px 10px",backgroundColor:"#F5FBF8",borderRadius:"10px",color:"#00A852"}}>
                Completed
                </div>
                </div>

            </div>
            
        </div>
        
        </div>
           
           
        </div>
        

        </div>
        
    )
}
const Cart =({cart,Foodorder,AddCart,IncrementCart,DecrementCart,Laundaryorder,RemoveCart})=>{
    
        useEffect(()=>{

        },[])

        console.log(cart);
//     const senddata = async ()=>{
//         await Axios.post('http://localhost:3500/postorder',
//             Foodorder[0])
//         .then((data)=>{
//                 console.log(data)
//         })
//     }
// useEffect(()=>{

// },[])
    var FoodCart=cart.filter((e,i)=>(e.orderCat==="Food"))
    var LaundaryCart=cart.filter((e,i)=>(e.orderCat==="Laundry"));
    var CleaningCart=cart.filter((e,i)=>(e.orderCat==="Cleaning"));
    return(
        <div>

            <div>
            {
                FoodCart.length>0 && 
             <div className="big-container" style={{margin:"30px 0px 0px 0px" ,}}>
                    <div style={{height:"54px"}}>
                    <div className="cart-circle rounded-circle">
                    <img src={ic_food} height="80%" width="80%"/>
                    </div>
                    <div style={{paddingTop:"9px",fontFamily:"Poppins-SemiBold"}}>
                    Food
                    </div>
                    </div>

                    <div className="" >
                    {cart.map((e,i)=>(
                    e.orderCat==="Food" && 
                    <CartFoodMenu item={e} key= {i} IncrementCart={IncrementCart} DecrementCart={DecrementCart} RemoveCart={RemoveCart} />
                    ))}
                    
                   
                    </div>
            
            </div>
        }
        { LaundaryCart.length>0 &&
            <div className="big-container" style={{margin:"30px 0px 0px 0px" ,}}>
                    <div style={{height:"54px"}}>
                    <div className="cart-circle rounded-circle">
                   <img src={ic_laundary} height="80%" width="80%"/>
                    </div>
                    <div style={{paddingTop:"9px",fontFamily:"Poppins-SemiBold"}}>
                    Laundary
                    </div>
                    </div>

                    <div className="" >
{/*                     
                    <CartMenu item={}/>
                    <CartMenu /> */}
                    {LaundaryCart.map((e,i)=>(
                    
                    <CartMenu item={e} key= {i} IncrementCart={IncrementCart} DecrementCart={DecrementCart} RemoveCart={RemoveCart} />
                    ))}
                    
                   
                    </div>
            
            </div>
            }
            <div style={{fontFamily:"Poppins-SemiBold",marginTop:"30px",textAlign:"center",marginLeft:"20px",fontSize:"14px"}}>
            <span style={{color:"#f49a04"}}>Total :</span> <span style={{color:"rgb(130,130,130)"}}>50.000 IDR</span>
            </div>
            <div className="cart-confirm-btn text-right" style={{marginRight:"70px"}}>
            
            <button className="btn btn-success" style={{fontSize: "13px",
                borderRadius: '4px',
                padding: "4px 24px",
                fontFamily: "Poppins-Medium",
                color: "white"
            }} >Confirm</button>
            </div>
            </div>
            

           
        

        </div>


    )
}
const mapStateToprops=state=>{
    return {
        // Foodorder:state.Foodorder.orders,
        cart :state.Foodorder.cart,
        Laundaryorder:state.Laundaryorder.laundaryOrder
    }
}
const mapDispatchToprops=dispatch=>{
    return {
            AddCart:(item)=> dispatch(AddCart(item)),
            RemoveCart:(item)=> dispatch(RemoveCart(item)),
            IncrementCart:(item)=> dispatch(IncrementCart(item)),
            DecrementCart:(item)=> dispatch(DecrementCart(item))
    }
}

export const Cartwithprops=connect(mapStateToprops,mapDispatchToprops)(Cart);
export const Upcoming=()=>{

    return (
        <div>
        
            <div>
             <div className="big-container" style={{margin:"30px 0px 0px 0px" ,}}>
                    <div style={{height:"54px"}}>
                    <div className="cart-circle rounded-circle">
                    <img src={food_svg} height="80%" width="80%"/>
                    </div>
                    <div style={{paddingTop:"9px",fontFamily:'Poppins-SemiBold'}}>
                    Food
                    </div>
                    </div>

                    <div className="" >
                    
                    <UpcomingMenu/>
                    <UpcomingMenu/>

                    
                   
                    </div>
            
            </div>
            <div className="big-container" style={{margin:"30px 0px 0px 0px" ,}}>
                    <div style={{height:"54px"}}>
                    <div className="cart-circle rounded-circle">
                   <img src={laundry_svg} height="80%" width="80%"/>
                    </div>
                    <div style={{paddingTop:"9px",fontFamily:"Poppins-SemiBold"}}>
                    Laundary
                    </div>
                    </div>

                    <div className="" >
                    
                    <UpcomingMenu/>
                    <UpcomingMenu/>

                    
                   
                    </div>
            
            </div>
           <div style={{fontFamily:"Poppins-SemiBold",marginTop:"30px",textAlign:"center",marginLeft:"20px",fontSize:"14px"}}>
            <span style={{color:"#f49a04"}}>Total :</span> <span style={{color:"rgb(130,130,130)"}}>50.000 IDR</span>
            </div>
            </div>
            

            
        

        </div>
    )
}
export const Completed=()=>{

    return (
        <div>
        
            <div>
             <div className="big-container" style={{margin:"30px 0px 0px 0px" ,}}>
                    <div style={{height:"54px"}}>
                    <div className="cart-circle rounded-circle">
                    <img src={food_svg} height="80%" width="80%"/>
                    </div>
                    <div style={{paddingTop:"9px",fontFamily:'Poppins-SemiBold'}}>
                    Food
                    </div>
                    </div>

                    <div className="" >
                    
                    <CompletedMenu/>
                    <CompletedMenu/>

                    
                   
                    </div>
            
            </div>
            <div className="big-container" style={{margin:"30px 0px 0px 0px" ,}}>
                    <div style={{height:"54px"}}>
                    <div className="cart-circle rounded-circle">
                   <img src={laundry_svg} height="80%" width="80%"/>
                    </div>
                    <div style={{paddingTop:"9px",fontFamily:"Poppins-SemiBold"}}>
                    Laundary
                    </div>
                    </div>

                    <div className="" >
                    
                    <CompletedMenu/>
                    <CompletedMenu/>

                    
                   
                    </div>
            
            </div>
           <div style={{fontFamily:"Poppins-SemiBold",marginTop:"30px",textAlign:"center",marginLeft:"20px",fontSize:"14px"}}>
            <span style={{color:"#f49a04"}}>Total :</span> <span style={{color:"rgb(130,130,130)"}}>50.000 IDR</span>
            </div>
            </div>
            

            
        

        </div>
    )
}



export default connect(mapStateToprops,mapDispatchToprops)(Cart);
