// createStore function is use to create a global store in redux

// store can only take one reducer as input so we need to combine all our reducers inside one and for that we need combineReducer

// the second argument in createStore is a middleware and to apply that we need applymiddleware
import { createStore, combineReducers, applyMiddleware } from "redux";

// composeWithDevTools takes an middleware as an argument and sync it with application
import { composeWithDevTools } from "redux-devtools-extension";
import {getProductsReducer,getProductDetailsReducer} from "./Reducers/productsReducer";

import {cartReducer} from "./Reducers/cartReducer"

// thunk is a middleware that we are using
import thunk from "redux-thunk";

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart:cartReducer
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
