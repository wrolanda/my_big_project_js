import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React, {useRef} from "react";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/ProfileReducer";

const MyPosts = (props) => {

    let postsElements = props.postsData
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        let action = UpdateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div className={classes.PostAddButton}>
                <button onClick = { addPost } >Add post</button>
            </div>
            <div className={classes.message}>
                { postsElements }
                <Post mem={<img src='https://cs14.pikabu.ru/post_img/big/2021/06/28/10/1624898051168416526.jpg'></img>}
                      likesCount='10'/>
            </div>
        </div>
    );
}

export default MyPosts;