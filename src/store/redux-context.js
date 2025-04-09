// redux-toolkit method
import {thunk} from 'redux-thunk';
import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import favReducer from './wishlist';
import authReducer from './auth';

// Combine Reducers (if you have others)
// const rootReducer = combineReducers({
//   auth: authReducer,
//   wishlist: favReducer,
// });

// Create Store
//const store = configureStore(rootReducer, applyMiddleware(thunk));

const store = configureStore({
  reducer: { auth: authReducer, favourite: favReducer },
});


export default store;




