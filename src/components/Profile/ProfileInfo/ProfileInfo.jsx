import css from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user-default.png"

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, ...props}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <div>
            <div className={css.descriptionBlock}>
                 {/*<img src='https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg'></img>*/}
                <div>
                    <img src={profile.photos.large || userPhoto} className={css.mainPhoto}/>
                    {isOwner && <input type={"file"}  onChange={onMainPhotoSelected}/>}
                </div>
                <div  className={css.description}>
                    <div>{profile.fullName}</div>
                    <div>Описание: {profile.aboutMe}</div>
                    <div>Instagram: {profile.contacts.instagram}</div>
                    <div>vk: {profile.contacts.vk}</div>
                    <div>twitter: {profile.contacts.twitter}</div>
                </div>
                <div className={css.status}>
                    <ProfileStatusWithHooks status={status}
                                   updateUserStatus={updateUserStatus}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;