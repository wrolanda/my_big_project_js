import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
   return (
      <div>
         <ProfileInfo profile={props.profile} status={props.status}
                      updateUserStatus={props.updateUserStatus}
                      isOwner={props.isOwner}
                      savePhoto={props.savePhoto}
                      saveProfile={props.saveProfile}
			/>
         <MyPostsContainer/>
      </div>
   )
};

export default Profile;