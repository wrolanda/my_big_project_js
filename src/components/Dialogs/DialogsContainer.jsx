import React from "react";
import {SendMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);