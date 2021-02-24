import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }

}
export const SetUserData = (data) => ({ type: SET_USER_DATA, data })
export const getAuth = () => {
    return (dispatch) => {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(SetUserData(data.data))
                }
            })
    }
}


export default authReducer;