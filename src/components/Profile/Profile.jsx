import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
	console.log("PROFILE");
	console.log(props);
	return (
		<div>
			<ProfileInfo profile={props.profile} status={props.status}
									 updateUserStatus={props.updateUserStatus}/>
			<MyPostsContainer />
		</div>
	)
};

export default Profile;