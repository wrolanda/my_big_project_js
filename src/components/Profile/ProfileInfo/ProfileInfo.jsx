import css from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import React, {useState} from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user-default.png"
import ProfileDataFormRedux from "./ProfileDataForm/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile, ...props}) => {

   let [editMode, setEditMode] = useState(false);

   if (!profile) {
      return <Preloader/>
   }

   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         savePhoto(e.target.files[0]);
      }
   };

   const onSubmit = (formData) => {
      saveProfile(formData).then(
         () => {
            setEditMode(false);
         }
      )
   };

   return (
      <div className={css.descriptionBlock}>
         <div>
            <img src={profile.photos.large || userPhoto} className={css.mainPhoto}/>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
         </div>
         {editMode ? <ProfileDataFormRedux onSubmit={onSubmit} initialValues={profile}
                                           isOwner={isOwner} profile={profile}/>
            : <ProfileData goToEditMode={() => {setEditMode(true)}}
                           profile={profile}
                           isOwner={isOwner}/>}
         <div className={css.status}>
            <ProfileStatusWithHooks status={status}
                                    updateUserStatus={updateUserStatus}/>
         </div>
      </div>
   )
};

export const Contact = ({contactTitle, contactValue}) => {
   return <div className={css.contact}><b>{contactTitle}</b>: {contactValue}</div>
};

export default ProfileInfo;