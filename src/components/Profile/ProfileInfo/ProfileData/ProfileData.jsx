import css from "../ProfileInfo.module.css";
import React from "react";
import {Contact} from "../ProfileInfo";

const ProfileData = ({profile, isOwner, goToEditMode}) => {
   return <div className={css.description}>
      {isOwner && <div>
         <button onClick={goToEditMode}>edit</button>
      </div>}
      <div>
         <b>{profile.fullName}</b>
      </div>
      <div>
         <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob &&
      <div>
         <b>My professionals skills</b>: {profile.lookingForAJobDescription}
      </div>
      }
      <div>
         <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
         <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
         return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
      })}
      </div>
   </div>
};

export default ProfileData;