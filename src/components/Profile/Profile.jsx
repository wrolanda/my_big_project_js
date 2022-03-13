import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts postsData={props.ProfilePage.postsData}
					 addPost={props.addPost}
					 newPostText={props.ProfilePage.newPostText}
					 updateNewPostText={props.updateNewPostText}/>
		</div>
	);
}

export default Profile;