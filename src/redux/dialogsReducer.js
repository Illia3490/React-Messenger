const send_message = 'sendMessage'


let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case send_message:
            let body = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }],
            }
        default:
            return state
    }
}

export const sendMessage = (newMessageText) => ({ type: send_message, newMessageText })

export default dialogsReducer;