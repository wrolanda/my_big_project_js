const SEND_MESSAGE = "samurai-network/dialogs/SEND-MESSAGE";

type DialogDataType = {
  id: number
  name: string
}

type MessagesDataType = {
  id: number
  message: string
}

const messagesData: Array<MessagesDataType> = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'Hello'},
  {id: 3, message: 'How are you?'}
];

let initialState = {
  dialogsData: [
  {id: 1, name: 'Dima'},
  {id: 2, name: 'Alexey'},
  {id: 3, name: 'Katya'},
  {id: 4, name: 'Nastya'},
  {id: 5, name: 'Sasha'},
  {id: 6, name: 'Kirill'}
] as Array<DialogDataType>,
  messagesData: messagesData
};

export type initialStateType = typeof initialState;

const DialogsReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                    id: Date.now(),
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

type SendMessageActionCreatorType = {
  type: typeof SEND_MESSAGE
  newMessageBody: string
}

export const SendMessageActionCreator = (newMessageBody: string): SendMessageActionCreatorType => {
    return {type: SEND_MESSAGE, newMessageBody}
};

export default DialogsReducer;