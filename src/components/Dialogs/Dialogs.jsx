import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import AddMessageFormRedux from "./AddMessageFormRedux";

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogsData
    .map(d => {
      return <DialogItem
        name={d.name}
        key={d.id}
        id={d.id}/>
    });

  let messageElements = props.dialogsPage.messagesData
    .map(m => <Message message={m.message}
                       key={m.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messageElements}
        <AddMessageFormRedux onSubmit={ addNewMessage } />
      </div>
    </div>
  )
};

export default Dialogs;