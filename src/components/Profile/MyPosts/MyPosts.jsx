import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>
			<Post message="Hello, World!" likes='like 42'/>
			<Post message="It's my first post" likes='like 21'/>
			<Post message="It's my second post" likes='like 10'/>
		</div>
	);
}

export default MyPosts;