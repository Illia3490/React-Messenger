import { profileAPI } from "../api/api"

const ADD_POST = 'addPost'
const update_New_Post_Text = 'updateNewPostText'
const setUserProfile = 'setUserProfile'
const setStatus = 'setStatus'


let initialState = {
    posts: [
        { id: 1, message: 'Hellow!', likes: 2 },
        { id: 2, message: 'Just do it!', likes: 4 },
    ],
    newPostText: 'What new?',
    profile: null,
    status: ''
}

const profileReduccer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let body = action.newPostText
            return {
                ...state,
                posts: [...state.posts, { id: 3, message: body, likes: 0 }],
            }
        }
        case setUserProfile: {
            return { ...state, profile: action.profile }
        }
        case setStatus: {
            return { ...state, status: action.status }
        }
        default:
            return state;
    }


}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfileAC = (profile) => ({ type: setUserProfile, profile })
export const setStatusAC = (status) => ({ type: setStatus, status })
export const getProfile = (userId) => {
    return (dispatch) => {
        if (!userId) {
            userId = 14380
        }
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfileAC(data))
        })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        if (!userId) {
            userId = 14380
        }
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatusAC(data))
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }

        })
    }
}
export default profileReduccer;