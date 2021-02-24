import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMidleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'


let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

let store = createStore(redusers, applyMiddleware(thunkMidleware));

window.store = store

export default store;