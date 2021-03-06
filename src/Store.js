import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducers, productDetailsReducers } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {  userLoginReducers, userRegisterReducers, userDetailsReducers, userUpdateProfileReducers } from './reducers/userReducers';


const reducer =  combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer,
    userLogin: userLoginReducers,
    userRegister: userRegisterReducers,
    userDetails: userDetailsReducers,
    userUpdateProfile:userUpdateProfileReducers,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
       JSON.parse(localStorage.getItem('userInfo')) : null       

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
       JSON.parse(localStorage.getItem('shippingAddress')) : {}     

const initialState = {
    cart: { 
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
     },
    userLogin: { userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store    



// const store = createStore(
//     reducer,
//     composeWithDevTools(
//       applyMiddleware(...middleware)
//       // other store enhancers if any
//     )
//   );

  
// const composeEnhancers = composeWithDevTools({
//     // Specify here name, actionsBlacklist, actionsCreators and other options
//   });
//   const store = createStore(
//     reducer,
//     composeEnhancers(
//       applyMiddleware(...middleware)
//       // other store enhancers if any
//     )
//   );
  
