import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React, {useRef} from "react";

const setActive = ({isActive}) => isActive ? classes.activeLink : '';

const Dialogs = (props) => {
    let dialogsElements = props.dialogPage.dialogsData
        .map(d => {
            return (
                <DialogItem className={classes.dialogItem} name={d.name} id={d.id}/>
            )
        });

    let messageElements = props.dialogPage.messagesData
        .map(m => <Message message={m.message}/>);

    const newMessageText = useRef();

    let addMessage = () => {
        let text = newMessageText.current.value;
        props.addMessage(text);
    }

    let onMessageChange = () => {
        let text = newMessageText.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messageElements }
                <div className={classes.textarea}>
                    <textarea onChange={onMessageChange}
                              ref={ newMessageText }
                              value={props.dialogPage.newMessageText}>
                    </textarea>
                    <button onClick={ addMessage } className={classes.button}>отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;