import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import { getProductsDetailReducer, getProductsReducer } from './Reducer/productsreducer';
import {cartReducer} from './Reducer/cartReducer'
const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductsDetailReducer,
    cart: cartReducer,
});

const middleware = [thunk];


export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
