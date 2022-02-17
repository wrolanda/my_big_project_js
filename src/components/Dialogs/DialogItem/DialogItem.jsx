import classes from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? classes.activeLink : '';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}
export default DialogItem;