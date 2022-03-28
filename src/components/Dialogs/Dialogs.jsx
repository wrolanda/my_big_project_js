import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";

const setActive = ({isActive}) => isActive ? classes.activeLink : '';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData
        .map(d => {return <DialogItem
            className={classes.dialogItem}
            name={d.name}
            id={d.id}/>
        });

    let messageElements = props.dialogsPage.messagesData
        .map(m => <Message message={m.message}/>);

    let onSendMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messageElements }
                <div className={classes.textarea}>
                    <textarea onChange={ onMessageChange }
                              value={props.dialogsPage.newMessageText}
                    placeholder="Enter your message">
                    </textarea>
                    <button onClick={ onSendMessage }
                            className={classes.button}>
                        send
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;