import classes from './Profile.module.css';

const Profile = () => {
	return (
		<div className={classes.content}>
			<div>
				<img src='http://htmlbook.ru/files/images/layout2/6-05.png'></img>
			</div>
			<div>
				ava + description
			</div>
			<div>
				My posts
				<div>
					New post
				</div>
				<div className={classes.item}>
					post 1
				</div>
				<div>
					post 2
				</div>
			</div>
		</div>
	);
}

export default Profile;