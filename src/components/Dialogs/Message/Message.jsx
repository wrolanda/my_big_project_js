import classes from '../Dialogs.module.css';

const setActive = ({isActive}) => isActive ? classes.activeLink : '';

const Message = (props) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}

export default Message;