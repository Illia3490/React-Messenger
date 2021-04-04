import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'



const SET_USER_DATA = 'SET_USER_DATA'
const SET_AUTH = 'SET_AUTH'
const SET_USERS = 'SET_USERS'

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCILoz0Pfar8N8XVt6zKEMEuYoB34pEF2A",
    authDomain: "reactmessanger-9f595.firebaseapp.com",
    projectId: "reactmessanger-9f595",
    storageBucket: "reactmessanger-9f595.appspot.com",
    messagingSenderId: "349238081965",
    appId: "1:349238081965:web:14feb3af47edacc8274924",
    measurementId: "G-BY06138XSG"
});
const auth = firebase.auth();

const firestore = firebase.firestore()

let initialState = {
    firebase: firebase,
    firebaseAuth: auth,
    firestore: firestore,
}

const firebaseReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                userData: action.userData,
            }
        }
        case SET_AUTH: {
            return {
                ...state,
                Auth: action.Auth
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        default:
            return state;
    }

}


export const signOut = (firebaseAuth) => async (dispatch) => {
    try {
        await firebaseAuth.signOut()
    } catch (error) {
        console.log(error)
    }
}
export const isOnline = (firestore, user, online) => async (dispatch) => {
    try {
        await firestore.collection('users').doc(user.uid)
            .update({
                isOnline: online,
            })
    } catch (error) {

    }
}


export default firebaseReducer;