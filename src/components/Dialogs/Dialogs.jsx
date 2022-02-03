import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to="/dialogs/1" >Dima</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2" >Alexey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3" >Katya</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4" >Nastya</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5" >Sasha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/6" >Kirill</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>How are you?</div>
            </div>
        </div>
    );
}

export default Dialogs;