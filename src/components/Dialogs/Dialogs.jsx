import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? classes.activeLink : '';

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id} >{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Dima" id="1"/>
                <DialogItem name="Alexey" id="2"/>
                <DialogItem name="Katya" id="3"/>
                <DialogItem name="Nastya" id="4"/>
                <DialogItem name="Sasha" id="5"/>
                <DialogItem name="Kirill" id="6"/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi!"/>
                <Message message="Hello"/>
                <Message message="How are you?"/>
            </div>
        </div>
    );
}

export default Dialogs;