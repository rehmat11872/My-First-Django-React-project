import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducers } from './reducers/productReducers';

const reducer =  combineReducers({
    productList: productListReducers,
})

const initialState = {}

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
  
