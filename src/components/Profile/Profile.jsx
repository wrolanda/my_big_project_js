import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts postsData={props.profilePage.postsData}
					 addPost={props.addPost}
					 newPostText={props.profilePage.newPostText}
					 updateNewPostText={props.updateNewPostText}/>
		</div>
	);
}

export default Profile;