import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React, {useRef} from "react";
import {SendMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/DialogsReducer";

const setActive = ({isActive}) => isActive ? classes.activeLink : '';

const Dialogs = (props) => {

    let dialogsPage = props.store.getState().dialogsPage;
    let dialogsElements = dialogsPage.dialogsData
        .map(d => {
            return (
                <DialogItem className={classes.dialogItem} name={d.name} id={d.id}/>
            )
        });

    let messageElements = dialogsPage.messagesData
        .map(m => <Message message={m.message}/>);

    let SendMessage = () => {
        props.dispatch(SendMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        let action = UpdateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.textcomp}>
                <div className={classes.messages}>
                    { messageElements }
                </div>
                <div className={classes.textarea}>
                    <textarea onChange={ onMessageChange }
                              value={dialogsPage.newMessageText}
                    placeholder="Enter your message">
                    </textarea>
                    <button onClick={ SendMessage }
                            className={classes.button}>
                        отправить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;