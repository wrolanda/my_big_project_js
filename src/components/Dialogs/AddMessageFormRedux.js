import classes from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.textarea}>
      <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
      <button className={classes.button}>send</button>
    </form>
  )
};

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default AddMessageReduxForm;