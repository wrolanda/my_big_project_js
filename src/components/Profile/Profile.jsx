import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import css from "../Users/users.module.css";
import Preloader from "../common/Preloader/Preloader";


const Profile = (props) => {
	return (
		<div>
			<div className={css.preloader}>
				{props.isFetching ? <Preloader/> : null}
			</div>
			<ProfileInfo profile={props.profile} status={props.status}
									 updateUserStatus={props.updateUserStatus}/>
			<MyPostsContainer />
		</div>
	)
};

export default Profile;