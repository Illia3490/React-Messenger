import axios from "axios";

const instence = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9b7ab2ff-24ae-424f-8ea1-da55f2769535'
    }
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instence.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instence.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unFollow(userId) {
        return instence.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instence.get('profile/' + userId)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId) {
        return instence.get('profile/status/' + userId)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status) {
        return instence.put('profile/status', { status: status })
            .then(response => {
                return response.data
            })
    }
}
export const authAPI = {
    getAuth() {
        return instence.get('auth/me')
            .then(response => {
                return response.data
            })
    },
    getLogin() {
        return instence.post('auth/login')
            .then(response => {
                return response.data
            })
    }
}


