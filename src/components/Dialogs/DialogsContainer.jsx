import React from "react";
import {SendMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(SendMessageActionCreator());
    };

    let onMessageChange = (body) => {
        let action = UpdateNewMessageTextActionCreator(body);
        props.store.dispatch(action);
    };

    return <Dialogs dialogsPage={state.dialogsPage}
                    sendMessage={sendMessage}
                    updateNewMessageBody={onMessageChange}/>
};

export default DialogsContainer;