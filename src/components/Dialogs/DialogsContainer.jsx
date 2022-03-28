import React from "react";
import {SendMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (<StoreContext.Consumer>
        { (store) => {
            let state = store.getState();

            let sendMessage = () => {
                store.dispatch(SendMessageActionCreator());
            };

            let onMessageChange = (body) => {
                let action = UpdateNewMessageTextActionCreator(body);
                store.dispatch(action);
            };

            return <Dialogs dialogsPage={state.dialogsPage}
                            sendMessage={sendMessage}
                            updateNewMessageBody={onMessageChange}/>
        }
    }
    </StoreContext.Consumer>)
};

export default DialogsContainer;