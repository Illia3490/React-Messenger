// import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"

const addPost = 'addPost'
const update_New_Post_Text = 'updateNewPostText'
// const send_message = 'sendMessage'
// const update_New_Message_Text = 'updateNewMessageText'

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hellow!', likes: 2 },
                { id: 2, message: 'Just do it!', likes: 4 },
            ],
            newPostText: 'What new?'
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Illia' },
                { id: 2, name: 'Alex' },
                { id: 3, name: 'Bob' },
                { id: 4, name: 'Vika' },
                { id: 5, name: 'Dan' },
            ],
            messages: [
                { id: 1, message: 'hello!' },
                { id: 2, message: 'Whats up?' },
                { id: 3, message: 'i need help' },
                { id: 4, message: 'call me ' },
                { id: 5, message: 'hahahha' },
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('hi')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        // this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)

        this._callSubscriber(this._state)

    }

}

// export const addPostActionCreator = () => ({ type: addPost })

// export const updateNewPostText = (text) => ({
//     type: update_New_Post_Text, newText: text
// })

// export const sendMessage = () => ({ type: send_message })

// export const updateNewMessageText = (body) => ({
//     type: update_New_Message_Text,
//     body: body
// })

export default store;
