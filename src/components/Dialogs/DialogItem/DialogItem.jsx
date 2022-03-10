import {NavLink} from "react-router-dom";
import classes from './DialogItem.module.css'

const setActive = ({isActive}) => isActive ? classes.activeLink : '';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} className={setActive}>{props.name}</NavLink>
        </div>
    );
}
export default DialogItem;