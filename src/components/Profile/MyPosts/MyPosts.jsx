import classes from './MyPosts.module.css';
import Post from './Post/Post';
import Profile from "../Profile";

const MyPosts = (props) => {

    let postsElenments = props.postsData
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div className={classes.PostAddButton}>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.message}>
                {postsElenments}
                <Post mem={<img src='https://cs14.pikabu.ru/post_img/big/2021/06/28/10/1624898051168416526.jpg'></img>}
                      likesCount='10'/>
            </div>
        </div>
    );
}

export default MyPosts;