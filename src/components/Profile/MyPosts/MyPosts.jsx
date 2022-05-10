import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import AddPostFormRedux from "./AddNewPostFormRedux";

const MyPosts = (props) => {
  let postsElements = [...props.postsData]
    .reverse()
    .map(p => <Post key={p.id}
                    message={p.message}
                    likesCount={p.likesCount}
                    imgUrl={p.imgUrl}
    />);

  let addNewPost = (values) => {
    props.addPost(values.newPostBody);
  };
console.log("Render");
  return (
    <div>
      <div>
        <h3>My posts</h3>
      </div>
      <div>
        <AddPostFormRedux onSubmit={addNewPost} />
      </div>
      <div className={classes.message}>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;