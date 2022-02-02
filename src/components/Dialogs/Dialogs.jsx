import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>Dima</div>
                <div className={classes.dialog}>Alexey</div>
                <div className={classes.dialog}>Katya</div>
                <div className={classes.dialog}>Nastya</div>
                <div className={classes.dialog}>Sasha</div>
                <div className={classes.dialog}>Kirill</div>
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