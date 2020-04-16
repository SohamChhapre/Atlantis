import {createStore} from 'redux';
import OrderReducer from './Orders/OrderReducer.js';

const store=createStore(OrderReducer);


export default store;