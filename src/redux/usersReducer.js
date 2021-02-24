import { userAPI } from "../api/api"

const setFollow = 'fallow'
const setUnFollow = 'unFallow'
const setUsers = 'setUsers'
const setTotalUsersCount = 'setTotalUsersCount'
const setCurrentPage = 'setCurrentPage'
const setIsLoading = 'setIsLoading'
const setDisableButton = 'setDisableButton'

let initialState = {
    users: [],
    totalUserCount: 0,
    currentPage: 1,
    pageSize: 5,
    isLoading: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case setFollow: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        }
        case setUnFollow: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }
        case setUsers: {
            return { ...state, users: action.users }
        }
        case setTotalUsersCount: {
            return { ...state, totalUserCount: action.usersCount }
        }
        case setCurrentPage: {
            return { ...state, currentPage: action.pageNumber }
        }
        case setIsLoading: {
            return { ...state, isLoading: action.isLoading }
        }
        case setDisableButton: {
            return {
                ...state,
                followingInProgress: action.isLoading
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }

}
export const followAC = (userId) => ({ type: setFollow, userId })
export const unFollowAC = (userId) => ({ type: setUnFollow, userId })
export const setUserAC = (users) => ({ type: setUsers, users })
export const setTotalUsersCountAC = (usersCount) => ({ type: setTotalUsersCount, usersCount })
export const setCurrentPageAC = (pageNumber) => ({ type: setCurrentPage, pageNumber })
export const setIsLoadingAC = (isLoading) => ({ type: setIsLoading, isLoading })
export const setDisableButtonAC = (isLoading, userId) => ({ type: setDisableButton, isLoading, userId })
export const getUsers = (currentPage, pageSize, pageNumber) => {
    return (dispatch) => {
        dispatch(setIsLoadingAC(true))
        if (pageNumber) {
            dispatch(setCurrentPageAC(pageNumber))
        }
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsLoadingAC(false))
                dispatch(setUserAC(data.items))
                dispatch(setTotalUsersCountAC(Math.ceil(data.totalCount / 200)))
            })

    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setDisableButtonAC(true, userId))
        userAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userId))
                }
                dispatch(setDisableButtonAC(false, userId))
            })
    }
}
export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(setDisableButtonAC(true, userId))
        userAPI.unFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollowAC(userId))
                }
                dispatch(setDisableButtonAC(false, userId))
            })
    }
}

export default usersReducer;