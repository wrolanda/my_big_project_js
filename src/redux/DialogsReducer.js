const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

const DialogsReducer = (state, action) => {

    switch (action.type) {
        case (SEND_MESSAGE):
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;

        case (UPDATE_NEW_MESSAGE_BODY):
            state.newMessageText = action.body;
            return state;
        default:
            return state;
    }
};

export const SendMessageActionCreator = () => {
    return {type: SEND_MESSAGE}};
export const UpdateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: text}};

export default DialogsReducer;