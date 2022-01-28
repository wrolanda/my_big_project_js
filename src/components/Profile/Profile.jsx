import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
	return (
		<div>
			<div>
				<img src='http://htmlbook.ru/files/images/layout2/6-05.png'></img>
			</div>
			<div>
				{/* <img src='https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg'></img> */}
				ava + description
			</div>
			<textarea></textarea>
			<button>Add post</button>
			<button>Remove</button>
			<MyPosts />
		</div>
	);
}

export default Profile;