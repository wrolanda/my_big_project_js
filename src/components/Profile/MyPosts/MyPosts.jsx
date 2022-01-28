import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>
			<Post message="Hello, World!" likesCount='42'/>
			<Post message="It's my first post" likesCount='21'/>
			<Post mem={<img src='https://cs14.pikabu.ru/post_img/big/2021/06/28/10/1624898051168416526.jpg'></img>} likesCount='10'/>
		</div>
	);
}

export default MyPosts;