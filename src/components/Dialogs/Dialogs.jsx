import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const setActive = ({isActive}) => isActive ? classes.activeLink : '';

const Dialogs = (props) => {
    let dialogsElements = props.dialogsData
        .map(d => {
            return (
                <DialogItem name={d.name} id={d.id}/>
            )
        });

    let messageElements = props.messagesData
        .map(m => <Message message={m.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;