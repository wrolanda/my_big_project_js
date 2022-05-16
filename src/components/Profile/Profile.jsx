import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
   return (
      <div>
         <ProfileInfo profile={props.profile} status={props.status}
                      updateUserStatus={props.updateUserStatus}
                      isOwner={props.isOwner}
                      savePhoto={props.savePhoto}
			/>
         <MyPostsContainer/>
      </div>
   )
};

export default Profile;