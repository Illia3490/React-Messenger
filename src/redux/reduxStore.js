import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMidleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import firebaseReducer from "./firebaseReducer";



let redusers = combineReducers({
    firebase: firebaseReducer,

})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMidleware)));


export default store;