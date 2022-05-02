import {Field, reduxForm} from "redux-form";
import classes from "./MyPosts.module.css";
import React from "react";

const AddNewPostFormRedux = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostBody" placeholder="new Post"/>
      </div>
      <div className={classes.PostAddButton}>
        <button>Add post</button>
      </div>
    </form>
  )
};

const AddPostFormRedux = reduxForm({form: 'addPostForm'})(AddNewPostFormRedux);

export default AddPostFormRedux;