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
    Auth: false,
    userData: null,
    users: firebase.firestore.QuerySnapshot.docs

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

export const setUserData = (userData) => ({ type: SET_USER_DATA, userData })
export const setAuth = (Auth) => ({ type: SET_AUTH, Auth })
export const setUsers = (users) => ({ type: SET_USERS, users })

export const getUsers = (users) => (dispatch) => {
    dispatch(setUsers(users))
}

export const getUserData = (userData) => (dispatch) => {
    dispatch(setUserData(userData))
}


export const getAuth = (userData) => (dispatch) => {
    if (userData) {
        dispatch(setAuth(true))
    } else {
        dispatch(setAuth(false))
    }

}
export const signOut = (firebaseAuth) => async (dispatch) => {
    try {
        await firebaseAuth.signOut()
    } catch (error) {
        console.log(error)
    }
    dispatch(getAuth(false))
}


export default firebaseReducer;