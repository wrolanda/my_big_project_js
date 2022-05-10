const SEND_MESSAGE = "samurai-network/dialogs/SEND-MESSAGE";

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
    ]
};

const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SEND_MESSAGE):
            let newMessage = {
                    id: 4,
                    message: action.newMessageBody
                };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };
        default:
            return state;
    }
};

export const SendMessageActionCreator = (newMessageBody) => {
    return {type: SEND_MESSAGE, newMessageBody}
};

export default DialogsReducer;