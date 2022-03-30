import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {
    let postsElements = props.postsData
        .map(p => <Post key={p.id}
                        message={p.message}
                        likesCount={p.likesCount}
                        imgUrl={p.imgUrl}
                        />)

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div className={classes.PostAddButton}>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={classes.message}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;