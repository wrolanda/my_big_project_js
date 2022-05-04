import classes from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../validators/validators";

const maxLength20 = maxLengthCreator(20);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.textarea}>
      <Field component={Textarea} name="newMessageBody"
             validate={[required, maxLength20]}
             placeholder="Enter your message"/>
      <button className={classes.button}>send</button>
    </form>
  )
};

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default AddMessageReduxForm;