const SEND_MESSAGE = "samurai-network/dialogs/SEND-MESSAGE";

const dialogsData: Array<object> = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Alexey'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Nastya'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Kirill'}
    ];

const messagesData: Array<object> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'How are you?'}
];

export type initialStateType = typeof initialState;

let initialState = {
    dialogsData: dialogsData,
    messagesData: messagesData
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