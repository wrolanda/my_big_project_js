const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Alexey'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Nastya'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Kirill'}
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'}
    ],
    newMessageText: ''
}

const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SEND_MESSAGE):
            let newMessage = {
                    id: 4,
                    message: state.newMessageText
                };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            };
        case (UPDATE_NEW_MESSAGE_BODY):
            return {
                ...state,
                newMessageText: action.body
            };
        default:
            return state;
    }
};

export const SendMessageActionCreator = () => {
    return {type: SEND_MESSAGE}
};
export const UpdateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: text}
};

export default DialogsReducer;