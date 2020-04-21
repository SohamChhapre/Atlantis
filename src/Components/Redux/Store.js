import {createStore,combineReducers} from 'redux';
import OrderReducer from './Orders/OrderReducer.js';
import LaundaryReducer from './Laundary/LaundaryReducer.js';


const rootReducer=combineReducers({
    Foodorder:OrderReducer,
    Laundaryorder:LaundaryReducer
})


const store=createStore(rootReducer);


export default store;