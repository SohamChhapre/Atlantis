import {createStore,combineReducers} from 'redux';
import OrderReducer from './Orders/OrderReducer.js';
import LaundaryReducer from './Laundary/LaundaryReducer.js';
import CardReducer from './Payments/PaymentsReducer.js'

const rootReducer=combineReducers({
    Foodorder:OrderReducer,
    Laundaryorder:LaundaryReducer,
    Card:CardReducer
})


const store=createStore(rootReducer);


export default store;