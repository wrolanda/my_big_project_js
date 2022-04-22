import React from "react";
import {SendMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(SendMessageActionCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(UpdateNewMessageTextActionCreator(body));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;