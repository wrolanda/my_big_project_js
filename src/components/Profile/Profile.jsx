import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

	let posts = [
		{id: 1, message: 'Hello, World!', likesCount: '42'},
		{id: 2, message: 'It\'s my first post', likesCount: '21'},
		//{id: 3, mem: {<img src='https://cs14.pikabu.ru/post_img/big/2021/06/28/10/1624898051168416526.jpg'></img>}, likesCount: '10'}
	]

	return (
		<div>
			<ProfileInfo />
			<MyPosts posts={posts}/>
		</div>
	);
}

export default Profile;