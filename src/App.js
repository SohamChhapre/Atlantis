import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import './App.css';
import Dashboard from './Components/Dashboard.js';
import Cards from './Components/Cards.js'

import payment_icon from './Icons/Icons-Footer/payment.png';
import home_icon from './Icons/Icons-Footer/home.png';
import support_icon from './Icons/Icons-Footer/online_support.png';
import food_icon from './Icons/Icons-Footer/food_delivery.png';
import default_home from './Icons/Icons-Footer/home_default.png';
import default_payment from './Icons/Icons-Footer/payment_default.png';
import default_support from './Icons/Icons-Footer/support_default.png';
import default_food_delivery from './Icons/Icons-Footer/food_delivery_default.png';



const defaultState={
    "Home":false,
    "Orders":false,
    "Payments":false,
    "Support":false

}
const NavActiveicon=({img,name})=>{

    return (
        <Link exact to="/"> 
        <div className="text-center" style={{borderTop:"2px solid #00a852 ",paddingTop:"6px"}}> <img src={img} className="nav-icon" alt="home" /><p className="mb-1 nav-p-sty" style={{color:"#00a852",fontFamily:"Poppins-SemiBold"}}>{name}</p></div>
        </Link>
    )
}

const NavIcon=({img,name,setActive})=>{

    return (
        <Link exact to="/"><div className="text-center " style={{paddingTop:"8px"}} onClick={()=>{
            setActive({...defaultState,[name]:true})
        }}> <img src={img} className="nav-icon" alt="home" /><p className="mb-1 nav-p-sty" style={{color:"#b8bcc7",fontFamily:"Poppins-SemiBold"}}>{name}</p></div>
        </Link>
    )
}
function App() {
  const [active,setActive]=useState({'Home':true,"Payments":false,"Orders":false,"Support":false})
    useEffect(()=>{
        setActive({...defaultState,"Home":true})
    },[])
    useEffect(()=>{
            console.log(10);
    },[active])
  return (
    <div className="App mx-auto">
    <BrowserRouter>
      <Route exact path="/" >
      <Dashboard />
      </Route>
      <Route exact path="/firstcard">
      <Cards />
      </Route>
    
    <Route to="/">
    <nav className="navbar fixed-bottom dash-nav" style={{borderRadius:"0px 0px 18px 18px",padding:"0px 1rem 0rem 1rem"}}>
               

                { active["Home"]?(<NavActiveicon img={home_icon} name={"Home"}/>):(<NavIcon img={default_home} name={"Home"} setActive={setActive}/>)}
                { active["Payments"]?(<NavActiveicon img={payment_icon} name={"Payments"}/>):(<NavIcon img={default_payment} name={"Payments"} setActive={setActive}/>)}
                { active["Orders"]?(<NavActiveicon img={food_icon} name={"Orders"}/>):(<NavIcon img={default_food_delivery} name={"Orders"} setActive={setActive}/>)}
                { active["Support"]?(<NavActiveicon img={support_icon} name={"Support"}/>):(<NavIcon img={default_support} name={"Support"} setActive={setActive}/>)}
            
            
            </nav> 
            </Route>
            </BrowserRouter>
    </div>
  );
}

export default App;
