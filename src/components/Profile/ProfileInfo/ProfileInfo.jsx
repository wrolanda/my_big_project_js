import css from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import React from "react";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={css.header}>
                <img src='http://htmlbook.ru/files/images/layout2/6-05.png'></img>
            </div>
            <div className={css.descriptionBlock}>
                 {/*<img src='https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg'></img>*/}
                <div className={css.avatar}>
                    <img src={props.profile.photos.large}/>
                </div>
                <div  className={css.description}>
                    <div>{props.profile.fullName}</div>
                    <div>Описание: {props.profile.aboutMe}</div>
                    <div>Instagram: {props.profile.contacts.instagram}</div>
                    <div>vk: {props.profile.contacts.vk}</div>
                    <div>twitter: {props.profile.contacts.twitter}</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;