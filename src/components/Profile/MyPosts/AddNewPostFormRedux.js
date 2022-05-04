import {Field, reduxForm} from "redux-form";
import classes from "./MyPosts.module.css";
import React from "react";
import {maxLengthCreator, required} from "../../../validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength20 = maxLengthCreator(20);

const AddNewPostFormRedux = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newPostBody" placeholder="Post message"
             validate={[required, maxLength20]}/>
      </div>
      <div className={classes.PostAddButton}>
        <button>Add post</button>
      </div>
    </form>
  )
};

const AddPostFormRedux = reduxForm({form: 'addPostForm'})(AddNewPostFormRedux);

export default AddPostFormRedux;