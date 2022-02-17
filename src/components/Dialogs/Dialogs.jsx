import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const setActive = ({isActive}) => isActive ? classes.activeLink : '';

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Alexey'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Nastya'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Kirill'}
    ]

    let dialogsElements = dialogsData
        .map(d => {
            return (
                <DialogItem name={d.name} id={d.id}/>
            )
        });

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'}
    ]

    let messageElements = messagesData
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