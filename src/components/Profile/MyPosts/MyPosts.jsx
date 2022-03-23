import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React, {useRef} from "react";

const MyPosts = (props) => {

    let postsElements = props.postsData
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = useRef();

    let addPost = () => {
        props.dispatch({type: "ADD-POST"});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
        props.dispatch(action);
    }

    return (
        <div>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea onChange={onPostChange} ref={ newPostElement } value={props.newPostText}/>
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