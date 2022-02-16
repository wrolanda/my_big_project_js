import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hello, World!', likesCount: '42'},
        {id: 2, message: 'It\'s my first post', likesCount: '21'},
        //{id: 3, mem: {<img src='https://cs14.pikabu.ru/post_img/big/2021/06/28/10/1624898051168416526.jpg'></img>}, likesCount: '10'}
]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
                <Post mem={<img src='https://cs14.pikabu.ru/post_img/big/2021/06/28/10/1624898051168416526.jpg'></img>}
                      likesCount='10'/>
            </div>
        </div>
    );
}

export default MyPosts;