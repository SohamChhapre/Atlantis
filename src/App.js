import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import './App.css';
import Login from './Components/Auth/Login.js'
import Dashboard from './Components/Dashboard.js';
import Profile from './Components/Profile.js';
import Laundary from './Components/Laundary.js';
import Cards from './Components/Cards.js'
import Orders from './Components/Orders.js'
import RoomService from './Components/RoomService.js';
import Payments from './Components/Payments.js'
import PaymentsModels from './Components/Payments/PaymentsModels.js'
import Wrapper from './Components/Wrapper.js'
import payment_icon from './Icons/Icons-Navbar/Payment - Active.png';
import home_icon from './Icons/Icons-Navbar/Home - Active.png';
import support_icon from './Icons/Icons-Navbar/Support - Active.png';
import food_icon from './Icons/Icons-Navbar/Order - Active.png';
import default_home from './Icons/Icons-Navbar/Home - Inactive.png';
import default_payment from './Icons/Icons-Navbar/Payment - Inactive.png';
import default_support from './Icons/Icons-Navbar/Support - Inactive.png';
import default_food_delivery from './Icons/Icons-Navbar/Order - Inactive.png';
import {Provider} from 'react-redux';
import store from './Components/Redux/Store.js';
import Cart from './Components/Cart.js';
// import Casual from './Components/Laundary/Casual.js';
// import Formal from './Components/Laundary/Formal.js';
const Initialdata=[{"category":"category1" ,id:"001"},{"category":"category1" ,id:"001"},{"category":"category1" ,id:"001"},
{"category":"category2" ,id:"004"},{"category":"category2" ,id:"005"}]

const defaultState={
    "Home":false,
    "Orders":false,
    "Payments":false,
    "Support":false

}
const NavActiveicon=({img,name})=>{
// #00a852
var path=name.slice(0,1).toUpperCase()+name.slice(1,);
    if (path==="Home"){
      path="/"
    }
    return (
        <Link exact to={`${path}`} style={{textDecoration:"none"}}> 
        <div className="text-center" style={{borderTop:"2px solid white ",paddingTop:"6px"}}> <img src={img} className="nav-icon" alt="home" style={{border:name==="Orders"?"2px solid white":"none"}}/><p className="mb-1 nav-p-sty" style={{color:"#00a852",fontFamily:"Poppins-SemiBold",marginTop:"3px"}}>{name}</p></div>
        </Link>
    )
}

const NavIcon=({img,name,setActive})=>{
    var path=name.slice(0,1).toUpperCase()+name.slice(1,);
    if (path==="Home"){
      path="/"
    }
    // // else if
    // else
    // path="/"
    return (
        <Link exact to={`${path}`} style={{textDecoration:"none"}}><div className="text-center " style={{paddingTop:"8px"}} onClick={()=>{
            setActive({...defaultState,[name]:true})
        }}> <img src={img} className="nav-icon" alt="home" style={{border:name==="Orders"?"2px solid white":"none"}}/><p className="mb-1 nav-p-sty" style={{color:"#b8bcc7",fontFamily:"Poppins-SemiBold",marginTop:"3px"}}>{name}</p></div>
        </Link>
    )
}
function App(props) {
  const [active,setActive]=useState({'Home':true,"Payments":false,"Orders":false,"Support":false})
  const [orders,setOrders]=useState([]);
  console.log(props,"APPP")
    useEffect(()=>{
        setActive({...defaultState,"Home":true})
        setOrders([])
    },[])
    useEffect(()=>{
            console.log(10);
    },[active,orders])
  return (
    <Provider store={store}>
    <div className="App mx-auto">
    
    <BrowserRouter>
    <Switch>
    <Route
  exact path='/'
  render={(props) => <Dashboard {...props}  />}
    />
    <Route
  exact path='/login'
  render={(props) => <Login {...props}  />}
      />
       <Route
  exact path='/food'
  render={(props) => <Cards {...props}  />}
    />
  <Route
  path='/profile'
  render={(props) => <Profile {...props}  />}
    />
    <Route
  path='/orders'
  render={(props) => <Orders {...props}  />}
    />
    <Route
  exact path='/laundary'
  render={(props) => <Laundary {...props}  />}
    />
    {/* <Route
  exact path='/casual'
  render={(props) => <Casual {...props}  />}
    /> */}
    {/* <Route
  exact path='/formal'
  render={(props) => <Formal {...props}  />}
    /> */}
    <Route
  exact path='/service'
  render={(props) => <RoomService {...props}  />}
    />
    <Route
  exact path='/payments'
  render={(props) => <Payments {...props}  />}
    />
    <Route
  exact path='/payments/:id'
  render={(props) => <PaymentsModels {...props}  />}
    />
      
    </Switch>
    <Route exact  path={['/', '/service','/food', '/payments','/laundary','/orders','/casual','/formal']}>
    <nav className="navbar fixed-bottom dash-nav" style={{borderRadius:"10px",padding:"0px 1rem 0rem 1rem"}}>
               

                { active["Home"]?(<NavActiveicon img={home_icon} name={"Home"}/>):(<NavIcon img={default_home} name={"Home"} setActive={setActive}/>)}
                { active["Payments"]?(<NavActiveicon img={payment_icon} name={"Payments"}/>):(<NavIcon img={default_payment} name={"Payments"} setActive={setActive}/>)}
                { active["Orders"]?(<NavActiveicon img={food_icon} name={"Orders"}/>):(<NavIcon img={default_food_delivery} name={"Orders"} setActive={setActive}/>)}
                { active["Support"]?(<NavActiveicon img={support_icon} name={"Support"}/>):(<NavIcon img={default_support} name={"Support"} setActive={setActive}/>)}
            
            
            </nav> 
            </Route>
            
            </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
