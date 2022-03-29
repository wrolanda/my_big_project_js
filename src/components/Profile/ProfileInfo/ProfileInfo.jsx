import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='http://htmlbook.ru/files/images/layout2/6-05.png'></img>
            </div>
            <div className={classes.descriptionBlock}>
                {/* <img src='https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg'></img> */}
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;