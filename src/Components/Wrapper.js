import React from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import Cards from './Cards.js';
import Orders from './Orders.js';
const Wrapper=(props)=>{
    
    const ispath=props.match.path==='/user/food';
    console.log(ispath,props.match);
    return(

            <BrowserRouter>
            <Switch>
            {ispath?(<Route exact to="/user/food" render={(props)=>(<Cards {...props} orders={props.orders} setOrders={props.setOrders}/>)}/>):
                        (<Route exact to="/user/orders" render={(props)=>(<Orders {...props} orders={props.orders} setOrders={props.setOrders}/>)}/>)}
            </Switch>
            </BrowserRouter>

    )
}


export default Wrapper;